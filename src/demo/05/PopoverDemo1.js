import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    marginLeft: 200,
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
        <Button variant="outlined" onClick={this.handleOpen}>Open Popover</Button>
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
