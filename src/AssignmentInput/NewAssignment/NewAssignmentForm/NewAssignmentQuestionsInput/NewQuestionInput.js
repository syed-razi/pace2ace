import React, { useState, useEffect } from "react";
import { TextField, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const NewQuestionInput = (props) => {
  const [question, setQuestion] = useState(props.question);
  const [marks, setMarks] = useState("");

  useEffect(() => {
    setQuestion(props.question);
  }, [props.question]);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const questionData = {
      question: question,
      marks: marks,
    };
    props.onAddQuestion(questionData);
    setMarks("");
  };

  return (
    <form noValidate autoComplete="off">
      <Stack direction="row" spacing={2}>
        <TextField
          id="standard-basic"
          label="Question"
          onChange={(e) => setQuestion(e.target.value)}
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
          onChange={(e) => setMarks(+e.target.value)}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddQuestion}
          type="submit"
        >
          Add
        </Button>
      </Stack>
    </form>
  );
};

export default NewQuestionInput;
