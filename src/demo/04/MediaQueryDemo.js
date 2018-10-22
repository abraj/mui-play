import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import purple from '@material-ui/core/colors/purple';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => {
  // Reference: https://material-ui.com/layout/breakpoints/#breakpoints
  // NOTE: Material-UI layout breakpoint 'md' (medium): 960px
  console.log(theme.breakpoints.down('sm'));  // @media (max-width:959.95px)
  console.log(theme.breakpoints.up('md'));    // @media (min-width:960px)

  return ({
    root: {
      marginTop: theme.spacing.unit,
      padding: theme.spacing.unit,
      border: '1px solid pink',
      textAlign: 'center',
      fontFamily: 'Roboto',

      [theme.breakpoints.down('sm')]: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.light,
      },
      [theme.breakpoints.up('md')]: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
      },
      [theme.breakpoints.up('lg')]: {
        color: purple[500],
        backgroundColor: purple[300],
      },
    },
    paper: {
      padding: theme.spacing.unit,
    },
    info: {
      color: theme.palette.text.secondary,
    },
  });
};

const MediaQueryDemo = (props) => {
  const { width, classes } = props;
  const spacing = props.theme.spacing.unit * 2;

  return (
    <Fragment>
      <Typography className={classes.info}>Current width: {width}</Typography>
      <div className={classes.root}>
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
    </Fragment>
  );
};

export default withWidth()(withStyles(styles, { withTheme: true })(MediaQueryDemo));
