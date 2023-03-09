
import Sign from '../pages/sign';
import ErrorPage from '../pages/errorPage';
import { Outlet } from 'react-router-dom';import {
  createBrowserRouter,
} from 'react-router-dom';

export default createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World!<Outlet /></div>,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
  {
    path: '/login',
    element: <Sign></Sign>,
  },
]);