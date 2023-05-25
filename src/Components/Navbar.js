import React from 'react'
import {FaBars,FaTimes} from "react-icons/fa";
import { useRef } from 'react';
import "../Styles/main.css";
export default function Navbar() {

    const navRef=useRef();

    const showNav=()=>{
        navRef.current.classList.toggle("navbar");
    }
    
  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href='#'>Jobs</a>
            <a href='#'>Companies</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Blog</a>
            <a href='#'>Login</a>
            <a href='#'>Register</a>
        <button className='nav-btn nav-close-btn' onClick={showNav}><FaTimes/></button>
        </nav>
        <button className='nav-btn' onClick={showNav}><FaBars/></button>
    </header>
  )
}
