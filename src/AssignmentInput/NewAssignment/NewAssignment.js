import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewAssignmentForm from "./NewAssignmentForm/NewAssignmentForm";

const NewAssignment = (props) => {
  const [isAddingAssignment, setIsAddingAssignment] = useState(false);

  const openAddAssignmentForm = () => {
    setIsAddingAssignment(true);
  };

  const closeAddAssignmentForm = () => {
    setIsAddingAssignment(false);
  };

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
    >
      {isAddingAssignment && (
        <NewAssignmentForm
          onClose={closeAddAssignmentForm}
          onAddAssignment={props.onAddAssignment}
        />
      )}

      {!isAddingAssignment && (
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
