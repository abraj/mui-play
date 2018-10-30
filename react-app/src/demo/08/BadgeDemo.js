import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 1.5}px`,
  },
});

class BadgeDemo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <span className={classes.margin}>&nbsp;</span>
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>

        <span className={classes.margin}>&nbsp;</span>
        <IconButton>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>

        <span className={classes.margin}>&nbsp;</span>
        <Badge badgeContent={4} color="error">
          <Button variant="contained">Button</Button>
        </Badge>

        <span className={classes.margin}>&nbsp;</span>
        <Badge badgeContent={4} color="error">
          <Typography className={classes.padding}>Typography</Typography>
        </Badge>
      </div>
    );
  }
}

export default withStyles(styles)(BadgeDemo);
