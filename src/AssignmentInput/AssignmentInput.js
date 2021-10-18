import React from "react";
import NewAssignment from "./NewAssignment/NewAssignment";
import AssignmentList from "./AssignmentList/AssignmentList";
import { Grid } from "@mui/material";

const AssignmentInput = ({ dispatch, assignmentsState }) => {
  return (
    <Grid container direction="column" alignItems="center" spacing={10}>
      <NewAssignment
        dispatch={dispatch}
        assignmentsState={assignmentsState}
      />
      {assignmentsState.assignments.length > 0 && (
        <AssignmentList
          dispatch={dispatch}
          assignments={assignmentsState.assignments}
        />
      )}
    </Grid>
  );
};

export default AssignmentInput;
