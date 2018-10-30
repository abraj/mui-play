import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const emails = ['username@gmail.com', 'user02@gmail.com'];

class DialogDemo extends Component {
  state = {
    open: false,
    selectedValue: emails[0],
  };

  handleDialogOpen = () => {
    this.setState({ open: true });
  };

  handleDialogClose = (value) => {
    const more = value ? {selectedValue: value} : {};
    this.setState({ open: false, ...more });
  };

  handleListItemClick = value => {
    this.handleDialogClose(value);
  };

  render() {
    return (
      <div>
        <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
        <br />
        <Button onClick={() => this.handleDialogOpen()}>Open simple dialog</Button>

        <Dialog onClose={() => this.handleDialogClose()} open={this.state.open}>
          <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
          <div>
            <List>
              {emails.map(email => (
                <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email} />
                </ListItem>
              ))}
              <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
                <ListItemAvatar>
                  <Avatar>
                    <AddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="add account" />
              </ListItem>
            </List>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default DialogDemo;
