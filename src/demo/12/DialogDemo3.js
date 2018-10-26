import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class DialogDemo extends Component {
  state = {
    open: false,
  };

  handleDialogOpen = () => {
    this.setState({ open: true });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <br />
        <Typography variant="h6">Confirmation dialogs</Typography>
        <Typography><a href="https://material-ui.com/demos/dialogs/#confirmation-dialogs">https://material-ui.com/demos/dialogs/#confirmation-dialogs</a></Typography>

        <br />
        <Typography variant="h6">Form dialogs</Typography>
        <Typography><a href="https://material-ui.com/demos/dialogs/#form-dialogs">https://material-ui.com/demos/dialogs/#form-dialogs</a></Typography>

        <br />
        <Typography variant="h6">Full-screen dialogs</Typography>
        <Typography><a href="https://material-ui.com/demos/dialogs/#full-screen-dialogs">https://material-ui.com/demos/dialogs/#full-screen-dialogs</a></Typography>

        <br /><br />
        <Button onClick={this.handleDialogOpen}>Open responsive full-screen dialog</Button>

        <Dialog fullScreen={fullScreen} open={this.state.open} onClose={this.handleDialogClose}>
          <DialogTitle id="responsive-dialog-title">Use Google's location service?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="secondary">
              Disagree
            </Button>
            <Button onClick={this.handleDialogClose} color="secondary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withMobileDialog({breakpoint: 'xs'})(DialogDemo);
