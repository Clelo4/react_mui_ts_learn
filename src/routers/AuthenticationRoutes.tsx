import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const SignIn = Loadable(lazy(() => import('pages/SignIn')));
const SignUp = Loadable(lazy(() => import('pages/SignUp')));

const AuthenticationRoutes = [{
    path: '/',
    element: <MinimalLayout />,
    children: [
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ]
}];

export default AuthenticationRoutes;
