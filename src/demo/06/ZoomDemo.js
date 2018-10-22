import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex'
  },
  zoom: {
    width: theme.spacing.unit * 12,
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    backgroundColor: 'pink',
    border: '1px solid red',
  },
});

class ZoomDemo extends Component {
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
          <Typography variant="h6">{checked ? 'Zoomed' : 'Zoom'}</Typography>
          <Switch checked={checked} onChange={this.handleChange} />
        </div>
        <div className={classes.container}>
          <Zoom in={checked}>
            <div className={classes.zoom}>
              <Typography>Section 1</Typography>
            </div>
          </Zoom>
          <Zoom in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <div className={classes.zoom}>
              <Typography>Section 2</Typography>
            </div>
          </Zoom>
          <Zoom in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})}>
            <div className={classes.zoom}>
              <Typography>Section 3</Typography>
            </div>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ZoomDemo);
