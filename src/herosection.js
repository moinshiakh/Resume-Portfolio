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
              <button className="get-started-btn">
                Professional Summary
              </button>
              <p className="hero-description">
                I'm a creative and detail-oriented Front-End Developer with 4.5 years of 
                experience building responsive, accessible, and user-focused websites. My 
                expertise includes HTML5, CSS3, JavaScript, React.js, and MySQL. I build 
                scalable web apps and CMS solutions, working with tools like WordPress, 
                Tailwind CSS, GitHub, and Firebase.
              </p>
              
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