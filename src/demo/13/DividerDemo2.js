import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    maxWidth: 360,
    margin: 20,
  },
});

class DividerDemo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography variant="h6">Inset Dividers</Typography>
        <Paper className={classes.root}>
          <List>
            <ListItem>
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <li><Divider inset /></li>

            <ListItem>
              <Avatar>
                <WorkIcon />
              </Avatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider inset component="li" />

            <ListItem>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(DividerDemo);
