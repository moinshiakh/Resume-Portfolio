import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          .footer {
            background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
            padding: 2rem 0;
            color: white;
          }

          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
          }

          /* Logo Section */
          .footer-logo-section {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .footer-logo-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #4ade80 0%, #3b82f6 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .footer-logo-icon-text {
            color: white;
            font-size: 16px;
            font-weight: bold;
          }

          .footer-logo-text {
            font-size: 24px;
            font-weight: bold;
            color: white;
          }

          .footer-logo-vedant {
            color: #4ade80;
          }

          .footer-tagline {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.7);
            margin-top: -5px;
          }

          /* Divider Line */
          .footer-divider {
            width: 100%;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
          }

          /* Copyright */
          .footer-copyright {
            text-align: center;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
          }

          .footer-copyright-text {
            margin: 0;
          }

          .footer-heart {
            color: #ef4444;
            animation: heartbeat 1.5s ease-in-out infinite;
          }

          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.1); }
            50% { transform: scale(1); }
          }

          /* Responsive Styles */
          @media (max-width: 767.98px) {
            .footer {
              padding: 1.5rem 0;
            }

            .footer-content {
              gap: 1.25rem;
            }

            .footer-logo-icon {
              width: 35px;
              height: 35px;
            }

            .footer-logo-icon-text {
              font-size: 14px;
            }

            .footer-logo-text {
              font-size: 20px;
            }

            .footer-tagline {
              font-size: 11px;
            }

            .footer-copyright {
              font-size: 13px;
            }
          }

          @media (max-width: 575.98px) {
            .footer {
              padding: 1.25rem 0;
            }

            .footer-logo-icon {
              width: 32px;
              height: 32px;
            }

            .footer-logo-icon-text {
              font-size: 13px;
            }

            .footer-logo-text {
              font-size: 18px;
            }

            .footer-tagline {
              font-size: 10px;
            }

            .footer-copyright {
              font-size: 12px;
              padding: 0 1rem;
            }
          }
        `}
      </style>

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