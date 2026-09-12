import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';

export const VisionMission = () => {
  return (
    <>
      <SEO 
        title="Vision & Mission | Heavy Fabrication in Chennai and Cuddalore"
        description="Our corporate vision and engineering mission for Heavy Fabrication in Chennai and Cuddalore. Driven by ISO 9001:2015 standards & technical innovation."
        canonical="/vision-mission"
      />

      <PageBanner 
        title="Vision & Mission" 
        subtitle="Guiding principles for Heavy Fabrication in Chennai and Cuddalore."
        breadcrumbs={[
          { label: 'About Us', url: '/about' },
          { label: 'Vision & Mission', url: '/vision-mission' }
        ]}
        image="/images/hd/factories/office_ambattur.jpg"
      />

      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <Row className="g-5">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm rounded-4 bg-light">
                <Card.Body className="p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-amber text-navy rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#f57c00' }}>
                      <i className="bi bi-eye-fill fs-3"></i>
                    </div>
                    <h2 className="h3 fw-bold text-navy mb-0">Our Vision</h2>
                  </div>
                  <p className="lead text-secondary" style={{ lineHeight: '1.8' }}>
                    To be the leading global partner in heavy engineering, structural fabrication, and industrial process equipment manufacturing, setting the standard for innovation, quality, and precision engineering across all sectors.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm rounded-4 bg-light">
                <Card.Body className="p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-navy text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#0b1e36' }}>
                      <i className="bi bi-bullseye fs-3 text-warning"></i>
                    </div>
                    <h2 className="h3 fw-bold text-navy mb-0">Our Mission</h2>
                  </div>
                  <p className="lead text-secondary" style={{ lineHeight: '1.8' }}>
                    To deliver fully finished, high-quality fabrication products tailored to our clients' exact specifications. We commit to continuous technological advancement, strict adherence to ISO standards, and maintaining a safe, empowering environment for our workforce.
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