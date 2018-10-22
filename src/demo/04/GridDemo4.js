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
          <Grid item xs><Paper className={classes.paper}>xs</Paper></Grid>
          <Grid item xs><Paper className={classes.paper}>xs</Paper></Grid>
          <Grid item xs><Paper className={classes.paper}>xs</Paper></Grid>
        </Grid>
        <Grid container spacing={spacing} justify="center">
          <Grid item xs><Paper className={classes.paper}>xs</Paper></Grid>
          <Grid item xs={6} sm><Paper className={classes.paper}>xs=6 sm</Paper></Grid>
          <Grid item xs><Paper className={classes.paper}>xs</Paper></Grid>
        </Grid>
        <Grid container spacing={spacing} justify="center">
          <Grid item xs><Paper className={classes.paper}>xs</Paper></Grid>
          <Grid item xs md={6}><Paper className={classes.paper}>xs md=6</Paper></Grid>
          <Grid item xs><Paper className={classes.paper}>xs</Paper></Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <Grid container spacing={spacing} justify="center">
          <Grid item><Paper className={classes.paper}>First item</Paper></Grid>
          <Grid item xs><Paper className={classes.paper}>xs</Paper></Grid>
          <Grid item><Paper className={classes.paper}>The very last item</Paper></Grid>
        </Grid>
        <Grid container spacing={spacing} justify="center">
          <Grid item><Paper className={classes.paper}>First item</Paper></Grid>
          <Grid item sm><Paper className={classes.paper}>sm</Paper></Grid>
          <Grid item><Paper className={classes.paper}>The very last item</Paper></Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default withWidth()(withStyles(styles, { withTheme: true })(GridDemo));
