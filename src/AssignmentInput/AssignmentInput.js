import React from "react";
import NewAssignment from "./NewAssignment/NewAssignment";
import AssignmentList from "./AssignmentList/AssignmentList";
import { Grid } from "@mui/material";

const AssignmentInput = (props) => {
  return (
    <Grid container direction="column" alignItems="center" spacing={10}>
      <NewAssignment
        onAddAssignment={props.onAddAssignment}
        onSaveAssignment={props.onSaveAssignment}
        isEditingAssignment={props.isEditingAssignment}
        isAddingAssignment={props.isAddingAssignment}
        assignmentToEdit={props.assignmentToEdit}
        assignment={props.assignment}
        assignmentChangeHandlers={props.assignmentChangeHandlers}
        clearAssignmentInput={props.clearAssignmentInput}
        onAddQuestion={props.onAddQuestion}
        onDeleteQuestion={props.onDeleteQuestion}
        onCloseEdit={props.onCloseEdit}
        onOpen={props.onOpen}
        onClose={props.onClose}
      />
      {props.assignments.length > 0 && (
        <AssignmentList
          assignments={props.assignments}
          onDelete={props.onDelete}
          onEdit={props.onEdit}
        />
      )}
    </Grid>
  );
};

export default AssignmentInput;
