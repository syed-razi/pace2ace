import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import NewAssignmentQuestionsInput from "./NewAssignmentQuestionsInput/NewAssignmentQuestionsInput";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  addIcon: {
    padding: theme.spacing(1),
  },
});

const NewAssignmentForm = (props) => {
  const [enteredClass, setEnteredClass] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredWorth, setEnteredWorth] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date().setHours(23, 59, 59));
  const [estimatedHours, setEstimatedHours] = useState("");
  const [isAddingQuestions, setIsAddingQuestions] = useState(false);
  const [questions, setQuestions] = useState([]);

  const { classes } = props;

  const handleAddAssignment = (event) => {
    event.preventDefault();
    if (enteredClass.length > 0) {
      const newAssignment = {
        id: enteredClass + enteredName + Math.random(),
        className: enteredClass,
        name: enteredName,
        worth: +enteredWorth,
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
    <div className="root">
      {isAddingQuestions && (
        <NewAssignmentQuestionsInput
          onAddQuestion={handleAddQuestion}
          onDeleteQuestion={handleDeleteQuestion}
          questions={questions}
        />
      )}
      <Typography variant="h6" gutterBottom>
        Enter Assignment Details Below
      </Typography>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Class"
              value={enteredClass}
              onChange={(e) => setEnteredClass(e.target.value)}
            />

            <TextField
              id="standard-basic"
              label="Assignment Name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
            <TextField
              id="standard-number"
              label="% Worth"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={enteredWorth}
              onChange={(e) => setEnteredWorth(e.target.value)}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Start Date"
                value={startDate}
                onChange={(newStartDate) => setStartDate(newStartDate)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="End Date"
                value={dueDate}
                onChange={(newDueDate) => setDueDate(newDueDate)}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Due time"
                value={dueDate}
                onChange={(newDueDate) => setDueDate(newDueDate)}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              id="standard-number"
              label="Estimated Hours"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={estimatedHours}
              onChange={(e) => setEstimatedHours(e.target.value)}
            />
            <Divider />
            <Button
              variant="contained"
              startIcon={<AddIcon className={classes.addIcon} />}
              onClick={handleAddAssignment}
              type="submit"
            >
              Add Assignment
            </Button>
            <Button variant="contained" onClick={props.onClose}>
              Close
            </Button>
            {!isAddingQuestions && (
              <Button
                variant="contained"
                onClick={() => setIsAddingQuestions(true)}
              >
                Add Questions
              </Button>
            )}
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(NewAssignmentForm);
