import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  checked: {},
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  love: {
    color: red[600],
    '&$checked': {
      color: red[500],
    },
  },

  formGroup: {
    marginLeft: 8,
  }
};

class CheckboxDemo extends Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedH: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Checkbox
          checked={this.state.checkedA}
          onChange={this.handleChange('checkedA')}
          value="checkedA"
        />
        <Checkbox
          checked={this.state.checkedB}
          onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
        <Checkbox
          checked={this.state.checkedC}
          onChange={this.handleChange('checkedC')}
          value="checkedC"
          style={{ color: purple[500] }}
          indeterminate
        />
        <Checkbox value="checkedD" />
        <Checkbox disabled value="checkedE" />
        <Checkbox disabled checked value="checkedF" />

        <br/>
        <FormGroup row className={classes.formGroup}>
          <FormControlLabel
            control={
              <Checkbox
                value="checkedG"
                classes={{ root: classes.root, checked: classes.checked }}
              />
            }
            label="Custom color"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkedH}
                onChange={this.handleChange('checkedH')}
                value="checkedH"
                classes={{ root: classes.love, checked: classes.checked }}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
              />
            }
            label="Custom icon"
          />

          <FormControlLabel
            control={
              <Checkbox
                value="checkedI"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            }
            label="Custom size"
          />
        </FormGroup>

      </div>
    );
  }
}

export default withStyles(styles)(CheckboxDemo);
