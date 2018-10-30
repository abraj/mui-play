import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  lightTooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class TooltipDemo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ margin: 20 }}>
        <Typography variant="h6">Customized Tooltip: Light</Typography>

        <Tooltip title="Light Tooltip" classes={{ tooltip: classes.lightTooltip }}>
          <Button className={classes.button}>Light</Button>
        </Tooltip>

      </div>
    );
  }
}

export default withStyles(styles)(TooltipDemo);
