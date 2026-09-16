import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { MachineryTable } from '../components/MachineryTable';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

export const Facilities = () => {
  const [lightbox, setLightbox] = useState({ show: false, src: '', alt: '' });

  const handleOpenLightbox = (src, alt) => {
    setLightbox({ show: true, src, alt });
  };

  const handleCloseLightbox = () => {
    setLightbox(prev => ({ ...prev, show: false }));
  };

  const facilitiesSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Naveen Auto Components Manufacturing Plants",
    "description": "State-of-the-art CNC Laser Cutting, CNC Press Brake, 16mm Rolling Machine, 10 MT EOT Crane, and 22,500 sq.ft open yard facilities across Chennai and Cuddalore."
  };

  return (
    <>
      <SEO 
        title="Machinery & Infrastructure for Heavy Fabrication in Chennai and Cuddalore"
        description="State-of-the-art infrastructure for Heavy Fabrication in Chennai and Cuddalore: 6kW CNC laser cutter, 8m press brake, 16mm rolling machine, 10 MT crane & 2.5 acre Cuddalore plant."
        canonical="/facilities"
        schema={facilitiesSchema}
      />

      <PageBanner 
        title="Machinery & Infrastructure" 
        subtitle="State-of-the-art plants for Heavy Fabrication in Chennai and Cuddalore."
        breadcrumbs={[{ label: 'Facilities', url: '/facilities' }]}
        image="/images/hd/infrastructure-machinery-nac-chennai-cuddalore.webp"
      />

      {/* 1. Dual Manufacturing Locations Section (TOP) */}
      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-2" style={{ backgroundColor: '#f57c00' }}>
              Strategic Manufacturing Footprint
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Dual Manufacturing Facilities for Heavy Fabrication in Chennai and Cuddalore</h2>
            <p className="text-secondary lead">
              Two specialized fabrication units strategically positioned in Tamil Nadu for optimal regional supply chains. Click any image to view in full page with zoom.
            </p>
          </div>

          <Row className="g-4 mb-5">
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden bg-white">
                <div 
                  className="img-zoom-wrapper position-relative" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleOpenLightbox("/images/hd/factories/nac_unit_1.jpeg", "Fabrication Unit 1 (Chennai) - Full View")}
                >
                  <Card.Img 
                    variant="top" 
                    src="/images/hd/factories/nac_unit_1.jpeg" 
                    alt="Fabrication Unit 1 Chennai - SIDCO Industrial Park"
                    style={{ width: '100%', aspectRatio: '2 / 1', objectFit: 'cover', display: 'block' }}
                  />
                  <div 
                    className="position-absolute bottom-0 end-0 m-3 px-3 py-1 bg-navy text-white rounded-pill small fw-semibold shadow"
                    style={{ backgroundColor: 'rgba(7, 19, 34, 0.85)', backdropFilter: 'blur(4px)', zIndex: 3 }}
                  >
                    <i className="bi bi-arrows-fullscreen me-1 text-warning"></i> Click for Full Screen
                  </div>
                </div>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-light p-3 text-warning rounded-circle me-3 flex-shrink-0">
                      <i className="bi bi-building fs-3" style={{ color: '#f57c00' }}></i>
                    </div>
                    <div>
                      <Badge bg="warning" className="text-navy fw-bold px-2 py-1 mb-1" style={{ backgroundColor: '#f57c00' }}>
                        UNIT 1 — CHENNAI
                      </Badge>
                      <h3 className="h5 fw-bold text-navy mb-1">Fabrication Unit 1 (Chennai)</h3>
                      <p className="text-muted small mb-0" style={{ lineHeight: '1.4' }}>
                        <strong>Address:</strong> No. T93, SIDCO Women's Industrial Park, Thirumullaivoyal, Tiruvallur District, Tamil Nadu – 600062
                      </p>
                    </div>
                  </div>
                  <ul className="list-unstyled text-secondary small mb-0 pt-3 border-top">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> 10,000 Sq.Ft Covered Assembly Shed</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> 10 MT Overhead EOT Crane Rigging</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> 10,000 Sq.Ft Open Fabrication Yard</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> High-Speed CNC Laser & Press Brake Setup</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden bg-white">
                <div 
                  className="img-zoom-wrapper position-relative" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleOpenLightbox("/images/hd/factories/nac_unit_2.jpeg", "Fabrication Unit 2 (Cuddalore) - Full View")}
                >
                  <Card.Img 
                    variant="top" 
                    src="/images/hd/factories/nac_unit_2.jpeg" 
                    alt="Fabrication Unit 2 Cuddalore - NH-32 Chidambaram"
                    style={{ width: '100%', aspectRatio: '2 / 1', objectFit: 'cover', display: 'block' }}
                  />
                  <div 
                    className="position-absolute bottom-0 end-0 m-3 px-3 py-1 bg-navy text-white rounded-pill small fw-semibold shadow"
                    style={{ backgroundColor: 'rgba(7, 19, 34, 0.85)', backdropFilter: 'blur(4px)', zIndex: 3 }}
                  >
                    <i className="bi bi-arrows-fullscreen me-1 text-warning"></i> Click for Full Screen
                  </div>
                </div>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-light p-3 text-warning rounded-circle me-3 flex-shrink-0">
                      <i className="bi bi-geo-fill fs-3" style={{ color: '#f57c00' }}></i>
                    </div>
                    <div>
                      <Badge bg="warning" className="text-navy fw-bold px-2 py-1 mb-1" style={{ backgroundColor: '#f57c00' }}>
                        UNIT 2 — CUDDALORE
                      </Badge>
                      <h3 className="h5 fw-bold text-navy mb-1">Fabrication Unit 2 (Cuddalore)</h3>
                      <p className="text-muted small mb-0" style={{ lineHeight: '1.4' }}>
                        <strong>Address:</strong> No. 94/2D, Cuddalore–Chidambaram Road (NH-32), Kotthattai Village, Chidambaram – 608501
                      </p>
                    </div>
                  </div>
                  <ul className="list-unstyled text-secondary small mb-0 pt-3 border-top">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Total Plot Area: 2.5 Acres</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> 12,500 Sq.Ft Open Storage & Blasting Yard</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Heavy 16mm Plate Rolling & Header Pipe Assembly</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Direct Highway Access for Oversized Flatbeds</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. Flagship Machinery Highlights Section (MIDDLE) */}
      <section className="py-5 bg-light border-top border-bottom">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-2" style={{ backgroundColor: '#f57c00' }}>
              Advanced Equipment Fleet
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Core Fabrication Machinery & Infrastructure</h2>
            <p className="text-secondary lead">
              High-speed precision fiber laser profiling, heavy CNC bending, and 10 MT overhead crane material handling. Click images for full page view.
            </p>
          </div>

          <Row className="g-4 mb-5">
            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden bg-white text-navy">
                <div 
                  className="img-zoom-wrapper position-relative" 
                  style={{ height: '320px', overflow: 'hidden', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
                  onClick={() => handleOpenLightbox("/images/hd/machinery/high_speed_precision_profiling.jpeg", "High-Speed Precision Profiling CNC Laser & Press Brake")}
                >
                  <Card.Img 
                    variant="top" 
                    src="/images/hd/machinery/high_speed_precision_profiling.jpeg" 
                    alt="High-Speed Precision Profiling CNC Laser & Press Brake"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div 
                    className="position-absolute bottom-0 end-0 m-3 px-3 py-1 bg-navy text-white rounded-pill small fw-semibold shadow"
                    style={{ backgroundColor: 'rgba(7, 19, 34, 0.85)', backdropFilter: 'blur(4px)', zIndex: 3 }}
                  >
                    <i className="bi bi-arrows-fullscreen me-1 text-warning"></i> Click for Full Screen
                  </div>
                </div>
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00' }}>
                      Flagship CNC Laser & Press Brake
                    </Badge>
                    <h3 className="h4 fw-bold text-navy mb-3">High-Speed Precision Profiling</h3>
                    <p className="text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                      Equipped with a <strong>6kW Fiber Laser Cutting System</strong> (2.5m width x 6.5m length bed) and an <strong>8m x 3.2m CNC Press Brake</strong> for rapid, high-accuracy component forming.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden bg-white text-navy">
                <div 
                  className="img-zoom-wrapper position-relative" 
                  style={{ height: '320px', overflow: 'hidden', backgroundColor: '#f8f9fa', cursor: 'pointer' }}
                  onClick={() => handleOpenLightbox("/images/hd/machinery/eot_crane_open_yards.jpeg", "10 MT Overhead EOT Crane & Open Yards")}
                >
                  <Card.Img 
                    variant="top" 
                    src="/images/hd/machinery/eot_crane_open_yards.jpeg" 
                    alt="10 MT Overhead EOT Crane & Open Yards"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div 
                    className="position-absolute bottom-0 end-0 m-3 px-3 py-1 bg-navy text-white rounded-pill small fw-semibold shadow"
                    style={{ backgroundColor: 'rgba(7, 19, 34, 0.85)', backdropFilter: 'blur(4px)', zIndex: 3 }}
                  >
                    <i className="bi bi-arrows-fullscreen me-1 text-warning"></i> Click for Full Screen
                  </div>
                </div>
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00' }}>
                      Heavy Vessel & Structural Yard
                    </Badge>
                    <h3 className="h4 fw-bold text-navy mb-3">10 MT Overhead EOT Crane & Open Yards</h3>
                    <p className="text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                      Unit 1 features a 10,000 sq.ft covered shed with a <strong>10 MT EOT crane</strong>. Unit 2 in Cuddalore spans <strong>2.5 acres</strong> with a 12,500 sq.ft open yard for large diameter pipe rolling.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Full Machinery Table Component */}
          <MachineryTable />

          <div className="text-center mt-5">
            <Button as={Link} to="/contact" variant="warning" size="lg" className="fw-bold px-4 py-3 text-navy shadow" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
              <i className="bi bi-envelope-paper-fill me-2"></i> Schedule Factory Visit / Audit
            </Button>
          </div>
        </Container>
      </section>

      {/* Interactive Lightbox Modal Component */}
      <ImageLightboxModal 
        show={lightbox.show}
        onHide={handleCloseLightbox}
        imageSrc={lightbox.src}
        imageAlt={lightbox.alt}
      />
    </>
  );
};
