import { TextField, Button, Typography, Stack, Box } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { DatePicker, TimePicker } from "@mui/lab";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import React from "react";
import NewAssignmentQuestionsInput from "./NewAssignmentQuestionsInput/NewAssignmentQuestionsInput";

const NewAssignmentForm = ({ dispatch, assignmentsState, ACTIONS }) => {
  const [isAddingQuestions, setIsAddingQuestions] = useState(false);

  const handleAddAssignment = (event) => {
    event.preventDefault();
    if (assignmentsState.assignment.className.length > 0) {
      dispatch({ type: ACTIONS.ADD_ASSIGNMENT });
      dispatch({ type: ACTIONS.CLOSE_ASSIGNMENT_INPUT });
    }
  };

  const handleSaveAssignment = (event) => {
    event.preventDefault();
    if (assignmentsState.assignment.className.length > 0) {
      dispatch({ type: ACTIONS.SAVE_ASSIGNMENT });
      dispatch({ type: ACTIONS.CLOSE_ASSIGNMENT_INPUT });
    }
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
              value={assignmentsState.assignment.className}
              onChange={
                (e) =>
                  dispatch({
                    type: ACTIONS.CHANGE_INPUT,
                    payload: {
                      inputField: "className",
                      updatedInput: e.target.value,
                    },
                  })
              }
            />
            <TextField
              fullWidth
              id="standard-basic"
              label="Assignment Name"
              value={assignmentsState.assignment.name}
              onChange={
                (e) =>
                  dispatch({
                    type: ACTIONS.CHANGE_INPUT,
                    payload: {
                      inputField: "name",
                      updatedInput: e.target.value,
                    },
                  })
              }
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
                value={assignmentsState.assignment.startDate}
                onChange={
                  (newStartDate) =>
                    dispatch({
                      type: ACTIONS.CHANGE_INPUT,
                      payload: {
                        inputField: "startDate",
                        updatedInput: newStartDate,
                      },
                    })
                }
                renderInput={(params) => (
                  <TextField sx={{ width: "100%" }} {...params} />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Due Date"
                inputFormat="MM/dd/yyyy"
                value={assignmentsState.assignment.dueDate}
                onChange={
                  (newDueDate) =>
                    dispatch({
                      type: ACTIONS.CHANGE_INPUT,
                      payload: {
                        inputField: "dueDate",
                        updatedInput: newDueDate,
                      },
                    })
                }
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
                value={assignmentsState.assignment.dueDate}
                onChange={
                  (newDueDate) =>
                    dispatch({
                      type: ACTIONS.CHANGE_INPUT,
                      payload: {
                        inputField: "dueDate",
                        updatedInput: newDueDate,
                      },
                    })
                }
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
              value={assignmentsState.assignment.estimatedHours}
              onChange={
                (e) =>
                  dispatch({
                    type: ACTIONS.CHANGE_INPUT,
                    payload: {
                        inputField: "estimatedHours",
                        updatedInput: e.target.value,
                      },
                  })
              }
            />
          </Stack>
          {(isAddingQuestions ||
            assignmentsState.assignment.questions.length > 0) && (
            <NewAssignmentQuestionsInput
              assignment={assignmentsState.assignment}
            />
          )}
          {!(
            isAddingQuestions ||
            assignmentsState.assignment.questions.length > 0
          ) && (
            <Button
              sx={{ width: { xs: "90%", md: "50%" } }}
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => setIsAddingQuestions(true)}
            >
              Add Questions
            </Button>
          )}
          {assignmentsState.isAddingAssignment && (
            <Button
              sx={{ width: { xs: "90%", md: "50%" } }}
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddAssignment}
            >
              Add Assignment
            </Button>
          )}
          {assignmentsState.isEditingAssignment && (
            <Button
              sx={{ width: { xs: "90%", md: "50%" } }}
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSaveAssignment}
            >
              Save
            </Button>
          )}
          <Button
            sx={{ width: { xs: "90%", md: "50%" } }}
            variant="outlined"
            onClick={
              () => dispatch({ type: ACTIONS.CLOSE_ASSIGNMENT_INPUT })
            }
          >
            Close
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default NewAssignmentForm;
