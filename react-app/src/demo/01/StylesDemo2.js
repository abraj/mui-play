import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

const StylesDemo = (props) => {
  const { classes } = props;

  return (
    <div>
      <Button classes={{ root: classes.root, label: classes.label }}>Custom Button</Button>
      <br /><br />
      <Button classes={classes}>Custom Button</Button>
    </div>
  );
}

export default withStyles(styles)(StylesDemo);
