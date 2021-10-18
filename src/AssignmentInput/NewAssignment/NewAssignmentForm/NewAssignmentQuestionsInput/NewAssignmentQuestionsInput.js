import NewQuestionInput from "./NewQuestionInput";
import QuestionsList from "./QuestionsList";
import { Typography } from "@mui/material";
import React from "react";

const NewAssignmentQuestionsInput = ({ assignment, dispatch }) => {
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
      {assignment.questions.length > 0 && (
        <QuestionsList
          questions={assignment.questions}
          dispatch={dispatch}
        />
      )}
      <NewQuestionInput
        dispatch={dispatch}
        question={assignQuestion(assignment.questions)}
      />
    </>
  );
};

export default NewAssignmentQuestionsInput;
