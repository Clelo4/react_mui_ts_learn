import LazyLoader from 'components/LazyLoader';
import MinimalLayout from 'layout/MinimalLayout';

const SignIn = LazyLoader(() => import('pages/authless/SignIn'));

const AuthenticationRoutes = [
  {
    path: 'signin',
    element: <MinimalLayout />,
    children: [
      {
        path: '',
        element: <SignIn />
      }
    ]
  }
];

export default AuthenticationRoutes;
