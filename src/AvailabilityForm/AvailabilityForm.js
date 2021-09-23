import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
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

const AvailabilityForm = (props) => {
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
              id="1"
              label="Monday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability[1]}
              onChange={(e) =>
                props.onAvailabilityChange(e.target.id, e.target.value)
              }
            />
            <TextField
              id="2"
              label="Tuesday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability[2]}
              onChange={(e) =>
                props.onAvailabilityChange(e.target.id, e.target.value)
              }
            />
            <TextField
              id="3"
              label="Wednesday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability[3]}
              onChange={(e) =>
                props.onAvailabilityChange(e.target.id, e.target.value)
              }
            />
            <TextField
              id="4"
              label="Thursday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability[4]}
              onChange={(e) =>
                props.onAvailabilityChange(e.target.id, e.target.value)
              }
            />
            <TextField
              id="5"
              label="Friday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability[5]}
              onChange={(e) =>
                props.onAvailabilityChange(e.target.id, e.target.value)
              }
            />
            <TextField
              id="6"
              label="Saturday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability[6]}
              onChange={(e) =>
                props.onAvailabilityChange(e.target.id, e.target.value)
              }
            />
            <TextField
              id="0"
              label="Sunday"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={props.availability[0]}
              onChange={(e) =>
                props.onAvailabilityChange(e.target.id, e.target.value)
              }
            />
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(useStyles)(AvailabilityForm);
