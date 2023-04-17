import LazyLoader from 'components/LazyLoader';
import MinimalLayout from 'layout/MinimalLayout';

const SignIn = LazyLoader(() => import('pages/authless/SignIn'));

const AuthlessRoutes = [
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

export default AuthlessRoutes;
