import { Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { LandingPage } from './components/LandingPage'
import { ProtectedRoute } from './components/ProtectedRoute'

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <LandingPage />
                    </ProtectedRoute>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}
