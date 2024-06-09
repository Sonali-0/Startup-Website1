import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvW3crC79OOpuSAPhAFhmUhynDVJIStWLUg568yuN0Nd3BwuU0sNldZ4iVhG-1Tsg1j9o&usqp=CAU" alt="Logo" /> 
      </div>
      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={handleNavLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
        <li><a href="#services" onClick={handleNavLinkClick}>Services</a></li>
        <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
      </ul>
      <div className="search-icon" onClick={toggleNav}>
        <i className="fa fa-search"></i>
      </div>
    </nav>
  );
};

export default Navbar;
