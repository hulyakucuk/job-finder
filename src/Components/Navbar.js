import React from 'react'
import {FaBars,FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import "../Styles/main.css";
import { NavLink } from 'react-router-dom';
export default function Navbar() {

    const navRef=useRef();

    const showNav=()=>{
        navRef.current.classList.toggle("navbar");
    }
    
  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <NavLink to='/'>Jobs</NavLink>
            <NavLink to='/companies'>Companies</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        <button className='nav-btn nav-close-btn' onClick={showNav}><FaTimes/></button>
        </nav>
        <button className='nav-btn' onClick={showNav}><FaBars/></button>
    </header>
  )
}
