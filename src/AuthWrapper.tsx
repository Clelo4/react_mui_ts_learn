import { Outlet } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useNavigate } from 'react-router-dom';

import { AuthStateType } from './enum';
import Loader from './components/Loader';
import { useEffect } from 'react';
import { getUser } from 'utils/api';
import { setAuth } from 'store/account';

function AuthWrapper() {
  const account = useAppSelector((state) => state.account);
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (account.isAuth === AuthStateType.NEED_LOGIN) {
      getUser().then((res) => {
        if (res.code === 0) {
          dispath(setAuth(AuthStateType.LOGINED));
        } else {
          dispath(setAuth(AuthStateType.NEED_LOGIN));
          if (window.location.pathname !== '/signin')
            navigate('/signin');
        }
      }).catch();
    }
    if (account.isAuth === AuthStateType.LOGINED && window.location.pathname === '/signin') {
      navigate('/account');
    }
  }, [dispath, navigate, account.isAuth]);
  
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
