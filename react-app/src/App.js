import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import withRoot from './withRoot';
import { withStyles } from '@material-ui/core/styles';

import Home from './Home';
import { NotDone } from './demo/99';
import { TypographyDemo, PaperDemo, StylesDemo1, StylesDemo2, StylesDemo3 } from './demo/01';
import { IconsDemo, AvatarDemo } from './demo/02';
import { GridDemo1, GridDemo2, GridDemo3, GridDemo4, GridDemo5, MediaQueryDemo } from './demo/03';
import { ListDemo1, ListDemo2, ListDemo3, ListDemo4, ListDemo5 } from './demo/04';
import { ModalDemo, PopoverDemo1, PopoverDemo2, PopperDemo1, PopperDemo2, MenuDemo1, MenuDemo2, MenuDemo3 } from './demo/05';
import { CollapseDemo, FadeDemo, GrowDemo, ZoomDemo, SlideDemo } from './demo/06';
import { AppBarDemo01, AppBarDemo02, AppBarDemo03, AppBarDemo04, AppBarDemo11, AppBarDemo12, AppBarDemo13 } from './demo/07';
import { BadgeDemo } from './demo/08';
import { ButtonDemo, ButtonLinkDemo } from './demo/09';
import { CardDemo1, CardDemo2, CardDemo3 } from './demo/10';
import { ChipDemo } from './demo/11';
import { DialogDemo1, DialogDemo2, DialogDemo3 } from './demo/12';
import { DividerDemo1, DividerDemo2 } from './demo/13';
import { DrawerDemo } from './demo/14';
import { ProgressDemo1, ProgressDemo2, ProgressDemo3 } from './demo/15';
import { CheckboxDemo1, CheckboxDemo2, RadioButtonDemo1, RadioButtonDemo2, SwitchDemo1, SwitchDemo2, SwitchDemo3, SwitchDemo4 } from './demo/16';
import { SelectDemo1, SelectDemo2, SelectDemo3 } from './demo/17';
import { SnackbarDemo1, SnackbarDemo2, SnackbarDemo3, SnackbarDemo4 } from './demo/18';
import { TableDemo1, TableDemo2 } from './demo/19';
import { TabDemo1, TabDemo2, TabDemo3, TabDemo4 } from './demo/20';
import { TextFieldDemo1, TextFieldDemo2, TextFieldDemo3, TextFieldDemo4, TextFieldDemo5 } from './demo/21';
import { TooltipDemo1, TooltipDemo2, TooltipDemo3 } from './demo/22';

