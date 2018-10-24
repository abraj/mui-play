import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class AppBarDemo extends Component {
  state = {
    accountAnchorEl: null,
  };

  handleAccountMenuOpen = (e) => {
    this.setState({ accountAnchorEl: e.currentTarget });
  };

  handleAccountMenuClose = () => {
    this.setState({ accountAnchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { accountAnchorEl } = this.state;
    const accountOpen = Boolean(accountAnchorEl);

    const renderAccountMenu = (
      <Menu
        id="menu-appbar"
        open={accountOpen}
        onClose={this.handleAccountMenuClose}
        anchorEl={accountAnchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={this.handleAccountMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleAccountMenuClose}>My account</MenuItem>
      </Menu>
    );

    return (
      <Fragment>
        <AppBar position="sticky" color="secondary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              AppBar
            </Typography>

            <div className={classes.grow} />

            <div>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={this.handleAccountMenuOpen} color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderAccountMenu}

        <br /><br /><br /><br />dummy content<br /><br /><br /><br />
        <br /><br /><br /><br />dummy content<br /><br /><br /><br />
        <br /><br /><br /><br />dummy content<br /><br /><br /><br />
        <br /><br /><br /><br />dummy content<br /><br /><br /><br />
        <br /><br /><br /><br />dummy content<br /><br /><br /><br />
        <br /><br /><br /><br />dummy content<br /><br /><br /><br />
        <br /><br /><br /><br />dummy content<br /><br /><br /><br />
      </Fragment>
    );
  }
}

export default withStyles(styles)(AppBarDemo);
