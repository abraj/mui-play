import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles1 = theme => ({
  root: {
    cursor: 'default',
  },
  label: {
    textTransform: 'capitalize',
  },
});

const styles2 = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

const MyButton1 = withStyles(styles1)(Button);
const MyButton2 = withStyles(styles2)(Button);

const StylesDemo = (props) => {
  return (
    <div>
      <MyButton1 variant="contained" color="primary">MyButton1</MyButton1>{' '}
      <MyButton1 variant="outlined" color="primary">MyButton1</MyButton1>{' '}
      <br /><br />
      <MyButton2>MyButton2</MyButton2>
    </div>
  );
}

export default StylesDemo;
