import React, { Component } from 'react';
import _CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  colorPrimary: {
    backgroundColor: purple[200],
  },
  barColorPrimary: {
    backgroundColor: purple[500],
  },
};

const CircularProgress = withStyles(theme => ({ root: {margin: theme.spacing.unit * 2} }))(_CircularProgress);

class ProgressDemo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <br />
        <Typography variant="h6">Circular Indeterminate</Typography><br />
        <CircularProgress />
        <CircularProgress size={50} />
        <CircularProgress color="secondary" />
        <CircularProgress thickness={7} style={{ color: purple[500] }} />

        <br />
        <Typography variant="h6">Linear Indeterminate</Typography><br />
        <LinearProgress color="secondary" />
        <br />
        <LinearProgress
          classes={{ colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }} />

      </div>
    );
  }
}

export default withStyles(styles)(ProgressDemo);
