import React from 'react'
import { useRef } from 'react';
import './navbar.css'
import { FaTimes, FaBars } from "react-icons/fa";


const Navbar2 = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
    <div className="anim">
    <div className="top">
        <p>Call Us: +91 9033033829</p>
      </div>
    </div>
    <header>
      <h1><span className='Giriraj'>Giriraj</span><span className='Exports'>Exports</span></h1>
      <nav ref={navRef}> 
        <a href='Copperware'>Copper Ware</a>
        <a href='/Brassware'>Brass Ware</a>
        <a href='/Bronzeware'>Bronze Ware</a>
        <a href='/Pujautensils'>Puja Utensils</a>
        <a href='/Statue'>Statue</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes/>
      </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
    </>
  )
}

export default Navbar2