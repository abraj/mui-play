import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex'
  },
  collapse: {
    width: theme.spacing.unit * 40,
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 3,
    backgroundColor: 'pink',
    border: '1px solid red',
  },
});

class CollapseDemo extends Component {
  state = {
    checked: !false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div>
        <div className={classes.container}>
          <Typography variant="h6">{checked ? 'Collapse' : 'Collapsed'}</Typography>
          <Switch checked={checked} onChange={this.handleChange} />
        </div>
        <Collapse in={checked}>
          <div className={classes.collapse}>
            <Typography>Click switch to collapse this section.</Typography>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default withStyles(styles)(CollapseDemo);
