import React from 'react';
import Typography from '@material-ui/core/Typography';

const TypographyDemo = (props) => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>h1. Material-UI</Typography>
      <Typography variant="h2" gutterBottom>h2. Material-UI</Typography>
      <Typography variant="h3" gutterBottom>h3. Material-UI</Typography>
      <Typography variant="h4" gutterBottom>h4. Material-UI</Typography>
      <Typography variant="h5" gutterBottom>h5. Material-UI</Typography>
      <Typography variant="h6" gutterBottom>h6. Material-UI</Typography>

      <br />
      <Typography variant="subtitle1" gutterBottom>subtitle1. Lorem ipsum</Typography>
      <Typography variant="subtitle2" gutterBottom>subtitle2. Lorem ipsum</Typography>
      <Typography variant="body1" gutterBottom>body1. Lorem ipsum</Typography>
      <Typography variant="body2" gutterBottom>body2. Lorem ipsum</Typography>

      <br />
      <Typography variant="button" gutterBottom>button text</Typography>
      <Typography variant="overline" gutterBottom>overline text</Typography>
      <Typography variant="caption" gutterBottom>caption text</Typography>

      <br /><br /><br /><br />
    </div>
  );
}

export default TypographyDemo;
