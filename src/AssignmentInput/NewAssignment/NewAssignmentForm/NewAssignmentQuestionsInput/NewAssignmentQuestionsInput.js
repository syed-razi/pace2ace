import NewQuestionInput from "./NewQuestionInput";
import QuestionsList from "./QuestionsList";
import { Typography, Stack } from "@mui/material";
import React from "react";

const NewAssignmentQuestionsInput = (props) => {
  return (
    <Stack alignItems="center" spacing={3}>
      <Typography variant="h6" gutterBottom>
        Enter Question Details Below To Add a Question
      </Typography>
      {props.questions.length > 0 && <QuestionsList
        questions={props.questions}
        onDeleteQuestion={props.onDeleteQuestion}
      />}
      <NewQuestionInput onAddQuestion={props.onAddQuestion} />
    </Stack>
  );
};

export default NewAssignmentQuestionsInput;
