import React, { useContext } from "react";
import { List, ListItem, ListItemText, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentsContext from "../../../../store/assignments-context";

const QuestionsList = ({ questions }) => {
  const { dispatchAssignments: dispatch, ACTIONS } = useContext(AssignmentsContext);

  return (
    <List sx={{ width: { xs: "100%" } }}>
      {questions.map(({ question, marks, id }) => (
        <ListItem divider key={id}>
          <ListItemText primary={question} secondary={marks + " marks"} />
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            className="button"
            onClick={
              () => dispatch({ type: ACTIONS.DELETE_QUESTION, payload: { questionId: id} })
            }
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default QuestionsList;
