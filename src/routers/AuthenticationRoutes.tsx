import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { getUser } from 'utils/api';
import { redirect } from "react-router-dom";

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
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
    ]
};

export default AuthenticationRoutes;
