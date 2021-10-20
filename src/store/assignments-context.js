import React from "react";

const AssignmentsContext = React.createContext({
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
});

export default AssignmentsContext;
