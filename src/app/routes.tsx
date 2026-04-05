import { createBrowserRouter } from 'react-router'
import { LandingPage } from './components/LandingPage'
import { Login } from './components/Login'
import { Signup } from './components/Signup'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
])
