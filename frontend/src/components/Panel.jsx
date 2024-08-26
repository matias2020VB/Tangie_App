import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { DashboardAdmin } from './DashboardAdmin';
import { Dashboard } from './Dashboard';

export const Panel = () => {

    const { user } = useContext(UserContext);
    console.log(user.role)
    return (
        <>
            {
                // User
                user.role === '2' ? (
                    <Dashboard />
                // Admin
                ):(
                    <DashboardAdmin />
                )
            }
        </>
    )
}