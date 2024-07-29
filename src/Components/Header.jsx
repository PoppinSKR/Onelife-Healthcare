import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

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
          <button className={`nav-toggle ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
          <ul className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <li>
              <a href="#home" onClick={toggleNav}>Home</a>
            </li>
            <li>
              <a href="#features" onClick={toggleNav}>Features</a>
            </li>
            <li>
              <a href="#about-us" onClick={toggleNav}>About Us</a>
            </li>
            <li>
              <a href="#services" onClick={toggleNav}>Services</a>
            </li>
            <li>
              <a href="#testimonials" onClick={toggleNav}>Testimonials</a>
            </li>
            <li>
              <a href="#contactUs" onClick={toggleNav}>ContactUs</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;


