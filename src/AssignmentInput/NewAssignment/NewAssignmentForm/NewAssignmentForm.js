import {
  Grid,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { DatePicker, TimePicker } from "@mui/lab";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import NewAssignmentQuestionsInput from "./NewAssignmentQuestionsInput/NewAssignmentQuestionsInput";

const NewAssignmentForm = (props) => {
  const [enteredClass, setEnteredClass] = useState("");
  const [enteredName, setEnteredName] = useState("");
  //const [enteredWorth, setEnteredWorth] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date().setHours(23, 59, 59));
  const [estimatedHours, setEstimatedHours] = useState("");
  const [isAddingQuestions, setIsAddingQuestions] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleAddAssignment = (event) => {
    event.preventDefault();
    if (enteredClass.length > 0) {
      const newAssignment = {
        id: enteredClass + enteredName + Math.random(),
        className: enteredClass,
        name: enteredName,
        //worth: +enteredWorth,
        startDate: startDate,
        dueDate: dueDate,
        estimatedHours: +estimatedHours,
        questions: questions,
      };
      props.onAddAssignment(newAssignment);
      props.onClose();
    }
  };

  const handleAddQuestion = (question) => {
    setQuestions((prevQuestions) => [...prevQuestions, question]);
  };

  const handleDeleteQuestion = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== questionId)
    );
  };

  return (
    <Grid item container direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h6" gutterBottom>
          Enter Assignment Details Below
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: 350, sm: 400, md: 500, lg: 600, xl: 700 },
        }}
      >
        <form noValidate autoComplete="off">
          <Stack spacing={3}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Class"
              value={enteredClass}
              onChange={(e) => setEnteredClass(e.target.value)}
            />

            <TextField
              fullWidth
              id="standard-basic"
              label="Assignment Name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
            {/* <TextField
              id="standard-number"
              label="% Worth"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={enteredWorth}
              onChange={(e) => setEnteredWorth(e.target.value)}
            /> */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DatePicker
                  label="Start Date"
                  inputFormat="MM/dd/yyyy"
                  value={startDate}
                  onChange={(newStartDate) => setStartDate(newStartDate)}
                  renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                  label="Due Date"
                  inputFormat="MM/dd/yyyy"
                  value={dueDate}
                  onChange={(newDueDate) => setDueDate(newDueDate)}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Due Time"
                  value={dueDate}
                  onChange={(newDueDate) => setDueDate(newDueDate)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <TextField
              fullWidth
              id="standard-number"
              label="Estimated Hours"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={estimatedHours}
              onChange={(e) => setEstimatedHours(e.target.value)}
            />
            {isAddingQuestions && (
              <NewAssignmentQuestionsInput
                onAddQuestion={handleAddQuestion}
                onDeleteQuestion={handleDeleteQuestion}
                questions={questions}
              />
            )}
            <Stack sx={{ width: "50%", alignSelf: "center" }} spacing={3}>
              {!isAddingQuestions && (
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={() => setIsAddingQuestions(true)}
                >
                  Add Questions
                </Button>
              )}
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddAssignment}
                type="submit"
              >
                Add Assignment
              </Button>
              <Button variant="contained" onClick={props.onClose}>
                Close
              </Button>
            </Stack>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default NewAssignmentForm;
