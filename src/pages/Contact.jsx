import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { ContactForm } from '../components/ContactForm';
import { companyData } from '../data/companyData';

export const Contact = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Naveen Auto Components",
    "url": "https://www.naveenauto.com/contact",
    "description": "Contact Naveen Auto Components for heavy engineering metal fabrication RFQs, plant visits, and technical drawings review."
  };

  return (
    <>
      <SEO 
        title="Contact Naveen Auto Components - Chennai & Cuddalore Fabrication Units"
        description="Contact Naveen Auto Components (NAC) for heavy engineering inquiries. Administrative office in Ambattur, Chennai with manufacturing units in Kattur & Cuddalore."
        canonical="/contact"
        schema={contactSchema}
      />

      <PageBanner 
        title="Contact Naveen Auto Components - Chennai & Cuddalore Fabrication Units" 
        subtitle="ISO 9001:2015 Certified Heavy Fabrication Company with 2 Manufacturing Units."
        breadcrumbs={[{ label: 'Contact Us', url: '/contact' }]}
        image="/images/hd/contact-nac-heavy-fabrication-chennai-cuddalore.webp"
      />

      {/* Quick Contact Header Cards */}
      <section className="py-5 bg-light">
        <Container className="py-lg-4">
          <Row className="g-4 mb-5">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-3">
                <Card.Body>
                  <div className="bg-light p-3 text-warning rounded-circle d-inline-block mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-telephone-fill fs-3" style={{ color: '#f57c00' }}></i>
                  </div>
                  <h3 className="h5 fw-bold text-navy mb-2">Phone & Mobile</h3>
                  <div className="small mb-1">
                    <strong>Telephone: </strong>
                    <a href={`tel:${companyData.contact.tel}`} className="text-navy text-decoration-none fw-semibold">
                      {companyData.contact.tel}
                    </a>
                  </div>
                  <div className="small">
                    <strong>Mobile: </strong>
                    <a href={`tel:${companyData.contact.mobile}`} className="text-navy text-decoration-none fw-semibold">
                      {companyData.contact.mobile}
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-3">
                <Card.Body>
                  <div className="bg-light p-3 text-warning rounded-circle d-inline-block mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-envelope-fill fs-3" style={{ color: '#f57c00' }}></i>
                  </div>
                  <h3 className="h5 fw-bold text-navy mb-2">Direct Email</h3>
                  <p className="small mb-2">Send RFQs & technical CAD drawings to:</p>
                  <a href={`mailto:${companyData.contact.email}`} className="fw-bold text-primary text-decoration-none">
                    {companyData.contact.email}
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm text-center p-3">
                <Card.Body>
                  <div className="bg-light p-3 text-warning rounded-circle d-inline-block mb-3" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-clock-fill fs-3" style={{ color: '#f57c00' }}></i>
                  </div>
                  <h3 className="h5 fw-bold text-navy mb-2">Business Hours</h3>
                  <p className="small text-secondary mb-1">
                    <strong>Mon – Sat:</strong> 9:00 AM – 6:00 PM
                  </p>
                  <p className="small text-muted mb-0">
                    Sunday: Closed
                  </p>
                  <Badge bg="secondary" className="mt-2 font-monospace fs-8">
                    Standard Operating Hours
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Form & Office Address Grid */}
          <Row className="g-5">
            <Col lg={7}>
              <ContactForm />
            </Col>

            <Col lg={5}>
              <Card className="border-0 shadow-sm bg-navy text-white p-4 h-100" style={{ backgroundColor: '#0b1e36' }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h4 fw-bold text-warning mb-3">
                      <i className="bi bi-building me-2"></i> Corporate Registered Office
                    </h3>
                    <p className="lead text-white mb-3" style={{ fontSize: '1rem' }}>
                      {companyData.locations.office.address}
                    </p>
                    <p className="small text-white-50 mb-4">
                      Situated in the heart of Ambattur Industrial Estate, Chennai — facilitating seamless coordination for procurement, quality audits, and engineering billing.
                    </p>

                    <div className="p-3 rounded border border-secondary mb-4" style={{ backgroundColor: '#071322' }}>
                      <div className="d-flex align-items-center mb-1">
                        <i className="bi bi-clock-history text-warning me-2 fs-5"></i>
                        <strong className="text-white small">Rapid RFQ Response Guarantee</strong>
                      </div>
                      <p className="text-white-50 small mb-0">
                        Our engineering desk reviews technical drawings and RFQs within 24 business hours for prompt estimations.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-top border-secondary text-white-50 small font-monospace">
                    <div><i className="bi bi-patch-check-fill text-warning me-1"></i> ISO 9001:2015 Registered Facility</div>
                    <div><i className="bi bi-shield-lock me-1 text-warning"></i> Direct Contact: Mr. R.K. Chandraprakash (Purchase & Marketing)</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Embeds Section */}
      <section className="py-5 bg-white border-top">
        <Container>
          <div className="text-center max-w-700 mx-auto mb-5">
            <h2 className="display-6 fw-bold text-navy mb-3">Plant & Facility Map Locations</h2>
            <p className="text-secondary lead">
              Visit our corporate office or dual manufacturing yards in Chennai and Cuddalore.
            </p>
          </div>

          <Row className="g-4">
            {/* Unit 1 Chennai Map */}
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Header className="bg-navy text-white py-3 px-3" style={{ backgroundColor: '#071322' }}>
                  <h3 className="h6 fw-bold mb-0 text-warning">
                    <i className="bi bi-geo-alt-fill me-2"></i> Fabrication Unit 1 — Chennai (SIDCO Industrial Park)
                  </h3>
                </Card.Header>
                <div className="ratio ratio-16x9">
                  <iframe 
                    title="Unit 1 Chennai Map" 
                    src={companyData.locations.unit1.mapEmbed}
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <Card.Body className="p-3 bg-light">
                  <p className="small text-secondary mb-0">
                    <strong>Address: </strong> {companyData.locations.unit1.address}
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Unit 2 Cuddalore Map */}
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Header className="bg-navy text-white py-3 px-3" style={{ backgroundColor: '#071322' }}>
                  <h3 className="h6 fw-bold mb-0 text-warning">
                    <i className="bi bi-geo-alt-fill me-2"></i> Fabrication Unit 2 — Cuddalore (2.5 Acres, NH-32)
                  </h3>
                </Card.Header>
                <div className="ratio ratio-16x9">
                  <iframe 
                    title="Unit 2 Cuddalore Map" 
                    src={companyData.locations.unit2.mapEmbed}
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <Card.Body className="p-3 bg-light">
                  <p className="small text-secondary mb-0">
                    <strong>Address: </strong> {companyData.locations.unit2.address}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
