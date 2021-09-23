import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AssignmentBreakdownItem from "./AssignmentBreakdownItem";

const useStyles = (theme) => ({
  root: {},
  table: {
    minWidth: 650,
  },
});

const AssignmentBreakdown = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div>
        {props.assignments.map((assignment) => (
          <AssignmentBreakdownItem
            key={assignment.id}
            assignment={assignment}
            availability={props.availability}
          />
        ))}
      </div>
    </div>
  );
};

export default withStyles(useStyles)(AssignmentBreakdown);
