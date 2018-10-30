import React, {Fragment} from 'react';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  formControl: {
    margin: theme.spacing.unit * 5,
  },
});

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

class InputAdornments extends React.Component {
  state = {
    variant: 'standard',
    weightRange: '',
    password: '',
    showPassword: false,
  };

  handleVariant = event => {
    this.setState({ variant: event.target.value });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    const { variant } = this.state;

    const RenderInputAdornments = (props) => (
      <div className={classes.root}>
        <TextField
          {...props}
          label="Amount"
          id="adornment-amount"
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          {...props}
          id="adornment-weight"
          className={classNames(classes.margin, classes.textField, (props.variant === 'standard' ? classes.withoutLabel : ''))}
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
          helperText="Weight"
        />

        <TextField
          select
          {...props}
          label="Select Weight"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.weightRange}
          onChange={this.handleChange('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          {...props}
          label="Password"
          id="adornment-password"
          type={this.state.showPassword ? 'text' : 'password'}
          value={this.state.password}
          onChange={this.handleChange('password')}
          className={classNames(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={this.handleClickShowPassword}>
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    );

    return (
      <Fragment>
        <RenderInputAdornments variant={variant} />

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Choose variant</FormLabel>
          <RadioGroup
            name="variant"
            value={variant}
            onChange={this.handleVariant}
          >
            <FormControlLabel value="standard" control={<Radio />} label="Standard (Default)" />
            <FormControlLabel value="outlined" control={<Radio />} label="Outlined" />
            <FormControlLabel value="filled" control={<Radio />} label="Filled" />
          </RadioGroup>
        </FormControl>
      </Fragment>
    );
  }
}

export default withStyles(styles)(InputAdornments);
