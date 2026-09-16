import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const carouselData = [
  { img: "/images/carousel/storage-tank-fabrication-clean-nac-01.webp", h1: "Storage Tank Fabrication", p: "Water & Condensate Tanks - ISO 9001:2015 Certified" },
  { img: "/images/carousel/peb-structural-fabrication-clean-nac-02.webp", h1: "PEB Structural Fabrication", p: "Pre-Engineered Building Structures" },
  { img: "/images/carousel/air-blower-duct-fabrication-clean-nac-03.webp", h1: "Air Blower & Air Duct Fabrication", p: "Trusted by AIRFLOW" },
  { img: "/images/carousel/heavy-beam-fabrication-clean-nac-04.webp", h1: "Heavy Structural Beam Fabrication", p: "For ENVIRO & ENXIO Projects" },
  { img: "/images/carousel/rail-coach-components-clean-nac-05.webp", h1: "Rail & Bus Coach Components", p: "Manufactured for IRG Fabrication" },
  { img: "/images/carousel/steam-header-pipeline-clean-nac-06.webp", h1: "Steam & Header Pipeline Duct", p: "Duct Pipe Line Products for C.DOCTOR" },
  { img: "/images/carousel/material-handling-bins-clean-nac-07.webp", h1: "Material Handling & Heat Treatment Bins", p: "Heavy Duty Industrial Bins" },
  { img: "/images/carousel/pressure-vessels-tanks-clean-nac-08.webp", h1: "Pressure Vessels & Storage Tanks", p: "WE FABRICATE, WE BUILD, WE DELIVER" },
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <style>
        {`
          .carousel-container {
            position: relative;
            width: 100%;
            height: 90vh;
            min-height: 580px;
            overflow: hidden;
            background-color: #071322;
          }
          .carousel-slide {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
            background-size: cover;
            background-position: center;
            z-index: 0;
          }
          .carousel-slide.active {
            opacity: 1;
            z-index: 1;
          }
          .carousel-slide::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 70%);
            z-index: 1;
          }
          .carousel-text {
            position: relative;
            z-index: 2;
            color: #fff;
            max-width: 650px;
            padding: 160px 0 0 80px;
            text-shadow: 0 2px 15px rgba(0,0,0,0.9);
          }
          .carousel-text h1, .carousel-text h2 {
            font-size: 48px;
            font-weight: 800;
            line-height: 1.1;
            color: #ffffff !important;
            margin-bottom: 12px;
          }
          .carousel-text p {
            font-size: 18px;
            color: #e0e0e0;
            margin-top: 15px;
            margin-bottom: 25px;
            line-height: 1.5;
          }
          .carousel-dots {
            position: absolute;
            bottom: 30px;
            left: 80px;
            z-index: 3;
            display: flex;
            gap: 10px;
          }
          .carousel-dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.4);
            border: 2px solid rgba(255, 255, 255, 0.7);
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
          }
          .carousel-dot.active {
            background-color: #f57c00;
            border-color: #ffffff;
            transform: scale(1.25);
            box-shadow: 0 0 10px rgba(245, 124, 0, 0.9);
          }

          @media (max-width: 768px) {
            .carousel-container {
              height: 85vh;
              min-height: 500px;
            }
            .carousel-slide::before {
              background: linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.4) 100%);
            }
            .carousel-text {
              max-width: 100%;
              padding: 100px 20px 40px 20px;
            }
            .carousel-text h1, .carousel-text h2 {
              font-size: 30px;
            }
            .carousel-text p {
              font-size: 15px;
            }
            .carousel-dots {
              bottom: 20px;
              left: 20px;
            }
          }
        `}
      </style>

      <div className="carousel-container">
        {carouselData.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`carousel-slide ${isActive ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.img})` }}
              role="img"
              aria-label={`${slide.h1} - Naveen Auto Components Chennai Cuddalore`}
            >
              {isActive && (
                <div className="carousel-text">
                  {index === 0 ? (
                    <h1>Heavy Engineering &amp; {slide.h1}</h1>
                  ) : (
                    <h2>{slide.h1}</h2>
                  )}
                  <p>{slide.p}</p>
                  <div className="d-flex flex-wrap gap-3">
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
              )}
            </div>
          );
        })}

        {/* 8 Navigation Dots */}
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
    </>
  );
};