import React, { useState } from "react";
import "./App.css";
import NavBar from "./Navbar";
import AssignmentInput from "./AssignmentInput/AssignmentInput";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import AvailabilityForm from "./AvailabilityForm/AvailabilityForm";
import AssignmentBreakdown from "./AssignmentBreakdown/AssignmentBreakdown";

const TabPanel = (props) => {
  //const { children, value, index, ...other } = props;

  const children = props.children;
  const value = props.value;
  const index = props.index;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && children}
    </div>
  );
};

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

const App = (props) => {
  const [assignments, setAssignments] = useState([]);
  const [availability, setAvailability] = useState([0,0,0,0,0,0,0]);
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

  const { classes } = props;

  return (
    <div className={classes.root}>
      <NavBar />
      <AppBar position="static">
        <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
          <Tab label="Add Assignments" />
          <Tab label="Set Availability" />
          <Tab label="View Breakdown" />
        </Tabs>
      </AppBar>
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
        <AssignmentBreakdown assignments={assignments} availability={availability} />
      </TabPanel>
    </div>
  );
};

export default withStyles(useStyles)(App);
