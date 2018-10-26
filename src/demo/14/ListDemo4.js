import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import remy from '../images/remy.jpg';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: 20,
  },
});

class ListDemo extends Component {
  state = {
    checked: [1, 4],
  };

  handleToggle = (value) => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List>
          {[0, 1, 2, 3, 4].map(value => (
            <ListItem key={value} dense button>
              <Avatar alt="Remy Sharp" src={remy} />
              <ListItemText primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={() => this.handleToggle(value)}
                  checked={this.state.checked.indexOf(value) !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(ListDemo);
