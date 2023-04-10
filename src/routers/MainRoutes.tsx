import Dashboard from 'pages/Dashboard';
import Account from 'pages/Account';
import MainLayout from 'layout/MainLayout';
import { redirect } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import ChatGPT from 'pages/ChatGPT';

const MainRoutes = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        loader: async () => {
          return redirect('/dashboard');
        }
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'account',
        element: <Account />
      },
      {
        path: 'chatGPT',
        element: <ChatGPT />
      }
    ]
  }
];

export default MainRoutes;
