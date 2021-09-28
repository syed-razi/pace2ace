import React from "react";
import AssignmentBreakdownItem from "./AssignmentBreakdownItem";

const AssignmentBreakdown = (props) => {
  return (
    <>
      {props.assignments.map((assignment) => (
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
