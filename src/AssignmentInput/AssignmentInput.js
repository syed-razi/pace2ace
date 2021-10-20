import React, { useContext } from "react";
import AssignmentsContext from "../store/assignments-context";
import NewAssignment from "./NewAssignment/NewAssignment";
import AssignmentList from "./AssignmentList/AssignmentList";
import { Grid } from "@mui/material";

const AssignmentInput = () => {
  const { assignmentsState, dispatchAssignments: dispatch, ACTIONS } = useContext(AssignmentsContext);

  return (
    <Grid container direction="column" alignItems="center" spacing={10}>
      <NewAssignment
        dispatch={dispatch}
        assignmentsState={assignmentsState}
        ACTIONS={ACTIONS}
      />
      {assignmentsState.assignments.length > 0 && (
        <AssignmentList
          assignments={assignmentsState.assignments}
        />
      )}
    </Grid>
  );
};

export default AssignmentInput;
