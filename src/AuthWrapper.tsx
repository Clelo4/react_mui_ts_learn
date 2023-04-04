import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { AuthStateType } from './enum';
import Loader from './components/Loader';
import { getUser } from 'utils/api';
import { setAuth } from 'store/account';
import { useAppDispatch, useAppSelector } from 'store/hooks';


function AuthWrapper() {
  const account = useAppSelector((state) => state.account);
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (account.isAuth === AuthStateType.NEED_LOGIN) {
      getUser().then((res) => {
        if (res.code === 0) {
          dispath(setAuth(AuthStateType.LOGINED));
        } else {
          dispath(setAuth(AuthStateType.NEED_LOGIN));
          if (window.location.pathname !== '/signin') {
            enqueueSnackbar('请登录', { variant: 'info' });
            navigate('/signin');
          }
        }
      }).catch();
    }
    if (account.isAuth === AuthStateType.LOGINED && window.location.pathname === '/signin') {
      navigate('/account');
    }
  }, [dispath, navigate, account.isAuth, enqueueSnackbar]);
  
  if (account.isAuth === AuthStateType.NEED_LOGIN && window.location.pathname !== '/signin') {
    return (
      <Loader></Loader>
    )
  }

  return (
    <Outlet></Outlet>
  );
}

export default AuthWrapper;
