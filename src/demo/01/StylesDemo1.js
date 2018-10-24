import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
  },
  label: {
    color: theme.palette.text.secondary,
  },
});

const StylesDemo = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">Primary</Button>{' '}
      <Button variant="outlined" color="primary">Primary</Button>{' '}
      <br /><br />
      <Button variant="contained" color="secondary">Secondary</Button>{' '}
      <Button variant="outlined" color="secondary">Secondary</Button>{' '}
      <br /><br /><br />
      <Typography>Primary Text</Typography>
      <Typography className={classes.label}>Secondary Text</Typography>
    </div>
  );
}

export default withStyles(styles)(StylesDemo);
