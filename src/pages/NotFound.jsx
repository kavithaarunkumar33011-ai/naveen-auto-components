import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 Page Not Found | Naveen Auto Components"
        description="The requested page could not be located on Naveen Auto Components."
      />

      <div className="py-5 bg-navy text-white text-center min-vh-75 d-flex align-items-center" style={{ backgroundColor: '#0b1e36', minHeight: '60vh' }}>
        <Container className="py-5">
          <div className="display-1 fw-extrabold text-warning mb-3 font-monospace" style={{ color: '#f57c00' }}>
            404
          </div>
          <h1 className="display-6 fw-bold text-white mb-3">Page Not Found</h1>
          <p className="lead text-white-50 max-w-700 mx-auto mb-4">
            The page or document you are attempting to view does not exist or may have been relocated.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button as={Link} to="/" variant="warning" size="lg" className="fw-bold px-4 py-2" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
              <i className="bi bi-house-door-fill me-2"></i> Return to Home
            </Button>
            <Button as={Link} to="/services" variant="outline-light" size="lg" className="fw-bold px-4 py-2">
              Browse Services
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};
