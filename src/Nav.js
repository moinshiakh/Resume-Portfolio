//import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/style.css';
import React, { useEffect } from 'react'
import { useState } from 'react';

export const  Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 992);
        if (window.innerWidth > 992) {
            setIsMenuOpen(false);
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

}, []);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



    return(
         <>
            <nav className="navigation-header">
                <div className="nav-container">

                    {/* Brand/Logo Section */}
                    <div className="logo-section">
                        <div className="logo-icon">
                            <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>MS</span>
                        </div>
                        <div className="logo-text-container">
                            <div className="logo-text">
                                Moin <span className="logo-vedant">Shaikh</span>
                            </div>
                            <div className="tagline">
                                Web Developer
                            </div>
                        </div>
                        
                    </div>

                    {/* Desktop Navigation */}
                    <div className="desktop-nav">
                        <ul className="nav-menu">
                            <li><a className="nav-link" href="#home">Home</a></li>
                            <li><a className="nav-link" href="#technology">Skills</a></li>
                            <li><a className="nav-link" href="#portfolio">Portfolios</a></li>
                            <li><a className="nav-link" href="#EdEx">Education & Experience</a></li>
                            <li><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="mobile-toggle"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                        aria-expanded={isMenuOpen}
                    >
                        <div className={`hamburger-menu ${isMenuOpen ? 'hamburger-active' : ''}`}>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                        </div>
                    </button>

                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
                    <div className="mobile-nav-links">
                        <a className="mobile-nav-link" href="#home" onClick={closeMenu}>
                            Home
                        </a>
                        <a className="mobile-nav-link" href="#technology" onClick={closeMenu}>
                            Skills
                        </a>
                        <a className="mobile-nav-link" href="#portfolio" onClick={closeMenu}>
                            Portfolios
                        </a>
                        <a className="mobile-nav-link" href="#EdEx" onClick={closeMenu}>
                            Education & Experience
                        </a>
                        <a className="mobile-nav-link" href="#contact" onClick={closeMenu}>
                            Contact
                        </a>
                    
                    </div>
                </div>
            </nav>
        </>

    );
       
};

export default Navigation;