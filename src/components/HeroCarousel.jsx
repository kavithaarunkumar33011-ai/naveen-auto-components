import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const carouselData = [
  {
    badge: "ISO 9001:2015 CERTIFIED",
    img: "/images/carousel/storage-tank-fabrication-clean-nac-01.webp",
    h1: "Storage Tank Fabrication Experts",
    p: "Water, Condensate & Fuel Storage Tanks | ISO 9001:2015 Certified Manufacturing"
  },
  {
    badge: "STEEL INFRASTRUCTURE",
    img: "/images/carousel/peb-structural-fabrication-clean-nac-02.webp",
    h1: "PEB Structural Fabrication",
    p: "Pre-Engineered Building Structures | Heavy-Duty Steel Structures Built to Last"
  },
  {
    badge: "HVAC & AIR HANDLING",
    img: "/images/carousel/air-blower-duct-fabrication-clean-nac-03.webp",
    h1: "Industrial Air Blower & Duct Systems",
    p: "High-Performance Air Blower Housings & Spiral Duct Fabrication"
  },
  {
    badge: "HEAVY ENGINEERING",
    img: "/images/carousel/heavy-beam-fabrication-clean-nac-04.webp",
    h1: "Heavy Structural Fabrication",
    p: "I-Beams, Heavy Columns & Power Cooling Equipment | EOT Crane Handling"
  },
  {
    badge: "TRANSPORT FABRICATION",
    img: "/images/carousel/rail-coach-components-clean-nac-05.webp",
    h1: "Rail & Bus Coach Components",
    p: "Precision Chassis & Coach Components for Transportation Industry"
  },
  {
    badge: "PROCESS PIPING LINES",
    img: "/images/carousel/steam-header-pipeline-clean-nac-06.webp",
    h1: "Steam & Header Pipeline Systems",
    p: "Steam Distribution Headers, Process Piping & Industrial Duct Lines"
  },
  {
    badge: "MATERIAL HANDLING",
    img: "/images/carousel/material-handling-bins-clean-nac-07.webp",
    h1: "Material Handling & Heat Treatment Bins",
    p: "Heavy-Duty Industrial Bins | Custom Fabrication | Bulk Production Capacity"
  },
  {
    badge: "HEAVY FABRICATION LEADER",
    img: "/images/carousel/pressure-vessels-tanks-clean-nac-08.webp",
    h1: "WE FABRICATE, WE BUILD, WE DELIVER",
    p: "Pressure Vessels, Storage Tanks & Heavy Engineering | Chennai & Cuddalore Units"
  }
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  return (
    <>
      <style>
        {`
          .carousel-container {
            position: relative;
            width: 100%;
            height: 90vh;
            min-height: 600px;
            max-height: 850px;
            overflow: hidden;
            background-color: #071322;
          }

          .carousel-slide {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.9s ease;
            z-index: 0;
          }

          .carousel-slide.active {
            opacity: 1;
            visibility: visible;
            z-index: 1;
          }

          @keyframes carouselKenBurns {
            0% { transform: scale(1.0) translate(0, 0); }
            50% { transform: scale(1.08) translate(-0.5%, -0.3%); }
            100% { transform: scale(1.04) translate(0.4%, 0.5%); }
          }

          .carousel-bg-image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            z-index: 0;
            transform: scale(1.0);
            transition: transform 1.2s ease-out;
          }

          .carousel-slide.active .carousel-bg-image {
            animation: carouselKenBurns 9s ease-in-out infinite alternate;
          }

          .carousel-slide::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to right, 
              rgba(7, 19, 34, 0.92) 0%, 
              rgba(7, 19, 34, 0.78) 35%, 
              rgba(7, 19, 34, 0.45) 60%, 
              rgba(7, 19, 34, 0.1) 100%
            );
            z-index: 1;
          }

          .carousel-text-wrapper {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            align-items: center;
          }

          .carousel-text {
            color: #fff;
            max-width: 720px;
            padding-left: 80px;
            padding-right: 20px;
          }

          /* Text Elements Transitions */
          .carousel-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(245, 124, 0, 0.18);
            border: 1px solid rgba(245, 124, 0, 0.6);
            color: #ffb74d;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            padding: 6px 14px;
            border-radius: 4px;
            margin-bottom: 18px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }

          .carousel-title-box {
            margin-bottom: 16px;
          }

          .carousel-title-box h1, 
          .carousel-title-box h2 {
            font-size: 48px;
            font-weight: 800;
            line-height: 1.15;
            color: #ffffff !important;
            margin: 0;
            letter-spacing: -0.5px;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
            opacity: 0;
            transform: translateY(25px);
            transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          .carousel-sub {
            font-size: 18px;
            color: #e2e8f0;
            margin-bottom: 30px;
            line-height: 1.55;
            font-weight: 400;
            max-width: 620px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
            opacity: 0;
            transform: translateY(25px);
            transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          .carousel-btns {
            opacity: 0;
            transform: translateY(25px);
            transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          /* Active State Staggered Delays */
          .carousel-slide.active .carousel-badge {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.25s;
          }

          .carousel-slide.active .carousel-title-box h1,
          .carousel-slide.active .carousel-title-box h2 {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.4s;
          }

          .carousel-slide.active .carousel-sub {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.55s;
          }

          .carousel-slide.active .carousel-btns {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.7s;
          }

          /* Navigation Controls */
          .carousel-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 4;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: rgba(7, 19, 34, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.25);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
            backdrop-filter: blur(8px);
            transition: all 0.3s ease;
          }

          .carousel-arrow:hover {
            background: #f57c00;
            border-color: #f57c00;
            color: #ffffff;
            box-shadow: 0 0 15px rgba(245, 124, 0, 0.6);
            transform: translateY(-50%) scale(1.08);
          }

          .carousel-arrow.prev { left: 24px; }
          .carousel-arrow.next { right: 24px; }

          /* Bottom Control Bar */
          .carousel-control-bar {
            position: absolute;
            bottom: 35px;
            left: 80px;
            z-index: 4;
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .carousel-counter {
            color: rgba(255, 255, 255, 0.85);
            font-weight: 700;
            font-size: 15px;
            letter-spacing: 1px;
            font-family: monospace;
          }

          .carousel-counter span.current {
            color: #f57c00;
            font-size: 18px;
          }

          .carousel-dots {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .carousel-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.35);
            border: 2px solid rgba(255, 255, 255, 0.6);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            padding: 0;
          }

          .carousel-dot.active {
            width: 36px;
            border-radius: 20px;
            background-color: #f57c00;
            border-color: #ffffff;
            box-shadow: 0 0 14px rgba(245, 124, 0, 0.9);
          }

          @media (max-width: 992px) {
            .carousel-text {
              padding-left: 50px;
            }
            .carousel-title-box h1, 
            .carousel-title-box h2 {
              font-size: 38px;
            }
            .carousel-arrow {
              display: none;
            }
          }

          @media (max-width: 768px) {
            .carousel-container {
              height: 85vh;
              min-height: 520px;
            }
            .carousel-slide::before {
              background: linear-gradient(
                to bottom, 
                rgba(7, 19, 34, 0.92) 0%, 
                rgba(7, 19, 34, 0.75) 60%, 
                rgba(7, 19, 34, 0.4) 100%
              );
            }
            .carousel-text {
              padding: 100px 20px 40px 20px;
              max-width: 100%;
            }
            .carousel-title-box h1, 
            .carousel-title-box h2 {
              font-size: 28px;
            }
            .carousel-sub {
              font-size: 15px;
              margin-bottom: 22px;
            }
            .carousel-control-bar {
              bottom: 25px;
              left: 20px;
            }
          }
        `}
      </style>

      <div className="carousel-container" aria-label="Hero Carousel">
        {carouselData.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`carousel-slide ${isActive ? 'active' : ''}`}
              role="img"
              aria-label={`${slide.h1} - Naveen Auto Components`}
            >
              {/* Animated Motion Background Image */}
              <div
                className="carousel-bg-image"
                style={{ backgroundImage: `url(${slide.img})` }}
              ></div>

              {/* Text overlay always present in DOM, animated smoothly via CSS */}
              <div className="carousel-text-wrapper">
                <div className="carousel-text">
                  <div className="carousel-badge">
                    <i className="bi bi-shield-check me-1"></i> {slide.badge}
                  </div>
                  <div className="carousel-title-box">
                    {index === 0 ? (
                      <h1>{slide.h1}</h1>
                    ) : (
                      <h2>{slide.h1}</h2>
                    )}
                  </div>
                  <p className="carousel-sub">{slide.p}</p>
                  <div className="carousel-btns d-flex flex-wrap gap-3">
                    <Button
                      as={Link}
                      to="/contact"
                      variant="warning"
                      size="lg"
                      className="fw-bold px-4 py-3 shadow"
                      style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}
                    >
                      Request RFQ Proposal <i className="bi bi-arrow-right ms-2"></i>
                    </Button>
                    <Button
                      as={Link}
                      to="/services"
                      variant="outline-light"
                      size="lg"
                      className="fw-bold px-4 py-3 shadow"
                    >
                      Explore Capabilities
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Prev / Next Navigation Arrows */}
        <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next Slide">
          <i className="bi bi-chevron-right"></i>
        </button>

        {/* Bottom Control Bar with Slide Counter and Dots */}
        <div className="carousel-control-bar">
          <div className="carousel-counter">
            <span className="current">0{currentIndex + 1}</span> / 0{carouselData.length}
          </div>
          <div className="carousel-dots">
            {carouselData.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};