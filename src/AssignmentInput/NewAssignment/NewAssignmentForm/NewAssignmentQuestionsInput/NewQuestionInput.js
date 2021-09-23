import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = (theme) => ({
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

const NewQuestionInput = (props) => {
  const [question, setQuestion] = useState("");
  const [marks, setMarks] = useState("");
  const [id, setId] = useState(0);

  const handleQuestionInput = (e) => {
    setQuestion(e.target.value);
  };

  const handleMarksInput = (e) => {
    setMarks(+e.target.value);
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const questionData = {
      question: question,
      marks: marks,
      id: id,
    };
    props.onAddQuestion(questionData);
    setQuestion("");
    setMarks("");
    setId((prevId) => prevId + 1);
  };

  const { classes } = props;

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Question"
        onChange={handleQuestionInput}
        value={question}
      />
      <TextField
        id="standard-number"
        label="Marks"
        type="number"
        value={marks}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleMarksInput}
      />
      <Button
        variant="contained"
        startIcon={<AddIcon className={classes.addIcon} />}
        onClick={handleAddQuestion}
        type="submit"
      >
        Add Question
      </Button>
    </form>
  );
};

export default withStyles(useStyles)(NewQuestionInput);
