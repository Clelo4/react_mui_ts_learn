import LazyLoader from 'components/LazyLoader';
import MinimalLayout from 'layout/MinimalLayout';

const SignIn = LazyLoader(() => import('pages/authless/SignIn'));

const AuthenticationRoutes = [{
    path: '/',
    element: <MinimalLayout />,
    children: [
      {
        path: '/signin',
        element: <SignIn />,
      },
    ]
}];

export default AuthenticationRoutes;
