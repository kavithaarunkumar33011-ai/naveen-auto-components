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
    { name: "C. Doctor & Co. Pvt. Ltd. (Doctaire)", logo: "/images/logos/cdoctor-company-client-logo-nac.webp" },
    { name: "ENEXIO Power Cooling", logo: "/images/logos/enexio-power-cooling-client-logo-nac.webp" },
    { name: "On Load Gears (OLG)", logo: "/images/logos/on-load-gears-client-logo-nac.webp" },
    { name: "NADI Industrial Fans", logo: "/images/logos/nadi-fans-client-logo-nac.webp" },
    { name: "Airflow", logo: "/images/logos/airflow-client-logo-nac.webp" },
    { name: "Ability Enterprises", logo: "/images/logos/ability-enterprises-client-logo-nac.webp" },
    { name: "IRG Fabrication", logo: "/images/logos/irg-fabrication-client-logo-nac.webp" }
  ];

  return (
    <>
      <SEO 
        title="Naveen Auto Components | Heavy Fabrication, Storage Tanks & PEB Structural Works in Chennai & Cuddalore"
        description="Naveen Auto Components (NAC) - ISO 9001:2015 certified heavy fabrication company with 2 units in Chennai & Cuddalore. Specializing in Storage Tank, Steam Distribution Duct, Header Pipeline, PEB Structural Fabrication, Rail Coach Components, Air Duct & Material Handling Bins."
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

      {/* Varsha Technologies & Naveen Auto Components Corporate Group Overview */}
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
            <h2 className="display-6 fw-bold text-navy mb-3">Our Clients: Airflow, C.Doctor, IRG Fabrication</h2>
            <p className="text-secondary lead max-w-800 mx-auto">
              Trusted heavy engineering fabrication partner for industrial market leaders including <strong>AIRFLOW</strong>, <strong>C.DOCTOR</strong>, <strong>IRG FABRICATION</strong>, <strong>ENEXIO POWER COOLING</strong>, and <strong>ENVIRO ENGINEERING</strong>.
            </p>
            <div className="mx-auto bg-warning mt-2" style={{ width: '60px', height: '3px', backgroundColor: '#f57c00' }}></div>
          </div>
          
          <Row className="justify-content-center align-items-center g-4 row-cols-2 row-cols-md-3 row-cols-lg-7">
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
