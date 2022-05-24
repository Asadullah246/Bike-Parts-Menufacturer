import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label for="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/myReview'>Add Review</Link></li>
                        <li><Link to='/dashboard/myProfile'>My Profile</Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;