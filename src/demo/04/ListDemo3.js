import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: 20,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 5,
  },
});

class ListDemo extends Component {
  state = {
    open: false,
  };

  toggleNestedList = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.toggleNestedList}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Inbox" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText inset primary="Starred" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText inset primary="Important" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent mail" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Drafts" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(ListDemo);
