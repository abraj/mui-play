import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Icon from '@material-ui/core/Icon';

const IconsDemo = (props) => {
  return (
    <table>
      <tbody>
        {/* npm install @material-ui/icons */}
        <tr>
          <th>SVG Material Icon</th>
          <td>
            <AddCircleIcon color="primary" />
          </td>
          <td><Typography>AddCircle</Typography></td>
          <td><a href="https://material.io/tools/icons/?search=add_circle&style=baseline">material.io/tools/icons</a></td>
        </tr>

        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> */}
        <tr>
          <th>Font Material Icon</th>
          <td>
            <Icon color="secondary">add_circle</Icon>
          </td>
          <td><Typography>add_circle</Typography></td>
          <td><a href="https://material.io/tools/icons/?search=add_circle&style=baseline">material.io/tools/icons</a></td>
        </tr>

        {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"> */}
        <tr>
          <th>Font Awesome Icon</th>
          <td>
            <Icon className='fa fa-plus-circle' color="error" />
          </td>
          <td><Typography>plus-circle</Typography></td>
          <td><a href="https://fontawesome.com/icons?d=gallery&q=plus-circle">fontawesome.com/icons</a></td>
        </tr>
      </tbody>
    </table>
  );
}

export default IconsDemo;
