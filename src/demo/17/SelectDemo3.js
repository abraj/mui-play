import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class ControlledOpenSelect extends React.Component {
  state = {
    age: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography variant="h6">Multiple Select</Typography>
        <Typography><a href="https://material-ui.com/demos/selects/#multiple-select">https://material-ui.com/demos/selects/#multiple-select</a></Typography>

        <br /><br />
        <Typography variant="h6">Controlled open Select</Typography>
        <form autoComplete="off">
          <Button className={classes.button} onClick={this.handleOpen}>
            Open the select
          </Button>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.age}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(ControlledOpenSelect);
