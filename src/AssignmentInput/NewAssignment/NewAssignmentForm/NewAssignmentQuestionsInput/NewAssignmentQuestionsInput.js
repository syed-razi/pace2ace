import NewQuestionInput from "./NewQuestionInput";
import QuestionsList from "./QuestionsList";
import { Typography } from "@mui/material";
import React from "react";

const NewAssignmentQuestionsInput = (props) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Enter Question Details Below To Add a Question
      </Typography>
      {props.questions.length > 0 && (
        <QuestionsList
          questions={props.questions}
          onDeleteQuestion={props.onDeleteQuestion}
        />
      )}
      <NewQuestionInput onAddQuestion={props.onAddQuestion} />
    </>
  );
};

export default NewAssignmentQuestionsInput;
