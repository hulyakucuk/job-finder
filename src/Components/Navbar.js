import React from 'react'
import {FaBars,FaTimes} from "react-icons/fa";

export default function Navbar() {
  return (
    <header>
        <h3>Logo</h3>
        <nav>
            <a href='#'>Jobs</a>
            <a href='#'>Companies</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Blog</a>
            <a href='#'>Login</a>
            <a href='#'>Register</a>
        <button><FaTimes/></button>
        </nav>
        <button><FaBars/></button>
    </header>
  )
}
