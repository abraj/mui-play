import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { withStyles } from '@material-ui/core/styles';
import liveFromSpace from '../images/live-from-space.jpg';

const styles = theme => ({
  card: {
    display: 'inline-flex',
    margin: 20,
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

class CardDemo3 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <div>
          <CardContent>
            <Typography variant="h5">Live From Space</Typography>
            <Typography variant="subtitle1" color="textSecondary">Mac Miller</Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton><SkipPreviousIcon /></IconButton>
            <IconButton>
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
            <IconButton><SkipNextIcon /></IconButton>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image={liveFromSpace}
          title="Live from space album cover"
        />
      </Card>
    );
  }
}

export default withStyles(styles)(CardDemo3);
