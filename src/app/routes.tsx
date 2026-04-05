import { createBrowserRouter } from 'react-router';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
