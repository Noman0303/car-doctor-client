import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'

const NavBar = () => {

    const navlink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><a >About</a></li>
        <li><a >Services</a></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><a >Contact</a></li>
    </>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlink}
                    </ul>
                </div>
                <Link to='/'>
                <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end gap-2 flex flex-col-reverse md:flex-row">
                <a className="btn btn-outline text-[#FF3811] ">Appointment</a>
                <NavLink to='/login'><button className="btn btn-outline text-[#FF3811]" >Login</button></NavLink>
                <NavLink to='/register'><button className="btn btn-outline text-[#FF3811]" >Sign Up</button></NavLink>
            </div>
        </div>
    )
}

export default NavBar