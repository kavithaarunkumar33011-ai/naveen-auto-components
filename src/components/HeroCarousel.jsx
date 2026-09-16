import React from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      video: '/videos/placeholder-1.mp4',
      imageFallback: '/images/hd/heavy-fabrication-hero-hd-nac-01.webp',
      tagline: "Heavy Engineering Excellence",
      title: "Ferrous & Non-Ferrous Metal Fabrication",
      highlight: "For Industrial Process Equipments",
      desc: "Top-tier custom metal fabrication services delivering precision-engineered industrial solutions with ISO 9001:2015 quality standards."
    },
    {
      id: 2,
      video: '/videos/placeholder-2.mp4',
      imageFallback: '/images/hd/steam-pipeline-duct-fabrication-cuddalore-nac-03.webp',
      tagline: "Infrastructure & Piping",
      title: "PEB Structural Fabrication & Pipeline Ducts",
      highlight: "Heavy-Duty Industrial Frameworks",
      desc: "Expert manufacturing of Pre-Engineering Buildings (PEB) and robust steam distribution pipeline ducts for extreme industrial demands."
    },
    {
      id: 3,
      video: '/videos/placeholder-3.mp4',
      imageFallback: '/images/hd/peb-structural-fabrication-nac-chennai-04.webp',
      tagline: "Turnkey Manufacturing",
      title: "Industrial Storage Tanks & Custom Equipment",
      highlight: "Delivering Fully Finished Products",
      desc: "From engineering special purpose equipments to massive storage tanks, we deliver fully assembled and rigorously tested manufacturing solutions."
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes kenburns { 
            0% { transform: scale(1.0); } 
            50% { transform: scale(1.12); } 
            100% { transform: scale(1.0); } 
          }
          .ken-burns-effect { 
            animation: kenburns 15s ease-in-out infinite; 
          }
          .hero-title-shadow {
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.95), 0 2px 6px rgba(0, 0, 0, 0.9);
          }
          .hero-highlight-glow {
            color: #ffb74d !important;
            text-shadow: 0 0 25px rgba(245, 124, 0, 0.7), 0 2px 8px rgba(0,0,0,0.95);
          }
        `}
      </style>
      <Carousel fade controls={false} indicators={true} interval={6000} className="hero-carousel">
      {slides.map((slide) => (
        <Carousel.Item key={slide.id} className="vh-100 min-vh-600 position-relative">
          
          {/* Background Image Container */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-navy overflow-hidden" style={{ backgroundColor: '#071322' }}>
            {/* Cinematic Motion Hero Image */}
            <div 
              className="w-100 h-100 position-absolute top-0 start-0 ken-burns-effect"
              style={{
                backgroundImage: `url(${slide.imageFallback})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 0
              }}
            ></div>
            
            {/* Enhanced Dark Gradient Overlay for Maximum Text Readability */}
            <div 
              className="position-absolute top-0 start-0 w-100 h-100" 
              style={{ background: 'linear-gradient(90deg, rgba(7,19,34,0.88) 0%, rgba(7,19,34,0.65) 55%, rgba(7,19,34,0.30) 100%)', zIndex: 2 }}
            ></div>
          </div>

          {/* Carousel Overlay Content - Left Aligned Direct Text */}
          <Carousel.Caption className="d-flex flex-column justify-content-center h-100 bottom-0 pb-0 text-start">
            <Container className="position-relative z-1 pt-5">
              <Row>
                <Col lg={8} md={10}>
                  <h3 className="fw-bold mb-3 fs-5 text-uppercase tracking-tight" style={{ color: '#ffc107', letterSpacing: '1.5px', textShadow: '0 2px 8px rgba(0,0,0,0.95)' }}>
                    <span style={{ width: '40px', height: '3px', backgroundColor: '#f57c00', display: 'inline-block', verticalAlign: 'middle', marginRight: '15px' }}></span>
                    {slide.tagline}
                  </h3>
                  {slide.id === 1 ? (
                    <h1 className="display-4 fw-extrabold text-white mb-3 lh-sm" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.85)' }}>
                      Heavy Engineering and Processing Equipment Fabrication <br />
                      <span className="fw-extrabold" style={{ color: '#ffc107', textShadow: '0 4px 16px rgba(0,0,0,0.95), 0 0 20px rgba(245,124,0,0.5)' }}>in Chennai & Cuddalore</span>
                    </h1>
                  ) : (
                    <h2 className="display-4 fw-extrabold text-white mb-3 lh-sm" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.85)' }}>
                      {slide.title} <br />
                      <span className="fw-extrabold" style={{ color: '#ffc107', textShadow: '0 4px 16px rgba(0,0,0,0.95), 0 0 20px rgba(245,124,0,0.5)' }}>{slide.highlight}</span>
                    </h2>
                  )}
                  <p className="lead mb-4 max-w-700 fw-medium" style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#f8fafc', textShadow: '0 2px 10px rgba(0,0,0,0.95)' }}>
                    {slide.desc}
                  </p>
                  <div className="d-flex flex-wrap gap-3 pt-2">
                    <Button as={Link} to="/contact" variant="warning" size="lg" className="fw-bold px-4 py-3 shadow-lg" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
                      Request an RFQ Proposal <i className="bi bi-arrow-right ms-2"></i>
                    </Button>
                    <Button as={Link} to="/services" variant="outline-light" size="lg" className="fw-bold px-4 py-3 shadow-lg backdrop-blur">
                      Explore Capabilities
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Caption>

        </Carousel.Item>
      ))}
      </Carousel>
    </>
  );
};