import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button, ListGroup } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { IndustrialGraphic } from '../components/IndustrialGraphic';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  const [lightbox, setLightbox] = useState({ show: false, src: '', alt: '' });

  const handleOpenLightbox = (src, alt) => {
    setLightbox({ show: true, src, alt });
  };

  const handleCloseLightbox = () => {
    setLightbox(prev => ({ ...prev, show: false }));
  };

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find related services (excluding current)
  const relatedServices = servicesData.filter((s) => s.slug !== slug).slice(0, 2);

  // Find project highlights matching this service slug
  const relatedProjects = projectsData.filter((p) => {
    const pCat = p.category.toLowerCase();
    if (slug === 'storage-tanks' && pCat.includes('tank')) return true;
    if (slug === 'pipeline-ducts' && pCat.includes('pipeline')) return true;
    if (slug === 'peb-structural' && (pCat.includes('structural') || pCat.includes('peb'))) return true;
    if (slug === 'rail-bus-coach' && pCat.includes('rail')) return true;
    if (slug === 'air-duct-blower' && pCat.includes('air')) return true;
    if (slug === 'heavy-handling-logistics' && pCat.includes('logistics')) return true;
    return false;
  }).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Naveen Auto Components",
      "url": "https://naveenautocomponents.com"
    },
    "description": service.fullDescription,
    "areaServed": "Tamil Nadu, India"
  };

  // Map real shop floor photos for each service content page
  const realPhotoMap = {
    'storage-tanks': 'profile_img_20',
    'pipeline-ducts': 'pipeline_duct_real',
    'peb-structural': 'peb_structural_real',
    'rail-bus-coach': 'rail_coach_real',
    'air-duct-blower': 'air_duct_real',
    'heavy-handling-logistics': 'heavy_logistics_real'
  };

  return (
    <>
      <SEO 
        title={`${service.seoTitle} | Naveen Auto Components`}
        description={`${service.seoDesc} Engineered by Naveen Auto Components (naveenautocomponents.com).`}
        keywords={`naveenautocomponents.com, Naveen Auto Components ${service.title}, ${service.title} fabrication, heavy engineering ${service.slug}, Chennai, Cuddalore, NAC`}
        canonical={`/services/${service.slug}`}
        schema={serviceSchema}
      />

      <PageBanner 
        title={service.title} 
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: "Services", url: "/services" },
          { label: service.title, url: `/services/${service.slug}` }
        ]}
        image={`/images/hd/services/${service.slug}.jpg`}
      />

      {/* Main Content */}
      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <Row className="g-5">
            <Col lg={8}>
              <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00' }}>
                Technical Specification Overview
              </Badge>
              <h1 className="h2 fw-bold text-navy mb-4">{service.title}</h1>
              
              <p className="lead text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                {service.fullDescription}
              </p>

              {/* Service Image Gallery (Replaces single old image) */}
              {service.gallery && service.gallery.length > 0 ? (
                <div className="mb-5">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="h5 fw-bold text-navy mb-0">
                      <i className="bi bi-images me-2 text-warning" style={{ color: '#f57c00' }}></i> Real Shop Floor Fabrication Spec Gallery
                    </h3>
                    <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase" style={{ backgroundColor: '#f57c00' }}>
                      {service.gallery.length} Production Specs
                    </Badge>
                  </div>

                  <Row className="g-3">
                    {service.gallery.map((item, index) => (
                      <Col key={item.id || index} sm={6} md={6}>
                        <Card className="border-0 shadow-sm overflow-hidden h-100 bg-navy text-white service-gallery-card" style={{ backgroundColor: '#071322' }}>
                          <div 
                            className="position-relative overflow-hidden cursor-pointer img-zoom-wrapper"
                            style={{ height: '240px', cursor: 'pointer', backgroundColor: '#040d1a' }}
                            onClick={() => handleOpenLightbox(item.src, item.title)}
                          >
                            <Card.Img 
                              variant="top" 
                              src={item.src} 
                              alt={item.alt}
                              className="w-100 h-100 object-fit-cover zoom-img"
                              style={{ transition: 'transform 0.4s ease', filter: 'brightness(0.95) contrast(1.05)' }}
                            />
                            <div 
                              className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-warning text-navy rounded fw-bold small shadow-sm"
                              style={{ backgroundColor: '#f57c00', zIndex: 2, fontSize: '0.75rem' }}
                            >
                              Spec #{index + 1}
                            </div>
                            <div 
                              className="position-absolute top-0 end-0 m-2 px-2 py-1 bg-navy text-warning rounded border border-secondary font-monospace small opacity-90 shadow-sm"
                              style={{ zIndex: 2, fontSize: '0.7rem', backgroundColor: '#071322' }}
                            >
                              <i className="bi bi-shield-check me-1"></i> ISO 9001:2015
                            </div>
                            <div 
                              className="position-absolute bottom-0 end-0 m-2 px-3 py-1 bg-navy text-white rounded-pill small fw-semibold shadow"
                              style={{ backgroundColor: 'rgba(7, 19, 34, 0.85)', backdropFilter: 'blur(4px)', zIndex: 2, fontSize: '0.75rem' }}
                            >
                              <i className="bi bi-zoom-in me-1 text-warning"></i> Click to Zoom
                            </div>
                          </div>
                          <Card.Body className="p-3 bg-navy border-top border-secondary" style={{ backgroundColor: '#071322' }}>
                            <h4 className="h6 fw-bold text-white mb-1">{item.title}</h4>
                            <p className="small text-white-50 mb-0">{item.desc}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              ) : (
                <div className="mb-4">
                  <IndustrialGraphic 
                    type={realPhotoMap[slug] || service.slug} 
                    title={service.title} 
                    tag="Naveen Auto Components Real Shop Floor Spec" 
                    height="360px" 
                  />
                </div>
              )}

              {/* Technical Capabilities */}
              <Card className="border-0 shadow-sm bg-light mb-4">
                <Card.Body className="p-4">
                  <h3 className="h5 fw-bold text-navy mb-3">
                    <i className="bi bi-gear-wide-connected text-warning me-2"></i> Fabrication Capabilities & Features
                  </h3>
                  <ListGroup variant="flush" className="bg-transparent">
                    {service.capabilities.map((cap, i) => (
                      <ListGroup.Item key={i} className="bg-transparent border-0 px-0 py-2 d-flex align-items-center text-navy">
                        <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                        <span className="fw-medium">{cap}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>

              {/* Machinery Utilized */}
              <h3 className="h5 fw-bold text-navy mb-3">
                <i className="bi bi-tools text-warning me-2"></i> Infrastructure & Machinery Deployed
              </h3>
              <Row className="g-3 mb-5">
                {service.machineryUsed.map((m, i) => (
                  <Col key={i} md={6}>
                    <div className="p-3 bg-white border rounded shadow-sm">
                      <i className="bi bi-wrench-adjustable text-warning me-2"></i>
                      <span className="small fw-bold text-navy">{m}</span>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* Related Project References */}
              {relatedProjects.length > 0 && (
                <div className="mb-5">
                  <h3 className="h4 fw-bold text-navy mb-3">
                    <i className="bi bi-journal-check text-warning me-2"></i> Project References & Executed Work
                  </h3>
                  <Row className="g-3">
                    {relatedProjects.map((proj) => (
                      <Col key={proj.id} md={6}>
                        <Card className="border-0 shadow-sm bg-light h-100">
                          <Card.Body className="p-3">
                            <Badge bg="dark" className="mb-2">{proj.customer}</Badge>
                            <h4 className="h6 fw-bold text-navy mb-1">{proj.title}</h4>
                            <p className="small text-secondary mb-0">{proj.description}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}

              {/* Related Services Internal Links */}
              <div className="p-4 bg-light rounded border">
                <h4 className="h6 fw-bold text-navy mb-2">Explore Related Capabilities:</h4>
                <div className="d-flex flex-wrap gap-2">
                  {relatedServices.map((rs) => (
                    <Button key={rs.slug} as={Link} to={`/services/${rs.slug}`} variant="outline-dark" size="sm" className="fw-bold">
                      {rs.title} <i className="bi bi-arrow-right ms-1"></i>
                    </Button>
                  ))}
                  <Button as={Link} to="/services" variant="link" size="sm" className="text-decoration-none">
                    View All Services
                  </Button>
                </div>
              </div>
            </Col>

            {/* Sidebar CTA & Client List */}
            <Col lg={4}>
              <Card className="border-0 shadow-lg bg-navy text-white p-4 sticky-top" style={{ top: '100px', backgroundColor: '#0b1e36' }}>
                <Card.Body>
                  <h3 className="h4 fw-bold text-warning mb-3">Get a Customized Quotation</h3>
                  <p className="small text-white-50 mb-4">
                    Send your CAD drawings, thickness specs, and volume requirements to our engineering team in Chennai.
                  </p>

                  <Button as={Link} to="/contact" variant="warning" size="lg" className="w-100 fw-bold py-3 text-navy mb-4" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
                    <i className="bi bi-envelope-paper-fill me-2"></i> Request RFQ Now
                  </Button>

                  <hr className="border-secondary mb-4" />

                  <h4 className="h6 fw-bold text-white mb-2">Key Institutional Clients:</h4>
                  <ul className="list-unstyled small text-white-50 mb-0">
                    {service.applicableClients.map((client, i) => (
                      <li key={i} className="mb-2">
                        <i className="bi bi-building me-2 text-warning"></i>
                        {client}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Full Screen Lightbox Modal */}
      <ImageLightboxModal 
        show={lightbox.show}
        onHide={handleCloseLightbox}
        imageSrc={lightbox.src}
        imageAlt={lightbox.alt}
      />
    </>
  );
};
