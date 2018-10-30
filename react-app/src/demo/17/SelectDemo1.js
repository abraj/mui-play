import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
    labelWidth: 0,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  render() {
    const { classes } = this.props;
    const { age, labelWidth } = this.state;

    return (
      <Fragment>
        <Typography variant="h6">Simple Select</Typography>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              value={age}
              onChange={this.handleChange('age')}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={ref => { this.InputLabelRef = ref }} htmlFor="outlined-age-simple">Age</InputLabel>
            <Select
              value={age}
              onChange={this.handleChange('age')}
              input={
                <OutlinedInput
                  labelWidth={labelWidth}
                  name="age"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
            <FormHelperText>Outlined select</FormHelperText>
          </FormControl>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(SelectDemo);
