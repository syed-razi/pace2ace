import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import _ from "lodash";

// id: enteredClass + enteredName,
//         class: enteredClass,
//         name: enteredName,
//         worth: +enteredWorth,
//         startDate: startDate,
//         dueDate: dueDate,
//         estimatedHours: +estimatedHours,
//         questions: questions,

// function getRows(
//   startDate,
//   dueDate,
//   dueTime,
//   estimatedHours,
//   questions,
//   monday,
//   tuesday,
//   wednesday,
//   thursday,
//   friday,
//   saturday,
//   sunday,
//   bufferTime
// ) {
//   var datesArray = getDatesArray(startDate, dueDate, dueTime);

//   var timeAvailable = 0;
//   var totalHours = 0; //monday + tuesday + wednesday + thursday + friday + saturday + sunday;

//   for (var i = 0; i < datesArray.length; i++) {
//     switch (datesArray[i].getDay()) {
//       case 0:
//         timeAvailable = sunday;
//         break;
//       case 1:
//         timeAvailable = monday;
//         break;
//       case 2:
//         timeAvailable = tuesday;
//         break;
//       case 3:
//         timeAvailable = wednesday;
//         break;
//       case 4:
//         timeAvailable = thursday;
//         break;
//       case 5:
//         timeAvailable = friday;
//         break;
//       case 6:
//         timeAvailable = saturday;
//         break;
//       default:
//       // do nothing
//     }
//     totalHours += timeAvailable;
//   }

//   var questionsArray = getQuestionsArray(
//     questions,
//     datesArray,
//     monday,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//     sunday,
//     bufferTime,
//     totalHours
//   );

//   var timesArray = getTimesArray(
//     estimatedHours,
//     datesArray,
//     monday,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//     sunday,
//     bufferTime,
//     totalHours
//   );

//   var data = [];
//   for (var i = 0; i < datesArray.length; i++) {
//     data.push(createData(datesArray[i], questionsArray[i], timesArray[i]));
//   }
//   return data;
// }

const useStyles = (theme) => ({
  root: {},
  table: {
    minWidth: 650,
  },
});

const BreakdownItem = (props) => {
  const { classes } = props;
  const {
    id,
    className,
    name,
    worth,
    startDate,
    dueDate,
    estimatedHours,
    questions,
  } = props.assignment;

  return (
    <Accordion key={id}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item>
            <Typography className={classes.heading}>
              Class: {className}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.heading}>Name: {name}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                 {/* <TableCell>Questions/ Sections to Complete</TableCell> */}
                <TableCell>Estimated Time Required (Hrs)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { /* {getRows(
                startDate,
                dueDate,
                dueTime,
                estimatedHours,
                questions,
                this.props.monday,
                this.props.tuesday,
                this.props.wednesday,
                this.props.thursday,
                this.props.friday,
                this.props.saturday,
                this.props.sunday,
                this.props.bufferTime
              ).map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.date.toLocaleString("en-CA", {
                      dateStyle: "full",
                    })}
                  </TableCell>
                  <TableCell>{row.questions}</TableCell>
                  <TableCell>{row.time}</TableCell>
                </TableRow>
              ))}*/}
            </TableBody> 
          </Table>
        </TableContainer> 
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(useStyles)(BreakdownItem);
