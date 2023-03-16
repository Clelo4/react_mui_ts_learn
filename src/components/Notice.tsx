import React from 'react';
import Snackbar from '@mui/material/Snackbar';

interface propsType {
  open: boolean,
  message: string,
}

export default class Notice extends React.Component<propsType> {
  render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={this.props.open}
        message={this.props.message}
        autoHideDuration={1500}
      ></Snackbar>
    );
  }
}
