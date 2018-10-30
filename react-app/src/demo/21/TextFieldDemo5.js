import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
});

class SampleDemo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <br />
        <Typography variant="h6">Formatted inputs</Typography>
        <Typography><a href="https://material-ui.com/demos/text-fields/#formatted-inputs">https://material-ui.com/demos/text-fields/#formatted-inputs</a></Typography>

        <br /><br />
        <Typography variant="h6">Customized inputs</Typography>
        <Typography><a href="https://material-ui.com/demos/text-fields/#customized-inputs">https://material-ui.com/demos/text-fields/#customized-inputs</a></Typography>

        <br /><br />
        <Typography variant="h6">Input fields with Icon</Typography>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="TextField startAdornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />

        <br /><br />
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <AccountCircleIcon />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Grid Icon" />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SampleDemo);
