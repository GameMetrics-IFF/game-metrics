import { createBrowserRouter } from 'react-router'
import { LandingPage } from './components/LandingPage'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { ProtectedRoute } from './components/ProtectedRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <LandingPage />
            </ProtectedRoute>
        ),
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
