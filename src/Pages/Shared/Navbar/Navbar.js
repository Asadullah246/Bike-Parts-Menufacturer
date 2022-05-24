import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../Firebase.init';
import navLogo from "./../../../Images/Logos/NavbarLogo.png"

const Navbar = () => {
    const actived = ({ isActive }) => {
        return {
            color: isActive ? '#94C300' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
            backgroundColor: "white",
        }
    }
    const[user]=useAuthState(auth);
    const signout=()=>{
        auth.signOut();
    }
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink style={actived} to='/Dashboard'>Dashboard</NavLink></li>
                        <li><NavLink style={actived} to='/myOrders'>My Orders</NavLink></li>
                        <li><NavLink style={actived} to='/addAReview'>Add a Review</NavLink></li>
                        <li><NavLink style={actived} to='/myProfile'>My Profile</NavLink></li>
                        <li><NavLink style={actived} to='/manageAllOrders'>Manage All Orders</NavLink></li>
                        <li><NavLink style={actived} to='/addAProduct'>Add A Product</NavLink></li>
                        <li><NavLink style={actived} to='/makeAdmin'>Make Admin</NavLink></li>
                        <li><NavLink style={actived} to='/manageProducts'>Manage Products</NavLink></li>
                        <li><NavLink style={actived} to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <img src={navLogo} alt="Navbar logo" className='w-[24px] lg:w-[32px] lg:h-auto' />
                <Link to="/" className="btn btn-ghost normal-case text-xl md:text-2xl lg:text-3xl lg:pl-2">MYPARTS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink style={actived} to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink style={actived} to='/login'>{user?"signOut":"login"} </NavLink></li>
                    <button onClick={signout}>to sign out</button>
                    <li><NavLink style={actived} to='/myOrders'>My Orders</NavLink></li>
                    <li><NavLink style={actived} to='/addAReview'>Add a Review</NavLink></li>
                    <li><NavLink style={actived} to='/myProfile'>My Profile</NavLink></li>
                    <li><NavLink style={actived} to='/manageAllOrders'>Manage All Orders</NavLink></li>
                    <li><NavLink style={actived} to='/addAProduct'>Add A Product</NavLink></li>
                    <li><NavLink style={actived} to='/makeAdmin'>Make Admin</NavLink></li>
                    <li><NavLink style={actived} to='/manageProducts'>Manage Products</NavLink></li>
                    <li><NavLink style={actived} to='/blogs'>Blogs</NavLink></li>
                    <li><NavLink style={actived} to='/aboutMe'>About Me</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end lg:pr-8 lg:hidden">
                <div className='flex-none lg:hidden'>
                <label for="dashboard" className="btn  btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>

                </div>
                
            </div>
        </div>
    );
};

export default Navbar;