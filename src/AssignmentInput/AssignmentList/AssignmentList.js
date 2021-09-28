import React from "react";
import { Typography, List, Grid, Box, Stack } from "@mui/material";
import AssignmentListItem from "./AssignmentListItem";

const AssignmentDetails = (props) => {
  return (
    <Grid item container direction="column" alignItems="center">
      <Typography variant="h6" gutterBottom>
        Assignments
      </Typography>
      <Box
        sx={{
          width: { xs: 350, sm: 400, md: 500, lg: 600, xl: 700 },
          bgcolor: "background.paper",
        }}
      >
        <List component="assignment-list" aria-label="list of assignments">
          <Stack spacing={1}>
            {props.assignments.map((assignment) => (
              <AssignmentListItem
                key={assignment.id}
                assignment={assignment}
                onDelete={props.onDelete}
              />
            ))}
          </Stack>
        </List>
      </Box>
    </Grid>
  );
};

export default AssignmentDetails;
