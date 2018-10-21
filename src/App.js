import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import withRoot from './withRoot';
// import TypographyDemo from './demo/01/TypographyDemo';
// import { StylesDemo1, StylesDemo2, StylesDemo3 } from './demo/02';
// import IconsDemo from './demo/03/IconsDemo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Typography variant="h4" gutterBottom>Material-UI</Typography>
          <Typography variant="subtitle1" gutterBottom>example project</Typography>
        </div>
        <hr />
        {/* <IconsDemo /> */}
      </Fragment>
    );
  }
}

export default withRoot(App);
