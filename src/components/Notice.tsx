import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';

interface propsType {
  open: boolean,
  message: string,
  onClose: () => void,
  type?: AlertColor
}

export default class Notice extends React.Component<propsType> {
  render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={this.props.open}
        autoHideDuration={1000}
        onClose={this.props.onClose}
      >
        <Alert severity={this.props.type} variant="filled" sx={{ minWidth: '20rem' }}>{this.props.message}</Alert>
      </Snackbar>
    );
  }
}
