import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    width: 210,
    margin: 20,
  }
};

class MenuDemo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.paper}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText inset primary="Sent mail" />
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText inset primary="Drafts" />
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText inset primary="Inbox" />
            </MenuItem>
          </MenuList>
        </Paper>

        <br /><br />
        <Typography variant="h6">MenuList composition</Typography>
        <Typography><a href="https://material-ui.com/demos/menus/#menulist-composition">https://material-ui.com/demos/menus/#menulist-composition</a></Typography>
      </div>
    );
  }
}

export default withStyles(styles)(MenuDemo);
