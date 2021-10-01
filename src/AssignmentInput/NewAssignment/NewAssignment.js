import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewAssignmentForm from "./NewAssignmentForm/NewAssignmentForm";

const NewAssignment = (props) => {
  const [isAddingAssignment, setIsAddingAssignment] = useState(false);

  const openAddAssignmentForm = () => {
    props.clearAssignmentInput();
    setIsAddingAssignment(true);
  };

  const closeAddAssignmentForm = () => {
    setIsAddingAssignment(false);
    props.onCloseEdit();
  };

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
    >
      {(isAddingAssignment || props.isEditingAssignment) && (
        <NewAssignmentForm
          onClose={closeAddAssignmentForm}
          onAddAssignment={props.onAddAssignment}
          onSaveAssignment={props.onSaveAssignment}
          isEditingAssignment={props.isEditingAssignment}
          assignment={props.assignment}
          assignmentChangeHandlers={props.assignmentChangeHandlers}
          onAddQuestion={props.onAddQuestion}
          onDeleteQuestion={props.onDeleteQuestion}
          isAddingAssignment={isAddingAssignment}
        />
      )}

      {!(isAddingAssignment || props.isEditingAssignment) && (
        <Grid item>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={openAddAssignmentForm}
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
