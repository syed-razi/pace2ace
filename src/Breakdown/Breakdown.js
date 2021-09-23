import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BreakdownItem from "./BreakdownItem";

const useStyles = (theme) => ({
  root: {},
  table: {
    minWidth: 650,
  },
});

const Breakdown = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div>
        {props.assignments.map((assignment) => (
          <BreakdownItem
            key={assignment.id}
            assignment={assignment}
            availability={props.availability}
          />
        ))}
      </div>
    </div>
  );
};

export default withStyles(useStyles)(Breakdown);
