import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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

  return (
    <form noValidate autoComplete="off">
      <Stack direction="row" spacing={2} >
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
