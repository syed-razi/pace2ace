import React, { useState, useReducer } from "react";
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

export const ACTIONS = {
  ADD_ASSIGNMENT: "add-assignment",
  DELETE_ASSIGNMENT: "delete-assignment",
  SAVE_ASSIGNMENT: "save-assignment",
  EDIT_ASSIGNMENT: "edit-assignment",
  CLOSE_EDIT: "close-edit",
  OPEN_ASSIGNMENT_INPUT: "open-assignment-input",
  ADD_QUESTION: "add-question",
  DELETE_QUESTION: "delete-question",
  CHANGE_INPUT: "change-input",
};

const assignmentsReducer = (assignmentsState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ASSIGNMENT: {
      const newAssignment = {
        id:
          assignmentsState.assignment.className +
          assignmentsState.assignment.name +
          Math.random(),
        className: assignmentsState.assignment.className,
        name: assignmentsState.assignment.name,
        startDate: assignmentsState.assignment.startDate,
        dueDate: assignmentsState.assignment.dueDate,
        estimatedHours: +assignmentsState.assignment.estimatedHours,
        questions: assignmentsState.assignment.questions,
      };
      return {
        ...assignmentsState,
        assignments: [...assignmentsState.assignments, newAssignment],
      };
    }
    case ACTIONS.DELETE_ASSIGNMENT: {
      if (
        assignmentsState.assignment.id === action.payload.assignmentId &&
        assignmentsState.isEditingAssignment
      ) {
        assignmentsState.isEditingAssignment = false;
      }

      return {
        ...assignmentsState,
        assignments: assignmentsState.assignments.filter(
          (assignment) => assignment.id !== action.payload.assignmentId
        ),
      };
    }
    case ACTIONS.SAVE_ASSIGNMENT: {
      assignmentsState.isEditingAssignment = false;
      const assignmentIndex = assignmentsState.assignments.findIndex(
        (a) => a.id === assignmentsState.assignment.id
      );
      const updatedAssignments = [...assignmentsState.assignments];
      updatedAssignments[assignmentIndex] = assignmentsState.assignment;

      return {
        ...assignmentsState,
        assignments: updatedAssignments,
      };
    }
    case ACTIONS.EDIT_ASSIGNMENT: {
      assignmentsState.isEditingAssignment = true;

      const assignmentToEdit = assignmentsState.assignments.filter(
        (assignment) => assignment.id === action.payload.assignmentId
      )[0];

      return {
        ...assignmentsState,
        assignment: assignmentToEdit,
      };
    }
    case ACTIONS.OPEN_ASSIGNMENT_INPUT: {
      return {
        ...assignmentsState,
        assignment: {
          className: "",
          name: "",
          startDate: new Date(),
          dueDate: new Date().setHours(23, 59, 59),
          estimatedHours: "",
          questions: [],
        },
        isAddingAssignment: true,
      };
    }
    case ACTIONS.CLOSE_ASSIGNMENT_INPUT: {
      return {
        ...assignmentsState,
        isAddingAssignment: false,
        isEditingAssignment: false,
      };
    }
    case ACTIONS.ADD_QUESTION: {
      const question = {
        question: action.payload.question,
        marks: action.payload.marks,
        id:
          assignmentsState.assignment.className +
          assignmentsState.assignment.name +
          (assignmentsState.assignment.questions.length + 1),
      };

      const updatedQuestions = [
        ...assignmentsState.assignment.questions,
        question,
      ];

      const updatedAssignment = { ...assignmentsState.assignment };

      updatedAssignment.questions = updatedQuestions;

      return {
        ...assignmentsState,
        assignment: updatedAssignment,
      };
    }
    case ACTIONS.DELETE_QUESTION: {
      const updatedQuestions = assignmentsState.assignment.questions.filter(
        (question) => question.id !== action.payload.questionId
      );

      const updatedAssignment = { ...assignmentsState.assignment };

      updatedAssignment.questions = updatedQuestions;

      return {
        ...assignmentsState,
        assignment: updatedAssignment,
      };
    }
    case ACTIONS.CHANGE_INPUT: {
      const updatedAssignment = { ...assignmentsState.assignment };
      updatedAssignment[action.payload.inputField] =
        action.payload.updatedInput;
      return {
        ...assignmentsState,
        assignment: updatedAssignment,
      };
    }
    default:
      return assignmentsState;
  }
};

const App = () => {
  const [assignmentsState, dispatchAssignments] = useReducer(
    assignmentsReducer,
    {
      assignments: [],
      isEditingAssignment: false,
      isAddingAssignment: false,
      assignment: {
        className: "",
        name: "",
        startDate: new Date(),
        dueDate: new Date().setHours(23, 59, 59),
        estimatedHours: "",
        questions: [],
      },
    }
  );

  const [availability, setAvailability] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [tabValue, setTabValue] = useState(0);

  

  const handleAvailabilityChange = (id, newValue) => {
    const updatedAvailability = [...availability];
    updatedAvailability[+id] = +newValue;
    setAvailability(updatedAvailability);
  };

  const handleTabChange = (event, value) => {
    setTabValue(value);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Header />
        <Box sx={{ width: "100%" }}>
          <TabLabels handleTabChange={handleTabChange} tabValue={tabValue} />
          <TabPanel value={tabValue} index={0}>
            <AssignmentInput
              dispatch={dispatchAssignments}
              assignmentsState={assignmentsState}
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
              assignments={assignmentsState.assignments}
              availability={availability}
            />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
