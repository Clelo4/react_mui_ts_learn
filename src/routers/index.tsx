import { createBrowserRouter } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthlessRoutes from './AuthlessRoutes';
import AuthWrapper from '../AuthWrapper';
import ErrorPage from '../pages/ErrorPage';

const globalRouter = {
  path: '/',
  element: <AuthWrapper />,
  errorElement: <ErrorPage></ErrorPage>,
  children: [...AuthlessRoutes, ...MainRoutes]
};

export default createBrowserRouter([globalRouter]);
