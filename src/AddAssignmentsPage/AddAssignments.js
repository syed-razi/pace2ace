import React from "react";
import NewAssignment from "./Assignments/NewAssignment";
import AssignmentList from "./Assignments/AssignmentList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: theme.palette.secondary.light,
  },
});

const AddAssignments = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <NewAssignment onAddAssignment={props.onAddAssignment} />
          </Paper>
        </Grid>
        {props.assignments.length > 0 && (
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <AssignmentList
                assignments={props.assignments}
                onDelete={props.onDelete}
              />
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(AddAssignments);
