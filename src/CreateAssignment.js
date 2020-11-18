import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CreateQuestion from './CreateQuestion';
import Questions from './Questions'
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
      },
    paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
        },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            },
        },
    addIcon: {
        padding: theme.spacing(1),
    }
});




class CreateAssignment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "", 
            name: "", 
            worth: "", 
            startDate: new Date(), 
            dueDate: new Date(new Date().setHours(23, 59, 59)),
            estimatedHours: "",
            questions: [],
        }
    }

    handleAddQuestion(question, marks, id) {
        this.setState({
            questions: [...this.state.questions,
                {question: question, marks: marks, id: id}]
        })
    }

    handleDeleteQuestion(qID) {
        this.setState({
            questions: this.state.questions.filter( ({id}) => id != qID )
          });
    }

    handleAddAssignment() {
        this.props.onAddAssignment(
            this.state.className,
            this.state.name,
            this.state.worth,
            this.state.startDate.toLocaleDateString(),
            this.state.dueDate.toLocaleDateString(),
            this.state.dueDate.toLocaleTimeString(),
            parseInt(this.state.estimatedHours),
            this.state.questions, //.map( (e) => {return JSON.stringify(e)}),
            //this.state.id
        );
        this.setState({
            className: "", 
            name: "", 
            worth: "", 
            startDate: new Date(), 
            dueDate: new Date(new Date().setHours(23, 59, 59)),
            estimatedHours: "",
            questions: [],
            //id: prevState.id + 1
        });
    }

    render() {
        const { classes } = this.props;

        return (
            
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <form className={classes.form} noValidate autoComplete="off">
                                <TextField 
                                    id="standard-basic" 
                                    label="Class" 
                                    value={this.state.className}
                                    onChange={(e) => this.setState({ className: e.target.value })}
                                    /> 
                                <TextField 
                                    id="standard-basic" 
                                    label="Name" 
                                    value={this.state.name}
                                    onChange={(e) => this.setState({ name: e.target.value })}
                                    /> 
                                <TextField
                                    id="standard-number"
                                    label="% Worth"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.worth}
                                    onChange={(e) => this.setState({ worth: e.target.value })}
                                /> 
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Start Date"
                                        value={this.state.startDate}
                                        onChange={(newStartDate) => this.setState({ startDate: newStartDate })}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="End Date"
                                        value={this.state.dueDate}
                                        onChange={(newDueDate) => this.setState({ dueDate: newDueDate })}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Due time"
                                        value={this.state.dueDate}
                                        onChange={(newDueDate) => this.setState({ dueDate: newDueDate })}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <TextField
                                    id="standard-number"
                                    label="Estimated Hours"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.estimatedHours}
                                    onChange={(e) => this.setState({ estimatedHours: e.target.value })}
                                /> 
                                
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Questions 
                                questions={this.state.questions}
                                onDeleteQuestion={this.handleDeleteQuestion.bind(this)}
                                />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <CreateQuestion 
                                onAddQuestion={this.handleAddQuestion.bind(this)}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Fab  variant="extended" onClick={this.handleAddAssignment.bind(this)}>
                                <AddIcon className={classes.addIcon}/>
                                Add Assignment
                            </Fab>
                        </Paper>
                    </Grid>
                </Grid>
                
            </div>
            
        );
    }
}

export default withStyles(useStyles)(CreateAssignment);