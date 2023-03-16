import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Backdrop, CircularProgress, Dialog, DialogContent, DialogTitle } from '@mui/material';
import * as api from '../utils/api';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { sleep } from '../utils';
import Copyright from '../components/Copyright';
import Notice from '../components/Notice';

interface LoginState {
  loading: boolean,
  dialogOpen: boolean,
  formData: {
    email: string | null,
    password: string | null,
  },
  showNotice: boolean,
  noticeMessage: string,
}

export default function Login() {
  const [state, setState] = React.useState<LoginState>({
    loading: false,
    dialogOpen: false,
    formData: {
      email: null,
      password: null,
    },
    showNotice: false,
    noticeMessage: '',
  });

  const handleVerificationSuccess = async (token: string, ekey: string) => {
    await sleep(500);
    setState({ dialogOpen: false, loading: true } as LoginState);
    try {
      const res = await api.login({ ...state.formData, hcaptchaToken: token });
      if (res.code !== 0) throw new Error(res.message);
    } catch (error) {
      setState({ noticeMessage: String(error), showNotice: true } as LoginState);
      console.error('123', error);
    } finally {
      setState({ loading: false } as LoginState);
    }
  }
  const handleDialogClose = () => {
    setState({ dialogOpen: false } as LoginState);
  }
  const openDialog = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setState({ ...state, formData: {
        email: data.get('email') as LoginState['formData']['email'],
        password: data.get('password') as LoginState['formData']['password'],
      },
      dialogOpen: true,
    });
  }

  return (
    <>
      <Notice open={state.showNotice} message={state.noticeMessage}></Notice>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={ openDialog } sx={{ mt: 1 }} autoComplete="off">
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/resetPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open= {state.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Dialog
          maxWidth="lg"
          open={state.dialogOpen}
          onClose={handleDialogClose}
          keepMounted={true}
        >
          <DialogTitle>请完成验证</DialogTitle>
          <DialogContent>
            <HCaptcha
              sitekey="74092ba4-fd86-467b-8670-579af8ebf2d4"
              onVerify={(token,ekey) => handleVerificationSuccess(token, ekey)}
            />
          </DialogContent>
        </Dialog>
      </Container>
    </>
  );
}