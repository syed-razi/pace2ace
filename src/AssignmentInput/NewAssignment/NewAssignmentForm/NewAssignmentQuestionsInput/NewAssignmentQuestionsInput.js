import NewQuestionInput from "./NewQuestionInput";
import QuestionsList from "./QuestionsList";
import { Typography } from "@mui/material";
import React from "react";

const NewAssignmentQuestionsInput = (props) => {
  const assignQuestion = (questions) => {
    if (questions.length > 0) {
      const question = questions[questions.length - 1].question;
      if (!isNaN(question)) {
        return +question + 1;
      }
      return question;
    }
    return 1;
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Enter Question Details Below To Add a Question
      </Typography>
      {props.assignment.questions.length > 0 && (
        <QuestionsList
          questions={props.assignment.questions}
          onDeleteQuestion={props.onDeleteQuestion}
        />
      )}
      <NewQuestionInput
        onAddQuestion={props.onAddQuestion}
        question={assignQuestion(props.assignment.questions)}
      />
    </>
  );
};

export default NewAssignmentQuestionsInput;
