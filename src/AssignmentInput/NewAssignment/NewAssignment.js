import React from "react";
import { Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewAssignmentForm from "./NewAssignmentForm/NewAssignmentForm";

const NewAssignment = (props) => {
  return (
    <Grid item container direction="column" alignItems="center">
      {(props.isAddingAssignment || props.isEditingAssignment) && (
        <NewAssignmentForm
          onClose={props.onClose}
          onAddAssignment={props.onAddAssignment}
          onSaveAssignment={props.onSaveAssignment}
          isEditingAssignment={props.isEditingAssignment}
          assignment={props.assignment}
          assignmentChangeHandlers={props.assignmentChangeHandlers}
          onAddQuestion={props.onAddQuestion}
          onDeleteQuestion={props.onDeleteQuestion}
          isAddingAssignment={props.isAddingAssignment}
        />
      )}

      {!(props.isAddingAssignment || props.isEditingAssignment) && (
        <Grid item>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={props.onOpen}
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
