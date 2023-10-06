// import React from 'react';

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const items = <>
        <li className="text-xl font-semibold"><NavLink to='/'>Home</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to='/no'>no</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to='/ho'>ho</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to='/login'>Login</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
            <div className="navbar bg-base-100 px-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl md:block hidden font-bold ">Social Events</a>
                </div>
                {/* <div className="navbar-center "> */}
                {/* <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul> */}
                {/* </div> */}
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        {items}
                    </ul>
                    <a className="btn btn-ghost normal-case text-3xl font-bold md:hidden block">Social Events</a>

                </div>
            </div>
    );
};

export default Navbar;