import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles, styled } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import AssignmentListItem from "./AssignmentListItem";

const useStyles = (theme) => ({
  root: {},
  button: {
    margin: theme.spacing(1),
  },
});

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const AssignmentDetails = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Assignments
      </Typography>
      <Demo>
        <List>
          {props.assignments.map((assignment) => (
            <AssignmentListItem
              key={assignment.id}
              assignment={assignment}
              onDelete={props.onDelete}
            />
          ))}
        </List>
      </Demo>
    </div>
  );
};

export default withStyles(useStyles)(AssignmentDetails);
