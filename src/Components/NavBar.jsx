import React from 'react';
import Vector from "../assets/Vector.png";
import Logo from "../assets/logo.png";
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/apps'>Apps</NavLink></li>
        <li><NavLink to='/installation'>Installation</NavLink></li>
      </ul>
    </div>
    <NavLink to='/' className="btn btn-ghost text-lg font-bold gradient-text lg:ml-[80px]"><img className='w-[40px]' src={Logo} alt="" /> HERO.IO</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-medium text-[18px] px-1">
      <li><NavLink to='/' end className={({ isActive }) => isActive ? 'gradient-text relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#8a63d2] after:to-[#a273ff]' : 'text-gray-800 hover:text-[#8a63d2] transition'}>Home</NavLink></li>
      <li><NavLink to='/apps' className={({ isActive }) => isActive ? 'gradient-text relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#8a63d2] after:to-[#a273ff]' : 'text-gray-800 hover:text-[#8a63d2] transition'}>Apps</NavLink></li>
      <li><NavLink to='/installation' className={({ isActive }) => isActive ? 'gradient-text relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#8a63d2] after:to-[#a273ff]' : 'text-gray-800 hover:text-[#8a63d2] transition'}>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='' className="btn gradient-btn gradient-btn:hover text-white font-medium text-[18px] mr-[80px]"><img src={Vector} alt="" />Contribute</NavLink>
  </div>
</div>
    );
};

export default NavBar;