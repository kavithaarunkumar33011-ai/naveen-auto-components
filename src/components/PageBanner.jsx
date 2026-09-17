import React, { useState, useEffect } from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Global in-memory image cache set to track loaded banner images across pages
const bannerCache = new Set();

export const PageBanner = ({ title, subtitle, breadcrumbs = [], image = '/images/hd/steam-pipeline-duct-fabrication-cuddalore-nac-03.webp' }) => {
  const [isLoaded, setIsLoaded] = useState(() => bannerCache.has(image));

  useEffect(() => {
    if (bannerCache.has(image)) {
      setIsLoaded(true);
      return;
    }

    setIsLoaded(false);
    const img = new Image();
    img.src = image;
    img.onload = () => {
      bannerCache.add(image);
      setIsLoaded(true);
    };
  }, [image]);

  return (
    <div 
      className="page-banner text-white position-relative overflow-hidden d-flex align-items-center" 
      style={{ 
        backgroundColor: '#101d2d',
        minHeight: '550px',
        paddingTop: '120px'
      }}
    >
      {/* Bright HD Background Image Layer with Glass-Unblur & Smooth Zoom Transition */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isLoaded ? 1 : 0.4,
          filter: isLoaded ? 'blur(0px)' : 'blur(16px)',
          transform: isLoaded ? 'scale(1)' : 'scale(1.05)',
          transition: 'filter 0.5s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease-in-out',
          zIndex: 0
        }}
      />

      {/* Light Gradient Shield for Crisp Text Readability without Darkening Image */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          background: 'linear-gradient(to right, rgba(11, 25, 44, 0.65) 0%, rgba(11, 25, 44, 0.35) 50%, rgba(11, 25, 44, 0.15) 100%)',
          zIndex: 1 
        }} 
      />

      <style>
        {`
          .custom-breadcrumb .breadcrumb-item a {
            color: rgba(255, 255, 255, 0.75);
            text-decoration: none;
            transition: color 0.2s;
          }
          .custom-breadcrumb .breadcrumb-item a:hover {
            color: #f57c00;
          }
          .custom-breadcrumb .breadcrumb-item::before {
            color: rgba(255, 255, 255, 0.5) !important;
          }
          .custom-breadcrumb .breadcrumb-item.active {
            color: #fff;
            font-weight: 700;
          }
        `}
      </style>
      <Container className="position-relative z-2 text-start" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.65)' }}>
        <h1 className="display-5 fw-extrabold text-white mb-2 tracking-tight">{title}</h1>
        {subtitle && (
          <p className="lead text-white-50 mb-0 mt-2" style={{ maxWidth: '750px', fontSize: '1.15rem', lineHeight: '1.6' }}>
            {subtitle}
          </p>
        )}
        
        {breadcrumbs.length > 0 && (
          <Breadcrumb className="custom-breadcrumb bg-transparent p-0 m-0 mt-3 fs-7 font-monospace text-uppercase tracking-tight">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            {breadcrumbs.map((bc, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return isLast ? (
                <Breadcrumb.Item key={idx} active>
                  {bc.label}
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={idx} linkAs={Link} linkProps={{ to: bc.url }}>
                  {bc.label}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        )}
      </Container>
    </div>
  );
};
