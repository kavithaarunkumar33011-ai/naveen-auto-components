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
                src="/images/logos/nac-logo-white-chennai.webp" 
                alt="Naveen Auto Components Fabrication in Chennai Cuddalore"
                loading="lazy"
                width="50"
                height="50"
                className="me-3 rounded-2 shadow-sm"
                style={{ height: '50px', objectFit: 'contain' }}
              />
              <h5 className="fw-bold text-white mb-0">{companyData.name} (NAC)</h5>
            </div>
            <p className="text-white-50 small mb-3">
              One-Stop Manufacturing Industry for Ferrous and Non-Ferrous Metal Fabrication. ISO 9001:2015 certified manufacturer operating across <strong>2 Manufacturing Units</strong>: Thirumullaivoyal (Fabrication Unit-1) & Cuddalore (Fabrication Unit-2), supported by our Registered Office in Ambattur (~3,000 Sq.Ft covered factory area, 1 Lakh Sq.Ft open space). Specializing in Storage Tanks, Steam Distribution Ducts, PEB Structures, Rail Coach Parts & Air Blower Systems.
            </p>
            <div className="p-3 bg-navy rounded border border-secondary mb-3" style={{ backgroundColor: '#0b1e36' }}>
              <div className="d-flex align-items-center">
                <i className="bi bi-award-fill text-warning fs-3 me-3"></i>
                <div>
                  <h6 className="mb-0 text-white fw-bold">ISO 9001:2015 Certified • 2 Manufacturing Units</h6>
                  <small className="text-white-50">Thirumullaivoyal (Unit-1) & Cuddalore (Unit-2)</small>
                </div>
              </div>
            </div>
            <div className="small text-white-50">
              <strong className="text-warning">Trusted Clients:</strong> AIRFLOW, C.DOCTOR, IRG FABRICATION, ENEXIO POWER COOLING, ENVIRO ENGINEERING.
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6} data-aos="fade-up" data-aos-delay="100">
            <h6 className="text-warning fw-bold mb-3 text-uppercase fs-7">Quick Navigation</h6>
            <ul className="list-unstyled mb-0 small">
              <li className="mb-2"><Link to="/" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Home</span></Link></li>
              <li className="mb-2"><Link to="/about" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>About Company</span></Link></li>
              <li className="mb-2"><Link to="/services" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Fabrication Products</span></Link></li>
              <li className="mb-2"><Link to="/facilities" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Machinery Specs</span></Link></li>
              <li className="mb-2"><Link to="/projects" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Project Gallery</span></Link></li>
              <li className="mb-2"><Link to="/clients" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Our Customers</span></Link></li>
              <li className="mb-2"><Link to="/blog" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Engineering Blog</span></Link></li>
              <li className="mb-2"><Link to="/contact" className="footer-animated-link"><i className="bi bi-chevron-right footer-link-icon"></i><span>Contact Us</span></Link></li>
            </ul>
          </Col>

          {/* Service Links */}
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="200">
            <h6 className="text-warning fw-bold mb-3 text-uppercase fs-7">Fabrication Products</h6>
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
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="300" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Naveen Auto Components" />
            <h6 className="text-warning fw-bold mb-3 text-uppercase fs-7">Contact Information</h6>
            <div className="small text-white-50 mb-2">
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              <a href={`mailto:${companyData.contact.email}`} itemProp="email" className="text-white-50 text-decoration-none hover-text-warning">
                {companyData.contact.email}
              </a>
            </div>
            <div className="small text-white-50 mb-2">
              <i className="bi bi-telephone-fill text-warning me-2"></i>
              <a href={`tel:${companyData.contact.tel}`} itemProp="telephone" className="text-white-50 text-decoration-none hover-text-warning">
                {companyData.contact.tel}
              </a>
            </div>
            <div className="small text-white-50 mb-3">
              <i className="bi bi-phone-fill text-warning me-2"></i>
              <a href={`tel:${companyData.contact.mobile}`} className="text-white-50 text-decoration-none hover-text-warning">
                {companyData.contact.mobile}
              </a>
            </div>

            {/* Social Links & Google Profile */}
            <h6 className="text-warning fw-bold mt-4 mb-3 text-uppercase fs-7">Connect & Follow Us</h6>
            <div className="d-flex gap-3 align-items-center flex-wrap">
              {companyData.social?.googleBusiness && (
                <a href={companyData.social.googleBusiness} target="_blank" rel="noopener noreferrer" className="social-icon-animated social-icon-google bg-warning text-dark fw-bold" aria-label="Google Business Profile" title="Google Business Profile">
                  <i className="bi bi-google"></i>
                </a>
              )}
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

            <div className="mt-3">
              <a 
                href={companyData.googleShareLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-warning btn-sm fw-bold d-inline-flex align-items-center gap-2"
                style={{ fontSize: '0.8rem' }}
              >
                <i className="bi bi-google text-warning"></i>
                <span>Google Business Profile</span>
                <i className="bi bi-box-arrow-up-right fs-8 ms-1"></i>
              </a>
            </div>

            <hr className="border-secondary my-3" />
            <div className="small" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span className="text-white fw-semibold d-block mb-1"><i className="bi bi-building me-1 text-warning"></i> Administrative Office:</span>
              <span className="text-white-50" itemProp="streetAddress">No-2c/5, SP-64, 3rd Main Road, Ambattur Ind Estate, Chennai - 600058</span>
            </div>
          </Col>
        </Row>

        {/* Location Addresses Strip */}
        <Row className="g-3 py-3 border-top border-secondary bg-navy-dark rounded px-2 align-items-center" style={{ backgroundColor: '#050f1c' }} data-aos="fade-up" data-aos-offset="0">
          <Col md={5}>
            <div className="small" itemScope itemType="https://schema.org/ManufacturingFacility">
              <strong className="text-warning" itemProp="name"><i className="bi bi-geo-alt-fill me-1"></i> Factory 1 (Chennai Unit):</strong>
              <div className="text-white-50 mt-1" itemProp="address">No-T93, Sidco Women Industrial Park, Kattur, Thirumullaivoyal, Chennai - 600062</div>
            </div>
          </Col>
          <Col md={5}>
            <div className="small" itemScope itemType="https://schema.org/ManufacturingFacility">
              <strong className="text-warning" itemProp="name"><i className="bi bi-geo-alt-fill me-1"></i> Factory 2 (Cuddalore Unit - 2.5 Acres):</strong>
              <div className="text-white-50 mt-1" itemProp="address">No-94/2D, Cuddalore-Chidambaram Road, NH-32, Kotthattai Village, Chidambaram - 608501</div>
            </div>
          </Col>
          <Col md={2} className="text-md-end">
            <a 
              href={companyData.googleShareLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-warning btn-sm fw-bold text-navy"
              style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff', fontSize: '0.8rem' }}
              title="View Naveen Auto Components on Google"
            >
              <i className="bi bi-geo-alt me-1"></i> Google Map
            </a>
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
