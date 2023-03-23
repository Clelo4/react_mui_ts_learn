
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ErrorPage from '../pages/errorPage';
import {
  createBrowserRouter,
} from 'react-router-dom';
import { getUser } from '../utils/api';
import { redirect } from "react-router-dom";
import Home from '../pages/Home';
import Account from '../pages/Account';

export default createBrowserRouter([
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
  {
    path: '/signin',
    element: <SignIn></SignIn>,
    loader: async () => {
      const res = await getUser();
      if (res.code === 0) {
        return redirect("/account");
      }
      return null;
    },
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
    loader: async () => {
      const res = await getUser();
      if (res.code === 0) {
        return redirect("/account");
      }
      return null;
    },
  },
]);