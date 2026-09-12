import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ServiceCard = ({ service }) => {
  return (
    <Card data-aos="fade-up" className="h-100 shadow-sm border-0 rounded-3 overflow-hidden service-card transition-all">
      <div className="card-img-top-wrapper position-relative hover-flash-wrapper" style={{ height: '200px', overflow: 'hidden' }}>
        <img 
          src={service.image || `/images/hd/services/${service.slug}.jpg`} 
          alt={service.title} 
          className="w-100 h-100 object-fit-cover"
          style={{ transition: 'transform 0.5s ease' }}
        />
      </div>
      <Card.Body className="d-flex flex-column p-4 bg-white">
        <div className="d-flex align-items-center mb-3">
          <div className="icon-wrapper me-3 p-2 bg-light text-warning rounded-circle" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className={`bi ${service.icon} fs-4`} style={{ color: '#f57c00' }}></i>
          </div>
          <Card.Title as="h3" className="h5 fw-bold mb-0 text-navy">
            {service.title}
          </Card.Title>
        </div>
        
        <Card.Text className="text-secondary small mb-4 flex-grow-1">
          {service.shortDesc}
        </Card.Text>

        <div className="pt-3 border-top d-flex justify-content-between align-items-center">
          <span className="small text-muted font-monospace">
            <i className="bi bi-gear-fill me-1 text-warning"></i> Heavy Metal Spec
          </span>
          <Button 
            as={Link} 
            to={`/services/${service.slug}`} 
            variant="outline-dark" 
            size="sm" 
            className="fw-bold px-3 btn-hover-amber"
          >
            Learn More <i className="bi bi-arrow-right ms-1"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
