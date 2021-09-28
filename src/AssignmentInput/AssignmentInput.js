import React from "react";
import NewAssignment from "./NewAssignment/NewAssignment";
import AssignmentList from "./AssignmentList/AssignmentList";
import { Grid } from "@mui/material";

const AssignmentInput = (props) => {
  return (
    <Grid container direction="column" alignItems="center" spacing={10}>
      <NewAssignment onAddAssignment={props.onAddAssignment} />
      {props.assignments.length > 0 && (
        <AssignmentList
          assignments={props.assignments}
          onDelete={props.onDelete}
        />
      )}
    </Grid>
  );
};

export default AssignmentInput;
