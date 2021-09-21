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
  //   handleDeleteAssignment = (id) => (event) => {
  //     event.stopPropagation();
  //     this.props.onDeleteAssignment(id);
  //   };

  // handleEditAssignment = (id) => (event) => {
  //     event.stopPropagation();
  //     this.props.onEditAssignment(id);
  // }

  const { classes } = props;

  return (
    <div className={classes.root}>
      <div>
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
        {/* </div>{this.props.assignments.map(
            ({
              className,
              name,
              worth,
              startDate,
              dueDate,
              dueTime,
              estimatedHours,
              questions,
              id,
            }) => (
              <Accordion key={id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                      <Typography className={classes.heading}>
                        {className}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        className={classes.button}
                        onClick={this.handleDeleteAssignment(id)}
                        onFocus={(event) => event.stopPropagation()}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container justify="center" alignItems="center">
                    <Grid item>
                      <Typography>
                        Assignment Name: {name} <br />
                        Worth: {worth} <br />
                        Start Date: {startDate} <br />
                        Due Date: {dueDate} <br />
                        Due Time: {dueTime} <br />
                        Estimated Hours: {estimatedHours} <br />
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            )
          )} */}
      </div>
    </div>
  );
};

export default withStyles(useStyles)(AssignmentDetails);
