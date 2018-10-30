import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit,
    border: '1px solid pink',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing.unit,
  },
  info: {
    color: theme.palette.text.secondary,
  },
});

const GridDemo = (props) => {
  const { width, classes } = props;
  const spacing = props.theme.spacing.unit * 2;

  return (
    <Fragment>
      <Typography className={classes.info}>Current width: {width}</Typography>
      <div className={classes.root}>
        <Grid container spacing={spacing} justify="center">
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>

          {[0, 1].map(val => (
            <Grid item xs={12} sm={6} key={val}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
          ))}

          {[0, 1, 2, 4].map(val => (
            <Grid item xs={6} md={3} key={val}>
              <Paper className={classes.paper}>xs=6 md=3</Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default withWidth()(withStyles(styles, { withTheme: true })(GridDemo));
