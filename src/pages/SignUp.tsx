import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Backdrop, CircularProgress, Dialog, DialogContent, DialogTitle } from '@mui/material';
import * as api from '../utils/api';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { sleep } from '../utils';
import Copyright from '../components/Copyright';

interface stateType {
  alert: boolean;
  alertContent: string;
  dialogOpen: boolean;
  loading: boolean;
  formData: object,
}

export default class SignUp extends React.Component<{}, stateType> {
  constructor(props: Record<string, string>) {
    super(props);
    this.state = {
      alert: false,
      alertContent: '',
      dialogOpen: false,
      loading: false,
      formData: {},
    };
    this.openDialog = this.openDialog.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleVerificationSuccess = this.handleVerificationSuccess.bind(this);
  }
  openDialog() {
    this.setState({ dialogOpen: true });
  }

  handleDialogClose() {
    this.setState({ dialogOpen: false });
  }

  async handleVerificationSuccess(token: string) {
    await sleep(500);
    this.setState({ dialogOpen: false, loading: true });
    try {
      const res = await api.login({ ...this.state.formData, hcaptchaToken: token });
      if (res.code !== 0) throw new Error(res.message);
    } catch (error) {
      this.setState({ alertContent: error + '', alert: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={ this.openDialog } sx={{ mt: 1 }} autoComplete="off">
            { this.state.alert ? <Typography sx={{ 'color': 'error.light', textAlign: 'center', fontWeight: 400 }}>{this.state.alertContent}</Typography> : <></> }
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open= {this.state.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Dialog
          maxWidth="lg"
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          keepMounted={true}
        >
          <DialogTitle>请完成验证</DialogTitle>
          <DialogContent>
            <HCaptcha
              sitekey="74092ba4-fd86-467b-8670-579af8ebf2d4"
              onVerify={ (token) => this.handleVerificationSuccess(token) }
            />
          </DialogContent>
        </Dialog>
      </Container>
    );
  }
}
