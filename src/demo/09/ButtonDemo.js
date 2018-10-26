import React from 'react';
import _Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
  },
  label: {
    display: 'inline',
    marginRight: 10,
  },
  customButton: {
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    color: theme.palette.getContrastText(purple[500]),
  },
});

const Button = withStyles(theme => ({ root: {margin: theme.spacing.unit} }))(_Button);
const pinkTheme = createMuiTheme({ palette: {primary: pink}, typography: {useNextVariants: true} });

const ButtonDemo = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.label}>Text Buttons:</Typography>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled >Disabled</Button>
      <br /><br />

      <Typography variant="h6" className={classes.label}>Outlined Buttons:</Typography>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" disabled >Disabled</Button>
      <br /><br />

      <Typography variant="h6" className={classes.label}>Contained Buttons:</Typography>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" disabled >Disabled</Button>
      <br /><br />

      <Typography variant="h6" className={classes.label}>Floating Action Buttons (FAB):</Typography>
      <Button variant="fab" color="secondary"><EditIcon /></Button>
      <Button variant="extendedFab"><DeleteIcon />&nbsp;Delete</Button>
      <br /><br />

      <Typography variant="h6" className={classes.label}>Multi-screen FAB transition:</Typography>
      <br /><a href="https://github.com/mui-org/material-ui/blob/master/docs/src/pages/demos/buttons/FloatingActionButtonZoom.js">https://github.com/mui-org/material-ui/blob/master/docs/src/pages/demos/buttons/FloatingActionButtonZoom.js</a>
      <br /><a href="https://material-ui.com/demos/buttons/#floating-action-buttons">https://material-ui.com/demos/buttons/#floating-action-buttons</a>
      <br /><br />

      <Typography variant="h6" className={classes.label}>Icon Buttons:</Typography>
      <IconButton color="secondary"><EditIcon /></IconButton>
      <br /><br />

      <Typography variant="h6" className={classes.label}>Button Sizes:</Typography>
      <br /><a href="https://material-ui.com/demos/buttons/#sizes">https://material-ui.com/demos/buttons/#sizes</a>
      <br /><br />

      <Typography variant="h6" className={classes.label}>Buttons with icons and label:</Typography>
      <Button variant="contained">Delete&nbsp;<DeleteIcon /></Button>
      <Button variant="contained" color="secondary">Upload&nbsp;&nbsp;<CloudUploadIcon /></Button>
      <Button variant="contained" color="primary"><SaveIcon />&nbsp;Save</Button>
      <br /><br />

      <Typography variant="h6" className={classes.label}>Customized Buttons:</Typography>
      <MuiThemeProvider theme={pinkTheme}>
        <Button variant="contained" color="primary">MuiThemeProvider</Button>
      </MuiThemeProvider>
      <Button variant="contained" className={classes.customButton}>Custom CSS</Button>
      <br /><br />

      <br /><br /><br /><br />
    </div>
  );
}

export default withStyles(styles)(ButtonDemo);
