import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
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

const currencies = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' },
];

class SampleDemo extends Component {
  state = {
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { currency } = this.state;

    return (
      <Fragment>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            variant="outlined"
            id="standard-name-outlined"
            label="Name"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            variant="outlined"
            id="standard-name-outlined-shrink"
            label="Name"
            className={classes.textField}
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            error
            variant="outlined"
            id="standard-error-outlined"
            label="Error"
            defaultValue="Hello World"
            helperText="This field is invalid"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            multiline
            variant="outlined"
            id="standard-multiline-flexible"
            label="Multiline"
            rows="2"
            rowsMax="4"
            defaultValue="Initial Value"
            className={classes.textField}
            margin="normal"
          />

          <TextField
            select
            variant="outlined"
            id="standard-select-currency"
            label="Select"
            value={currency}
            onChange={this.handleChange('currency')}
            helperText="Please select your currency"
            className={classes.textField}
            margin="normal"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            variant="outlined"
            id="outlined-full-width"
            label="Label"
            placeholder="Placeholder"
            helperText="Rest of full width! (Using flexGrow)"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            style={{ flexGrow: 1, marginLeft: 8, marginRight: 8 }}
          />
        </form>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            variant="outlined"
            id="outlined-dense"
            label="Dense"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />

          <div style={{ flexGrow: 1, marginLeft: 8, marginRight: 8 }}>
            <TextField
              fullWidth
              variant="outlined"
              id="outlined-full-width"
              label="Label"
              placeholder="Placeholder"
              helperText="Rest of full width! (Using fullWidth in flexGrow div)"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SampleDemo);
