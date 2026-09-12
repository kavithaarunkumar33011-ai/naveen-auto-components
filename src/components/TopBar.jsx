import React from 'react';
import { Container } from 'react-bootstrap';
import { companyData } from '../data/companyData';

export const TopBar = () => {
  return (
    <div className="bg-dark text-white-50 py-1 d-none d-md-block" style={{ fontSize: '0.8rem', backgroundColor: '#071322' }}>
      <Container fluid className="px-4 d-flex justify-content-between align-items-center">
        <div>
          <i className="bi bi-clock me-1 text-warning"></i> Mon-Sat: 9:00 AM - 6:00 PM
          <span className="mx-2">|</span>
          <i className="bi bi-geo-alt me-1 text-warning"></i> {companyData.locations.office.city}, {companyData.locations.office.state}
        </div>
        <div className="d-flex align-items-center">
          <a href={`mailto:${companyData.contact.email}`} className="text-white-50 text-decoration-none me-3 hover-text-warning">
            <i className="bi bi-envelope-fill me-1 text-warning"></i> {companyData.contact.email}
          </a>
          <a href={`tel:${companyData.contact.mobile}`} className="text-white-50 text-decoration-none fw-bold text-white hover-text-warning me-3">
            <i className="bi bi-phone-fill me-1 text-warning"></i> {companyData.contact.mobile}
          </a>
          {/* Social Links */}
          <div className="ms-2 ps-3 border-start border-secondary d-flex gap-2">
            {companyData.social?.facebook && (
              <a href={companyData.social.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-topbar social-icon-facebook" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            )}
            {companyData.social?.twitter && (
              <a href={companyData.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-topbar social-icon-twitter" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
            )}
            {companyData.social?.linkedin && (
              <a href={companyData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-topbar social-icon-linkedin" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            )}
            {companyData.social?.instagram && (
              <a href={companyData.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-topbar social-icon-instagram" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
