import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const REGRESS_DURATION = 500;   // Defined by Material-UI
const PROGRESS_INTERVAL = 50;
const PAUSE_INTERVAL = REGRESS_DURATION / PROGRESS_INTERVAL;

class ProgressDemo extends Component {
  state = {
    completed: 0,
    pause: 0,
  };

  progress = (i) => {
    const { completed, pause } = this.state;

    if (completed === 100) {
      this.setState({ completed: 0, pause: PAUSE_INTERVAL });
    } else {
      if (pause > 0) {
        this.setState({ pause: (pause - 1) });
        return;
      }
      const diff = Math.random();
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, PROGRESS_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <br />
        <Typography variant="h6">Linear Determinate</Typography><br />
        <LinearProgress variant="determinate" value={this.state.completed} />

        <br />
        <Typography variant="h6">Circular Determinate</Typography><br />
        <CircularProgress variant="determinate" value={this.state.completed} />

      </div>
    );
  }
}

export default ProgressDemo;
