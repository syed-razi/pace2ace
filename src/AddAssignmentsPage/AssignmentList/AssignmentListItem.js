import React, { useState } from "react";
import {
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@mui/material/ListItem";

const AssignmentListItem = (props) => {
  const { assignment } = props;

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            props.onDelete(assignment.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={assignment.className} secondary={assignment.name} />
    </ListItem>
  );
};

export default AssignmentListItem;
