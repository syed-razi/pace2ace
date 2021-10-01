import React from "react";
import { IconButton, ListItemText, ListItem, Paper } from "@mui/material";
import { Delete } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

const AssignmentListItem = (props) => {
  const { assignment } = props;

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
            props.onEdit(assignment.id);
          }}
          size="large"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            props.onDelete(assignment.id);
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
