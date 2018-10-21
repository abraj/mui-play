import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import withRoot from './withRoot';
// import TypographyDemo from './demo/01/TypographyDemo';
// import { StylesDemo1, StylesDemo2, StylesDemo3 } from './demo/02';

class App extends Component {
  render() {    
    return (
      <Fragment>
        <div>
          <Typography variant="h4" gutterBottom>Material-UI</Typography>
          <Typography variant="subtitle1" gutterBottom>example project</Typography>
        </div>
        <hr />
        {/* <StylesDemo1 /><br />
        <StylesDemo2 /><br />
        <StylesDemo3 /><br /> */}
      </Fragment>
    );
  }
}

export default withRoot(App);
