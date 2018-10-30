import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

class ProgressDemo extends Component {
  state = {
    loading: false,
  };

  handleClickQuery = () => {
    this.setState(state => ({ loading: !state.loading }));

    this.timer = setTimeout(() => {
      this.setState({ loading: false });
    }, 2e3);
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <br />
        <Typography variant="h5">Circular Static</Typography>
        <Typography><a href="https://material-ui.com/demos/progress/#circular-static">https://material-ui.com/demos/progress/#circular-static</a></Typography>

        <br />
        <Typography variant="h5">Interactive Integration</Typography>
        <Typography><a href="https://material-ui.com/demos/progress/#interactive-integration">https://material-ui.com/demos/progress/#interactive-integration</a></Typography>

        <br />
        <Typography variant="h5">Linear Buffer</Typography>
        <Typography><a href="https://material-ui.com/demos/progress/#linear-buffer">https://material-ui.com/demos/progress/#linear-buffer</a></Typography>

        <br /><br />
        <Typography variant="h6">Delaying appearance</Typography>
        <div>
          <Fade in={loading} style={{ transitionDelay: '700ms' }} unmountOnExit>
            <CircularProgress />
          </Fade>
          <br />
          <Button variant="outlined" onClick={this.handleClickQuery}>
            {loading ? 'Stop!' : 'Load..'}
          </Button>
        </div>

      </div>
    );
  }
}

export default ProgressDemo;
