import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';

export const Clients = () => {
  const clientsData = [
    {
      name: "C. Doctor & Co. Pvt. Ltd. (Doctaire)",
      tagline: "Industrial Air Conditioning & Humidification Pioneers",
      scope: "Duct pipeline products, factory loading, pipe bracing stands with shot blasting & epoxy painting.",
      location: "Multi-Unit Supply",
      logo: "/images/logos/cdoctor-company-client-logo-nac.webp"
    },
    {
      name: "ENEXIO Power Cooling",
      tagline: "Global Power Plant Cooling Infrastructure",
      scope: "Consent-state tanks, flash tanks, header pipes, structural fan guards, heavy beams & hand rails.",
      location: "Power & Thermal Sector",
      logo: "/images/logos/enexio-power-cooling-client-logo-nac.webp"
    },
    {
      name: "On Load Gears (OLG)",
      tagline: "Transformer & Heavy Electrical Switchgear Equipment",
      scope: "Sheet metal enclosures, mounting brackets, and specialized electrical hardware housings.",
      location: "Electrical & Power Equipment",
      logo: "/images/logos/on-load-gears-client-logo-nac.webp"
    },
    {
      name: "NADI Industrial Fans",
      tagline: "Heavy Industrial Ventilation & Air Handling Equipment",
      scope: "Large diameter fan casings, heavy air ducting, and dynamic volute assemblies.",
      location: "Air Handling & HVAC",
      logo: "/images/logos/nadi-fans-client-logo-nac.webp"
    },
    {
      name: "Airflow",
      tagline: "Industrial Air Movement & Blowers",
      scope: "Air blower products, multi-unit rectangular & circular industrial air duct assemblies.",
      location: "Air Systems",
      logo: "/images/logos/airflow-client-logo-nac.webp"
    },
    {
      name: "Ability Enterprises",
      tagline: "General Heavy Engineering & Contracting",
      scope: "Structural steel frameworks, custom PEB components, and rolled heavy plate assemblies.",
      location: "Infrastructure & Heavy Fabrication",
      logo: "/images/logos/ability-enterprises-client-logo-nac.webp"
    }
  ];

  const clientsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Naveen Auto Components Client Network",
    "url": "https://naveenautocomponents.com/clients",
    "description": "Trusted fabrication partner for C. Doctor, ENEXIO Power Cooling, On Load Gears, NADI Industrial Fans, Airflow, and Ability Enterprises."
  };

  return (
    <>
      <SEO 
        title="Clients & OEM Partners | Naveen Auto Components"
        description="Industrial clients and OEM partners of Naveen Auto Components (naveenautocomponents.com) including Airflow, C.Doctor, Enexio, On Load Gears, and Nadi Industrial Fans."
        keywords="naveenautocomponents.com, Naveen Auto Components clients, NAC partners, industrial fabrication clients Chennai, C.Doctor fabrication, Enexio supplier"
        canonical="/clients"
        schema={clientsSchema}
      />

      <PageBanner 
        title="Our Clients" 
        subtitle="Trusted OEM partners for Heavy Fabrication in Chennai and Cuddalore."
        breadcrumbs={[{ label: 'Clients', url: '/clients' }]}
        image="/images/hd/trusted-clients-banner-nac-chennai-cuddalore.webp"
      />

      {/* Main Customers Grid */}
      <section className="py-5 bg-light">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5" data-aos="fade-up">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-2" style={{ backgroundColor: '#f57c00' }}>
              Institutional OEM Partnerships
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Key Client Portfolio</h2>
            <p className="text-secondary lead">
              We have built enduring relationships with industrial leaders by strictly adhering to ISO 9001:2015 quality standards and 100% on-time delivery.
            </p>
          </div>

          <Row className="g-4">
            {clientsData.map((client, idx) => (
              <Col key={idx} md={6} lg={4} data-aos="fade-up" data-aos-delay={idx * 120}>
                <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white client-card-hover">
                  <Card.Header className="bg-white py-3 px-4 d-flex align-items-center justify-content-center border-bottom" style={{ backgroundColor: '#ffffff' }}>
                    <div className="client-logo-wrapper d-flex align-items-center justify-content-center p-2" style={{ height: '80px', width: '100%' }}>
                      <img 
                        src={client.logo} 
                        alt={`${client.name} Logo`}
                        loading="lazy"
                        className="client-logo-img"
                        style={{ maxHeight: '65px', maxWidth: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  </Card.Header>

                  <Card.Body className="p-4 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h2 className="h6 fw-bold text-navy mb-0">
                          {client.name}
                        </h2>
                        <Badge bg="secondary" className="font-monospace fs-8">{client.location}</Badge>
                      </div>
                      <h3 className="h6 text-muted font-monospace mb-3" style={{ fontSize: '0.85rem' }}>
                        {client.tagline}
                      </h3>
                      <p className="small text-secondary mb-3">
                        <strong>Fabrication Scope:</strong> {client.scope}
                      </p>
                    </div>

                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <span className="small text-muted font-monospace">
                        <i className="bi bi-check-circle-fill text-success me-1"></i> Active Supplier
                      </span>
                      <Button as={Link} to="/projects" variant="outline-dark" size="sm" className="fw-bold rounded-pill px-3">
                        View Projects <i className="bi bi-arrow-right ms-1"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Vendor Registration CTA */}
      <section className="py-5 bg-white border-top">
        <Container className="text-center py-4">
          <Card className="border-0 shadow-lg bg-navy text-white p-4 p-md-5" style={{ backgroundColor: '#0b1e36' }}>
            <Card.Body>
              <h2 className="display-6 fw-bold text-white mb-3">Enlist Naveen Auto Components as Your Approved Vendor</h2>
              <p className="lead text-white-50 max-w-700 mx-auto mb-4">
                Looking for an ISO 9001:2015 certified metal fabrication vendor in Chennai or Cuddalore? Request our vendor registration pack or plant inspection today.
              </p>
              <Button as={Link} to="/contact" variant="warning" size="lg" className="fw-bold px-4 py-3 text-navy shadow" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
                <i className="bi bi-file-earmark-check-fill me-2"></i> Request Vendor Empanelment Pack
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};
