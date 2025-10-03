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
                            <li><a className="nav-link" href="#business">Home</a></li>
                            <li><a className="nav-link" href="#pricing">Menu 2</a></li>
                            <li><a className="nav-link" href="#features">Menu 3</a></li>
                            <li><a className="nav-link" href="#about">Menu 4</a></li>
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
                        <a className="mobile-nav-link" href="#business" onClick={closeMenu}>
                            Business
                        </a>
                        <a className="mobile-nav-link" href="#pricing" onClick={closeMenu}>
                            Pricing
                        </a>
                        <a className="mobile-nav-link" href="#features" onClick={closeMenu}>
                            Features
                        </a>
                        <a className="mobile-nav-link" href="#about" onClick={closeMenu}>
                            About
                        </a>
                    
                    </div>
                </div>
            </nav>
        </>

    );
       
};

export default Navigation;