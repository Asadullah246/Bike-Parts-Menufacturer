import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../Firebase.init';
import useAdmin from '../../Shared/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
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

                        {
                            !admin && <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                                <li><Link to='/dashboard/myReview'>Add Review</Link></li>
                            </>
                        }
                        <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                        {
                            admin && <>
                                <li><Link to='/dashboard/addProducts'>Add Products</Link></li>
                                <li><Link to='/dashboard/manageOrders'>Manage Orders</Link></li>
                                <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                                <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li></>
                        }

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;