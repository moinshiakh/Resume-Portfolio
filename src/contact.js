import React, { useState, useEffect } from 'react';

const ContactPage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('error');
            return;
        }

        // Simulate form submission
        setFormStatus('success');

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setFormStatus('');
        }, 3000);
    };

    // Contact information
    const contactInfo = [
        {
            id: 1,
            icon: '📧',
            title: 'Email',
            detail: 'moinshaikh19@gmail.com',
            link: 'mailto:moinshaikh19@gmail.com',
            color: '#667eea'
        },
        {
            id: 2,
            icon: '📱',
            title: 'Phone',
            detail: '+91 8097275865',
            link: 'https://wa.me/8097275865',
            color: '#764ba2'
        },
        {
            id: 3,
            icon: '📍',
            title: 'Location',
            detail: 'Mumbai',
            link: '#',
            color: '#f093fb'
        },
        {
            id: 4,
            icon: '🌐',
            title: 'Website',
            detail: 'Resume Website',
            link: 'https://resume-portfolio-six-nu.vercel.app/',
            color: '#4facfe'
        }
    ];

    // Social media links
    //   const socialLinks = [
    //     { id: 1, name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com/in/moin', color: '#0077b5' },
    //     { id: 2, name: 'GitHub', icon: '⚡', url: 'https://github.com/moin', color: '#333' },
    //     { id: 3, name: 'Twitter', icon: '🐦', url: 'https://twitter.com/moin', color: '#1da1f2' },
    //     { id: 4, name: 'Instagram', icon: '📷', url: 'https://instagram.com/moin', color: '#e4405f' }
    //   ];

    return (
        <>
           
            <section className="contact-page" id='contact'>
                <div className="container">
                    {/* Header */}
                    <div className="contact-header">
                        <h1 className="contact-title">Get In Touch</h1>
                        <p className="contact-subtitle">
                            Let's discuss your project and how I can help you achieve your goals
                        </p>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="contact-info-grid">
                        <div className="row">
                            {contactInfo.map((info) => (
                                <div key={info.id} className="col-12 col-sm-6 col-md-3 mb-3">
                                    <a
                                        href={info.link}
                                        className="info-card"
                                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                    >
                                        <div className="info-icon">{info.icon}</div>
                                        <div className="info-title">{info.title}</div>
                                        <div className="info-detail">{info.detail}</div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Contact Section */}
                    <div className="contact-main">
                        <div className="row g-0">
                            {/* Contact Form */}
                            {/* <div className="col-12 col-md-7">
                <div className="contact-form-wrapper">
                  <h2 className="form-section-title">Send Me a Message</h2>

                  {formStatus === 'success' && (
                    <div className="form-status success">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="form-status error">
                      ✗ Please fill in all required fields.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Name *</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Email *</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Subject</label>
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Project Inquiry"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div> */}

                            {/* Contact Image/Info */}
                            {/* <div className="col-12 col-md-5">
                <div className="contact-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop"
                    alt="Contact"
                    className="contact-image"
                  />
                  <p className="contact-image-text">
                    I'm always excited to collaborate on new projects and help bring your ideas to life. 
                    Let's create something amazing together!
                  </p>
                </div>
              </div> */}

                            <div class="col-12 contact-image-wrapper">
                                
                                    <div class="row align-items-center">

                                        {/* Left Section: Image */}
                                        <div class="col-12 col-sm-6 text-center">
                                            <img
                                                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop"
                                                alt="Contact"
                                                class="img-fluid rounded contact-image"
                                            />
                                        </div>

                                        {/* Right Section: Text */}
                                        <div class="col-12 col-sm-6">
                                            <p class="contact-image-text mt-3 mt-sm-0">
                                                I'm always excited to collaborate on new projects and help bring your ideas to life.
                                                Let's create something amazing together!
                                            </p>
                                        </div>

                                    </div>
                                
                            </div>

                        </div>
                    </div>

                    {/* Social Links */}
                    {/* <div className="social-links-section">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div> */}
                </div>
            </section>
        </>
    );
};

export default ContactPage;