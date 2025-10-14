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
      description: "Leading a team of 5 developers in building responsive web applications using React.js, TypeScript, and modern CSS frameworks.",
      skills: ["React.js", "TypeScript", "Redux", "CSS3"],
      icon: "💼",
      color: "#667eea"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations Ltd.",
      location: "New York, NY",
      period: "2019 - 2021",
      description: "Developed and maintained multiple client-facing web applications. Collaborated with UX designers to implement pixel-perfect designs.",
      skills: ["JavaScript", "React.js", "SASS", "Bootstrap"],
      icon: "💻",
      color: "#764ba2"
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "StartUp Hub",
      location: "Austin, TX",
      period: "2017 - 2019",
      description: "Built responsive websites and web applications for various clients. Worked with cross-functional teams to deliver projects on time.",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      icon: "🚀",
      color: "#f093fb"
    },
    {
      id: 4,
      title: "Web Development Intern",
      company: "Creative Agency",
      location: "Los Angeles, CA",
      period: "2016 - 2017",
      description: "Assisted in developing client websites and learning modern web development practices and workflows.",
      skills: ["HTML", "CSS", "JavaScript", "WordPress"],
      icon: "📱",
      color: "#4facfe"
    },
    {
      id: 5,
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2015 - 2016",
      description: "Created custom websites for small businesses and startups. Managed projects from design to deployment.",
      skills: ["Web Design", "PHP", "MySQL", "SEO"],
      icon: "🎨",
      color: "#43e97b"
    },
    {
      id: 6,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "Seattle, WA",
      period: "2014 - 2015",
      description: "Designed user interfaces and experiences for web and mobile applications using industry-standard tools.",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      icon: "🎯",
      color: "#fa709a"
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
      description: "Specialized in Software Engineering and Web Technologies. Completed thesis on Modern Web Application Architecture.",
      achievements: ["GPA: 3.8/4.0", "Dean's List", "Research Assistant"],
      icon: "🎓",
      color: "#667eea"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      location: "Berkeley, CA",
      period: "2011 - 2015",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, and software engineering.",
      achievements: ["GPA: 3.6/4.0", "Honor Society", "Club President"],
      icon: "📚",
      color: "#764ba2"
    },
    {
      id: 3,
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      location: "Online",
      period: "2016",
      description: "Intensive 12-week program focused on full-stack web development, covering modern frameworks and best practices.",
      achievements: ["Top 10% Graduate", "Project Award", "100% Completion"],
      icon: "💡",
      color: "#f093fb"
    },
    {
      id: 4,
      degree: "Advanced JavaScript Certification",
      institution: "Udemy",
      location: "Online",
      period: "2018",
      description: "Deep dive into advanced JavaScript concepts including ES6+, async programming, and performance optimization.",
      achievements: ["Certificate of Excellence", "5-star Rating", "Final Project A+"],
      icon: "📜",
      color: "#4facfe"
    },
    {
      id: 5,
      degree: "React Specialization",
      institution: "Coursera",
      location: "Online",
      period: "2019",
      description: "Comprehensive React training covering hooks, context, Redux, and building scalable applications.",
      achievements: ["Verified Certificate", "Honor Code", "Peer Reviewed"],
      icon: "⚛️",
      color: "#43e97b"
    },
    {
      id: 6,
      degree: "UI/UX Design Certificate",
      institution: "Google UX Design",
      location: "Online",
      period: "2020",
      description: "Professional certificate program covering user research, wireframing, prototyping, and usability testing.",
      achievements: ["Professional Certificate", "Portfolio Projects", "Case Studies"],
      icon: "🎨",
      color: "#fa709a"
    }
  ];

  return (
    <>
      
      <section className="experience-education-section">
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