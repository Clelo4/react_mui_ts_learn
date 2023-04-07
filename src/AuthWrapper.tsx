import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { AuthStateType } from './enum';
import Loader from './components/Loader';
import { getUserInfo } from 'utils/api';
import { setAuth } from 'store/account';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import LazyLoader from 'components/LazyLoader';

const SignIn = LazyLoader(() => import('pages/authless/SignIn'));

function AuthWrapper() {
  console.log('AuthWrapper start');
  const account = useAppSelector((state) => state.account);
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    console.log('AuthWrapper useEffect');
    if (account.isAuth === AuthStateType.INITIAL) {
      getUserInfo()
        .then((res) => {
          dispath(setAuth(res.code === 0 ? AuthStateType.LOGINED : AuthStateType.NEED_LOGIN));
        })
        .catch();
    } else if (account.isAuth === AuthStateType.LOGINED) {
      if (location.pathname === '/signin') {
        enqueueSnackbar('已登录，正在为您跳转到账户管理页面', { variant: 'success' });
        navigate('/account', { replace: true });
      }
    } else {
      if (location.pathname !== '/signin') enqueueSnackbar('请登录', { variant: 'error' });
    }
  }, [dispath, account.isAuth, navigate, location, enqueueSnackbar]);

  console.log('AuthWrapper end');
  if (account.isAuth === AuthStateType.NEED_LOGIN && location.pathname !== '/signin') {
    return <SignIn></SignIn>;
  } else if (
    (account.isAuth === AuthStateType.LOGINED && location.pathname !== '/signin') ||
    (account.isAuth === AuthStateType.NEED_LOGIN && location.pathname === '/signin')
  ) {
    return <Outlet></Outlet>;
  }
  return <Loader></Loader>;
}

export default AuthWrapper;
