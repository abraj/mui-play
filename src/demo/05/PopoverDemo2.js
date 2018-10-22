import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginLeft: 200,
    display: 'flex',
  },
  popover: {
    padding: theme.spacing.unit,
  },
});

class PopoverDemo extends Component {
  state = {
    anchorEl: null,
  };

  handleOpen = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <Typography
          variant="h6"
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
        >
          Hover to open Popover
        </Typography>
        <Popover
          open={open}
          onClose={this.handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          style={{ pointerEvents: 'none' }}
          disableRestoreFocus
        >
          <div className={classes.popover}>
            <Typography variant="h6">
              This is a popover
            </Typography>
            <Typography variant="subtitle1">
              Enjoy!
            </Typography>
          </div>
        </Popover>
      </div>
    );
  }
}

export default withStyles(styles)(PopoverDemo);
