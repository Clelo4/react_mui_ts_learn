import ErrorPage from 'pages/errorPage';
import Home from 'pages/Home';
import Account from 'pages/Account';

const MainRoutes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'account',
        element: <Account />,
      }
    ],
  },
];

export default MainRoutes;
