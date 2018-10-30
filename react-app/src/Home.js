import React, {Fragment} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const Link = (props) => {
  const { children, ...rest } = props;
  return (
    <Fragment>
      <RouterLink {...rest}>
        <Typography style={{ display: 'inline' }}>{children}</Typography>
      </RouterLink>,&nbsp;&nbsp;
    </Fragment>
  );
};

const Home = (props) => {
  return (
    <div>
      <div style={{ marginLeft: 10 }}>
        <Typography variant="h4" gutterBottom>Material-UI</Typography>
        <Typography variant="subtitle1" style={{ display: 'inline' }} gutterBottom>Example Demos</Typography>
        &nbsp;&nbsp;
        <Typography variant="subtitle2" style={{ display: 'inline' }} gutterBottom>
          <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">(material-ui.com)</a>
        </Typography>
      </div>
      <hr />

      <ol>
        <li>
          <Link to="/typography-demo">TypographyDemo</Link>
          <Link to="/paper-demo">PaperDemo</Link>
          <Link to="/styles-demo1">StylesDemo1</Link>
          <Link to="/styles-demo2">StylesDemo2</Link>
          <Link to="/styles-demo3">StylesDemo3</Link>
        </li>

        <li>
          <Link to="icons-demo">IconsDemo</Link>
          <Link to="avatar-demo">AvatarDemo</Link>
        </li>

        <li>
          <Link to="grid-demo1">GridDemo1</Link>
          <Link to="grid-demo2">GridDemo2</Link>
          <Link to="grid-demo3">GridDemo3</Link>
          <Link to="grid-demo4">GridDemo4</Link>
          <Link to="grid-demo5">GridDemo5</Link>
          <Link to="mediaquery-demo">MediaQueryDemo</Link>
        </li>

        <li>
          <Link to="list-demo1">ListDemo1</Link>
          <Link to="list-demo2">ListDemo2</Link>
          <Link to="list-demo3">ListDemo3</Link>
          <Link to="list-demo4">ListDemo4</Link>
          <Link to="list-demo5">ListDemo5</Link>
        </li>

        <li>
          <Link to="modal-demo">ModalDemo</Link>
          <Link to="popover-demo1">PopoverDemo1</Link>
          <Link to="popover-demo2">PopoverDemo2</Link>
          <Link to="popper-demo1">PopperDemo1</Link>
          <Link to="popper-demo2">PopperDemo2</Link>
          <Link to="menu-demo1">MenuDemo1</Link>
          <Link to="menu-demo2">MenuDemo2</Link>
          <Link to="menu-demo3">MenuDemo3</Link>
        </li>

        <li>
          <Link to="collapse-demo">CollapseDemo</Link>
          <Link to="fade-demo">FadeDemo</Link>
          <Link to="grow-demo">GrowDemo</Link>
          <Link to="zoom-demo">ZoomDemo</Link>
          <Link to="slide-demo">SlideDemo</Link>
        </li>

        <li>
          <Link to="appbar-demo01">AppBarDemo01</Link>
          <Link to="appbar-demo02">AppBarDemo02</Link>
          <Link to="appbar-demo03">AppBarDemo03</Link>
          <Link to="appbar-demo04">AppBarDemo04</Link>
          <Link to="appbar-demo11">AppBarDemo11</Link>
          <Link to="appbar-demo12">AppBarDemo12</Link>
          <Link to="appbar-demo13">AppBarDemo13</Link>
        </li>

        <li>
          <Link to="badge-demo">BadgeDemo</Link>
        </li>

        <li>
          <Link to="button-demo">ButtonDemo</Link>
          <Link to="buttonlink-demo">ButtonLinkDemo</Link>
        </li>

        <li>
          <Link to="card-demo1">CardDemo1</Link>
          <Link to="card-demo2">CardDemo2</Link>
          <Link to="card-demo3">CardDemo3</Link>
        </li>

        <li>
          <Link to="chip-demo">ChipDemo</Link>
        </li>

        <li>
          <Link to="dialog-demo1">DialogDemo1</Link>
          <Link to="dialog-demo2">DialogDemo2</Link>
          <Link to="dialog-demo3">DialogDemo3</Link>
        </li>

        <li>
          <Link to="divider-demo1">DividerDemo1</Link>
          <Link to="divider-demo2">DividerDemo2</Link>
        </li>

        <li>
          <Link to="drawer-demo">DrawerDemo</Link>
        </li>

        <li>
          <Link to="progress-demo1">ProgressDemo1</Link>
          <Link to="progress-demo2">ProgressDemo2</Link>
          <Link to="progress-demo3">ProgressDemo3</Link>
        </li>

        <li>
          <Link to="checkbox-demo1">CheckboxDemo1</Link>
          <Link to="checkbox-demo2">CheckboxDemo2</Link>
          <Link to="radioButton-demo1">RadioButtonDemo1</Link>
          <Link to="radioButton-demo2">RadioButtonDemo2</Link>
          <Link to="switch-demo1">SwitchDemo1</Link>
          <Link to="switch-demo2">SwitchDemo2</Link>
          <Link to="switch-demo3">SwitchDemo3</Link>
          <Link to="switch-demo4">SwitchDemo4</Link>
        </li>

        <li>
          <Link to="select-demo1">SelectDemo1</Link>
          <Link to="select-demo2">SelectDemo2</Link>
          <Link to="select-demo3">SelectDemo3</Link>
        </li>

        <li>
          <Link to="snackbar-demo1">SnackbarDemo1</Link>
          <Link to="snackbar-demo2">SnackbarDemo2</Link>
          <Link to="snackbar-demo3">SnackbarDemo3</Link>
          <Link to="snackbar-demo4">SnackbarDemo4</Link>
        </li>

        <li>
          <Link to="table-demo1">TableDemo1</Link>
          <Link to="table-demo2">TableDemo2</Link>
        </li>

        <li>
          <Link to="tab-demo1">TabDemo1</Link>
          <Link to="tab-demo2">TabDemo2</Link>
          <Link to="tab-demo3">TabDemo3</Link>
          <Link to="tab-demo4">TabDemo4</Link>
        </li>

        <li>
          <Link to="textField-demo1">TextFieldDemo1</Link>
          <Link to="textField-demo2">TextFieldDemo2</Link>
          <Link to="textField-demo3">TextFieldDemo3</Link>
          <Link to="textField-demo4">TextFieldDemo4</Link>
          <Link to="textField-demo5">TextFieldDemo5</Link>
        </li>

        <li>
          <Link to="tooltip-demo1">TooltipDemo1</Link>
          <Link to="tooltip-demo2">TooltipDemo2</Link>
          <Link to="tooltip-demo3">TooltipDemo3</Link>
        </li>

        <li>
          <Link to="/not-done">NotDone</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
