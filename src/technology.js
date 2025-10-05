import React, { useState, useEffect } from 'react';

const TechnologySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const platforms = [
    { name: "Front End (HTML, CSS, JS)", icon: "🎨", position: "top-left", color: "#E34F26" },
    { name: "React", icon: "⚛️", position: "top", color: "#61DAFB" },
    { name: "Java", icon: "☕", position: "top-right", color: "#007396" },
    { name: "API", icon: "🔌", position: "bottom-right", color: "#00C853" },
    { name: "Version Control (Git)", icon: "🔀", position: "bottom", color: "#F05032" },
    { name: "CMS (Drupal, WordPress, Magento)", icon: "📝", position: "bottom-left", color: "#0073AA" }
  ];


  return (
    <>
      
      <section className="integration-section" id="technology">
        <div className="integration-container">
          {/* Main Content */}
          <div className={`integration-content ${isVisible ? 'visible' : ''}`}>
            {/* Left Side - Circular Platform Display */}
            <div className="platforms-circle">
              <div className="circle-container">
                {/* Circular Borders */}
                <div className="circle-border circle-border-1"></div>
                <div className="circle-border circle-border-2"></div>
                <div className="circle-border circle-border-3"></div>

                {/* Platform Icons */}
                {platforms.map((platform, index) => (
                  <div 
                    key={index}
                    className={`platform-icon ${platform.position}`}
                    title={platform.name}
                  >
                    {platform.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="integration-text">
              {/* <div className="integration-label">SKILLS ICON</div> */}
              <h2 className="integration-title">TECHNICAL SKILLS</h2>
              <p className="integration-description">
                 <ol type="I">
                    <li>Ecommerce : Transactional Websites, B2B/B2C Platforms, Shopify, Magento, Drupal, Wordpress </li>
                    <li>Technical Expertise: HTML5, CSS3, JavaScript (ES6+), CMS Platforms, Responsive Web Design </li>
                    <li>Collaboration: Requirement Gathering, Agile/Scrum, Project Planning, Testing & Delivery, ERP </li>
                    <li>Tools & Soft Skills: Git, GitHub, Jira, CI/CD Pipelines, Team Collaboration, Problem-Solving </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologySection;