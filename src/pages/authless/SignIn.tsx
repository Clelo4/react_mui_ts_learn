import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useNavigate, Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  Backdrop,
  CircularProgress
} from '@mui/material';
import { useSnackbar } from 'notistack';

import * as api from 'utils/api';
import { sleep } from 'utils';
import MainCardWrapper from './MainCardWrapper';
import { useAppTheme } from 'themes/hooks';
import { useAppDispatch } from 'store/hooks';
import { setAuth } from 'store/account';
import { AuthStateType } from 'enum';
import Logo from 'components/Logo';

interface LoginState {
  loading: boolean;
  formData: {
    email: string | null;
    password: string | null;
  };
}

export default function SignIn() {
  const theme = useAppTheme();
  const { enqueueSnackbar } = useSnackbar();
  const dispath = useAppDispatch();

  const captchaRef = React.useRef<HCaptcha>(null);
  const [state, setState] = React.useState<LoginState>({
    loading: false,
    formData: {
      email: null,
      password: null
    }
  });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      if (!captchaRef.current) throw new Error('网络错误，请稍后再试');

      const data = new FormData(event.currentTarget);
      const email = data.get('email') as LoginState['formData']['email'];
      const password = data.get('password') as LoginState['formData']['password'];
      if (!email || !password) throw new Error('请填写完整');

      setState((preState) => ({
        ...preState,
        loading: true
      }));

      const res = await captchaRef.current.execute({ async: true });
      if (!res) throw new Error('网络错误，请稍后再试');
      const { response: token } = res;

      const loginRes = await api.login({ email, password, hcaptchaToken: token });
      if (loginRes.code !== 0) throw new Error(loginRes.message);

      enqueueSnackbar(loginRes.message || '登录成功', { variant: 'success' });
      await sleep(1000);
      dispath(setAuth(AuthStateType.LOGINED));
    } catch (error) {
      console.log(error);
      enqueueSnackbar(String(error), { variant: 'error' });
    } finally {
      setState((preState) => ({ ...preState, loading: false }));
    }
  }

  return (
    <MainCardWrapper>
      <Container component="main" maxWidth="xs" sx={{ padding: '30px 20px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Logo sx={{ marginBottom: '40px' }}></Logo>
          <Typography variant="h2" sx={{ marginBottom: '20px', color: theme.palette.primary.main }}>
            Hi, Welcome Back
          </Typography>
          <Typography variant='h5'>Enter your credentials to continue</Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }} autoComplete="off">
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
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography
                  component={Link}
                  to="/home"
                  variant="subtitle1"
                  sx={{ textDecoration: 'none', color: '#1976d2', ':hover': { color: '#08437c' } }}
                >
                  Forgot password?
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={state.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <HCaptcha
          sitekey="74092ba4-fd86-467b-8670-579af8ebf2d4"
          ref={captchaRef}
          size="invisible"
          theme={theme.palette.mode}
          onVerify={() => {}}
        />
      </Container>
    </MainCardWrapper>
  );
}
