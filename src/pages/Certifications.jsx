import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';

export const Certifications = () => {
  return (
    <>
      <SEO 
        title="ISO 9001:2015 Certification & Quality | Naveen Auto Components"
        description="ISO 9001:2015 quality standards and inspection assurance at Naveen Auto Components (naveenautocomponents.com) in Chennai & Cuddalore."
        keywords="naveenautocomponents.com, ISO 9001:2015 certification, Naveen Auto Components quality policy, metal fabrication quality assurance"
        canonical="/certifications"
      />

      <PageBanner 
        title="Certifications & Quality Standards" 
        subtitle="ISO 9001:2015 standards for Heavy Fabrication in Chennai and Cuddalore."
        breadcrumbs={[
          { label: 'About Us', url: '/about' },
          { label: 'Certifications', url: '/certifications' }
        ]}
        image="/images/hd/factories/office_ambattur.jpg"
      />

      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <Row className="g-5 justify-content-center">
            <Col md={8}>
              <Card className="border-0 shadow rounded-4 overflow-hidden">
                <div className="bg-navy text-white p-4 text-center" style={{ backgroundColor: '#0b1e36' }}>
                  <i className="bi bi-award-fill text-warning display-4 mb-3 d-block"></i>
                  <h2 className="fw-bold mb-0">ISO 9001:2015 Certified</h2>
                </div>
                <Card.Body className="p-4 p-lg-5 text-center bg-light">
                  <p className="lead text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                    Naveen Auto Components is an ISO 9001:2015 certified organization. This prestigious certification reflects our rigorous quality management systems, stringent inspection processes, and our commitment to delivering defect-free, precision-engineered metal fabrication products to all our clients.
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