import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import _ from "lodash";



const useStyles = (theme) => ({
    root: {
    },
    table: {
        minWidth: 650,
      },
  });



const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDatesArray(startDateString, dueDateString, dueTimeString) {
    var startDate = new Date(startDateString);
    var dueDate = new Date(dueDateString);
    var dueTimeStringArray = dueTimeString.split(":", 2);
    dueDate.setHours(dueTimeStringArray[0], dueTimeStringArray[1]);
    var numDays = dateDiffInDays(startDate, dueDate);

    var datesArray = [startDate];
    for(var i = 1; i <= numDays; i++){
        datesArray.push(startDate.addDays(i));
    }
    return datesArray;
}

function getMarksArray(dates, monday, tuesday, wednesday, 
    thursday, friday, saturday, sunday, totalMarks, totalHours) {

    var timeAvailable = 0;
    var marksArray = [];
    
    for (var i = 0; i < dates.length; i++) {
        
        switch(dates[i].getDay()) {
            case 0:
                timeAvailable = sunday;
                break;
            case 1:
                timeAvailable = monday;
                break;
            case 2:
                timeAvailable = tuesday;
                break;
            case 3:
                timeAvailable = wednesday;
                break;
            case 4:
                timeAvailable = thursday;
                break;
            case 5:
                timeAvailable = friday;
                break;
            case 6:
                timeAvailable = saturday;
                break;
            default:
                // do nothing
        }

        var marksNeeded = (timeAvailable / totalHours) * totalMarks;

        marksArray.push(marksNeeded);
    }

    return marksArray;

}

function getQuestionsArray(questions, dates, monday, tuesday, wednesday, 
                                thursday, friday, saturday, sunday, bufferTime, totalHours) {
    
    
    
    var numDays = dates.length;
    var questionsClone = _.cloneDeep(questions);
    var marks = 0;
    for (var i = 0; i < questionsClone.length; i++) {
        var questionObject = questionsClone[i];
        marks = marks + questionObject.marks;
    }

    var marksArray = getMarksArray(dates, monday, tuesday, wednesday, 
        thursday, friday, saturday, sunday, marks, totalHours);

    var marksPerDay = marks / numDays;

    var qArray = [];
    var questionsForDay = "";
    var pointer = 0;
    var marksPointer = 0;
    var marksNeeded = marksArray[marksPointer];
    var i = 0;

    while (pointer < questions.length) {
        if (questionsClone[pointer].marks < marksNeeded) {
            questionsForDay = questionsForDay != "" ? questionsForDay + ", " + questionsClone[pointer].question : questionsClone[pointer].question;
            marksNeeded -= questionsClone[pointer].marks;
            if (pointer == questions.length - 1 && marksNeeded < 0.1) {
                qArray.push(questionsForDay);
                questionsForDay = "";
            }
            pointer += 1;

            
        } else {
            questionsClone[pointer].marks -= marksNeeded;
            if (pointer == questions.length - 1 && questionsClone[pointer].marks < 0.1) {
                questionsForDay = questionsForDay != "" ? questionsForDay + ", " + questionsClone[pointer].question : questionsClone[pointer].question;
                qArray.push(questionsForDay);
                questionsForDay = "";
                pointer += 1;
                continue;
            }
            questionsForDay = questionsForDay != "" ? questionsForDay + ", " + questionsClone[pointer].question : questionsClone[pointer].question;
            qArray.push(questionsForDay);
            questionsForDay = "";

            marksNeeded = marksArray[++marksPointer];
            if (marksNeeded == 0) {
                qArray.push("Day Off");
                marksNeeded = marksArray[++marksPointer];
                continue;
            }
        }

        //if(marksNeeded)
        
    }

    // var questionsArray = [];
    // var q = "";
    // var pointer = 0;
    // var sumMarks = 0;

    // while (pointer < questionsClone.length) {
        
    //     var questionObject = questionsClone[pointer];
    //     sumMarks = sumMarks + questionObject.marks;

    //     if(q != "") {
    //         q = q + ", " + questionObject.question;
    //     } else {
    //         q = questionObject.question;
    //     }

    //     if(sumMarks >= marksPerDay) {
    //         questionsClone[pointer].marks = sumMarks - marksPerDay;
    //         sumMarks = 0;
    //         questionsArray.push(q);
    //         q = "";
    //     } else {
    //         pointer = pointer + 1;
    //     }
    // }

    return qArray;

}

function createData(date, questions, time) {
    return { date, questions, time };
}

