import React, { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
    <>
    <header>
  {/* <img src={} alt="logo" height={300}  />   */}
    <nav ref={navRef}>   
        <a href='/CopperWare'>Copperware</a>
        <a href='/BrassWare'>Brassware</a>
        <a href='/BronzeWare'>Bronzeware</a>   
        <a href='/PujaPage'>Puja Utensils</a>
        <a href='/IdeolPage'>Idols</a>  
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

export default Navbar
