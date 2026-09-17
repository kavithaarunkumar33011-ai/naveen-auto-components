import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { HeroCarousel } from '../components/HeroCarousel';

export const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Naveen Auto Components",
    "url": "https://naveenautocomponents.com",
    "description": companyData.about
  };

  const clientLogos = [
    { name: "C. Doctor & Co. Pvt. Ltd. (Doctaire)", logo: "/images/logos/cdoctor-company-client-logo-nac.webp" },
    { name: "ENEXIO Power Cooling", logo: "/images/logos/enexio-power-cooling-client-logo-nac.webp" },
    { name: "On Load Gears (OLG)", logo: "/images/logos/on-load-gears-client-logo-nac.webp" },
    { name: "NADI Industrial Fans", logo: "/images/logos/nadi-fans-client-logo-nac.webp" },
    { name: "Airflow", logo: "/images/logos/airflow-client-logo-nac.webp" },
    { name: "Ability Enterprises", logo: "/images/logos/ability-enterprises-client-logo-nac.webp" }
  ];

  return (
    <>
      <SEO 
        title="Naveen Auto Components | Heavy Engineering Fabrication & Storage Tanks Chennai Cuddalore"
        description="Naveen Auto Components (naveenautocomponents.com) - ISO 9001:2015 certified heavy engineering fabrication company with 2 units in Chennai & Cuddalore. Specializing in Storage Tanks, Steam Distribution Ducts, PEB Structural Fabrication & Rail Coach Parts."
        keywords="naveenautocomponents.com, Naveen Auto Components, NAC Chennai, heavy engineering fabrication Chennai, heavy fabrication Cuddalore, storage tank manufacturer Tamil Nadu, PEB structural fabrication, steam distribution duct"
        canonical="/"
        schema={homeSchema}
      />

      <HeroCarousel />

      {/* Quick Stats Strip */}
      <section className="bg-dark text-white py-4 border-top border-bottom border-amber" style={{ backgroundColor: '#071322', borderColor: '#f57c00' }}>
        <Container>
          <Row className="text-center g-4">
            {[
              { label: "Year Established", value: "2000" },
              { label: "Manufacturing Area", value: "350k+ Sq Ft (2 Units)" },
              { label: "Installed Capacity", value: "1500+ MT/Month" },
              { label: "Quality Certification", value: "ISO 9001:2015" }
            ].map((stat, idx) => (
              <Col md={3} sm={6} key={idx}>
                <div className="stat-box py-2">
                  <div className="h3 fw-extrabold text-warning mb-0" style={{ color: '#f57c00' }}>{stat.value}</div>
                  <div className="text-white-50 small text-uppercase fw-bold tracking-tight">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Dual Manufacturing Footprint Overview */}
      <section className="py-5 bg-white border-bottom">
        <Container className="py-lg-4">
          <div className="text-center max-w-900 mx-auto mb-5" data-aos="fade-up">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#fff' }}>
              ISO 9001:2015 Certified Precision Manufacturing
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-4">
              Our 2 Manufacturing Units in Chennai & Cuddalore
            </h2>
            <p className="lead text-secondary mx-auto max-w-800" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
              Established in 2000, <strong>Varsha Technologies</strong> and <strong>Naveen Auto Components (NAC)</strong> operate <strong>2 manufacturing units</strong> across <strong>Chennai</strong> and <strong>Cuddalore</strong> (2.5 Acres, NH-32), delivering ISO 9001:2015 certified heavy engineering metal fabrication.
            </p>
          </div>

          <Row className="g-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4 bg-light border-top border-warning border-4">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center shadow-sm border border-light" style={{ width: '54px', height: '54px' }}>
                      <img 
                        src="/images/logos/varsha-technologies-logo.svg" 
                        alt="Varsha Technologies Logo" 
                        style={{ maxHeight: '38px', maxWidth: '38px', objectFit: 'contain' }} 
                      />
                    </div>
                    <div>
                      <h3 className="h5 fw-bold text-navy mb-0">Varsha Technologies</h3>
                      <span className="small text-muted font-monospace">Est. 2000 • IATF 16949:2016</span>
                    </div>
                  </div>
                  <p className="small text-secondary mb-0" style={{ lineHeight: '1.7' }}>
                    Specializing in high-precision CNC machined components, hot forging, heat treatment, and industrial shot blasting for automotive OEMs and valve manufacturing leaders across India.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4 bg-light border-top border-warning border-4">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-navy rounded-circle p-2 me-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '54px', height: '54px', backgroundColor: '#0b1e36' }}>
                      <img 
                        src="/images/logos/nac-logo-white-brand.webp" 
                        alt="Naveen Auto Components (NAC) White Logo" 
                        style={{ maxHeight: '38px', maxWidth: '38px', objectFit: 'contain' }} 
                      />
                    </div>
                    <div>
                      <h3 className="h5 fw-bold text-navy mb-0">Naveen Auto Components (NAC)</h3>
                      <span className="small text-muted font-monospace">Est. 2010 • ISO 9001:2015 Certified</span>
                    </div>
                  </div>
                  <p className="small text-secondary mb-0" style={{ lineHeight: '1.7' }}>
                    Expanded in 2010 as your turnkey one-stop solution for heavy ferrous & non-ferrous fabrication, industrial process equipment, PEB structures, pipeline ducts, and storage tanks.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={12}>
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4 bg-navy text-white" style={{ backgroundColor: '#0b1e36' }}>
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning text-navy rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '54px', height: '54px', backgroundColor: '#f57c00' }}>
                      <i className="bi bi-geo-alt-fill fs-4 text-white"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-bold text-white mb-0">Dual Manufacturing Footprint</h3>
                      <span className="small text-warning font-monospace">2 Units: Chennai & Cuddalore</span>
                    </div>
                  </div>
                  <p className="small text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                    Operating 2 manufacturing units in <strong>Chennai (SIDCO Kattur)</strong> and <strong>Cuddalore (2.5 Acres, NH-32)</strong> equipped with advanced CNC laser cutters, 16mm plate rolling, and ISO 9001:2015 quality management.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light border-bottom" data-aos="fade-up">
        <Container className="py-lg-4">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#fff' }}>
                ISO 9001:2015 Certified Manufacturing
              </Badge>
              <h2 className="display-6 fw-bold text-navy mb-4">
                About Naveen Auto Components
              </h2>
              <p className="lead text-secondary mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <strong>Naveen Auto Components</strong> is a One-Stop Heavy Engineering & Processing Equipment Manufacturing and Fabrication Industry based at SIDCO Women’s Industrial Park, Kattur, Chennai and Cuddalore-Chidambaram Road, Chidambaram.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: '1.75' }}>
                Specializing in Storage Tanks for water & condensate, Steam Distribution Pipeline Duct, Header Pipelines, PEB Structural Fabrication and Rail & Bus Coach Components - we are an ISO 9001:2015 Certified company specializing in Ferrous & Non-Ferrous Metal Fabrication for Industrial Process Equipment and Special Purpose Equipment.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button as={Link} to="/about" variant="warning" size="lg" className="fw-bold px-4 py-3 shadow" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
                  Learn More About NAC <i className="bi bi-arrow-right ms-2"></i>
                </Button>
                <Button as={Link} to="/facilities" variant="outline-dark" size="lg" className="fw-bold px-4 py-3">
                  Explore Infrastructure
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow-lg rounded-4 overflow-hidden" style={{ backgroundColor: '#071322', color: '#fff' }}>
                <Card.Header className="bg-navy p-4 border-0" style={{ backgroundColor: '#0b1e36' }}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-shield-check text-warning fs-2 me-3" style={{ color: '#f57c00' }}></i>
                    <div>
                      <h3 className="h5 fw-bold text-white mb-0">Our Quality Standards</h3>
                      <span className="small text-warning font-monospace">ISO 9001:2015 Certified Facilities</span>
                    </div>
                  </div>
                </Card.Header>
                <Card.Body className="p-4">
                  <h4 className="fw-bold mb-3 h6 text-warning" style={{ color: '#f57c00' }}>Our Quality Objectives:</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i> 100% On-Time Project Delivery</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i> Zero-Defect Precision Manufacturing</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i> 100% Raw Material Traceability & Test Certificates</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i> Radiography, Ultrasonic & Pressure Testing</li>
                  </ul>
                </Card.Body>
                <Card.Footer className="border-0 p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div>
                      <span className="fw-bold d-block text-white">Have blueprinted specs ready?</span>
                      <small className="text-white-50">Direct email for engineering review</small>
                    </div>
                    <a href="mailto:naveenautocomponents@gmail.com" className="btn btn-warning btn-sm fw-bold px-3 py-2" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
                      Email Drawings
                    </a>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Slogan & Motto Section */}
      <section className="py-5 text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #071322 0%, #0b1e36 100%)' }} data-aos="fade-up">
        <style>
          {`
            /* Sparkling 3D Industrial Ribbon */
            .ribbon-banner-wrapper {
              position: relative;
              display: inline-block;
              margin-bottom: 25px;
              padding: 0 45px;
            }

            .ribbon-banner-body {
              position: relative;
              background: linear-gradient(135deg, #d97706 0%, #f57c00 35%, #ff9800 65%, #e65100 100%);
              color: #ffffff;
              padding: 18px 45px;
              border-radius: 6px;
              box-shadow: 0 10px 30px rgba(245, 124, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.6), inset 0 -2px 5px rgba(0, 0, 0, 0.3);
              overflow: hidden;
              border: 1px solid rgba(255, 255, 255, 0.35);
            }

            /* 3D Folded Ribbon Tail Left & Right */
            .ribbon-banner-wrapper::before,
            .ribbon-banner-wrapper::after {
              content: "";
              position: absolute;
              top: 10px;
              width: 40px;
              height: calc(100% - 10px);
              background: #92400e;
              z-index: 0;
            }

            .ribbon-banner-wrapper::before {
              left: 10px;
              transform: skewY(14deg);
              border-radius: 6px 0 0 6px;
              box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.5);
            }

            .ribbon-banner-wrapper::after {
              right: 10px;
              transform: skewY(-14deg);
              border-radius: 0 6px 6px 0;
              box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
            }

            /* Metallic Light Beam Shimmer Sweep Animation */
            @keyframes ribbonShimmer {
              0% {
                transform: translateX(-150%) skewX(-30deg);
                opacity: 0;
              }
              15% {
                opacity: 0.85;
              }
              45% {
                transform: translateX(250%) skewX(-30deg);
                opacity: 0;
              }
              100% {
                transform: translateX(250%) skewX(-30deg);
                opacity: 0;
              }
            }

            .ribbon-shimmer-beam {
              position: absolute;
              top: 0;
              left: 0;
              width: 50%;
              height: 100%;
              background: linear-gradient(
                90deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.15) 20%, 
                rgba(255, 255, 255, 0.9) 50%, 
                rgba(255, 255, 255, 0.15) 80%, 
                transparent 100%
              );
              animation: ribbonShimmer 3.6s infinite ease-in-out;
              pointer-events: none;
              z-index: 1;
            }

            /* Sparkling Stars Animation */
            @keyframes starSparkle {
              0%, 100% { opacity: 0.3; transform: scale(0.85) rotate(0deg); }
              50% { opacity: 1; transform: scale(1.3) rotate(90deg); filter: drop-shadow(0 0 8px #ffffff); }
            }

            .sparkle-icon {
              display: inline-block;
              color: #fff;
              font-size: 1.2rem;
              margin: 0 8px;
              animation: starSparkle 2.2s infinite ease-in-out;
              vertical-align: middle;
            }

            .sparkle-icon.delay-1 { animation-delay: 0.7s; }
            .sparkle-icon.delay-2 { animation-delay: 1.4s; }

            .ribbon-text {
              position: relative;
              z-index: 2;
              font-size: 1.8rem;
              font-weight: 900;
              letter-spacing: 3px;
              text-transform: uppercase;
              color: #ffffff !important;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 16px rgba(255, 255, 255, 0.6);
              margin: 0;
            }

            @media (max-width: 768px) {
              .ribbon-banner-wrapper {
                padding: 0 15px;
              }
              .ribbon-banner-body {
                padding: 14px 20px;
              }
              .ribbon-text {
                font-size: 1.15rem;
                letter-spacing: 1.5px;
              }
              .sparkle-icon {
                font-size: 0.95rem;
                margin: 0 4px;
              }
            }
          `}
        </style>

        <Container>
          <div className="text-center mb-5">
            <div className="ribbon-banner-wrapper">
              <div className="ribbon-banner-body">
                <div className="ribbon-shimmer-beam"></div>
                <h2 className="ribbon-text">
                  <span className="sparkle-icon"><i className="bi bi-stars"></i></span>
                  WE FABRICATE
                  <span className="sparkle-icon delay-1"><i className="bi bi-dash-lg"></i></span>
                  WE BUILD
                  <span className="sparkle-icon delay-2"><i className="bi bi-dash-lg"></i></span>
                  WE DELIVER
                  <span className="sparkle-icon"><i className="bi bi-stars"></i></span>
                </h2>
              </div>
            </div>
            <p className="lead text-white-50 max-w-700 mx-auto">
              Our core manufacturing commitment driving quality heavy engineering across Chennai & Cuddalore units.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="p-4 rounded-4 bg-dark text-white border border-secondary h-100" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)' }}>
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '56px', height: '56px', backgroundColor: '#f57c00' }}>
                  <i className="bi bi-gear-wide-connected fs-3 text-white"></i>
                </div>
                <h3 className="h5 fw-bold text-white mb-2">We Fabricate</h3>
                <p className="small text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                  6kW CNC Fiber Laser Cutting, 16mm plate rolling, and 3m hydraulic press brake forming with ISO 9001:2015 precision quality control.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="p-4 rounded-4 bg-dark text-white border border-secondary h-100" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)' }}>
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '56px', height: '56px', backgroundColor: '#f57c00' }}>
                  <i className="bi bi-building-fill-gear fs-3 text-white"></i>
                </div>
                <h3 className="h5 fw-bold text-white mb-2">We Build</h3>
                <p className="small text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                  High-capacity storage tanks, steam distribution pipeline ducts, PEB structural steelwork, pressure vessels & rail coach components.
                </p>
              </div>
            </Col>

            <Col lg={4} md={12}>
              <div className="p-4 rounded-4 bg-dark text-white border border-secondary h-100" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)' }}>
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '56px', height: '56px', backgroundColor: '#f57c00' }}>
                  <i className="bi bi-truck-flatbed fs-3 text-white"></i>
                </div>
                <h3 className="h5 fw-bold text-white mb-2">We Deliver</h3>
                <p className="small text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                  10 MT EOT crane maneuvering, 22,500 sq.ft open staging yards, and 100% on-time dispatch logistics across India.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Capabilities Overview Section */}
      <section className="py-5 bg-light">
        <Container className="py-lg-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-navy mb-3">Our Fabrication Specializations</h2>
            <p className="lead text-secondary max-w-700 mx-auto">
              From storage tanks for water & condensate to PEB structural steelwork, steam distribution pipeline ducts, air ducts, and rail coach parts, NAC provides complete engineering solutions across 2 manufacturing units.
            </p>
          </div>
          <Row className="g-4">
            {servicesData.slice(0, 6).map((service, idx) => (
              <Col lg={4} md={6} key={service.slug}>
                <ServiceCard service={service} index={idx} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/services" variant="navy" className="btn-navy fw-bold px-4 py-2" style={{ backgroundColor: '#0b1e36', color: '#fff' }}>
              View All Fabrication Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Client Logos Grid */}
      <section className="py-5 bg-white" data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-navy mb-3">Key Customers & Institutional Partners</h2>
            <p className="text-secondary lead max-w-800 mx-auto">
              Trusted heavy engineering fabrication partner for industrial market leaders including <strong>AIRFLOW</strong>, <strong>C.DOCTOR</strong>, <strong>ENEXIO POWER COOLING</strong>, <strong>ON LOAD GEARS</strong>, and <strong>NADI INDUSTRIAL FANS</strong>.
            </p>
            <div className="mx-auto bg-warning mt-2" style={{ width: '60px', height: '3px', backgroundColor: '#f57c00' }}></div>
          </div>
          
          <Row className="justify-content-center align-items-center g-4 row-cols-2 row-cols-md-3 row-cols-lg-6">
            {clientLogos.map((client, idx) => (
              <Col key={idx} className="text-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="p-3 border border-light rounded-3 bg-white shadow-sm h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '120px' }}>
                  <img 
                    src={client.logo} 
                    alt={`${client.name} Fabrication in Chennai Cuddalore - Naveen Auto Components`} 
                    loading="lazy"
                    className="img-fluid"
                    style={{ maxHeight: '70px', objectFit: 'contain', filter: 'grayscale(100%) opacity(70%)', transition: 'all 0.3s ease' }}
                    onMouseOver={(e) => { e.currentTarget.style.filter = 'grayscale(0%) opacity(100%)' }}
                    onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(70%)' }}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(135deg, #0b1e36 0%, #071322 100%)' }} data-aos="zoom-in" data-aos-duration="800">
        <Container className="text-center py-4">
          <h2 className="display-6 fw-extrabold text-white mb-3">Ready to Discuss Your Heavy Fabrication Project?</h2>
          <p className="lead text-white-50 max-w-700 mx-auto mb-4">
            From PEB structures to high-capacity storage tanks, our engineers are ready to analyze your blueprints and deliver a precise quote.
          </p>
          <div className="d-inline-flex gap-3">
            <Button as={Link} to="/contact" variant="warning" size="lg" className="fw-bold px-4 py-3 shadow" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
              <i className="bi bi-file-earmark-text-fill me-2"></i> Request RFQ Proposal
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};
