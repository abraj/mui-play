import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    display: 'flex',
  },
  searchIcon: {
    margin: theme.spacing.unit * 0.6,
    height: '100%',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: 120,
    '&:focus': {
      width: 200,
    },
  },
});

class AppBarDemo extends Component {
  render() {
    const { classes } = this.props;

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

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

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
