import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Creating `MyLink` is necessary to prevent unexpected unmounting.
const MyLink = props => <Link to="/test-path" {...props} />

const ButtonLinkDemo = (props) => {
  return (
    <div style={{ display: 'flex'}}>
      <Typography variant="h6">Button Link:</Typography>&nbsp;&nbsp;
      <Button color="secondary" component={MyLink}>Link</Button>

      <Typography style={{ marginTop: 8 }}>
        <Link to="/">Goto Home</Link>
      </Typography>
    </div>
  );
}

export default ButtonLinkDemo;
