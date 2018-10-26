import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  modal: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: theme.spacing.unit * 50,
    padding: theme.spacing.unit * 3,

    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    textAlign: 'center',
  },
});

class ModalDemo extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="outlined" onClick={this.handleOpen}>Open Modal</Button>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div className={classes.modal}>
            <Typography variant="h6">
              This is a modal
            </Typography>
            <Typography variant="subtitle1">
              Enjoy the experience!
            </Typography>
            <br />
            <Button variant="outlined" onClick={this.handleClose}>Close</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(ModalDemo);
