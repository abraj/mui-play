import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withRoot from './withRoot';
// import TypographyDemo from './demo/01/TypographyDemo';
// import { StylesDemo1, StylesDemo2, StylesDemo3 } from './demo/02';
// import IconsDemo from './demo/03/IconsDemo';
// import { GridDemo1, GridDemo2, GridDemo3, GridDemo4, GridDemo5, MediaQueryDemo } from './demo/04';
// import { ModalDemo, PopoverDemo1, PopoverDemo2, PopperDemo1, PopperDemo2 } from './demo/05';
// import { CollapseDemo, FadeDemo, GrowDemo, ZoomDemo, SlideDemo } from './demo/06';
// import { AppBarDemo01, AppBarDemo02, AppBarDemo03, AppBarDemo04, AppBarDemo11, AppBarDemo12, AppBarDemo13 } from './demo/07';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Typography variant="h4" gutterBottom>Material-UI</Typography>
          <Typography variant="subtitle1" gutterBottom>example project</Typography>
        </div>
        <hr />

        {/* <AppBarDemo13 /> */}
      </div>
    );
  }
}

export default withRoot(App);
