import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    // width: 200,
  },
});

const currencies = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'BTC', label: '฿' },
  { value: 'JPY', label: '¥' },
];

class TextFieldDemo extends Component {
  state = {
    name: '',
    multiline: 'Initial Value',
    age: '',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { name, multiline, age, currency } = this.state;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-uncontrolled"
          label="Uncontrolled"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-name"
          label="Name"
          value={name}
          onChange={this.handleChange('name')}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-with-placeholder"
          label="Name"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-with-placeholder-shrink"
          label="Name"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-number"
          label="Number"
          type="number"
          value={age}
          onChange={this.handleChange('age')}
          className={classes.textField}
          margin="normal"

          // Ref: https://material-ui.com/demos/text-fields/#limitations
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          defaultValue="Search term"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          multiline
          id="standard-multiline-flexible"
          label="Multiline"
          rows="2"
          rowsMax="4"
          value={multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          helperText="This field can't be empty"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          helperText="This field is invalid"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          select
          id="standard-select-currency"
          label="Select"
          value={currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
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
          select
          id="standard-select-currency-native"
          label="Native select"
          value={currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          className={classes.textField}
          margin="normal"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </form>
    );
  }
}

export default withStyles(styles)(TextFieldDemo);
