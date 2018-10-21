import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import withRoot from './withRoot';
import Button from '@material-ui/core/Button';
// import TypographyDemo from './demo/01/TypographyDemo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Typography variant="h4" gutterBottom>Material-UI</Typography>
          <Typography variant="subtitle1" gutterBottom>example project</Typography>
        </div>
        <hr />
        <div>
          <Button variant="contained" color="primary">Primary</Button>{' '}
          <Button variant="contained" color="secondary">Secondary</Button>{' '}
        </div>
      </Fragment>
    );
  }
}

export default withRoot(App);
