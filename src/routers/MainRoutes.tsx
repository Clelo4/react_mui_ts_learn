import Home from 'pages/Home';
import Account from 'pages/Account';
import MainLayout from 'components/MainLayout';

const MainRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
];

export default MainRoutes;
