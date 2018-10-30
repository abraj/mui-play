import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import DoneIcon from '@material-ui/icons/Done';
import uxceo from '../images/uxceo-128.jpg';

class ChipDemo extends Component {
  render() {
    return (
      //  className={classes.chip}
      <div>
        <Chip label="Basic Chip" />
        <Chip
          avatar={<Avatar>AR</Avatar>}
          label="Clickable Chip"
          onClick={() => {}}
        />
        <Chip
          avatar={<Avatar alt="Natacha" src={uxceo} />}
          label="Deletable Chip"
          onDelete={() => {}}
        />
        <Chip
          avatar={<Avatar><PersonIcon /></Avatar>}
          label="Clickable Deletable Chip"
          onClick={() => {}}
          onDelete={() => {}}
        />
        <Chip
          icon={<PersonIcon />}
          label="Custom Delete Icon Chip"
          onDelete={() => {}}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          avatar={<Avatar><PersonIcon /></Avatar>}
          label="Primary Clickable Chip"
          onDelete={() => {}}
          color="secondary"
          deleteIcon={<DoneIcon />}
        />
        <Chip
          variant="outlined"
          icon={<PersonIcon />}
          label="Outlined Chip"
          onDelete={() => {}}
          color="secondary"
        />
      </div>
    );
  }
}

export default ChipDemo;
