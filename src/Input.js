import React from 'react';
import CreateAssignment from './CreateAssignment';
import AssignmentDetails from './AssignmentDetails';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const useStyles =(theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: theme.palette.secondary.light,

      },
  });

class Input extends React.Component {

    handleAddAssignment(className, name, worth, startDate, dueDate, dueTime, estimatedHours, questions) {
        this.props.onAddAssignment(className, name, worth, startDate, dueDate, dueTime, estimatedHours, questions);
    }

    handleDeleteAssignment(aID) {
        this.props.onDeleteAssignment(aID);
    }

    handleEditAssignment(aID) {
        this.props.onEditAssignment(aID);
    }

    render() {
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <AssignmentDetails 
                                assignments={this.props.assignments}
                                onDeleteAssignment={this.handleDeleteAssignment.bind(this)}
                                //onEditAssignment={this.handleEditAssignment.bind(this)}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <CreateAssignment 
                                onAddAssignment={this.handleAddAssignment.bind(this)}
                                //editItem={this.props.editItem}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(Input);