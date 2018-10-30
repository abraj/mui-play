import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import contemplativeReptile from '../images/contemplative-reptile.jpg';

const styles = {
  card: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 140,
  },
};

class CardDemo2 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={contemplativeReptile}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">Lizard</Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">Share</Button>
        <Button size="small" color="secondary">Learn More</Button>
      </CardActions>
    </Card>
    );
  }
}

export default withStyles(styles)(CardDemo2);
