import React, { useState, useEffect } from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Global in-memory image cache set to track preloaded banner images across pages
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
        background: 'linear-gradient(135deg, #071322 0%, #0b1e36 60%, #152b48 100%)',
        minHeight: '480px',
        paddingTop: '110px',
        paddingBottom: '60px'
      }}
    >
      {/* Background Image Layer with Instant Cache & Cross-Fade Smooth Transition */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isLoaded ? 0.75 : 0,
          transform: isLoaded ? 'scale(1)' : 'scale(1.04)',
          transition: 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
          zIndex: 0
        }}
      />

      {/* Dark Overlay for High Text Readability */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          background: 'linear-gradient(to right, rgba(7, 19, 34, 0.88) 0%, rgba(11, 30, 54, 0.7) 60%, rgba(7, 19, 34, 0.45) 100%)',
          zIndex: 1 
        }} 
      />

      <style>
        {`
          .custom-breadcrumb .breadcrumb-item a {
            color: rgba(255, 255, 255, 0.65);
            text-decoration: none;
            transition: color 0.2s;
          }
          .custom-breadcrumb .breadcrumb-item a:hover {
            color: #f57c00;
          }
          .custom-breadcrumb .breadcrumb-item::before {
            color: rgba(255, 255, 255, 0.4) !important;
          }
          .custom-breadcrumb .breadcrumb-item.active {
            color: #fff;
            font-weight: 700;
          }
        `}
      </style>
      <Container className="position-relative z-2 text-start" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
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
