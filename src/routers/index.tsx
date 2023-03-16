
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ErrorPage from '../pages/errorPage';
import { Outlet } from 'react-router-dom';import {
  createBrowserRouter,
  Link,
} from 'react-router-dom';

export default createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World!<Outlet />
      <Link to="/login">login</Link>
      <Link to="/singUp">sign up</Link>
    </div>,
    errorElement: <ErrorPage />,
    children: [
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/singUp',
    element: <SignUp></SignUp>,
  },
]);