import React, { useRef, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";

const useStyles = (theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
});

const Preferences = (props) => {
 
  const { classes } = props;

  return (
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
              value={props.availability.monday}
              onChange={(e) => props.onAvailabilityChange(e.target.id, e.target.value)}
            />
            <TextField
              id="tuesday"
              label="Tuesday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability.tuesday}
              onChange={(e) => props.onAvailabilityChange(e.target.id, e.target.value)}

            />
            <TextField
              id="wednesday"
              label="Wednesday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability.wednesday}
              onChange={(e) => props.onAvailabilityChange(e.target.id, e.target.value)}
            />
            <TextField
              id="thursday"
              label="Thursday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability.thursday}
              onChange={(e) => props.onAvailabilityChange(e.target.id, e.target.value)}
            />
            <TextField
              id="friday"
              label="Friday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability.friday}
              onChange={(e) => props.onAvailabilityChange(e.target.id, e.target.value)}
            />
            <TextField
              id="saturday"
              label="Saturday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability.saturday}
              onChange={(e) => props.onAvailabilityChange(e.target.id, e.target.value)}
            />
            <TextField
              id="sunday"
              label="Sunday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability.sunday}
              onChange={(e) => props.onAvailabilityChange(e.target.id, e.target.value)}
            />
          </form>
        </Grid>
        {/*<Button type="submit" variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
         <Grid item>
          <Typography>
            Please enter how much buffer time you would like for each
            assignment:
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
          <Typography>Please choose minimum work session time:</Typography>
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
        </Grid> */}
      </Grid>
{/* 
      <br />

      <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogContent>
          <DialogContentText>
            Your preferences have been saved
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog> */}
    </Paper>
  );
};

export default withStyles(useStyles)(Preferences);
