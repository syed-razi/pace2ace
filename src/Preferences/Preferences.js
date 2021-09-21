import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';



const useStyles = (theme) => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            },
        },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        },
});

class Preferences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monday: "",
            tuesday: "",
            wednesday: "",
            thursday: "",
            friday: "",
            saturday: "",
            sunday: "",
            bufferTime: "",
            minWorkTime: "",
            open: false
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id] : event.target.value });
        
    }

    handleSave = () => {
        this.props.onSave(
            parseInt(this.state.monday),
            parseInt(this.state.tuesday),
            parseInt(this.state.wednesday),
            parseInt(this.state.thursday),
            parseInt(this.state.friday),
            parseInt(this.state.saturday),
            parseInt(this.state.sunday),
            parseInt(this.state.bufferTime),
            parseInt(this.state.minWorkTime)
        );
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { classes } = this.props;

        return(
            <Paper className={classes.paper}>
                
                    <Grid container justify="center" alignItems="center" direction="column">
                        <Grid item>
                            <Typography>
                            Please enter your estimated free time per day (hours):
                            </Typography>
                        </Grid>
                        <Grid item>
                            <form className={classes.form} noValidate autoComplete="off">
                                <TextField
                                    id="monday"
                                    label="Monday"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.monday}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    id="tuesday"
                                    label="Tuesday"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.tuesday}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    id="wednesday"
                                    label="Wednesday"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.wednesday}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    id="thursday"
                                    label="Thursday"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.thursday}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    id="friday"
                                    label="Friday"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.friday}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    id="saturday"
                                    label="Saturday"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.saturday}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    id="sunday"
                                    label="Sunday"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.sunday}
                                    onChange={this.handleChange}
                                />
                            </form>
                        </Grid>
                        <Grid item>
                            <Typography>
                                Please enter how much buffer time you would like for each assignment:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <form className={classes.form} noValidate autoComplete="off">
                                <TextField
                                    id="bufferTime"
                                    label="Buffer Time"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.bufferTime}
                                    onChange={this.handleChange}
                                />
                            </form>
                        </Grid>
                        <Grid item>
                        
                            <Typography>
                                Please choose minimum work session time:
                            </Typography>
                       
                        </Grid>
                        <Grid item>
                            <form className={classes.form} noValidate autoComplete="off">
                                <TextField
                                    id="minWorkTime"
                                    label="Minimum Work Session Time"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={this.state.minWorkTime}
                                    onChange={this.handleChange}
                                />
                            </form>
                        
                        </Grid>
                    </Grid>
                    
                    
                    
                    
                    
                    <br />
                    <Button variant="contained" color="primary" onClick={this.handleSave}>
                        Save
                    </Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        
                        <DialogContent>
                            <DialogContentText >
                                Your preferences have been saved
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                
            </Paper>
            
        );
    }
    
}

export default withStyles(useStyles)(Preferences);