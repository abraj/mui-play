import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Todo extends Component {
  render() {
    return (
      <div>
        <br />
        <Typography variant="h5">Expansion Panel</Typography>
        <Typography><a href="https://material-ui.com/demos/expansion-panels/#expansion-panel">https://material-ui.com/demos/expansion-panels/#expansion-panel</a></Typography>

        <br />
        <Typography variant="h5">Grid List</Typography>
        <Typography><a href="https://material-ui.com/demos/grid-list/#grid-list">https://material-ui.com/demos/grid-list/#grid-list</a></Typography>

        <br />
        <Typography variant="h5">Pickers</Typography>
        <Typography><a href="https://material-ui.com/demos/pickers/#pickers">https://material-ui.com/demos/pickers/#pickers</a></Typography>

      </div>
    );
  }
}

export default Todo;
