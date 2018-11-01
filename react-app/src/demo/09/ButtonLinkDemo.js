import React, {Fragment} from 'react';
import { Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TEST_PATH_1 = 'test-path-1';
const TEST_PATH_2 = 'test-path-2';

const ButtonLinkDemo = ({ match }) => {
  const MyLink = props => <Link to={`${match.url}/${TEST_PATH_1}`} {...props} />;

  return (
    <Fragment>
      <div style={{ display: 'flex'}}>
        <Typography variant="h6">Button Link (React-router)</Typography>&nbsp;&nbsp;&nbsp;
        <Button component={MyLink} color="secondary">Link</Button>
      </div>

      <br />
      <div style={{ display: 'flex'}}>
        <Typography variant="h6">Button Link (Normal)</Typography>&nbsp;&nbsp;&nbsp;
        <Button href={`${match.url}/${TEST_PATH_2}`} color="secondary">Link</Button>
      </div>

      <Route path={`${match.path}/:testPath`} component={TestComponent} />
    </Fragment>
  );
}

const TestComponent = ({ match }) => {
  const testPath = match.params.testPath;

  const lastIndex = match.url.lastIndexOf('/');
  const baseUrl = match.url.substring(0, lastIndex);

  let renderTestComponent = null;
  if (testPath === TEST_PATH_1) {
    renderTestComponent = (
      <Typography style={{ marginTop: 8 }}>
        <Link to={baseUrl}>Return</Link>
      </Typography>
    );
  }
  else if (testPath === TEST_PATH_2) {
    renderTestComponent = (
      <Button href={baseUrl} style={{ textTransform: 'none' }}>Return</Button>
    );
  }

  return (
    <div>
      <hr />
      {renderTestComponent}
    </div>
  );
}

export default ButtonLinkDemo;
