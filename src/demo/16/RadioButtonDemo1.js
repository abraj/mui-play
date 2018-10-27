import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
  checked: {},
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
};

class RadioButtonDemo extends Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { selectedValue } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
        />
        <Radio
          checked={selectedValue === 'b'}
          onChange={this.handleChange}
          value="b"
          color="primary"
          name="radio-button-demo"
        />
        <Radio
          checked={selectedValue === 'c'}
          onChange={this.handleChange}
          value="c"
          name="radio-button-demo"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
        <Radio
          checked={selectedValue === 'd'}
          onChange={this.handleChange}
          value="d"
          name="radio-button-demo"
          icon={<RadioButtonUncheckedIcon fontSize="small" />}
          checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
        />
      </div>
    );
  }
}

export default withStyles(styles)(RadioButtonDemo);
