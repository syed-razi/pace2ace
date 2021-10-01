import { TextField, Button, Typography, Stack, Box } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { DatePicker, TimePicker } from "@mui/lab";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import React from "react";
import NewAssignmentQuestionsInput from "./NewAssignmentQuestionsInput/NewAssignmentQuestionsInput";

const NewAssignmentForm = (props) => {
  const [isAddingQuestions, setIsAddingQuestions] = useState(false);

  const handleAddAssignment = (event) => {
    event.preventDefault();
    if (props.assignment.className.length > 0) {
      props.onAddAssignment();
      props.onClose();
    }
  };

  const handleSaveAssignment = (event) => {
    event.preventDefault();
    if (props.assignment.className.length > 0) {
      props.onSaveAssignment();
      props.onClose();
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
                value={props.assignment.className}
                onChange={(e) =>
                  props.assignmentChangeHandlers.onChangeClass(e.target.value)
                }
              />
              <TextField
                fullWidth
                id="standard-basic"
                label="Assignment Name"
                value={props.assignment.name}
                onChange={(e) =>
                  props.assignmentChangeHandlers.onChangeName(e.target.value)
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
                  value={props.assignment.startDate}
                  onChange={(newStartDate) =>
                    props.assignmentChangeHandlers.onChangeStartDate(
                      newStartDate
                    )
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
                  value={props.assignment.dueDate}
                  onChange={(newDueDate) =>
                    props.assignmentChangeHandlers.onChangeDueDate(newDueDate)
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
                  value={props.assignment.dueDate}
                  onChange={(newDueDate) =>
                    props.assignmentChangeHandlers.onChangeDueDate(newDueDate)
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
                value={props.assignment.estimatedHours}
                onChange={(e) =>
                  props.assignmentChangeHandlers.onChangeEstimatedHours(
                    e.target.value
                  )
                }
              />
            </Stack>
            {isAddingQuestions && (
              <NewAssignmentQuestionsInput
                assignment={props.assignment}
                onAddQuestion={props.onAddQuestion}
                onDeleteQuestion={props.onDeleteQuestion}
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
            {props.isAddingAssignment && (
              <Button
                sx={{ width: { xs: "90%", md: "50%" } }}
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleAddAssignment}
                type="submit"
              >
                Add Assignment
              </Button>
            )}
            {props.isEditingAssignment && (
              <Button
                sx={{ width: { xs: "90%", md: "50%" } }}
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSaveAssignment}
                type="submit"
              >
                Save
              </Button>
            )}
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
