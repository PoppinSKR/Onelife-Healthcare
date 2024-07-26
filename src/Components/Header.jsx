import React, { useState, useEffect } from 'react';
// import logo from './logo.png'


const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <nav>
        <div className="nav-content">
          <div className="logo">
          <div className="logo-container">
      <img src='https://www.freepnglogos.com/uploads/medical-logo-png-5.png' alt="logo" className="logo-image" />
      <span className="logo-text">One Life Health Care</span>
    </div>
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">ContactUs</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
