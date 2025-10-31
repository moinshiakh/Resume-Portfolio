import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
     
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Logo Section */}
            <div className="footer-logo-section">
              <div className="footer-logo-icon">
                <span className="footer-logo-icon-text">MS</span>
              </div>
              <div>
                <div className="footer-logo-text">
                  Moin<span className="footer-logo-vedant"> Shaikh</span>
                </div>
                
              </div>
            </div>

            {/* Divider */}
            <div className="footer-divider"></div>

            {/* Copyright */}
            <div className="footer-copyright">
              <p className="footer-copyright-text">
                © {currentYear} Moin Shaikh. All rights reserved. Made with <span className="footer-heart">♥</span> by Moin
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;