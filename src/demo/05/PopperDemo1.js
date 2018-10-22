import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginLeft: 200,
  },
  popper: {
    padding: theme.spacing.unit * 2,
  },
});

class PopperDemo extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = (e) => {
    const { currentTarget } = e;
    this.setState(state => ({
      anchorEl: state.anchorEl ? null : currentTarget,
    }));
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <Button variant="outlined" onClick={this.handleClick}>Open Popper</Button>
        <Popper open={open} anchorEl={anchorEl} placement="right">
          <Paper className={classes.popper}>
            <Typography variant="h6">
              This is a popper
            </Typography>
            <Typography variant="subtitle1">
              Enjoy!
            </Typography>
          </Paper>
        </Popper>
      </div>
    );
  }
}

export default withStyles(styles)(PopperDemo);
