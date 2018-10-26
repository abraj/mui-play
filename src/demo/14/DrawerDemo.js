import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  list: {
    width: 250,
  },
};

class DrawerDemo extends Component {
  state = {
    open: false,
  };

  openDrawer = () => {
    this.setState({ open: true});
  };

  closeDrawer = () => {
    this.setState({ open: false});
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (
      <div>
        <br />
        <Typography variant="h6">Temporary drawer</Typography>
        <Typography><a href="https://material-ui.com/demos/drawers/#temporary-drawer">https://material-ui.com/demos/drawers/#temporary-drawer</a></Typography>

        <br /><br />
        <Button onClick={this.openDrawer}>Open Swipeable Drawer</Button>

        <SwipeableDrawer
          open={this.state.open}
          onOpen={this.openDrawer}
          onClose={this.closeDrawer}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeDrawer}
            onKeyDown={this.closeDrawer}
          >
            {sideList}
          </div>
        </SwipeableDrawer>

        <br /><br />
        <Typography variant="h6">Responsive drawer</Typography>
        <Typography><a href="https://material-ui.com/demos/drawers/#responsive-drawer">https://material-ui.com/demos/drawers/#responsive-drawer</a></Typography>

        <br />
        <Typography variant="h6">Permanent drawer: Clipped under the app bar</Typography>
        <Typography><a href="https://material-ui.com/demos/drawers/#clipped-under-the-app-bar">https://material-ui.com/demos/drawers/#clipped-under-the-app-bar</a></Typography>

        <br />
        <Typography variant="h6">Persistent drawer</Typography>
        <Typography><a href="https://material-ui.com/demos/drawers/#persistent-drawer">https://material-ui.com/demos/drawers/#persistent-drawer</a></Typography>

      </div>
    );
  }
}

export default withStyles(styles)(DrawerDemo);
