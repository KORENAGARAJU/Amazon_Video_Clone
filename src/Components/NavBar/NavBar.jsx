import React from 'react'
import './NavBar.css' 
import { Link } from 'react-router-dom'
import Logo from '../../assets/NavBar/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


const NavBar = ()=>{
  return (
   <>
    <nav className='Nav-bar'>
        <div className='nav-wrapper'>
           <div className='logo'>
             <img src={Logo} alt='logo' style={{width:'90px',paddingTop:'4px'}} />
           </div>
           <ul className='ul-flex'>
            <li className='nav-list-item'>
                <Link to='/' className='Nav-Link'>Home </Link>
                <MdOutlineKeyboardArrowUp className='up-arrow' />
            </li>

            <li className='nav-list-item'>
                <Link to='/store' className='Nav-Link'>Store</Link>
                <MdOutlineKeyboardArrowUp className='up-arrow' />
            </li>
            <li>
                <Link to='/Live TV' className='Nav-Link'>Live TV</Link>
            </li>
            <li className='nav-list-item'>
                <Link to='/Categories' className='Nav-Link'>Categories</Link>
                <MdOutlineKeyboardArrowUp className='up-arrow' />
            </li>
            <li className='nav-list-item'>
                <Link to='/My Stuff' className='Nav-Link'>My Stuff</Link>
                <MdOutlineKeyboardArrowUp className='up-arrow'/>
            </li>
           </ul>
           <div className='search-Profile-wrapper'>
              <FaSearch style={{fontSize:'25px'}}/>
              <FaUserCircle style={{fontSize:'25px'}} />
           </div>
        </div>
    </nav>
   </>
  )
}

export default NavBar ; 
