import React, { useState, useEffect } from 'react';

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Experience Data
  const experienceData = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: "Leading a team of 5 developers in building responsive web applications using React.js, TypeScript, and modern CSS frameworks. Implemented CI/CD pipelines and improved application performance by 40%.",
      skills: ["React.js", "TypeScript", "Redux", "CSS3", "Git"],
      icon: "💼"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations Ltd.",
      location: "New York, NY",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client-facing web applications. Collaborated with UX designers to implement pixel-perfect designs and ensure optimal user experience.",
      skills: ["JavaScript", "React.js", "SASS", "Bootstrap", "REST APIs"],
      icon: "💻"
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartUp Hub",
      location: "Austin, TX",
      period: "2017 - 2019",
      description: "Built responsive websites and web applications for various clients. Worked with cross-functional teams to deliver projects on time and within budget.",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress"],
      icon: "🚀"
    }
  ];

  // Education Data
  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2015 - 2017",
      description: "Specialized in Software Engineering and Web Technologies. Completed thesis on 'Modern Web Application Architecture and Performance Optimization'.",
      achievements: ["GPA: 3.8/4.0", "Dean's List", "Research Assistant"],
      icon: "🎓"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      location: "Berkeley, CA",
      period: "2011 - 2015",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development.",
      achievements: ["GPA: 3.6/4.0", "Honor Society Member", "Coding Club President"],
      icon: "📚"
    },
    {
      id: 3,
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      location: "Online",
      period: "2016",
      description: "Intensive 12-week program focused on full-stack web development, covering modern frameworks and best practices.",
      achievements: ["Top 10% Graduate", "Final Project Award", "100% Completion"],
      icon: "💡"
    }
  ];

  return (
    <>
     
      <section className="experience-education-section" id='EdEx'>
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <h2 className="section-title">Experience & Education</h2>
            <p className="section-subtitle">My professional journey and academic background</p>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <span className="tab-icon">💼</span>
              Experience
            </button>
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <span className="tab-icon">🎓</span>
              Education
            </button>
          </div>

          {/* Timeline */}
          <div className="timeline-container">
            <div className="timeline-line"></div>

            {activeTab === 'experience' && (
              <>
                {experienceData.map((item) => (
                  <div key={item.id} className="timeline-item">
                    <div className="timeline-dot">{item.icon}</div>
                    <div className="timeline-content">
                      <div className="content-header">
                        <h3 className="content-title">{item.title}</h3>
                        <div className="content-company">{item.company}</div>
                        <div className="content-meta">
                          <div className="meta-item">
                            <span>📍</span>
                            <span>{item.location}</span>
                          </div>
                          <div className="meta-item">
                            <span>📅</span>
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </div>
                      <p className="content-description">{item.description}</p>
                      <div className="content-tags">
                        {item.skills.map((skill, index) => (
                          <span key={index} className="tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeTab === 'education' && (
              <>
                {educationData.map((item) => (
                  <div key={item.id} className="timeline-item">
                    <div className="timeline-dot">{item.icon}</div>
                    <div className="timeline-content">
                      <div className="content-header">
                        <h3 className="content-title">{item.degree}</h3>
                        <div className="content-company">{item.institution}</div>
                        <div className="content-meta">
                          <div className="meta-item">
                            <span>📍</span>
                            <span>{item.location}</span>
                          </div>
                          <div className="meta-item">
                            <span>📅</span>
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </div>
                      <p className="content-description">{item.description}</p>
                      <div className="content-tags">
                        {item.achievements.map((achievement, index) => (
                          <span key={index} className="tag">{achievement}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceEducation;