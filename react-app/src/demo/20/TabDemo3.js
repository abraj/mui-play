import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    maxWidth: 700,
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

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Fragment>
        <Typography variant="h6">Fixed Tabs: Full width & Swipeable</Typography>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              textColor="primary"
              indicatorColor="primary"
              fullWidth
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            index={value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer>Item One</TabContainer>
            <TabContainer>Item Two</TabContainer>
            <TabContainer>Item Three</TabContainer>
          </SwipeableViews>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(TabDemo);
