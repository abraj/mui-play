import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import withRoot from './withRoot';
// import TypographyDemo from './demo/01/TypographyDemo';
// import { StylesDemo1, StylesDemo2, StylesDemo3 } from './demo/02';
// import IconsDemo from './demo/03/IconsDemo';
// import { GridDemo1, GridDemo2, GridDemo3, GridDemo4, GridDemo5, MediaQueryDemo } from './demo/04';
// import ModalDemo from './demo/05/ModalDemo';
// import { CollapseDemo, FadeDemo, GrowDemo, ZoomDemo, SlideDemo } from './demo/06';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Typography variant="h4" gutterBottom>Material-UI</Typography>
          <Typography variant="subtitle1" gutterBottom>example project</Typography>
        </div>
        <hr />

        {/* <CollapseDemo />

        <hr />
        <FadeDemo />

        <hr />
        <GrowDemo />

        <hr />
        <ZoomDemo />

        <hr />
        <SlideDemo /> */}

      </Fragment>
    );
  }
}

export default withRoot(App);
