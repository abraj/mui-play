import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex'
  },
  slide: {
    width: theme.spacing.unit * 40,
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 3,
    backgroundColor: 'pink',
    border: '1px solid red',
  },
});

class SlideDemo extends Component {
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
          <Typography variant="h6">{checked ? 'Slided' : 'Slide'}</Typography>
          <div><Switch checked={checked} onChange={this.handleChange} /></div>
          <Slide in={checked} direction="left" mountOnEnter unmountOnExit>
            <div className={classes.slide}>
              <Typography>Flip switch to slide this section.</Typography>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SlideDemo);
