import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useNavigate, Link } from "react-router-dom";
import { Avatar, Button, TextField,
  FormControlLabel, Checkbox, Grid,
  Box, Typography, Container, Backdrop,
  CircularProgress
} from '@mui/material';
import { useSnackbar } from 'notistack';

import * as api from 'utils/api';
import { sleep } from 'utils';
import Notice from 'components/Notice';
import MainCardWrapper from './MainCardWrapper';
import { useAppTheme } from 'themes/hooks';

import type { NoticePropsType } from 'components/Notice';

interface LoginState {
  loading: boolean,
  formData: {
    email: string | null,
    password: string | null,
  },
  showNotice: boolean,
  noticeMessage: string,
  noticeType?: NoticePropsType['type']
}

export default function SignIn() {
  const theme = useAppTheme();
  const { enqueueSnackbar } = useSnackbar();

  const captchaRef = React.useRef<HCaptcha>(null);
  const [state, setState] = React.useState<LoginState>({
    loading: false,
    formData: {
      email: null,
      password: null,
    },
    showNotice: false,
    noticeMessage: '',
    noticeType: 'error',
  });
  const navigate = useNavigate();

  async function handleVerificationSuccess(...formData: Parameters<typeof api.login>) {
    const res = await api.login(...formData);
    if (res.code !== 0) throw new Error(res.message);

    setState((preState) => ({ ...preState, noticeMessage: res.message || '登录成功', showNotice: true, noticeType: 'success', loading: true, }));
    await sleep(1000);
    navigate('/');
  }

  async function onSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    enqueueSnackbar('网络错误，请稍后再试', { variant: 'success' });
    if (+new Date() > 0) return;
    try {
      if (!captchaRef.current) throw new Error('网络错误，请稍后再试')

      const data = new FormData(event.currentTarget);
      const email = data.get('email') as LoginState['formData']['email'];
      const password = data.get('password') as LoginState['formData']['password'];
      if (!email || !password) throw new Error('请填写完整');

      setState((preState) => ({
        ...preState,
        loading: true,
      }));

      const res = await captchaRef.current.execute({ async: true });
      if (!res) throw new Error('网络错误，请稍后再试');

      const { response } = res;
      await handleVerificationSuccess({ email, password, hcaptchaToken: response });
    } catch (error) {
      console.log(error);
      setState((preState) => ({ ...preState, noticeMessage: String(error), showNotice: true, noticeType: 'error' }));
    } finally {
      setState((preState) => ({ ...preState, loading: false }));
    }
  }
  
  return (
    <MainCardWrapper>
      <Notice
        open={state.showNotice}
        message={state.noticeMessage}
        onClose={() => { setState((preState) => ({ ...preState, showNotice: false, noticeMessage: '' })) }}
        type={state.noticeType}
      ></Notice>
      <Container component="main" maxWidth="xs" sx={{ padding: '30px 20px' }}>
        <Box
          sx={{
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
          <Box component="form" onSubmit={ onSubmit } sx={{ mt: 1 }} autoComplete="off">
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
                <Typography
                  component={Link}
                  to="/account"
                  variant="subtitle1"
                  sx={{ textDecoration: 'none', color: '#1976d2', ":hover": { color: '#08437c' } }}
                >
                  Forgot password?
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open= {state.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <HCaptcha
          sitekey="74092ba4-fd86-467b-8670-579af8ebf2d4"
          ref={captchaRef}
          size='invisible'
          theme={theme.palette.mode}
          onVerify={() => {}}
        />
      </Container>
    </MainCardWrapper>
  );
}