import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';




const useStyles = (theme) => ({
    root: {
    },
    button: {
        margin: theme.spacing(1),
    }
  });

 class AssignmentDetails extends React.Component {

    handleDeleteAssignment = (id) => (event) => {
        event.stopPropagation();
        this.props.onDeleteAssignment(id);
    }

    // handleEditAssignment = (id) => (event) => {
    //     event.stopPropagation();
    //     this.props.onEditAssignment(id);
    // }

    render() {
        const {classes} = this.props;

        return(
            <div className={classes.root}>
                <Typography variant="h6" gutterBottom>
                    Input Assignment Details Below to add an Assignment
                </Typography>
                <div>
                    {this.props.assignments.map(
                        ({className, name, worth, startDate, dueDate, dueTime, estimatedHours, questions, id}) => 
                        <Accordion key={id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Grid container justify="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography className={classes.heading}>{className}</Typography>
                                    </Grid>
                                    <Grid item>
                                        {/* <Button
                                            variant="contained"
                                            startIcon={<EditIcon />}
                                            className={classes.button}
                                            onClick={this.handleEditAssignment(id)}
                                            onFocus={(event) => event.stopPropagation()}
                                        >
                                            Edit
                                        </Button> */}
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<DeleteIcon />}
                                            className={classes.button}
                                            onClick={this.handleDeleteAssignment(id)}
                                            onFocus={(event) => event.stopPropagation()}
                                        >
                                        Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container justify="center" alignItems="center">
                                    <Grid item>
                                        <Typography>
                                            {/* id: {id} <br /> */}
                                            Assignment Name: {name} <br />
                                            Worth: {worth} <br />
                                            Start Date: {startDate} <br />
                                            Due Date: {dueDate} <br />
                                            Due Time: {dueTime} <br />
                                            Estimated Hours: {estimatedHours} <br />
                                            {/* questions: {JSON.stringify(questions)} */}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                
                            </AccordionDetails>
                            
                            
                        </Accordion>
                    )}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(AssignmentDetails);
