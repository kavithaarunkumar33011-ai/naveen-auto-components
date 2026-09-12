import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { companyData } from '../data/companyData';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { IndustrialGraphic } from '../components/IndustrialGraphic';
import { HeroCarousel } from '../components/HeroCarousel';

export const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Naveen Auto Components",
    "url": "https://www.naveenauto.com",
    "description": companyData.about
  };

  const clientLogos = [
    { name: "C. Doctor & Co. Pvt. Ltd. (Doctaire)", logo: "/images/logos/doctor&co.pvt.ltd.jpeg" },
    { name: "ENEXIO Power Cooling", logo: "/images/logos/enexio.jpg" },
    { name: "On Load Gears (OLG)", logo: "/images/logos/on_load_gears.jpeg" },
    { name: "NADI Industrial Fans", logo: "/images/logos/nadi_fans.jpg" },
    { name: "Airflow", logo: "/images/logos/airflow.jpg" },
    { name: "Ability Enterprises", logo: "/images/logos/ability_enterprises.jpeg" }
  ];

  return (
    <>
      <SEO 
        title="Heavy Fabrication in Chennai and Cuddalore | Naveen Auto Components"
        description="Naveen Auto Components is your premier partner for Heavy Fabrication in Chennai and Cuddalore. ISO 9001:2015 certified manufacturer of storage tanks, steam pipeline ducts, PEB structural steel, rail & bus coach components, and heavy air blowers."
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
              { label: "Manufacturing Area", value: "350k+ Sq Ft" },
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

      {/* Varsha Technologies & Naveen Auto Components Corporate Group Overview */}
      <section className="py-5 bg-white border-bottom">
        <Container className="py-lg-4">
          <div className="text-center max-w-900 mx-auto mb-5" data-aos="fade-up">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#fff' }}>
              Precision Manufacturing Since 2000
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-4">
              Varsha Technologies & Naveen Auto Components
            </h2>
            <p className="lead text-secondary mx-auto max-w-800" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
              Established in 2000, <strong>Varsha Technologies</strong> is an <strong>ISO / IATF 16949:2016 certified</strong> manufacturing company in Chennai, specializing in CNC machined components, hot forging, heat treatment and shot blasting for automotive and valve industries.
            </p>
          </div>

          <Row className="g-4 mb-4" data-aos="fade-up" data-aos-delay="200">
            <Col lg={4} md={6}>
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4 bg-light border-top border-warning border-4">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-navy text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '54px', height: '54px', backgroundColor: '#0b1e36' }}>
                      <i className="bi bi-cpu-fill fs-4 text-warning"></i>
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
                    <div className="bg-navy text-white rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '54px', height: '54px', backgroundColor: '#0b1e36' }}>
                      <i className="bi bi-building-gear fs-4 text-warning"></i>
                    </div>
                    <div>
                      <h3 className="h5 fw-bold text-navy mb-0">Naveen Auto Components</h3>
                      <span className="small text-muted font-monospace">Est. 2010 • ISO 9001:2015</span>
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
                      <span className="small text-warning font-monospace">Chennai & Cuddalore</span>
                    </div>
                  </div>
                  <p className="small text-white-50 mb-0" style={{ lineHeight: '1.7' }}>
                    Operating dual manufacturing plants in <strong>Chennai</strong> and <strong>Cuddalore (NH-32, Chidambaram Highway)</strong> equipped with advanced CNC laser cutters, 16mm plate rolling, and ISO 9001:2015 systems serving South India.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us & Company Info */}
      <section className="py-5 bg-white border-bottom border-light overflow-hidden">
        <Container className="py-lg-5">
          <Row className="align-items-center g-5">
            <Col lg={6} data-aos="fade-right" data-aos-duration="1000">
              <Badge bg="warning" className="text-dark fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00' }}>
                <i className="bi bi-award-fill me-1"></i> About Us
              </Badge>
              <h2 className="display-6 fw-bold text-navy mb-4">
                Delivering Excellence in Heavy Fabrication in Chennai and Cuddalore
              </h2>
              <p className="text-secondary mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                In 2010, we expanded with <strong>Naveen Auto Components (NAC)</strong>, a leading heavy fabrication and PEB structural fabrication company in Chennai and Cuddalore. NAC is your one-stop solution for ferrous and non-ferrous metal fabrication, industrial process equipment, PEB structures, pipeline ducts, storage tanks and special-purpose equipment.
              </p>
              
              <Row className="g-4 mb-4">
                <Col sm={6}>
                  <div className="d-flex align-items-start">
                    <i className="bi bi-check-circle-fill text-warning fs-4 me-3" style={{ color: '#f57c00' }}></i>
                    <div>
                      <h5 className="h6 fw-bold text-navy mb-1">ISO 9001:2015 Quality Policy</h5>
                      <p className="text-secondary small mb-0">Strict adherence to global quality management systems and tolerances.</p>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-start">
                    <i className="bi bi-gear-fill text-warning fs-4 me-3" style={{ color: '#f57c00' }}></i>
                    <div>
                      <h5 className="h6 fw-bold text-navy mb-1">Advanced CNC Fleet</h5>
                      <p className="text-secondary small mb-0">6kW Laser cutting, 16mm plate rolling, and 3-meter hydraulic press brakes.</p>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-start">
                    <i className="bi bi-building-fill text-warning fs-4 me-3" style={{ color: '#f57c00' }}></i>
                    <div>
                      <h5 className="h6 fw-bold text-navy mb-1">Dual Manufacturing Footprint</h5>
                      <p className="text-secondary small mb-0">Facilities in Chennai and Cuddalore (2.5 Acres) with 10 MT EOT Cranes.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            
            <Col lg={6} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <Card className="border-0 shadow-lg bg-navy text-white p-4" style={{ backgroundColor: '#0b1e36' }}>
                <Card.Body>
                  <IndustrialGraphic type="mig_welding" title="Precision Heavy Fabrication & Welding" alt="Heavy Industrial Welding Process" className="rounded-3 shadow mb-4 w-100" style={{ height: '240px' }} />
                  <h4 className="fw-bold mb-3">Our Quality Objectives</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2"><i className="bi bi-bullseye text-warning me-2" style={{ color: '#f57c00' }}></i> Achieving 100% On-Time Delivery</li>
                    <li className="mb-2"><i className="bi bi-bullseye text-warning me-2" style={{ color: '#f57c00' }}></i> Ensuring Zero Defect Manufacturing</li>
                    <li className="mb-2"><i className="bi bi-bullseye text-warning me-2" style={{ color: '#f57c00' }}></i> 100% Material Traceability</li>
                    <li><i className="bi bi-bullseye text-warning me-2" style={{ color: '#f57c00' }}></i> Continuous Upgrade of Machining Infrastructure</li>
                  </ul>
                </Card.Body>
                <Card.Footer className="border-0 bg-transparent pt-0 pb-3">
                  <div className="p-3 bg-dark rounded text-center" style={{ backgroundColor: '#071322' }}>
                    <span className="fw-bold d-block mb-1">Send your blueprints for review:</span>
                    <a href={`mailto:${companyData.contact.email}`} className="text-warning text-decoration-none font-monospace">{companyData.contact.email}</a>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Manufacturing Motto Section */}
      <section className="slogan-motto-section" data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <div className="slogan-card-container">
            {/* Parallelogram Ribbon Bar */}
            <div className="slogan-ribbon-bar">
              <div className="slogan-ribbon-side"></div>
              <div className="slogan-ribbon-center">
                <h2 className="slogan-ribbon-text">WE FABRICATE , WE BUILD , WE DELIVER</h2>
              </div>
              <div className="slogan-ribbon-side"></div>
            </div>

            {/* 3 Interactive Motto Pillars */}
            <Row className="g-4">
              <Col lg={4} md={6}>
                <div className="slogan-pillar-card">
                  <div className="bg-warning text-navy rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '56px', height: '56px', backgroundColor: '#f57c00' }}>
                    <i className="bi bi-gear-wide-connected fs-3 text-white"></i>
                  </div>
                  <h3 className="h5 fw-bold text-white mb-2">We Fabricate</h3>
                  <p className="small text-white-50 mb-0">
                    6kW CNC Fiber Laser Cutting, 16mm plate rolling, and 3m hydraulic press brake forming with ISO 9001:2015 precision.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={6}>
                <div className="slogan-pillar-card">
                  <div className="bg-warning text-navy rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '56px', height: '56px', backgroundColor: '#f57c00' }}>
                    <i className="bi bi-building-fill-gear fs-3 text-white"></i>
                  </div>
                  <h3 className="h5 fw-bold text-white mb-2">We Build</h3>
                  <p className="small text-white-50 mb-0">
                    High-capacity storage tanks, steam distribution pipeline ducts, PEB structural steelwork, & rail coach components.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={12}>
                <div className="slogan-pillar-card">
                  <div className="bg-warning text-navy rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '56px', height: '56px', backgroundColor: '#f57c00' }}>
                    <i className="bi bi-truck-flatbed fs-3 text-white"></i>
                  </div>
                  <h3 className="h5 fw-bold text-white mb-2">We Deliver</h3>
                  <p className="small text-white-50 mb-0">
                    10 MT EOT crane maneuvering, 22,500 sq.ft open staging yards, and 100% on-time site dispatch logistics.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Capabilities Overview Section */}
      <section className="py-5 bg-light">
        <Container className="py-lg-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold text-navy mb-3">Our Core Engineering Capabilities</h2>
            <p className="lead text-secondary max-w-700 mx-auto">
              From heavy structural fabrication to precision steam pipelines, our modern equipment and expansive plant enable us to fabricate exactly to your specifications.
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
            <h3 className="h5 fw-bold text-navy mt-1">Key Customers & Institutional Partners</h3>
            <div className="mx-auto bg-warning mt-2" style={{ width: '60px', height: '3px', backgroundColor: '#f57c00' }}></div>
          </div>
          
          <Row className="justify-content-center align-items-center g-4 row-cols-2 row-cols-md-3 row-cols-lg-6">
            {clientLogos.map((client, idx) => (
              <Col key={idx} className="text-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="p-3 border border-light rounded-3 bg-white shadow-sm h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '120px' }}>
                  <img 
                    src={client.logo} 
                    alt={`${client.name} Logo`} 
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
