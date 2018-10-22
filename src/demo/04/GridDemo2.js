import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const styles = {
  root: {
    padding: 5,
    border: '1px solid pink',
    width: '80%',
  },
  paper: {
    height: 140,
    width: 100,
  },
};

const GridDemo = (props) => {
  const { width, classes } = props;
  const spacing = props.theme.spacing.unit * 2;

  return (
    <Fragment>
      <Typography className={classes.info}>Current width: {width}</Typography>
      <div className={classes.root}>
        <Grid container spacing={spacing} justify="center">
          {[0, 1, 2, 4].map(val => (
            <Grid item key={val}><Paper className={classes.paper} /></Grid>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default withWidth()(withStyles(styles, { withTheme: true })(GridDemo));
