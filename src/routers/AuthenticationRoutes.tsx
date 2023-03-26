import LazyLoader from 'components/LazyLoader';
import MinimalLayout from 'layout/MinimalLayout';

const SignIn = LazyLoader(() => import('pages/SignIn'));
const SignUp = LazyLoader(() => import('pages/SignUp'));

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
