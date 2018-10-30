import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 16,
  },
});

class SampleDemo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          variant="filled"
          id="standard-name-filled"
          label="Name"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          variant="filled"
          id="standard-name-filled-shrink"
          label="Name"
          className={classes.textField}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          error
          variant="filled"
          id="standard-error-filled"
          label="Error"
          defaultValue="Hello World"
          helperText="This field is invalid"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          multiline
          variant="filled"
          id="standard-multiline-flexible"
          label="Multiline"
          rows="2"
          rowsMax="4"
          defaultValue="Initial Value"
          className={classes.textField}
          margin="normal"
        />
      </form>
    );
  }
}

export default withStyles(styles)(SampleDemo);
