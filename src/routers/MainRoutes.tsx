import Home from 'pages/Home';
import Account from 'pages/Account';
import MainLayout from 'layout/MainLayout';
import { redirect } from 'react-router-dom';

const MainRoutes = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'account',
        element: <Account />
      }
    ]
  }
];

export default MainRoutes;