const styles = {
  root: {
    '& a': {
      textDecoration: 'none',
      color: 'purple',
    },
  },
};

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div style={{ marginTop: 10, marginLeft: 10, display: 'inline-block' }}>
          <Link to="/">Home</Link>
        </div>

        <br /><br />
        <Switch>
          <Route exact path="/typography-demo" component={TypographyDemo} />
          <Route exact path="/paper-demo" component={PaperDemo} />
          <Route exact path="/styles-demo1" component={StylesDemo1} />
          <Route exact path="/styles-demo2" component={StylesDemo2} />
          <Route exact path="/styles-demo3" component={StylesDemo3} />

          <Route exact path="/icons-demo" component={IconsDemo} />
          <Route exact path="/avatar-demo" component={AvatarDemo} />

          <Route exact path="/grid-demo1" component={GridDemo1} />
          <Route exact path="/grid-demo2" component={GridDemo2} />
          <Route exact path="/grid-demo3" component={GridDemo3} />
          <Route exact path="/grid-demo4" component={GridDemo4} />
          <Route exact path="/grid-demo5" component={GridDemo5} />
          <Route exact path="/mediaquery-demo" component={MediaQueryDemo} />

          <Route exact path="/list-demo1" component={ListDemo1} />
          <Route exact path="/list-demo2" component={ListDemo2} />
          <Route exact path="/list-demo3" component={ListDemo3} />
          <Route exact path="/list-demo4" component={ListDemo4} />
          <Route exact path="/list-demo5" component={ListDemo5} />

          <Route exact path="/modal-demo" component={ModalDemo} />
          <Route exact path="/popover-demo1" component={PopoverDemo1} />
          <Route exact path="/popover-demo2" component={PopoverDemo2} />
          <Route exact path="/popper-demo1" component={PopperDemo1} />
          <Route exact path="/popper-demo2" component={PopperDemo2} />
          <Route exact path="/menu-demo1" component={MenuDemo1} />
          <Route exact path="/menu-demo2" component={MenuDemo2} />
          <Route exact path="/menu-demo3" component={MenuDemo3} />

          <Route exact path="/collapse-demo" component={CollapseDemo} />
          <Route exact path="/fade-demo" component={FadeDemo} />
          <Route exact path="/grow-demo" component={GrowDemo} />
          <Route exact path="/zoom-demo" component={ZoomDemo} />
          <Route exact path="/slide-demo" component={SlideDemo} />

          <Route exact path="/appbar-demo01" component={AppBarDemo01} />
          <Route exact path="/appbar-demo02" component={AppBarDemo02} />
          <Route exact path="/appbar-demo03" component={AppBarDemo03} />
          <Route exact path="/appbar-demo04" component={AppBarDemo04} />
          <Route exact path="/appbar-demo11" component={AppBarDemo11} />
          <Route exact path="/appbar-demo12" component={AppBarDemo12} />
          <Route exact path="/appbar-demo13" component={AppBarDemo13} />

          <Route exact path="/badge-demo" component={BadgeDemo} />

          <Route exact path="/button-demo" component={ButtonDemo} />
          <Route exact path="/buttonlink-demo" component={ButtonLinkDemo} />

          <Route exact path="/card-demo1" component={CardDemo1} />
          <Route exact path="/card-demo2" component={CardDemo2} />
          <Route exact path="/card-demo3" component={CardDemo3} />

          <Route exact path="/chip-demo" component={ChipDemo} />

          <Route exact path="/dialog-demo1" component={DialogDemo1} />
          <Route exact path="/dialog-demo2" component={DialogDemo2} />
          <Route exact path="/dialog-demo3" component={DialogDemo3} />

          <Route exact path="/divider-demo1" component={DividerDemo1} />
          <Route exact path="/divider-demo2" component={DividerDemo2} />

          <Route exact path="/drawer-demo" component={DrawerDemo} />

          <Route exact path="/progress-demo1" component={ProgressDemo1} />
          <Route exact path="/progress-demo2" component={ProgressDemo2} />
          <Route exact path="/progress-demo3" component={ProgressDemo3} />

          <Route exact path="/checkbox-demo1" component={CheckboxDemo1} />
          <Route exact path="/checkbox-demo2" component={CheckboxDemo2} />
          <Route exact path="/radioButton-demo1" component={RadioButtonDemo1} />
          <Route exact path="/radioButton-demo2" component={RadioButtonDemo2} />
          <Route exact path="/switch-demo1" component={SwitchDemo1} />
          <Route exact path="/switch-demo2" component={SwitchDemo2} />
          <Route exact path="/switch-demo3" component={SwitchDemo3} />
          <Route exact path="/switch-demo4" component={SwitchDemo4} />

          <Route exact path="/select-demo1" component={SelectDemo1} />
          <Route exact path="/select-demo2" component={SelectDemo2} />
          <Route exact path="/select-demo3" component={SelectDemo3} />

          <Route exact path="/snackbar-demo1" component={SnackbarDemo1} />
          <Route exact path="/snackbar-demo2" component={SnackbarDemo2} />
          <Route exact path="/snackbar-demo3" component={SnackbarDemo3} />
          <Route exact path="/snackbar-demo4" component={SnackbarDemo4} />

          <Route exact path="/table-demo1" component={TableDemo1} />
          <Route exact path="/table-demo2" component={TableDemo2} />

          <Route exact path="/tab-demo1" component={TabDemo1} />
          <Route exact path="/tab-demo2" component={TabDemo2} />
          <Route exact path="/tab-demo3" component={TabDemo3} />
          <Route exact path="/tab-demo4" component={TabDemo4} />

          <Route exact path="/textField-demo1" component={TextFieldDemo1} />
          <Route exact path="/textField-demo2" component={TextFieldDemo2} />
          <Route exact path="/textField-demo3" component={TextFieldDemo3} />
          <Route exact path="/textField-demo4" component={TextFieldDemo4} />
          <Route exact path="/textField-demo5" component={TextFieldDemo5} />

          <Route exact path="/tooltip-demo1" component={TooltipDemo1} />
          <Route exact path="/tooltip-demo2" component={TooltipDemo2} />
          <Route exact path="/tooltip-demo3" component={TooltipDemo3} />

          <Route exact path="/not-done" component={NotDone} />

          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
