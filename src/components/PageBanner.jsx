import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PageBanner = ({ title, subtitle, breadcrumbs = [], image = '/images/hd/steam-pipeline-duct-fabrication-cuddalore-nac-03.webp' }) => {
  return (
    <div 
      className="page-banner text-white position-relative overflow-hidden d-flex align-items-center" 
      style={{ 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '550px',
        paddingTop: '120px'
      }}
    >
      <style>
        {`
          .custom-breadcrumb .breadcrumb-item a {
            color: rgba(255, 255, 255, 0.6);
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
      <Container className="position-relative z-1 text-start" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6)' }}>
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
