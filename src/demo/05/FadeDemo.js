import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex'
  },
  fade: {
    width: theme.spacing.unit * 40,
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 3,
    backgroundColor: 'pink',
    border: '1px solid red',
  },
});

class FadeDemo extends Component {
  state = {
    checked: !false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div>
        <div className={classes.container}>
          <Typography variant="h6">{checked ? 'Fade' : 'Faded'}</Typography>
          <Switch checked={checked} onChange={this.handleChange} />
        </div>
        <Fade in={checked}>
          <div className={classes.fade}>
            <Typography>Click switch to fade this section.</Typography>
          </div>
        </Fade>
      </div>
    );
  }
}

export default withStyles(styles)(FadeDemo);
