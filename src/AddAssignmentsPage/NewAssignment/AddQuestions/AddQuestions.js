import NewQuestion from "./NewQuestion";
import QuestionsList from "./QuestionsList";
import { Grid, Paper } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

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

const AddQuestions = (props) => {
  const [questions, setQuestions] = useState([]);

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <QuestionsList
            questions={questions}
            //onDeleteQuestion={handleDeleteQuestion}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <NewQuestion
          //onAddQuestion={handleAddQuestion}
          />
        </Paper>
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(AddQuestions);
