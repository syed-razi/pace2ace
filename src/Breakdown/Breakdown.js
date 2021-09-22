import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import _ from "lodash";
import BreakdownItem from "./BreakdownItem";

const useStyles = (theme) => ({
  root: {},
  table: {
    minWidth: 650,
  },
});

// const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// // a and b are javascript Date objects
// function dateDiffInDays(a, b) {
//   // Discard the time and time-zone information.
//   const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
//   const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

//   return Math.floor((utc2 - utc1) / _MS_PER_DAY);
// }

// Date.prototype.addDays = function (days) {
//   var date = new Date(this.valueOf());
//   date.setDate(date.getDate() + days);
//   return date;
// };

// function getDatesArray(startDateString, dueDateString, dueTimeString) {
//   var startDate = new Date(startDateString);
//   var dueDate = new Date(dueDateString);
//   var dueTimeStringArray = dueTimeString.split(":", 2);
//   dueDate.setHours(dueTimeStringArray[0], dueTimeStringArray[1]);
//   var numDays = dateDiffInDays(startDate, dueDate);

//   var datesArray = [startDate];
//   for (var i = 1; i <= numDays; i++) {
//     datesArray.push(startDate.addDays(i));
//   }
//   return datesArray;
// }

// function getMarksArray(
//   dates,
//   monday,
//   tuesday,
//   wednesday,
//   thursday,
//   friday,
//   saturday,
//   sunday,
//   totalMarks,
//   totalHours
// ) {
//   var timeAvailable = 0;
//   var marksArray = [];

//   for (var i = 0; i < dates.length; i++) {
//     switch (dates[i].getDay()) {
//       case 0:
//         timeAvailable = sunday;
//         break;
//       case 1:
//         timeAvailable = monday;
//         break;
//       case 2:
//         timeAvailable = tuesday;
//         break;
//       case 3:
//         timeAvailable = wednesday;
//         break;
//       case 4:
//         timeAvailable = thursday;
//         break;
//       case 5:
//         timeAvailable = friday;
//         break;
//       case 6:
//         timeAvailable = saturday;
//         break;
//       default:
//       // do nothing
//     }

//     var marksNeeded = (timeAvailable / totalHours) * totalMarks;

//     marksArray.push(marksNeeded);
//   }

//   return marksArray;
// }

// function getQuestionsArray(
//   questions,
//   dates,
//   monday,
//   tuesday,
//   wednesday,
//   thursday,
//   friday,
//   saturday,
//   sunday,
//   bufferTime,
//   totalHours
// ) {
//   var numDays = dates.length;
//   var questionsClone = _.cloneDeep(questions);
//   var marks = 0;
//   for (var i = 0; i < questionsClone.length; i++) {
//     var questionObject = questionsClone[i];
//     marks = marks + questionObject.marks;
//   }

//   var marksArray = getMarksArray(
//     dates,
//     monday,
//     tuesday,
//     wednesday,
//     thursday,
//     friday,
//     saturday,
//     sunday,
//     marks,
//     totalHours
//   );

//   var marksPerDay = marks / numDays;

//   var qArray = [];
//   var questionsForDay = "";
//   var pointer = 0;
//   var marksPointer = 0;
//   var marksNeeded = marksArray[marksPointer];
//   var i = 0;

//   while (pointer < questions.length) {
//     if (questionsClone[pointer].marks < marksNeeded) {
//       questionsForDay =
//         questionsForDay != ""
//           ? questionsForDay + ", " + questionsClone[pointer].question
//           : questionsClone[pointer].question;
//       marksNeeded -= questionsClone[pointer].marks;
//       if (pointer == questions.length - 1 && marksNeeded < 0.1) {
//         qArray.push(questionsForDay);
//         questionsForDay = "";
//       }
//       pointer += 1;
//     } else {
//       questionsClone[pointer].marks -= marksNeeded;
//       if (
//         pointer == questions.length - 1 &&
//         questionsClone[pointer].marks < 0.1
//       ) {
//         questionsForDay =
//           questionsForDay != ""
//             ? questionsForDay + ", " + questionsClone[pointer].question
//             : questionsClone[pointer].question;
//         qArray.push(questionsForDay);
//         questionsForDay = "";
//         pointer += 1;
//         continue;
//       }
//       questionsForDay =
//         questionsForDay != ""
//           ? questionsForDay + ", " + questionsClone[pointer].question
//           : questionsClone[pointer].question;
//       qArray.push(questionsForDay);
//       questionsForDay = "";

