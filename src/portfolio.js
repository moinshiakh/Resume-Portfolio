import React, { useState, useEffect } from 'react';

const ThreeCardCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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

  // Card data
  const allCards = [
    {
      id: 1,
      title: "Database Design",
      description: "Designing efficient database structures for optimal performance.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
      icon: "🗄️"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building responsive and modern web applications with cutting-edge technologies.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      icon: "💻"
    },
    {
      id: 3,
      title: "Mobile Apps",
      description: "Creating beautiful and intuitive mobile experiences for iOS and Android.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      icon: "📱"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Designing user-centered interfaces with focus on usability and aesthetics.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      icon: "🎨"
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Implementing scalable cloud infrastructure and deployment strategies.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      icon: "☁️"
    },
    {
      id: 6,
      title: "E-Commerce",
      description: "Building complete e-commerce solutions with payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
      icon: "🛒"
    },
    {
      id: 7,
      title: "API Development",
      description: "Creating robust and scalable RESTful APIs for various applications.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      icon: "🔌"
    },
    {
      id: 8,
      title: "DevOps",
      description: "Setting up CI/CD pipelines and automated deployment workflows.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop",
      icon: "⚙️"
    },
    {
      id: 9,
      title: "Consulting",
      description: "Providing expert technical consulting and code review services.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      icon: "💼"
    }
  ];

  // Create slides based on screen size
  const getSlides = () => {
    if (isMobile) {
      // 1 card per slide on mobile
      return allCards.map(card => [card]);
    } else {
      // 3 cards per slide on desktop
      const slides = [];
      for (let i = 0; i < allCards.length; i += 3) {
        slides.push(allCards.slice(i, i + 3));
      }
      
      return slides;
    }
  };
  
  const slides = getSlides();
  const totalSlides = slides.length;

  // Reset to first slide when switching between mobile/desktop
  useEffect(() => {
    setActiveSlide(0);
  }, [isMobile]);

  // Navigation handlers
  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
     
      <section className="carousel-section" id='portfolio'>
        <div className="container">
          {/* Header */}
          <div className="carousel-header">
            <h2 className="carousel-title">PORTFOLIO</h2>
            <p className="carousel-subtitle">Explore the range of services I offer</p>
          </div>

          {/* Carousel */}
          <div className="three-card-carousel">
            <div className="carousel-wrapper">
              <div className="carousel-slides">
                {slides.map((slideCards, slideIndex) => (
                  <div
                    key={slideIndex}
                    className={`carousel-slide ${slideIndex === activeSlide ? 'active' : ''}`}
                  >
                    <div className="container-fluid">
                      <div className="row">
                        {slideCards.map((card) => (
                          <div 
                            key={card.id} 
                            className={`${isMobile ? 'col-12' : 'col-md-4'} mb-4`}
                          >
                            <div className="service-card">
                              <div className="card-image-wrapper">
                                <img
                                  src={card.image}
                                  alt={card.title}
                                  className="card-image"
                                />
                                <div className="card-icon">{card.icon}</div>
                              </div>
                              <div className="card-body">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>
                                <button className="card-button">Learn More →</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous Button */}
            <button
              className="carousel-control carousel-control-prev"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              className="carousel-control carousel-control-next"
              onClick={handleNext}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default ThreeCardCarousel;