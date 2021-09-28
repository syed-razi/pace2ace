import React, { useState } from "react";
import "./App.css";
import Header from "./UI/Header";
import AssignmentInput from "./AssignmentInput/AssignmentInput";
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import { Box } from "@mui/material";
import AvailabilityForm from "./AvailabilityForm/AvailabilityForm";
import AssignmentBreakdown from "./AssignmentBreakdown/AssignmentBreakdown";
import TabPanel from "./UI/TabPanel";
import TabLabels from "./UI/TabLabels";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b71c1c",
    },
    secondary: {
      main: "#424242",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: "25px",
        },
      },
    },
  },
});

const App = () => {
  const [assignments, setAssignments] = useState([]);
  const [availability, setAvailability] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [tabValue, setTabValue] = useState(0);

  const handleAddAssignment = (assignment) => {
    setAssignments((prevAssignments) => [...prevAssignments, assignment]);
  };

  const handleDeleteAssignment = (assignmentID) => {
    setAssignments((prevAssignments) =>
      prevAssignments.filter((assignment) => assignment.id !== assignmentID)
    );
  };

  const handleAvailabilityChange = (id, newValue) => {
    const updatedAvailability = [...availability];
    updatedAvailability[+id] = +newValue;
    setAvailability(updatedAvailability);
  };

  const handleTabChange = (event, value) => {
    setTabValue(value);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Header />
        <Box sx={{ width: "100%" }}>
          <TabLabels handleTabChange={handleTabChange} tabValue={tabValue} />
          <TabPanel value={tabValue} index={0}>
            <AssignmentInput
              assignments={assignments}
              onAddAssignment={handleAddAssignment}
              onDelete={handleDeleteAssignment}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <AvailabilityForm
              availability={availability}
              onAvailabilityChange={handleAvailabilityChange}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <AssignmentBreakdown
              assignments={assignments}
              availability={availability}
            />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
