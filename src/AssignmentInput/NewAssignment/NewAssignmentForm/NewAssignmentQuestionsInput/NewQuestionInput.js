import React, { useState, useEffect, useContext } from "react";
import { TextField, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AssignmentsContext from "../../../../store/assignments-context";

const NewQuestionInput = ({ question }) => {
  const { dispatchAssignments: dispatch, ACTIONS } = useContext(AssignmentsContext);

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
