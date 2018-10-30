import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    maxWidth: 500,
    margin: 20,
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class TabDemo extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Fragment>
        <Typography variant="h6">Icon Tabs</Typography>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              fullWidth
            >
              <Tab icon={<PhoneIcon />} label="Recents" />
              <Tab icon={<FavoriteIcon />} label="Favorites" />
              <Tab icon={<PersonPinIcon />} label="Nearby" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Item One</TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
        </div>

        <br />
        <Typography variant="h6">Scrollable Tabs</Typography>
        <Typography><a href="https://material-ui.com/demos/tabs/#scrollable-tabs">https://material-ui.com/demos/tabs/#scrollable-tabs</a></Typography>

        <br /><br />
        <Typography variant="h6">Customized Tabs</Typography>
        <Typography><a href="https://material-ui.com/demos/tabs/#customized-tabs">https://material-ui.com/demos/tabs/#customized-tabs</a></Typography>

      </Fragment>
    );
  }
}

export default withStyles(styles)(TabDemo);
