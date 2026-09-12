import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 border-top border-secondary position-relative" style={{ backgroundColor: '#071322' }}>
      <Container>
        <Row className="g-4 mb-4">
          {/* Company Brief & ISO Badge */}
          <Col lg={4} md={6} data-aos="fade-up">
            <div className="d-flex align-items-center mb-3">
              <img 
                src="/images/logos/logo-white-cropped.jpeg" 
                alt="Naveen Auto Components"
                className="me-3 rounded-2 shadow-sm"
                style={{ height: '50px', objectFit: 'contain' }}
              />
              <h5 className="fw-bold text-white mb-0">{companyData.name}</h5>
            </div>
            <p className="text-white-50 small mb-3">
              {companyData.tagline}. ISO 9001:2015 certified manufacturer of industrial storage tanks, steam distribution pipeline ducts, PEB structural steel, rail & bus coach parts, and heavy air blowers.
            </p>
            <div className="p-3 bg-navy rounded border border-secondary mb-3" style={{ backgroundColor: '#0b1e36' }}>
              <div className="d-flex align-items-center">
                <i className="bi bi-award-fill text-warning fs-3 me-3"></i>
                <div>
                  <h6 className="mb-0 text-white fw-bold">ISO 9001:2015 Certified</h6>
                  <small className="text-white-50">Quality Management System Standard</small>
                </div>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} data-aos="fade-up" data-aos-delay="100">
            <h6 className="text-warning fw-bold mb-3 text-uppercase fs-7">Quick Navigation</h6>
            <ul className="list-unstyled mb-0 small">
              <li className="mb-2"><Link to="/" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Home</span></Link></li>
              <li className="mb-2"><Link to="/about" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>About Company</span></Link></li>
              <li className="mb-2"><Link to="/services" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Fabrication Services</span></Link></li>
              <li className="mb-2"><Link to="/facilities" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Machinery Specs</span></Link></li>
              <li className="mb-2"><Link to="/projects" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Project Gallery</span></Link></li>
              <li className="mb-2"><Link to="/clients" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Our Customers</span></Link></li>
              <li className="mb-2"><Link to="/blog" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Engineering Blog</span></Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Contact Us</span></Link></li>
            </ul>
          </Col>

          {/* Service Links */}
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="200">
            <h6 className="text-warning fw-bold mb-3 text-uppercase fs-7">Core Capabilities</h6>
            <ul className="list-unstyled mb-0 small">
              {servicesData.map((svc) => (
                <li key={svc.slug} className="mb-2 text-truncate">
                  <Link to={`/services/${svc.slug}`} className="footer-animated-link">
                    <i className="bi bi-chevron-right footer-link-icon"></i>
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact NAP Details */}
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="300">
            <h6 className="text-warning fw-bold mb-3 text-uppercase fs-7">Contact Information</h6>
            <div className="small text-white-50 mb-2">
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              <a href={`mailto:${companyData.contact.email}`} className="text-white-50 text-decoration-none hover-text-warning">
                {companyData.contact.email}
              </a>
            </div>
            <div className="small text-white-50 mb-2">
              <i className="bi bi-telephone-fill text-warning me-2"></i>
              <a href={`tel:${companyData.contact.tel}`} className="text-white-50 text-decoration-none hover-text-warning">
                {companyData.contact.tel}
              </a>
            </div>
            <div className="small text-white-50 mb-3">
              <i className="bi bi-phone-fill text-warning me-2"></i>
              <a href={`tel:${companyData.contact.mobile}`} className="text-white-50 text-decoration-none hover-text-warning">
                {companyData.contact.mobile}
              </a>
            </div>

            {/* Social Links */}
            <h6 className="text-warning fw-bold mt-4 mb-3 text-uppercase fs-7">Follow Us</h6>
            <div className="d-flex gap-3">
              {companyData.social?.facebook && (
                <a href={companyData.social.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-animated social-icon-facebook" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
              )}
              {companyData.social?.twitter && (
                <a href={companyData.social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-animated social-icon-twitter" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>
              )}
              {companyData.social?.linkedin && (
                <a href={companyData.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-animated social-icon-linkedin" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
              {companyData.social?.instagram && (
                <a href={companyData.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-animated social-icon-instagram" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              )}
            </div>

            <hr className="border-secondary my-3" />
            <div className="small">
              <span className="text-white fw-semibold d-block mb-1"><i className="bi bi-building me-1 text-warning"></i> Registered Office:</span>
              <span className="text-white-50">{companyData.locations.office.address}</span>
            </div>
          </Col>
        </Row>

        {/* Location Addresses Strip */}
        <Row className="g-3 py-3 border-top border-secondary bg-navy-dark rounded px-2" style={{ backgroundColor: '#050f1c' }} data-aos="fade-up" data-aos-offset="0">
          <Col md={6}>
            <div className="small">
              <strong className="text-warning"><i className="bi bi-geo-alt-fill me-1"></i> Unit 1 (Chennai Plant):</strong>
              <div className="text-white-50 mt-1">{companyData.locations.unit1.address}</div>
            </div>
          </Col>
          <Col md={6}>
            <div className="small">
              <strong className="text-warning"><i className="bi bi-geo-alt-fill me-1"></i> Unit 2 (Cuddalore Plant - 2.5 Acres):</strong>
              <div className="text-white-50 mt-1">{companyData.locations.unit2.address}</div>
            </div>
          </Col>
        </Row>

        {/* Bottom Copyright */}
        <Row className="mt-4 pt-3 border-top border-secondary text-center small text-white-50">
          <Col>
            <p className="mb-0">
              © {new Date().getFullYear()} {companyData.name}. All Rights Reserved. Heavy Engineering & Processing Equipment Fabrication Chennai & Tamil Nadu.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
