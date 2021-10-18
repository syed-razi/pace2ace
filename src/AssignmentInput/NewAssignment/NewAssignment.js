import React from "react";
import { Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewAssignmentForm from "./NewAssignmentForm/NewAssignmentForm";
import { ACTIONS } from "./../../App.js"

const NewAssignment = ({ dispatch, assignmentsState }) => {
  return (
    <Grid item container direction="column" alignItems="center">
      {(assignmentsState.isAddingAssignment || assignmentsState.isEditingAssignment) && (
        <NewAssignmentForm
          dispatch={dispatch}
          assignmentsState={assignmentsState}
        />
      )}

      {!(assignmentsState.isAddingAssignment || assignmentsState.isEditingAssignment) && (
        <Grid item>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => dispatch({ type: ACTIONS.OPEN_ASSIGNMENT_INPUT })}
            size="large"
          >
            Add Assignment
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default NewAssignment;