function decimalToTimeString(decimalTime) {
    decimalTime = decimalTime * 60 * 60;
    var hours = Math.floor((decimalTime / (60 * 60)));
    decimalTime = decimalTime - (hours * 60 * 60);
    var minutes = Math.floor((decimalTime / 60));
    decimalTime = decimalTime - (minutes * 60);
    var seconds = Math.round(decimalTime);
    if(seconds >= 30) minutes = minutes + 1;
    return (hours + " hours " + minutes + " minutes");
}

function getTimesArray(estimatedHours, dates, monday, tuesday, wednesday, 
                            thursday, friday, saturday, sunday, bufferTime, totalHours) {
    
    var timesArray = [];
    var numDays = dates.length;
    var timeAvailable = 0; //estimatedHours / numDays;
    //var totalHours = monday + tuesday + wednesday + thursday + friday + saturday + sunday;
    var totalTimeRequired = estimatedHours + bufferTime;
    for (var i = 0; i < dates.length; i++) {
        
        switch(dates[i].getDay()) {
            case 0:
                timeAvailable = sunday
                break;
            case 1:
                timeAvailable = monday
                break;
            case 2:
                timeAvailable = tuesday 
                break;
            case 3:
                timeAvailable = wednesday
                break;
            case 4:
                timeAvailable = thursday 
                break;
            case 5:
                timeAvailable = friday
                break;
            case 6:
                timeAvailable = saturday
                break;
            default:
                // do nothing
        }

        var timeRequired = (timeAvailable / totalHours) * totalTimeRequired;

        timesArray.push(decimalToTimeString(timeRequired))
    }

    return timesArray;
}

function getRows(startDate, dueDate, dueTime, estimatedHours, questions,
                    monday, tuesday, wednesday, thursday, friday, saturday, sunday, bufferTime) {
    
    var datesArray = getDatesArray(startDate, dueDate, dueTime);

    var timeAvailable = 0;
    var totalHours = 0; //monday + tuesday + wednesday + thursday + friday + saturday + sunday;

    for (var i = 0; i < datesArray.length; i++) {

        switch(datesArray[i].getDay()) {
            case 0:
                timeAvailable = sunday;
                break;
            case 1:
                timeAvailable = monday;
                break;
            case 2:
                timeAvailable = tuesday;
                break;
            case 3:
                timeAvailable = wednesday;
                break;
            case 4:
                timeAvailable = thursday;
                break;
            case 5:
                timeAvailable = friday;
                break;
            case 6:
                timeAvailable = saturday;
                break;
            default:
                // do nothing
        }
        totalHours += timeAvailable;
    }                    

    
    var questionsArray = getQuestionsArray(questions, datesArray, monday, tuesday, wednesday, 
                                                thursday, friday, saturday, sunday, bufferTime, totalHours);

    var timesArray = getTimesArray(estimatedHours, datesArray, monday, tuesday, wednesday, 
                                        thursday, friday, saturday, sunday, bufferTime, totalHours);


    var data = [];
    for(var i = 0; i < datesArray.length; i++){
        data.push(createData(datesArray[i], questionsArray[i], timesArray[i]));
    }
    return data;
}

    class Breakdown extends React.Component {

    render() {
        const {classes} = this.props;

        return(
            <div className={classes.root}>
                <div>
                    {this.props.assignments.map(
                        ({className, name, worth, startDate, dueDate, dueTime, estimatedHours, questions, id}) => 
                        <Accordion key={id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Grid container justify="space-around" alignItems="center">
                                    <Grid item>
                                        <Typography className={classes.heading}>Class: {className}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.heading}>Name: {name}</Typography>
                                    </Grid>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell>Questions/ Sections to Complete</TableCell>
                                                <TableCell>Estimated Time Required (Hrs)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            
                                            {getRows(startDate, dueDate, dueTime, estimatedHours, questions, 
                                                        this.props.monday, this.props.tuesday, this.props.wednesday, 
                                                        this.props.thursday, this.props.friday, this.props.saturday, 
                                                        this.props.sunday, this.props.bufferTime).map( (row) => (
                                                <TableRow>
                                                        <TableCell component="th" scope="row">
                                                            {row.date.toLocaleString("en-CA", {dateStyle: 'full'})}
                                                        </TableCell>
                                                        <TableCell>{row.questions}</TableCell>
                                                        <TableCell>{row.time}</TableCell>
                                                    </TableRow>
                                            ))}
                                           
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    )}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(Breakdown);
