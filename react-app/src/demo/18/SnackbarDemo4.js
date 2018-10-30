import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
    messageObj: {},
  };

  queue = [];

  handleOpen = (message) => () => {
    this.queue.push({
      message,
      key: new Date().getTime(),
    });

    if (this.state.open) {
      this.handleClose();
    } else {
      this.processQueue();
    }
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        open: true,
        messageObj: this.queue.shift(),
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const { message, key } = this.state.messageObj;

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
        <Typography variant="h6">Consecutive Snackbars</Typography>
        <Button onClick={this.handleOpen('snackbar1')}>Open Snackbar1</Button>
        <Button onClick={this.handleOpen('snackbar2')}>Open Snackbar2</Button>
        <Snackbar
          key={key}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          message={<span id="message-id">This is {message}.</span>}
          action={[ action1, action2 ]}
          onClose={this.handleClose}
          onExited={this.handleExited}
          autoHideDuration={5000}
        />

        <br /><br />
        <Typography variant="h6">Don't block the floating action button</Typography>
        <Typography><a href="https://material-ui.com/demos/snackbars/#don--39-t-block-the-floating-action-button">https://material-ui.com/demos/snackbars/#don--39-t-block-the-floating-action-button</a></Typography>

        <br /><br />
        <Typography variant="h6">Customized Snackbars</Typography>
        <Typography><a href="https://material-ui.com/demos/snackbars/#customized-snackbars">https://material-ui.com/demos/snackbars/#customized-snackbars</a></Typography>
      </div>
    );
  }
}

export default withStyles(styles)(SnackbarDemo);
