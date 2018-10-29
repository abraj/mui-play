import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SnackbarDemo extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    // reason: 'timeout', close
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    const action1 = (
      <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
        UNDO
      </Button>
    );

    const action2 = (
      <IconButton
        key="close"
        color="inherit"
        onClick={this.handleClose}
        className={classes.close}
      >
        <CloseIcon />
      </IconButton>
    );

    return (
      <div>
        <Button onClick={this.handleOpen}>Open fading snackbar</Button>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          onClose={this.handleClose}
          message={<span id="message-id">This is a fading snackbar.</span>}
          action={[ action1, action2 ]}
          autoHideDuration={5000}
          TransitionComponent={Fade}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SnackbarDemo);
