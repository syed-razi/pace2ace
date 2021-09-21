import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateAssignmentForm from "./CreateAssignmentForm";

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

const CreateAssignment = (props) => {
  const [isAddingAssignment, setIsAddingAssignment] = useState(false);
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       className: "",
  //       name: "",
  //       worth: "",
  //       startDate: new Date(),
  //       dueDate: new Date(new Date().setHours(23, 59, 59)),
  //       estimatedHours: "",
  //       questions: [],
  //     };
  //   }

  //   handleAddAssignment() {
  //     this.props.onAddAssignment(
  //       this.state.className,
  //       this.state.name,
  //       this.state.worth,
  //       this.state.startDate.toLocaleDateString(),
  //       this.state.dueDate.toLocaleDateString(),
  //       this.state.dueDate.toLocaleTimeString(),
  //       parseInt(this.state.estimatedHours),
  //       this.state.questions //.map( (e) => {return JSON.stringify(e)}),
  //       //this.state.id
  //     );
  //     this.setState({
  //       className: "",
  //       name: "",
  //       worth: "",
  //       startDate: new Date(),
  //       dueDate: new Date(new Date().setHours(23, 59, 59)),
  //       estimatedHours: "",
  //       questions: [],
  //       //id: prevState.id + 1
  //     });
  //   }

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
          <CreateAssignmentForm
            onClose={closeAddAssignmentForm}
            onAddAssignment={props.onAddAssignment}
          />
        )}
        {!isAddingAssignment && (
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Button
                variant="contained"
                startIcon={<AddIcon className={classes.addIcon} />}
                onClick={openAddAssignmentForm}
              >
                Add Assignment
              </Button>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(CreateAssignment);
