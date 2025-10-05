import React, { useState, useEffect } from 'react';


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Your image URL - Replace this with your actual image
  const heroImageUrl = process.env.PUBLIC_URL + "/Images/Hero_banner.png";

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
     
      <section className="hero-section" id='home'>
        <div className="hero-container">
          {/* Live Projects Button */}
          <button className={`live-projects-btn ${isVisible ? 'visible' : ''}`}>
            Live Projects
          </button>

          <div className="hero-content">
            {/* Left Content */}
            <div className={`hero-left ${isVisible ? 'visible' : ''}`}>
              <h1 className="hero-title">Hello. I am Moin Shaikh</h1>
              {/* <span className=''> Website Manager | Ecommerce & Digital Strategy 
 </span> */}
              <span class="summary-tag">Professional Summary →</span>

              <p className="hero-description">
                <br/>
                I'm a creative and detail-oriented Front-End Developer with 4.5 years of 
                experience building responsive, accessible, and user-focused websites. My 
                expertise includes HTML5, CSS3, JavaScript, React.js, and MySQL. I build 
                scalable web apps and CMS solutions, working with tools like WordPress, 
                Tailwind CSS, GitHub, and Firebase.
              </p>

              <span className="award-icon">🏆</span>
                <span className="award-line">Recognized for achieving 3× sales acceleration across B2B & B2C markets (Turkey, Middle East, USA, Italy)</span>

              {/* Social Icons */}
              <div className={`social-icons ${isVisible ? 'visible' : ''}`}>
                <a 
                  href="mailto:moinshaikh19@gmail.com" 
                  className="social-icon email"
                  aria-label="Email"
                  title="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>

                <a 
                  href="https://github.com//moinshiakh" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a 
                  href="https://linkedin.com/in/moin-shaikh-161608112" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon linkedin"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a
                  href="https://wa.me/8097275865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12.02 0C5.39 0 .01 5.37.01 12a11.9 11.9 0 0 0 1.64 6.02L0 24l6.21-1.63A11.93 11.93 0 0 0 12.02 24c6.63 0 12.01-5.37 12.01-12s-5.38-12-12.01-12zm0 0zm-8.5 20.02a9.92 9.92 0 0 1-5.07-1.39l-.36-.21-3.68.97.98-3.58-.24-.37a9.95 9.95 0 0 1-1.54-5.33c0-5.52 4.49-10 10.01-10a9.94 9.94 0 0 1 7.08 2.93 9.95 9.95 0 0 1 2.93 7.07c0 5.52-4.49 10.01-10.01 10.01zm5.53-7.54c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.36.23-.66.08a8.18 8.18 0 0 1-2.41-1.49 9.04 9.04 0 0 1-1.67-2.07c-.17-.3 0-.46.13-.61.13-.15.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.15-.68-1.64-.93-2.24-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.52.08-.8.38-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.25 3.1c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.5 1.75.65.73.23 1.38.2 1.9.12.58-.08 1.77-.72 2.02-1.43.25-.7.25-1.3.18-1.43-.07-.13-.25-.2-.55-.35z" />
                  </svg>

                </a>

                
              </div>
              
            </div>
            

            {/* Right Content - Image */}
            <div className={`hero-right ${isVisible ? 'visible' : ''}`}>
              <div className="image-container">
                {/* Decorative Shapes */}
                <div className="decorative-shape shape-1"></div>
                <div className="decorative-shape shape-2"></div>
                <div className="decorative-shape shape-3"></div>
                <div className="decorative-shape shape-4"></div>

                {/* Image Wrapper */}
                <div className="image-wrapper">
                  {/* Loading Placeholder */}
                  <div className={`image-placeholder ${imageLoaded ? 'hidden' : ''}`}>
                    <div className="loading-spinner"></div>
                  </div>

                  {/* Hero Image */}
                  <img 
                    src={heroImageUrl}
                    alt="Developer workspace with coding setup"
                    className={`hero-image ${imageLoaded ? 'loaded' : ''}`}
                    onLoad={handleImageLoad}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;