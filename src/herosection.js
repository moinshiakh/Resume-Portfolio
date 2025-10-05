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
     
      <section className="hero-section">
        <div className="hero-container">
          {/* Live Projects Button */}
          <button className={`live-projects-btn ${isVisible ? 'visible' : ''}`}>
            Live Projects
          </button>

          <div className="hero-content">
            {/* Left Content */}
            <div className={`hero-left ${isVisible ? 'visible' : ''}`}>
              <h1 className="hero-title">Hello. I am Moin</h1>
              <span class="summary-tag">Professional Summary →</span>

              <p className="hero-description">
                <br/>
                I'm a creative and detail-oriented Front-End Developer with 4.5 years of 
                experience building responsive, accessible, and user-focused websites. My 
                expertise includes HTML5, CSS3, JavaScript, React.js, and MySQL. I build 
                scalable web apps and CMS solutions, working with tools like WordPress, 
                Tailwind CSS, GitHub, and Firebase.
              </p>

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