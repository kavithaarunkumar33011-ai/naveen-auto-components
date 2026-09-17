import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, ListGroup } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { companyData, testimonialsData } from '../data/companyData';

export const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 992) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - visibleCount);

  const handleTestimonialPrev = () => {
    setActiveIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTestimonialNext = () => {
    setActiveIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Naveen Auto Components",
    "url": "https://naveenautocomponents.com/about",
    "description": "NAVEEN AUTO COMPONENTS - Heavy Engineering and Processing Equipment Manufacture & Fabrication in Chennai and Cuddalore."
  };

  return (
    <>
      <SEO 
        title="About Naveen Auto Components | ISO 9001:2015 Heavy Fabrication Manufacturer"
        description="Learn about Naveen Auto Components (naveenautocomponents.com), an ISO 9001:2015 certified heavy engineering fabrication company with 2 plants in Chennai & Cuddalore."
        keywords="naveenautocomponents.com, About Naveen Auto Components, NAC company profile, heavy engineering manufacturer Chennai, heavy fabrication Cuddalore, ISO 9001:2015 metal fabrication, Varsha Technologies NAC"
        canonical="/about"
        schema={aboutSchema}
      />

      <PageBanner 
        title="NAVEEN AUTO COMPONENTS" 
        subtitle="Heavy Engineering and Processing Equipment Manufacture & Fabrication"
        breadcrumbs={[{ label: 'About Us', url: '/about' }]}
        image="/images/hd/heavy-engineering-fabrication-chennai-nac-02.webp"
      />

      {/* Main About Content */}
      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <Row className="g-5 align-items-start">
            <Col lg={7} data-aos="fade-right" data-aos-duration="1000">
              <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#fff' }}>
                ISO 9001:2015 Certified Manufacturing Industry
              </Badge>
              <h1 className="h2 fw-bold text-navy mb-2">
                NAVEEN AUTO COMPONENTS
              </h1>
              <h2 className="h5 fw-bold text-warning mb-4" style={{ color: '#f57c00' }}>
                Heavy Engineering and Processing Equipment Manufacture & Fabrication
              </h2>

              <p className="text-secondary mb-4" style={{ fontSize: '1.08rem', lineHeight: '1.8' }}>
                <strong>Naveen Auto Components</strong> is a leading <strong>ISO 9001:2015 Certified One-Stop Manufacturing Industry</strong> for various stages of manufacturing such as Ferrous and Non-Ferrous Metal Fabrication for Industrial Process Equipments, Pre-Engineering Building (PEB) Structural Fabrication, Industrial Pipeline Ducts, Storage Tanks, and Engineering Special Purpose Equipments to fully finished products.
              </p>

              <div className="p-4 rounded-3 bg-light border-start border-warning border-4 mb-4 shadow-sm">
                <h3 className="h6 fw-bold text-navy mb-2">
                  <i className="bi bi-geo-alt-fill text-warning me-2" style={{ color: '#f57c00' }}></i> Corporate Offices & Dual Manufacturing Facilities
                </h3>
                <p className="small text-secondary mb-0" style={{ lineHeight: '1.75' }}>
                  Headquartered at <strong>No-T93, SIDCO Women Industrial Park, Kattur, Thirumullaivoyal, Chennai - 600062</strong> with our office at Ambattur Industrial Estate and a sprawling <strong>2.5 Acre fabrication unit at Cuddalore-Chidambaram Road (NH-32), Kotthattai Village, Chidambaram - 608501</strong>, we are committed to producing & meeting customer satisfaction, Deliver On-Time and at economical prices.
                </p>
              </div>

              {/* Specialization & Extended Capabilities */}
              <div className="mb-4">
                <h3 className="h4 fw-bold text-navy mb-3">Our Specialization</h3>
                <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                  We specialize in <strong>Storage Tank for water and condensate</strong>, <strong>Steam Distribution Pipeline Duct</strong>, <strong>Header Pipeline</strong>, <strong>PEB Structural Fabrication</strong> and <strong>Rail and Bus Coach Components</strong>.
                </p>
                
                <h4 className="h6 fw-bold text-navy mb-2">Our extended capabilities include:</h4>
                <Row className="g-2">
                  {[
                    "Pressure Vessels & Condensate Tanks",
                    "Material Handling Bins & Heat Treatment Bins",
                    "Air Blower & Air Duct Products (for HVAC & Power Cooling)",
                    "Flash Tanks, Structural Beams, Fan Guards & Hand Rails",
                    "Duct Pipe Line Products & Pipe Bracing Stands with Blasting & Painting"
                  ].map((item, idx) => (
                    <Col key={idx} xs={12}>
                      <div className="d-flex align-items-center py-1">
                        <i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i>
                        <span className="small fw-semibold text-navy">{item}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Facilities */}
              <div className="mb-4">
                <h3 className="h4 fw-bold text-navy mb-3">Our Facilities</h3>
                <Card className="border-0 bg-light p-3 rounded-3">
                  <Row className="g-2">
                    {[
                      "Hydraulic Shearing - 8mm x 3000mm",
                      "Hydraulic Press Brake - 8mm x 2500mm",
                      "Plate Rolling Machine - 16mm x 2500mm",
                      "MIG Welding & TIG Welding Infrastructure",
                      "Open Fabrication Area - 10,000 + 12,500 Sq Ft"
                    ].map((facility, idx) => (
                      <Col key={idx} md={6}>
                        <div className="d-flex align-items-center py-1">
                          <i className="bi bi-tools text-warning me-2" style={{ color: '#f57c00' }}></i>
                          <span className="small text-secondary fw-medium">{facility}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <div className="mt-3 pt-3 border-top border-secondary-subtle">
                    <span className="badge bg-navy text-warning font-monospace p-2 mb-1" style={{ backgroundColor: '#0b1e36', color: '#f57c00' }}>Future Expansion</span>
                    <p className="small text-muted mb-0">
                      10,000 Sq Ft Closed Shed with 10 MT EOT Crane, CNC Laser Cutting 6kW (2.5m x 6.5m), CNC Press Brake 8 x 3.2M.
                    </p>
                  </div>
                </Card>
              </div>
            </Col>

            <Col lg={5} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="sticky-top" style={{ top: '100px' }}>
              <Card className="border-0 shadow-lg bg-navy text-white p-4 mb-4" style={{ backgroundColor: '#0b1e36' }}>
                <Card.Body>
                  <div className="text-center mb-4">
                    <div className="bg-warning text-navy d-inline-block rounded-circle p-3 mb-3" style={{ backgroundColor: '#f57c00' }}>
                      <i className="bi bi-award-fill fs-1 text-white"></i>
                    </div>
                    <h3 className="h4 fw-bold text-white mb-1">ISO 9001:2015 Certified</h3>
                    <p className="text-white-50 small mb-0">Quality Management System Certified</p>
                  </div>

                  <div className="p-3 bg-dark rounded border border-secondary mb-3" style={{ backgroundColor: '#071322' }}>
                    <h4 className="text-warning fw-bold h6 mb-2"><i className="bi bi-shield-check me-1"></i> Our Quality Policy</h4>
                    <p className="small text-white-50 mb-0" style={{ lineHeight: '1.6' }}>
                      Naveen Auto Components is committed to manufacture & deliver products that comply with customer satisfaction by supplying right quality fabricated products with prompt delivery at competitive price through continually improving the effectiveness of Quality Management System in line with ISO 9001:2015 Requirements.
                    </p>
                  </div>

                  <div className="p-3 bg-dark rounded border border-secondary mb-3" style={{ backgroundColor: '#071322' }}>
                    <h4 className="text-warning fw-bold h6 mb-2"><i className="bi bi-bullseye me-1"></i> Our Quality Objectives</h4>
                    <ul className="list-unstyled mb-0 small text-white-50">
                      <li className="mb-1"><i className="bi bi-check2 text-warning me-2"></i> Enhance 100% Customer Satisfaction</li>
                      <li className="mb-1"><i className="bi bi-check2 text-warning me-2"></i> Achieve Zero Customer End Rejection</li>
                      <li className="mb-1"><i className="bi bi-check2 text-warning me-2"></i> Achieve 100% Production Target Every Month</li>
                      <li className="mb-1"><i className="bi bi-check2 text-warning me-2"></i> Achieve 100% Delivery Targets Every Month</li>
                      <li className="mb-0"><i className="bi bi-check2 text-warning me-2"></i> Continual Improvement of QMS</li>
                    </ul>
                  </div>

                  <div className="small text-warning font-monospace text-center">
                    ISO 9001:2015 Certified Manufacturing
                  </div>
                </Card.Body>
              </Card>

              {/* Strength & Leadership Card */}
              <Card className="border-0 shadow-sm bg-light p-4">
                <Card.Body>
                  <h4 className="h6 fw-bold text-navy mb-2"><i className="bi bi-lightning-charge-fill text-warning me-2" style={{ color: '#f57c00' }}></i> Our Strength</h4>
                  <p className="small text-secondary mb-3" style={{ lineHeight: '1.6' }}>
                    Design and advanced process technique with best quality of fabrication products, efficient and continual improvement production, and On-Time Delivery.
                  </p>

                  <h4 className="h6 fw-bold text-navy mb-2"><i className="bi bi-people-fill text-warning me-2" style={{ color: '#f57c00' }}></i> Leadership & Team</h4>
                  <p className="small text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                    Led by Managing Partners <strong>Mr. V. Vijayakumaran & Mr. V. Kannathasan</strong>, supported by Chief General Manager <strong>Mr. S. Rajagopalan</strong> and a dedicated workforce team, we have earned the trust of industry leaders.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Closing Motto & Relationship Banner */}
          <div className="mt-5 p-4 p-md-5 rounded-4 text-center text-white shadow-lg" style={{ background: 'linear-gradient(135deg, #071322 0%, #0b1e36 100%)' }}>
            <h3 className="h4 fw-bold text-warning mb-2" style={{ color: '#f57c00' }}>
              "We don't just fabricate. We build relationships."
            </h3>
            <h4 className="h2 fw-extrabold text-white mb-3" style={{ letterSpacing: '2px' }}>
              BUILD STRONG, BUILT TO LAST.
            </h4>
            <div className="d-inline-block px-4 py-2 rounded-3 bg-warning text-white fw-bold text-uppercase" style={{ backgroundColor: '#f57c00', letterSpacing: '2px' }}>
              WE FABRICATE, WE BUILD, WE DELIVER
            </div>
          </div>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-5 bg-white border-top">
        <Container className="py-lg-5">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#0b1e36' }}>
              NAVEEN AUTO COMPONENTS
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Industries We Serve</h2>
            <p className="text-secondary lead">
              Naveen Auto Components delivers metal fabrication solutions for a wide range of industrial process sectors
            </p>
          </div>

          <Row className="g-3 align-items-center justify-content-center" data-aos="fade-up">
            {[
              { title: "Power & Energy", img: "/images/hd/industries/power.jpg", height: 400 },
              { title: "Process Engineering", img: "/images/hd/steam-pipeline-duct-fabrication-cuddalore-nac-03.webp", height: 350 },
              { title: "Industrial Facilities", img: "/images/hd/industries/facilities.jpg", height: 450 },
              { title: "Heavy Duty Frameworks", img: "/images/hd/industries/frameworks.jpg", height: 350 },
              { title: "Rail & Transport", img: "/images/hd/industries/transport.jpg", height: 400 }
            ].map((ind, idx) => (
              <Col key={idx} xs={6} md={4} lg={2} className="px-1" style={{ flexGrow: 1 }}>
                <div 
                  className="industry-card position-relative overflow-hidden shadow-sm"
                  style={{ 
                    height: `${ind.height}px`, 
                    border: '2px solid #f57c00',
                    borderRadius: '4px'
                  }}
                >
                  <img 
                    src={ind.img} 
                    alt={ind.title} 
                    className="w-100 h-100 object-fit-cover"
                    style={{ transition: 'transform 0.5s ease' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div 
                    className="position-absolute bottom-0 start-0 w-100 p-3 text-center"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))' }}
                  >
                    <h5 className="text-white fw-bold mb-0 lh-sm fs-6">{ind.title}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <Container className="py-lg-5">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#0b1e36' }}>
              NAVEEN AUTO COMPONENTS
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-5">See what our clients say</h2>
          </div>

          <div className="overflow-hidden pb-4" style={{ margin: '0 -15px' }} data-aos="fade-up" data-aos-delay="200">
            <div 
              className="d-flex"
              style={{
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`
              }}
            >
              {testimonialsData.map((testimonial, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    flex: `0 0 ${100 / visibleCount}%`, 
                    padding: '0 15px' 
                  }}
                >
                  <div className="bg-white rounded shadow-sm text-center position-relative h-100 d-flex flex-column" style={{ marginTop: '30px' }}>
                    <div className="mx-auto bg-navy text-white rounded-circle d-flex align-items-center justify-content-center position-absolute start-50 translate-middle-x shadow-sm" style={{ width: '60px', height: '60px', top: '-30px', backgroundColor: '#0b1e36' }}>
                      <i className="bi bi-person-fill fs-3"></i>
                      <div className="position-absolute bg-warning rounded-circle" style={{ width: '15px', height: '15px', bottom: '0', right: '0', border: '2px solid white' }}></div>
                    </div>
                    <div className="px-4 pt-5 pb-4 flex-grow-1">
                      <h5 className="fw-bold text-navy mb-3">{testimonial.name}</h5>
                      <p className="text-secondary small mb-0 lh-lg">{testimonial.review}</p>
                    </div>
                    <div className="bg-warning py-2 rounded-bottom d-flex justify-content-center" style={{ backgroundColor: '#f57c00' }}>
                      {[1, 2, 3, 4, 5].map(star => <i key={star} className="bi bi-star-fill text-dark mx-1"></i>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev/Next Buttons */}
          <div className="text-center mt-5">
            <button onClick={handleTestimonialPrev} className="btn btn-warning fw-bold px-4 me-3 border-0 shadow-sm" style={{ backgroundColor: '#f57c00', color: '#fff' }}>Prev</button>
            <button onClick={handleTestimonialNext} className="btn btn-warning fw-bold px-4 border-0 shadow-sm" style={{ backgroundColor: '#f57c00', color: '#fff' }}>Next</button>
          </div>
        </Container>
      </section>

      {/* Dual Plant Locations Summary */}
      <section className="py-5 bg-light border-top">
        <Container>
          <h2 className="display-6 fw-bold text-navy mb-4 text-center">Infrastructure & Location Network</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Badge bg="secondary" className="mb-2">Corporate Office</Badge>
                  <h3 className="h5 fw-bold text-navy mb-2">{companyData.locations.office.title}</h3>
                  <p className="small text-secondary mb-0"><i className="bi bi-geo-alt-fill text-warning me-1"></i> {companyData.locations.office.address}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm border-start border-warning border-4">
                <Card.Body className="p-4">
                  <Badge bg="dark" className="mb-2">Chennai Plant</Badge>
                  <h3 className="h5 fw-bold text-navy mb-2">{companyData.locations.unit1.title}</h3>
                  <p className="small text-secondary mb-2"><i className="bi bi-geo-alt-fill text-warning me-1"></i> {companyData.locations.unit1.address}</p>
                  <div className="small font-monospace text-muted bg-light p-2 rounded">{companyData.locations.unit1.highlights}</div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm border-start border-warning border-4">
                <Card.Body className="p-4">
                  <Badge bg="dark" className="mb-2">Cuddalore Plant (2.5 Acres)</Badge>
                  <h3 className="h5 fw-bold text-navy mb-2">{companyData.locations.unit2.title}</h3>
                  <p className="small text-secondary mb-2"><i className="bi bi-geo-alt-fill text-warning me-1"></i> {companyData.locations.unit2.address}</p>
                  <div className="small font-monospace text-muted bg-light p-2 rounded">{companyData.locations.unit2.highlights}</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
