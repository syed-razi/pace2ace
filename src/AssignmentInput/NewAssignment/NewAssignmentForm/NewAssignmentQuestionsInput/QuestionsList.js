import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const QuestionsList = (props) => {
  return (
      <List sx={{width: {xs: "100%", md: "80%", lg: "70%"}}}>
        {props.questions.map(({ question, marks, id }) => (
          <ListItem divider key={id}>
            <ListItemText primary={question} secondary={marks + " marks"} />
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                className="button"
                onClick={() => props.onDeleteQuestion(id)}
              >
                Delete
              </Button>
          </ListItem>
        ))}
      </List>
  );
};

export default (QuestionsList);
