
import Sign from '../pages/sign';
import ErrorPage from '../pages/errorPage';
import { Outlet } from 'react-router-dom';import {
  createBrowserRouter,
  Link,
} from 'react-router-dom';

export default createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World!<Outlet /><Link to="/login">login</Link>;</div>,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
  {
    path: '/login',
    element: <Sign></Sign>,
  },
]);