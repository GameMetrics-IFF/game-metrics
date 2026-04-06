import React from 'react'
import { Navigate } from 'react-router'

type Props = {
    children: React.ReactElement
}

export function ProtectedRoute({ children }: Props) {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="/login" />
    }

    return children
}
