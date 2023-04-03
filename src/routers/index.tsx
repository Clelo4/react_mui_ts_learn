import {
  createBrowserRouter,
} from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AuthWrapper from '../AuthWrapper';

const globalRouter = {
  path: '/',
  element: <AuthWrapper />,
  children: [
    ...AuthenticationRoutes,
    ...MainRoutes,
  ]
};

export default createBrowserRouter([
  globalRouter,
]);
