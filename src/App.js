import React, { useState } from "react";
import "./App.css";
import Header from "./UI/Header";
import AssignmentInput from "./AssignmentInput/AssignmentInput";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import { Box } from "@mui/material";
import AvailabilityForm from "./AvailabilityForm/AvailabilityForm";
import AssignmentBreakdown from "./AssignmentBreakdown/AssignmentBreakdown";
import TabPanel from "./UI/TabPanel";
import TabLabels from "./UI/TabLabels";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b71c1c",
    },
    secondary: {
      main: "#424242",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "25px",
        },
      },
    },
  },
});

const App = () => {
  const [assignment, setAssignment] = useState({
    className: "",
    name: "",
    startDate: new Date(),
    dueDate: new Date().setHours(23, 59, 59),
    estimatedHours: "",
    questions: [],
  });
  const [assignments, setAssignments] = useState([]);
  const [isEditingAssignment, setIsEditingAssignment] = useState(false);
  const [isAddingAssignment, setIsAddingAssignment] = useState(false);
  const [availability, setAvailability] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [tabValue, setTabValue] = useState(0);

  const handleChangeClass = (updatedClass) => {
    const updatedAssignment = { ...assignment };
    updatedAssignment.className = updatedClass;
    setAssignment(updatedAssignment);
  };

  const handleChangeName = (updatedName) => {
    const updatedAssignment = { ...assignment };
    updatedAssignment.name = updatedName;
    setAssignment(updatedAssignment);
  };

  const handleChangeStartDate = (updatedStartDate) => {
    const updatedAssignment = { ...assignment };
    updatedAssignment.startDate = updatedStartDate;
    setAssignment(updatedAssignment);
  };

  const handleChangeDueDate = (updatedDueDate) => {
    const updatedAssignment = { ...assignment };
    updatedAssignment.dueDate = updatedDueDate;
    setAssignment(updatedAssignment);
  };

  const handleChangeEstimatedHours = (updatedEstimatedHours) => {
    const updatedAssignment = { ...assignment };
    updatedAssignment.estimatedHours = updatedEstimatedHours;
    setAssignment(updatedAssignment);
  };

  const assignmentChangeHandlers = {
    onChangeClass: handleChangeClass,
    onChangeName: handleChangeName,
    onChangeStartDate: handleChangeStartDate,
    onChangeDueDate: handleChangeDueDate,
    onChangeEstimatedHours: handleChangeEstimatedHours,
  };

  const handleAddAssignment = () => {
    const newAssignment = {
      id: assignment.className + assignment.name + Math.random(),
      className: assignment.className,
      name: assignment.name,
      startDate: assignment.startDate,
      dueDate: assignment.dueDate,
      estimatedHours: +assignment.estimatedHours,
      questions: assignment.questions,
    };
    setAssignments((prevAssignments) => [...prevAssignments, newAssignment]);
  };

  const handleSaveAssignment = () => {
    const assignmentIndex = assignments.findIndex(
      (a) => a.id === assignment.id
    );
    const updatedAssignments = [...assignments];
    updatedAssignments[assignmentIndex] = assignment;
    setAssignments(updatedAssignments);
    setIsEditingAssignment(false);
  };

  const handleDeleteAssignment = (assignmentID) => {
    setAssignments((prevAssignments) =>
      prevAssignments.filter((assignment) => assignment.id !== assignmentID)
    );

    if (isEditingAssignment) setIsEditingAssignment(false);
  };

  const handleEditAssignment = (assignmentID) => {
    const assignmentToEdit = assignments.filter(
      (assignment) => assignment.id === assignmentID
    )[0];
    setAssignment(assignmentToEdit);
    setIsEditingAssignment(true);
  };

  const handleCloseEdit = () => {
    setIsEditingAssignment(false);
  };

  const openAddAssignmentForm = () => {
    clearAssignmentInput();
    setIsAddingAssignment(true);
  };

  const closeAddAssignmentForm = () => {
    setIsAddingAssignment(false);
  };

  const handleAvailabilityChange = (id, newValue) => {
    const updatedAvailability = [...availability];
    updatedAvailability[+id] = +newValue;
    setAvailability(updatedAvailability);
  };

  const handleTabChange = (event, value) => {
    setTabValue(value);
  };

  const clearAssignmentInput = () => {
    setAssignment({
      className: "",
      name: "",
      startDate: new Date(),
      dueDate: new Date().setHours(23, 59, 59),
      estimatedHours: "",
      questions: [],
    });
  };

  const handleAddQuestion = (newQuestion) => {
    const question = {
      question: newQuestion.question,
      marks: newQuestion.marks,
      id:
        assignment.className +
        assignment.name +
        (assignment.questions.length + 1),
    };

    const updatedQuestions = [...assignment.questions, question];

    const updatedAssignment = { ...assignment };

    updatedAssignment.questions = updatedQuestions;

    setAssignment(updatedAssignment);
  };

  const handleDeleteQuestion = (questionId) => {
    const updatedQuestions = assignment.questions.filter(
      (question) => question.id !== questionId
    );

    const updatedAssignment = { ...assignment };

    updatedAssignment.questions = updatedQuestions;

    setAssignment(updatedAssignment);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Header />
        <Box sx={{ width: "100%" }}>
          <TabLabels handleTabChange={handleTabChange} tabValue={tabValue} />
          <TabPanel value={tabValue} index={0}>
            <AssignmentInput
              assignments={assignments}
              onAddAssignment={handleAddAssignment}
              onSaveAssignment={handleSaveAssignment}
              onDelete={handleDeleteAssignment}
              onEdit={handleEditAssignment}
              isEditingAssignment={isEditingAssignment}
              isAddingAssignment={isAddingAssignment}
              assignment={assignment}
              assignmentChangeHandlers={assignmentChangeHandlers}
              clearAssignmentInput={clearAssignmentInput}
              onAddQuestion={handleAddQuestion}
              onDeleteQuestion={handleDeleteQuestion}
              onCloseEdit={handleCloseEdit}
              onClose={closeAddAssignmentForm}
              onOpen={openAddAssignmentForm}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <AvailabilityForm
              availability={availability}
              onAvailabilityChange={handleAvailabilityChange}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <AssignmentBreakdown
              assignments={assignments}
              availability={availability}
            />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
