import AssignmentsContext from "./assignments-context";
import { useReducer } from "react";

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

const AssignmentsProvider = (props) => {
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

  return (
    <AssignmentsContext.Provider
      value={{ assignmentsState, dispatchAssignments, ACTIONS }}
    >
      {props.children}
    </AssignmentsContext.Provider>
  );
};

export default AssignmentsProvider;
