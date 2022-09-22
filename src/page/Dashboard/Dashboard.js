import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile bg-slate-400">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  justify-center items-center">
                <h2 className='text-3xl font-bold text-center text-secondary  py-4'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side ">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu  p-4 overflow-y-auto w-52 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none mb-5' to={'/dashboard'}>My Order</Link></li>
                    <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none mb-5' to={'/dashboard/myreview'}>My Review</Link></li>
                    <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none mb-5' to={'/dashboard/myprofile'}>My Profile</Link></li>
                    {
                        admin && <li><Link className='btn bg-white text-black hover:bg-red-600 hover:text-white border-none' to={'/dashboard/users'}>All Users</Link></li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;