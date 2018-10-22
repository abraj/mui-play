import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import _Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    border: '1px solid pink',
    textAlign: 'center',
    maxWidth: 750,
  },
  picture: {
    width: 150,
    height: '100%',
    display: 'flex',
    justifyContent: 'center', /* align horizontal */
    alignItems: 'center',     /* align vertical */
  },
  info: {
    color: theme.palette.text.secondary,
  },
});

const pstyle = theme => ({
  root: {
    padding: theme.spacing.unit,
  },
});
const Paper = withStyles(pstyle)(_Paper);

const GridDemo = (props) => {
  const { width, classes } = props;
  const spacing = props.theme.spacing.unit * 2;

  return (
    <Fragment>
      <Typography className={classes.info}>Current width: {width}</Typography>
      <div className={classes.root}>
        <Grid container spacing={spacing} justify="center">
          <Grid item><Paper className={classes.picture}>Picture</Paper></Grid>
          <Grid item xs container spacing={spacing} direction="column">
            <Grid item><Paper>Part 1</Paper></Grid>
            <Grid item container spacing={spacing}>
              <Grid item xs={12} sm><Paper>Part 2a</Paper></Grid>
              <Grid item xs><Paper>Part 2b</Paper></Grid>
            </Grid>
            <Grid item><Paper>Part 3</Paper></Grid>
          </Grid>
          <Grid item><Paper>Checkout</Paper></Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default withWidth()(withStyles(styles, { withTheme: true })(GridDemo));
