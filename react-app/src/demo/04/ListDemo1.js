import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: 20,
  },
});

function ListItemLink1(props) {
  return <ListItem button component="a" {...props} />;
}

// Reference: https://material-ui.com/guides/composition/#react-router
function ListItemLink2(props) {
  const { to, ...rest } = props;  // `rest` contains children!
  return <ListItem button component={Link} to={to} {...rest} />;
}

class ListDemo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />

        <List component="nav">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>

          <ListItemLink1 href="#simple-link">
            <ListItemText primary="Simple Link" />
          </ListItemLink1>

          <ListItemLink2 to="/react-router-link">
            <ListItemText primary="React router Link" />
          </ListItemLink2>

        </List>
      </div>
    );
  }
}

export default withStyles(styles)(ListDemo);
