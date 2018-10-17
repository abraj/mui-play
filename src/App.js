import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import TypographyDemo from './demo/01/TypographyDemo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <div>
          <Typography variant="h4" gutterBottom>Material-UI</Typography>
          <Typography variant="subtitle1" gutterBottom>example project</Typography>
        </div>
        <hr />
        {/* <TypographyDemo /> */}
      </Fragment>
    );
  }
}

export default App;
