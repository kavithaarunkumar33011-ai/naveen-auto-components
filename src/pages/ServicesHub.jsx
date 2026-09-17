import React from 'react';
import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';

export const ServicesHub = () => {
  const servicesHubSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Heavy Engineering Fabrication Services",
    "itemListElement": servicesData.map((svc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": svc.title,
      "url": `https://naveenautocomponents.com/services/${svc.slug}`
    }))
  };

  return (
    <>
      <SEO 
        title="Metal Fabrication Products & Solutions | Naveen Auto Components"
        description="Fabrication products by Naveen Auto Components (naveenautocomponents.com): Storage Tanks, Steam Distribution Ducts, PEB Structural Steel, Rail & Bus Coach Parts, Air Blowers & Bins in Chennai & Cuddalore."
        keywords="naveenautocomponents.com, Naveen Auto Components products, storage tank fabrication, steam duct pipeline, PEB structural steelwork, rail coach components Chennai, industrial air blowers Cuddalore"
        canonical="/services"
        schema={servicesHubSchema}
      />

      <PageBanner 
        title="Our Fabrication Products & Engineering Solutions" 
        subtitle="Comprehensive Heavy Fabrication Products in Chennai and Cuddalore."
        breadcrumbs={[{ label: 'Products', url: '/services' }]}
        image="/images/hd/services/storage-tank-water-condensate-fabrication-chennai-nac-21.webp"
      />

      {/* Services Grid */}
      <section className="py-5 bg-light">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-2" style={{ backgroundColor: '#f57c00' }}>
              Specialized Industrial Services
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Heavy Fabrication in Chennai and Cuddalore – Capabilities</h2>
            <p className="text-secondary lead">
              Select a service below to view machine capacities, material grades, project case studies, and technical specifications.
            </p>
          </div>

          <Row className="g-4">
            {servicesData.map((svc) => (
              <Col key={svc.slug} md={6} lg={4}>
                <ServiceCard service={svc} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* General Specs Banner */}
      <section className="py-5 bg-white border-top">
        <Container>
          <Card className="border-0 bg-navy text-white p-4 p-md-5 rounded-3 shadow-lg" style={{ backgroundColor: '#0b1e36' }}>
            <Row className="align-items-center g-4">
              <Col lg={8}>
                <h3 className="h2 fw-bold text-white mb-3">Custom Heavy Fabrication Requirements?</h3>
                <p className="lead text-white-50 mb-0">
                  We fabricate specialized equipment up to 16mm plate thickness, 8m press brake bending, and 10 MT crane assembly. Discuss your drawings directly with our plant engineers.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Button as={Link} to="/contact" variant="warning" size="lg" className="fw-bold px-4 py-3 text-navy shadow" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
                  <i className="bi bi-file-earmark-text-fill me-2"></i> Submit RFQ
                </Button>
              </Col>
            </Row>
          </Card>
        </Container>
      </section>
    </>
  );
};
