import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AssignmentBreakdownItem = (props) => {
  const getTotalFreeHours = (startDate, dueDate, availability) => {
    var totalTime = 0;

    for (
      var d = new Date(startDate.getTime());
      d <= dueDate;
      d.setDate(d.getDate() + 1)
    ) {
      const date = new Date(d);
      totalTime += availability[date.getDay()];
    }

    return totalTime;
  };

  const getTotalMarks = (questions, marks) =>
    questions.reduce((total, question) => total + question[marks], 0);

  const getBreakdown = (assignment, availability) => {
    let breakdown = [];
    const { startDate, dueDate, estimatedHours, questions } = assignment;

    const totalFreeHours = getTotalFreeHours(startDate, dueDate, availability);
    const totalMarks = getTotalMarks(questions, "marks");
    let totalMarksLeft = totalMarks;
    let questionIndex = 0;
    let marksCompletedOfCurrQuestion = 0;

    for (
      var d = new Date(startDate.getTime());
      d <= dueDate && totalMarksLeft > 0;
      d.setDate(d.getDate() + 1)
    ) {
      const date = new Date(d);
      const todayFreeHours = availability[date.getDay()];
      const fractionOfWork = todayFreeHours / totalFreeHours;
      const hoursToDoToday = fractionOfWork * estimatedHours;
      let marksToDoToday = fractionOfWork * totalMarks;
      totalMarksLeft -= marksToDoToday;
      let todo = [];

      for (; questionIndex < questions.length; ) {
        let marksToDoOfCurrQuestion =
          questions[questionIndex].marks - marksCompletedOfCurrQuestion;
        if (marksToDoToday >= marksToDoOfCurrQuestion) {
          marksToDoToday -= marksToDoOfCurrQuestion;
          todo.push("finish " + questions[questionIndex++].question);
          marksCompletedOfCurrQuestion = 0;
        } else if (marksCompletedOfCurrQuestion > 0) {
          //already started on the question earlier
          marksCompletedOfCurrQuestion += marksToDoToday;
          todo.push("continue " + questions[questionIndex].question);
          break;
        } else {
          marksCompletedOfCurrQuestion = marksToDoToday;
          todo.push("start " + questions[questionIndex].question);
          break;
        }
      }

      breakdown.push({
        day: date,
        todo: todo,
        estimatedHours: hoursToDoToday,
      });
    }

    return breakdown;
  };

  const breakdown = getBreakdown(props.assignment, props.availability);

  const formatTime = (decimal) => {
    let d = new Date(0, 0);
    d.setSeconds(decimal * 60 * 60);
    return d.toTimeString().slice(0, 8);
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <Typography>Class: {props.assignment.className}</Typography>
          </Grid>
          <Grid item>
            <Typography>Name: {props.assignment.name}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Questions/ Sections to Complete</TableCell>
                <TableCell>Estimated Time Required (Hrs)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {breakdown.map((row) => (
                <TableRow key={Math.random()}>
                  <TableCell component="th" scope="row">
                    {row.day.toDateString()}
                  </TableCell>
                  <TableCell>{row.todo.join(", ")}</TableCell>
                  <TableCell>{formatTime(row.estimatedHours)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default AssignmentBreakdownItem;
