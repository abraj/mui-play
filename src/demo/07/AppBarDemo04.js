import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class AppBarDemo extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              AppBar (static)
            </Typography>
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

export default AppBarDemo;
