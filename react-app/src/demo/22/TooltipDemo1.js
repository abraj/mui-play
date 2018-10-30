import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

class TooltipDemo extends Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <Typography variant="h6">Tooltips: Simple, Positioned, Disabled</Typography>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete" placement="right-end">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="You can't delete">
          <span>
            <IconButton disabled>
              <DeleteIcon />
            </IconButton>
          </span>
        </Tooltip>

        <br /><br />
        <Typography variant="h6">Transitions</Typography>
        <Typography><a href="https://material-ui.com/demos/tooltips/#transitions">https://material-ui.com/demos/tooltips/#transitions</a></Typography>

        <br /><br />
        <Typography variant="h6">Showing and hiding</Typography>
        <Typography><a href="https://material-ui.com/demos/tooltips/#showing-and-hiding">https://material-ui.com/demos/tooltips/#showing-and-hiding</a></Typography>

      </div>
    );
  }
}

export default TooltipDemo;
