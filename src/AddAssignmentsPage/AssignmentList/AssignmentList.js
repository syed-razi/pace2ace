import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles, styled } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
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
