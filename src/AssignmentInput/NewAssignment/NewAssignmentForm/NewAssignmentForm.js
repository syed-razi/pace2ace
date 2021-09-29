import { TextField, Button, Typography, Stack, Box } from "@mui/material";
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
  const [question, setQuestion] = useState(1);

  const handleQuestionInput = (e) => {
    setQuestion(e.target.value);
  };

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

  const setNextQuestion = () => {
    if (!isNaN(question)) {
      setQuestion((prevQuestion) => +prevQuestion + 1);
    }
  };

  const handleAddQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { question: question, ...newQuestion },
    ]);
    setNextQuestion();
  };

  const handleDeleteQuestion = (questionId) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== questionId)
    );
    setQuestion(questions[questions.length - 1].question);
  };

  return (
    <Stack
      alignItems="center"
      spacing={3}
      sx={{
        width: { xs: 350, sm: 400, md: 500, lg: 600, xl: 700 },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Enter Assignment Details Below
      </Typography>
      <Box sx={{ width: "100%" }}>
        <form noValidate autoComplete="off">
          <Stack alignItems="center" spacing={3} sx={{ width: "100%" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              sx={{ width: "100%" }}
            >
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
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              sx={{ width: "100%" }}
              justifyContent="center"
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start Date"
                  inputFormat="MM/dd/yyyy"
                  value={startDate}
                  onChange={(newStartDate) => setStartDate(newStartDate)}
                  renderInput={(params) => (
                    <TextField sx={{ width: "100%" }} {...params} />
                  )}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Due Date"
                  inputFormat="MM/dd/yyyy"
                  value={dueDate}
                  onChange={(newDueDate) => setDueDate(newDueDate)}
                  renderInput={(params) => (
                    <TextField sx={{ width: "100%" }} {...params} />
                  )}
                />
              </LocalizationProvider>
            </Stack>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              sx={{ width: "100%" }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Due Time"
                  value={dueDate}
                  onChange={(newDueDate) => setDueDate(newDueDate)}
                  renderInput={(params) => (
                    <TextField sx={{ width: "100%" }} {...params} />
                  )}
                />
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
            </Stack>
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
            {isAddingQuestions && (
              <NewAssignmentQuestionsInput
                onQuestionInput={handleQuestionInput}
                question={question}
                onAddQuestion={handleAddQuestion}
                onDeleteQuestion={handleDeleteQuestion}
                questions={questions}
              />
            )}
            {!isAddingQuestions && (
              <Button
                sx={{ width: { xs: "90%", md: "50%" } }}
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={() => setIsAddingQuestions(true)}
              >
                Add Questions
              </Button>
            )}
            <Button
              sx={{ width: { xs: "90%", md: "50%" } }}
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddAssignment}
              type="submit"
            >
              Add Assignment
            </Button>
            <Button
              sx={{ width: { xs: "90%", md: "50%" } }}
              variant="contained"
              onClick={props.onClose}
            >
              Close
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default NewAssignmentForm;
