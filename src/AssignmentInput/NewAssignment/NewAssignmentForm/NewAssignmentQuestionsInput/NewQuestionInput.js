import React, { useState, useEffect } from "react";
import { TextField, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ACTIONS } from "../../../../App";

const NewQuestionInput = ({ question, dispatch }) => {
  const [q, setQ] = useState(question);
  const [marks, setMarks] = useState("");

  useEffect(() => {
    setQ(question);
  }, [question]);

  const handleAddQuestion = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_QUESTION,
      payload: { question: q, marks: marks },
    });
    setMarks("");
  };

  return (
    <form noValidate autoComplete="off">
      <Stack direction="row" spacing={2}>
        <TextField
          id="standard-basic"
          label="Question"
          onChange={(e) => setQ(e.target.value)}
          value={q}
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
