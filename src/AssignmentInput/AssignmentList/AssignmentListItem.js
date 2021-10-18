import React from "react";
import { IconButton, ListItemText, ListItem, Paper } from "@mui/material";
import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { ACTIONS } from "../../App";

const AssignmentListItem = ({ assignment, dispatch }) => {
  return (
    <Paper elevation={3}>
      <ListItem>
        <ListItemText
          primary={assignment.className}
          secondary={assignment.name}
        />
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={() => {
            dispatch({
              type: ACTIONS.EDIT_ASSIGNMENT,
              payload: { assignmentId: assignment.id },
            });
          }}
          size="large"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            dispatch({
              type: ACTIONS.DELETE_ASSIGNMENT,
              payload: { assignmentId: assignment.id },
            });
          }}
          size="large"
        >
          <Delete />
        </IconButton>
      </ListItem>
    </Paper>
  );
};

export default AssignmentListItem;
