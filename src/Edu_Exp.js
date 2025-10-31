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
      title: "Web Developer",
      company: "1 Source BPO .",
      location: "Mumbai",
      period: "2024 - 2025",
      description: "FrontEnd developers in building responsive web applications using React.js, TypeScript, and modern CSS frameworks.",
      skills: ["React.js", "TypeScript", "Javascript", "CSS3"],
      icon: "💼",
      color: "#667eea"
    },
    {
      id: 2,
      title: "Frontend CMS Developer",
      company: "Trigent Software Solution",
      location: "Mumbai",
      period: "2021 - 2024",
      description: "Developed and maintained multiple client-facing web applications. Collaborated with UX designers to implement pixel-perfect designs.",
      skills: ["JavaScript", "CMS", "Frontend", "Bootstrap"],
      icon: "💻",
      color: "#764ba2"
    },
    {
      id: 3,
      title: "Web Developer",
      company: "HypeBrand Pvt Ltd.",
      location: "Mumbai",
      period: "2021 - 2021 (6 Month)",
      description: "Built responsive websites and web applications for various clients. Worked with cross-functional teams to deliver projects on time.",
      skills: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "MySQL"],
      icon: "🚀",
      color: "#f093fb"
    },
    {
      id: 4,
      title: "Web Developer",
      company: "MilesAhead Tech Pvt Ltd.",
      location: "Mumbai",
      period: "2019 - 2021",
      description: "Assisted in developing client websites and learning modern web development practices and workflows.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
      icon: "📱",
      color: "#4facfe"
    },
    {
      id: 5,
      title: "Web Developer",
      company: "3 Star IT Solution",
      location: "Mumbai",
      period: "2017 - 2018",
      description: "Created custom websites for small businesses and startups. Managed projects from design to deployment.",
      skills: ["Web Design", "PHP", "MySQL", "SEO"],
      icon: "🎨",
      color: "#43e97b"
    },
    {
      id: 6,
      title: "Business",
      company: "RIJMI Engineering Works",
      location: "Mumbai",
      period: "2014 - 2017",
      description: "Verified suppliers adherence to contract specifications, quality of material delivered, and schedules of delivery.",
      skills: ["Other"],
      icon: "🎯",
      color: "#fa709a"
    }
  ];

  // Education Data
  const educationData = [
    {
      id: 1,
      degree: "Bachelor in Information Technology",
      institution: "Shivaji University",
      location: "Kolhapur",
      period: "2010 - 2014",
      description: "Comprehensive study of computer science fundamentals including Web structures, and software engineering.",
      achievements: ["GPA: 6.0/10.0"],
      icon: "🎓",
      color: "#667eea"
    },
    {
      id: 2,
      degree: "Diploma in Computer Technology",
      institution: "University of Mumbai",
      location: "Karad - Satara",
      period: "2007 - 2010",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, and software engineering.",
      achievements: ["GPA: 7.0/10.0",],
      icon: "📚",
      color: "#764ba2"
    },
    {
      id: 3,
      degree: "Java FullStack Developer",
      institution: "IT Vedant Academy",
      location: "Online",
      period: "2025-2026",
      description: "Intensive 12 Month program focused on full-stack web development, covering modern frameworks and best practices.",
      achievements: ["React Certificate", "Web Essential Certificate", "MySQL Certificate"],
      icon: "💡",
      color: "#f093fb"
    },
    
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

          {/* Grid Layout */}
          <div className="row">
            {activeTab === 'experience' && (
              <>
                {experienceData.map((item) => (
                  <div key={item.id} className="col-12 col-md-4 mb-4">
                    <div className="grid-card">
                      <div className="card-icon-wrapper">
                        {item.icon}
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <div className="card-company">{item.company}</div>
                      <div className="card-meta">
                        <div className="meta-item">
                          <span>📍</span>
                          <span>{item.location}</span>
                        </div>
                        <div className="meta-item">
                          <span>📅</span>
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <p className="card-description">{item.description}</p>
                      <div className="card-tags">
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
                  <div key={item.id} className="col-12 col-md-4 mb-4">
                    <div className="grid-card">
                      <div className="card-icon-wrapper">
                        {item.icon}
                      </div>
                      <h3 className="card-title">{item.degree}</h3>
                      <div className="card-company">{item.institution}</div>
                      <div className="card-meta">
                        <div className="meta-item">
                          <span>📍</span>
                          <span>{item.location}</span>
                        </div>
                        <div className="meta-item">
                          <span>📅</span>
                          <span>{item.period}</span>
                        </div>
                      </div>
                      <p className="card-description">{item.description}</p>
                      <div className="card-tags">
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