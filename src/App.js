import React, { useState } from "react";
import "./App.css";
import NavBar from "./Navbar";
import Input from "./Input";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import Preferences from "./Preferences";
import Breakdown from "./Breakdown";

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
  const [state, setState] = useState({
    assignments: [],
    assignmentID: 0,
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
    bufferTime: "",
    minWorkTime: "",
    value: 0,
    saved: false,
    edit: false,
    editItem: {
      className: "",
      name: "",
      worth: "",
      startDate: new Date(),
      dueDate: new Date(new Date().setHours(23, 59, 59)),
      estimatedHours: "",
      questions: [],
    },
  });

  const handleAddAssignment = (
    className,
    name,
    worth,
    startDate,
    dueDate,
    dueTime,
    estimatedHours,
    questions
  ) => {
    setState((prevState) => ({
      assignmentID: prevState.assignmentID + 1,
      assignments: [
        ...state.assignments,
        {
          className: className,
          name: name,
          worth: worth,
          startDate: startDate,
          dueDate: dueDate,
          dueTime: dueTime,
          estimatedHours: estimatedHours,
          questions: questions,
          id: prevState.assignmentID + 1,
        },
      ],
    }));
  };

  const handleDeleteAssignment = (aID) => {
    setState({
      assignments: state.assignments.filter(({ id }) => id !== aID),
    });
  };

  const handleTabChange = (event, newValue) => {
    setState({
      value: newValue,
    });
  };

  const handleSave = (
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    bufferTime,
    minWorkTime
  ) => {
    setState({
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday,
      bufferTime: bufferTime,
      minWorkTime: minWorkTime,
      saved: true,
    });
  };

  const handleEditAssignment = (aID) => {
    console.log(state.editItem);
    var editItem = state.assignments.find(
      ({
        className,
        name,
        worth,
        startDate,
        dueDate,
        dueTime,
        estimatedHours,
        questions,
        id,
      }) => id === aID
    );
    setState({
      edit: true,
      editItem: editItem,
    });
    console.log(editItem);
    console.log(state.edit);
    console.log(state.editItem);
  };

  const { classes } = props;

  return (
    <div className={classes.root}>
      <NavBar />
      <AppBar position="static">
        <Tabs value={state.value} onChange={handleTabChange}>
          <Tab label="Input" />
          <Tab label="Preferences" />
          <Tab label="Breakdown" disabled />
        </Tabs>
      </AppBar>
      <TabPanel value={state.value} index={0}>
        <Input
          assignments={state.assignments}
          onAddAssignment={handleAddAssignment}
          onDeleteAssignment={handleDeleteAssignment}
          onEditAssignment={handleEditAssignment}
          editItem={state.editItem}
        />
      </TabPanel>
      <TabPanel value={state.value} index={1}>
        <Preferences onSave={handleSave} />
      </TabPanel>
      <TabPanel value={state.value} index={2}>
        <Breakdown
          assignments={
            //   [{
            //   className: "4HC3",
            //   name: "Assignment 1",
            //   worth: 3,
            //   startDate: "12/03/20",
            //   dueDate: "12/10/20",
            //   dueTime: "11:59:00 PM",
            //   estimatedHours: 10,
            //   questions: [
            //     {question: "Name", marks: 5},
            //     {question: "Purpose", marks: 5},
            //     {question: "Target User", marks: 5},
            //     {question: "Tasks", marks: 25},
            //     {question: "Sketches", marks: 30},
            //     {question: "Layout", marks: 20},
            //     {question: "Form", marks: 10},
            //     ],
            //   id: "1"
            // }]
            state.assignments
          }
          // monday={4}
          // tuesday={3}
          // wednesday={5}
          // thursday={4}
          // friday={3}
          // saturday={3}
          // sunday={0}
          // bufferTime={2}
          // minWorkTime={state.minWorkTime}
          monday={state.monday}
          tuesday={state.tuesday}
          wednesday={state.wednesday}
          thursday={state.thursday}
          friday={state.friday}
          saturday={state.saturday}
          sunday={state.sunday}
          bufferTime={state.bufferTime}
          minWorkTime={state.minWorkTime}
        />
      </TabPanel>
    </div>
  );
};

export default withStyles(useStyles)(App);
