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
      title: "Hybrid Agro",
      description: "Hybrid is the result of two great companies, combining to serve the Agriculture Industry. The other, solidified in digital print, technology, branding, and marketing strategy. ",
      image: process.env.PUBLIC_URL + "/Images/Hybrid-agro.jpg",
      icon: "🗄️"
    },
    {
      id: 2,
      title: "Team RSSP",
      description: "Rockford Silk Screen Process can handle all your custom printing needs from small printed quantities to large commercial printing.",
      image: process.env.PUBLIC_URL + "Images/rssp-only-exmpl.png",
      icon: "💻"
    },
    {
      id: 3,
      title: "Senior Helper",
      description: "We make wrapping your vehicle simple and seamless. Our process includes four key stages — Process, Design, Production, and Installation — ensuring every detail is handled with precision",
      image: process.env.PUBLIC_URL + "Images/purple-partial-w.png",
      icon: "📱"
    },
    {
      id: 4,
      title: "Jo Malone - Middle East Region ",
      description: "Jo Malone London is a British lifestyle brand known for its unique fragrance portfolio and luxury products for the bath, body and home.",
      image: process.env.PUBLIC_URL + "Images/Jo-Malone.png",
      icon: "🎨"
    },
    {
      id: 5,
      title: "Kilian Paris - EMEA Region",
      description: "kilian hennessy continues to create unexpected products that embody ultimate sophistication and timeless luxury.",
      image: process.env.PUBLIC_URL + "Images/Kilian_paris.png",
      icon: "☁️"
    },
    {
      id: 6,
      title: "NextNow - Africa",
      description: "A World-class African E-hailing Company NextNow.Africa. As every other mobility solution provider across the world is securing its own continent so is Africa not going to be left behind. ",
      image: process.env.PUBLIC_URL + "Images/nextnow.svg",
      icon: "🛒"
    },
    {
      id: 7,
      title: "Flex Home",
      description: "We help you customize your wrap, create a tailored design, produce it with high-quality materials, and complete the installation efficiently for a professional finish.",
      image: process.env.PUBLIC_URL + "Images/Flex-home.jpg",
      icon: "🔌"
    },
    {
      id: 8,
      title: "Clinique - Italy",
      description: "With 55+ years of dermatological expertise, Clinique is one of the most trusted brands in the world.Dermatologist guided, allergy tested, and 100% fragrance free. In service of all skin.",
      image: process.env.PUBLIC_URL + "Images/Clinique.png",
      icon: "⚙️"
    },
    {
      id: 9,
      title: "MAC Cosmetic - UAE",
      description: "Site Offering more than 100 shades of professional quality cosmetics for All Ages, All Races, and All Genders. Free shipping available.",
      image: process.env.PUBLIC_URL + "Images/mac.png",
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
                                <a className="card-button" href ="https://hybrid-ag.com/" target='blank'>Learn More →</a>
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