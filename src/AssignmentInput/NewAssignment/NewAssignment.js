import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NewAssignmentForm from "./NewAssignmentForm/NewAssignmentForm";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  addIcon: {
    padding: theme.spacing(1),
  },
});

const NewAssignment = (props) => {
  const [isAddingAssignment, setIsAddingAssignment] = useState(false);

  const { classes } = props;

  const openAddAssignmentForm = () => {
    setIsAddingAssignment(true);
  };

  const closeAddAssignmentForm = () => {
    setIsAddingAssignment(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {isAddingAssignment && (
          <NewAssignmentForm
            onClose={closeAddAssignmentForm}
            onAddAssignment={props.onAddAssignment}
          />
        )}
        {!isAddingAssignment && (
          
              <Button
                variant="contained"
                startIcon={<AddIcon className={classes.addIcon} />}
                onClick={openAddAssignmentForm}
              >
                Add Assignment
              </Button>
        )}
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(NewAssignment);
