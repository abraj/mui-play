import React, { Component } from 'react';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import pink from '@material-ui/core/colors/pink';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { withStyles } from '@material-ui/core/styles';
import remy from '../images/remy.jpg';
import uxceo from '../images/uxceo-128.jpg';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  iconAvatar: {
    color: '#fff',
    backgroundColor: pink[500],
  },
  orangeAvatar: {
    color: '#fff',
    backgroundColor: deepOrange[500],
  }
};

class AvatarDemo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        <Avatar alt="Remy Sharp" src={remy} className={classes.avatar} />
        <Avatar
          alt="Adelle Charles"
          src={uxceo}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <Avatar className={classNames(classes.avatar, classes.iconAvatar)}>
          <Icon className='fa fa-user' />
        </Avatar>
        <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>Y</Avatar>
      </div>
    );
  }
}

export default withStyles(styles)(AvatarDemo);