//       marksNeeded = marksArray[++marksPointer];
//       if (marksNeeded == 0) {
//         qArray.push("Day Off");
//         marksNeeded = marksArray[++marksPointer];
//         continue;
//       }
//     }

//     //if(marksNeeded)
//   }

//   // var questionsArray = [];
//   // var q = "";
//   // var pointer = 0;
//   // var sumMarks = 0;

//   // while (pointer < questionsClone.length) {

//   //     var questionObject = questionsClone[pointer];
//   //     sumMarks = sumMarks + questionObject.marks;

//   //     if(q != "") {
//   //         q = q + ", " + questionObject.question;
//   //     } else {
//   //         q = questionObject.question;
//   //     }

//   //     if(sumMarks >= marksPerDay) {
//   //         questionsClone[pointer].marks = sumMarks - marksPerDay;
//   //         sumMarks = 0;
//   //         questionsArray.push(q);
//   //         q = "";
//   //     } else {
//   //         pointer = pointer + 1;
//   //     }
//   // }

//   return qArray;
// }

// function createData(date, questions, time) {
//   return { date, questions, time };
// }

// function decimalToTimeString(decimalTime) {
//   decimalTime = decimalTime * 60 * 60;
//   var hours = Math.floor(decimalTime / (60 * 60));
//   decimalTime = decimalTime - hours * 60 * 60;
//   var minutes = Math.floor(decimalTime / 60);
//   decimalTime = decimalTime - minutes * 60;
//   var seconds = Math.round(decimalTime);
//   if (seconds >= 30) minutes = minutes + 1;
//   return hours + " hours " + minutes + " minutes";
// }

// function getTimesArray(
//   estimatedHours,
//   dates,
//   monday,
//   tuesday,
//   wednesday,
//   thursday,
//   friday,
//   saturday,
//   sunday,
//   bufferTime,
//   totalHours
// ) {
//   var timesArray = [];
//   var numDays = dates.length;
//   var timeAvailable = 0; //estimatedHours / numDays;
//   //var totalHours = monday + tuesday + wednesday + thursday + friday + saturday + sunday;
//   var totalTimeRequired = estimatedHours + bufferTime;
//   for (var i = 0; i < dates.length; i++) {
//     switch (dates[i].getDay()) {
//       case 0:
//         timeAvailable = sunday;
//         break;
//       case 1:
//         timeAvailable = monday;
//         break;
//       case 2:
//         timeAvailable = tuesday;
//         break;
//       case 3:
//         timeAvailable = wednesday;
//         break;
//       case 4:
//         timeAvailable = thursday;
//         break;
//       case 5:
//         timeAvailable = friday;
//         break;
//       case 6:
//         timeAvailable = saturday;
//         break;
//       default:
//       // do nothing
//     }

//     var timeRequired = (timeAvailable / totalHours) * totalTimeRequired;

//     timesArray.push(decimalToTimeString(timeRequired));
//   }

//   return timesArray;
// }





const getHoursPerDay = (assignment) => {
    const startDate = assignment.startDate;
    const dueDate = assignment.dueDate;

    // # of milliseconds in a day
    const oneDay = 1000 * 60 * 60 * 24;

    // time diff between dates
    const timeDiff = dueDate.getTime() - startDate.getTime();

    //Calculation num days between dates
    const daysDiff = timeDiff/oneDay;

    const hoursPerDay = assignment.estimatedHours/daysDiff;

    return hoursPerDay;
};

const Breakdown = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div>
        {props.assignments.map(
          (assignment) => (
            <BreakdownItem assignment={assignment} />
            //getHoursPerDay(assignment)
          )
        )}
      </div>
    </div>
  );
};

export default withStyles(useStyles)(Breakdown);
