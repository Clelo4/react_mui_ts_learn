import { createBrowserRouter } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AuthWrapper from '../AuthWrapper';
import ErrorPage from '../pages/ErrorPage';

const globalRouter = {
  path: '/',
  element: <AuthWrapper />,
  errorElement: <ErrorPage></ErrorPage>,
  children: [...AuthenticationRoutes, ...MainRoutes]
};

export default createBrowserRouter([globalRouter]);
