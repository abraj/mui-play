import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import withRoot from './withRoot';
// import { Todo } from './demo/99';
// import { TypographyDemo, PaperDemo, StylesDemo1, StylesDemo2, StylesDemo3 } from './demo/01';
// import { IconsDemo, AvatarDemo } from './demo/02';
// import { GridDemo1, GridDemo2, GridDemo3, GridDemo4, GridDemo5, MediaQueryDemo } from './demo/03';
// import { ListDemo1, ListDemo2, ListDemo3, ListDemo4, ListDemo5 } from './demo/04';
// import { ModalDemo, PopoverDemo1, PopoverDemo2, PopperDemo1, PopperDemo2, MenuDemo1, MenuDemo2, MenuDemo3 } from './demo/05';
// import { CollapseDemo, FadeDemo, GrowDemo, ZoomDemo, SlideDemo } from './demo/06';
// import { AppBarDemo01, AppBarDemo02, AppBarDemo03, AppBarDemo04, AppBarDemo11, AppBarDemo12, AppBarDemo13 } from './demo/07';
// import { BadgeDemo } from './demo/08';
// import { ButtonDemo, ButtonLinkDemo } from './demo/09';
// import { CardDemo1, CardDemo2, CardDemo3 } from './demo/10';
// import { ChipDemo } from './demo/11';
// import { DialogDemo1, DialogDemo2, DialogDemo3 } from './demo/12';
// import { DividerDemo1, DividerDemo2 } from './demo/13';
// import { DrawerDemo } from './demo/14';
// import { ProgressDemo1, ProgressDemo2, ProgressDemo3 } from './demo/15';
// import { CheckboxDemo1, CheckboxDemo2, RadioButtonDemo1, RadioButtonDemo2, SwitchDemo1, SwitchDemo2, SwitchDemo3, SwitchDemo4 } from './demo/16';
// import { SelectDemo1, SelectDemo2, SelectDemo3 } from './demo/17';
// import { SnackbarDemo1, SnackbarDemo2, SnackbarDemo3, SnackbarDemo4 } from './demo/18';
// import { TableDemo1, TableDemo2 } from './demo/19';
// import { TabDemo1, TabDemo2, TabDemo3, TabDemo4 } from './demo/20';
// import { TextFieldDemo1, TextFieldDemo2, TextFieldDemo3, TextFieldDemo4, TextFieldDemo5 } from './demo/21';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Typography variant="h4" gutterBottom>Material-UI</Typography>
          <Typography variant="subtitle1" gutterBottom>example project</Typography>
        </div>
        <hr />

        {/* <TextFieldDemo1 /> */}
      </div>
    );
  }
}

export default withRoot(App);
