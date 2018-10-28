import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class SelectDemo extends Component {
  state = {
    age: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { age } = this.state;

    return (
      <Fragment>
        <Typography variant="h6">Native Select</Typography>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Age</InputLabel>
          <Select
            native
            value={age}
            onChange={this.handleChange('age')}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <option value="" />
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Age</InputLabel>
          <NativeSelect
            value={age}
            onChange={this.handleChange('age')}
            input={<Input name="age" id="age-native-helper" />}
          >
            <option value="" />
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </NativeSelect>
          <FormHelperText>Using &lt;NativeSelect&gt;</FormHelperText>
        </FormControl>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SelectDemo);
