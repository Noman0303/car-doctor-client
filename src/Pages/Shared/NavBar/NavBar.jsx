import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Providers/AuthProvider'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('User logged out successfully');  
                toast.success('Log Out successful!', { autoClose: 3000 });
            })
            .catch(error => {
                console.error(error); 
            })

    }

    const navlink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><a className=" text-[#FF3811] ">Appointment</a></li>
        {
            user?.email? 
            <>
            <li><NavLink to='/bookings'>My Bookings</NavLink></li>
            </> :
            <></>
        }
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
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center space-x-4">
                        <span
                            className="relative"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img
                                src={user.photoURL}
                                className="rounded-full w-8 h-auto inline-block"
                                alt="User profile"
                            />
                            {isHovered && (
                                <span className="absolute right-8 md:right-10 lg:right-10 w-auto p-1 text-xs text-white bg-black rounded-md">
                                    {user.displayName}
                                </span>
                            )}
                        </span>
                        <button
                            className="btn btn-sm btn-outline lg:btn-base lg:text-lg"
                            onClick={handleLogOut}
                        >
                            Log Out
                        </button>
                    </div>
                ) : (
                    <div className='flex gap-2 flex-col md:flex-row'>
                        <Link to="/login"><button className="btn btn-sm btn-outline lg:btn-base lg:text-lg">Log in</button></Link>
                        <Link to="/register"><button className="btn btn-sm btn-outline lg:btn-base lg:text-lg">sign Up</button></Link>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default NavBar