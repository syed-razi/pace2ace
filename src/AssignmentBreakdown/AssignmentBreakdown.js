import React, { useContext } from "react";
import AssignmentBreakdownItem from "./AssignmentBreakdownItem";
import AssignmentsContext from "../store/assignments-context";

const AssignmentBreakdown = (props) => {
  const { assignmentsState } = useContext(AssignmentsContext);

  return (
    <>
      {assignmentsState.assignments.map((assignment) => (
        <AssignmentBreakdownItem
          key={assignment.id}
          assignment={assignment}
          availability={props.availability}
        />
      ))}
    </>
  );
};

export default (AssignmentBreakdown);
