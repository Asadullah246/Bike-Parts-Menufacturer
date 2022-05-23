import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navLogo from "./../../../Images/Logos/NavbarLogo.png"

const Navbar = () => {
    const actived = ({ isActive }) => {
        return {
            color: isActive ? '#94C300' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
            backgroundColor: "white", 
        }
    }
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                <Link to="/" class="btn btn-ghost normal-case text-xl md:text-2xl lg:text-3xl pl-2">MYPARTS</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
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
            <div class="navbar-end mr-12 lg:mr-4">
                <Link to='/aboutMe'>About Me</Link>
            </div>
        </div>
    );
};

export default Navbar;