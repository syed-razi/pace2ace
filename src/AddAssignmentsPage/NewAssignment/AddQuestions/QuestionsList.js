import React from "react";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = (theme) => ({
  root: {},
});

const QuestionsList = (props) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Enter Question Details Below To Add a Question
      </Typography>
      <List>
        {props.questions.map(({ question, marks, id }) => (
          <ListItem divider key={id}>
            <ListItemText primary={question} secondary={marks + " marks"} />
            <ListItemSecondaryAction>
              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                className="button"
                onClick={() => props.onDeleteQuestion(id)}
              >
                Delete
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default withStyles(useStyles)(QuestionsList);
