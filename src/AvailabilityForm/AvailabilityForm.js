import React from "react";
import { TextField, Typography, Grid, Stack } from "@mui/material";

const AvailabilityForm = (props) => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={3}>
      <Typography>
        Please enter your estimated free time per day (hours):
      </Typography>
      <form noValidate autoComplete="off">
        <Stack spacing={3} alignItems="center">
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
          </Grid>
          <Stack direction="row" spacing={3}>
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
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default AvailabilityForm;
