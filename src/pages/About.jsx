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
    handleResize(); // Initial check
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
    "url": "https://www.naveenauto.com/about",
    "description": companyData.about
  };

  return (
    <>
      <SEO 
        title="About Us | Heavy Fabrication in Chennai and Cuddalore | Naveen Auto Components"
        description="Discover Naveen Auto Components — leaders in Heavy Fabrication in Chennai and Cuddalore. ISO 9001:2015 certified engineering company with dual manufacturing facilities."
        canonical="/about"
        schema={aboutSchema}
      />

      <PageBanner 
        title="About Our Company" 
        subtitle="Pioneering Heavy Fabrication in Chennai and Cuddalore since 2000."
        breadcrumbs={[{ label: 'About Us', url: '/about' }]}
        image="/images/hd/factories/office_ambattur.jpg"
      />

      {/* Main About Content */}
      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <Row className="g-5 align-items-start">
            <Col lg={7} data-aos="fade-right" data-aos-duration="1000">
              <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00' }}>
                Precision Engineering Since 2000
              </Badge>
              <h1 className="h2 fw-bold text-navy mb-3">
                About Us – Varsha Technologies & Naveen Auto Components
              </h1>
              <h3 className="h6 fw-semibold text-warning text-uppercase tracking-wide mb-4" style={{ color: '#f57c00' }}>
                Leading Manufacturing Company in Chennai & Cuddalore | Precision Engineering Since 2000
              </h3>

              <p className="text-secondary mb-3" style={{ fontSize: '1.08rem', lineHeight: '1.8' }}>
                <strong>Varsha Technologies</strong> started its journey in the field of precision manufacturing in Chennai in the year <strong>2000</strong> and today stands as a trusted <strong>ISO / IATF 16949:2016 certified</strong> company. What began as a conventional machining unit in 2005, producing high-quality machined components, has evolved into a state-of-the-art engineering powerhouse equipped with advanced CNC machining centers.
              </p>

              <p className="text-secondary mb-3" style={{ fontSize: '1.08rem', lineHeight: '1.8' }}>
                Our growth story expanded with <strong>Unit – II</strong>, a fully integrated facility housing <strong>hot forging with induction billet heating</strong>, <strong>heat treatment facility</strong>, and <strong>shot blasting</strong>, catering to demanding requirements of the automotive, non-automotive, and industrial valve industries across India.
              </p>

              <p className="text-secondary mb-4" style={{ fontSize: '1.08rem', lineHeight: '1.8' }}>
                In <strong>2010</strong>, to meet the rising demand for heavy engineering, we launched our dedicated fabrication arm – <strong>Naveen Auto Components (NAC)</strong> – with dual manufacturing units strategically located in <strong>Chennai</strong> and <strong>Cuddalore (NH-32, Kotthattai, Chidambaram)</strong>.
              </p>

              <div className="p-4 rounded-3 bg-light border-start border-warning border-4 mb-4">
                <h3 className="h5 fw-bold text-navy mb-2">
                  Naveen Auto Components – One-Stop Heavy Fabrication & PEB Structural Fabrication Company in Tamil Nadu
                </h3>
                <p className="small text-secondary mb-3">
                  Naveen Auto Components is a trusted one-stop manufacturing company for Ferrous and Non-Ferrous metal fabrication in South India. We specialize in:
                </p>
                <Row className="g-2">
                  {[
                    "Industrial Process Equipment Manufacturing",
                    "PEB Structural Fabrication & Pre-Engineered Building Structures",
                    "Industrial Pipeline Ducts & Piping Fabrication",
                    "Storage Tanks & Pressure Vessel Fabrication",
                    "Special-Purpose Machines (SPM) & Heavy Engineering Equipment",
                    "Custom Metal Fabrication Services in Chennai & Cuddalore"
                  ].map((item, idx) => (
                    <Col key={idx} sm={6}>
                      <div className="d-flex align-items-center py-1">
                        <i className="bi bi-check-circle-fill text-warning me-2" style={{ color: '#f57c00' }}></i>
                        <span className="small fw-semibold text-navy">{item}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                Backed by state-of-the-art CNC machinery, skilled workforce, and <strong>ISO 9001:2015 certified Quality Management Systems</strong>, we deliver precision heavy fabrication solutions tailored for industrial, infrastructure, and process plant clients across Tamil Nadu, Chennai, Cuddalore, and South India.
              </p>

              <p className="text-secondary mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                With over <strong>24+ years of manufacturing expertise</strong>, two fully-equipped plants, and a commitment to on-time delivery and quality, <strong>Varsha Group (Varsha Technologies + Naveen Auto Components)</strong> is your reliable partner for all CNC machining, forging, and heavy fabrication needs.
              </p>

              <div className="p-3 bg-navy text-white rounded-3 shadow-sm" style={{ backgroundColor: '#0b1e36' }}>
                <p className="mb-0 small font-monospace">
                  <i className="bi bi-info-circle-fill text-warning me-2"></i>
                  Looking for a PEB fabrication company in Chennai or a heavy fabrication manufacturer in Cuddalore? Contact Naveen Auto Components – Your trusted engineering partner for Ferrous & Non-Ferrous fabrication.
                </p>
              </div>
            </Col>

            <Col lg={5} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="sticky-top" style={{ top: '100px' }}>
              <Card className="border-0 shadow-lg bg-navy text-white p-4 mb-4" style={{ backgroundColor: '#0b1e36' }}>
                <Card.Body>
                  <div className="text-center mb-4">
                    <div className="bg-warning text-navy d-inline-block rounded-circle p-3 mb-3" style={{ backgroundColor: '#f57c00' }}>
                      <i className="bi bi-award-fill fs-1 text-white"></i>
                    </div>
                    <h3 className="h4 fw-bold text-white mb-1">Dual Quality Certified</h3>
                    <p className="text-white-50 small mb-0">ISO 9001:2015 & IATF 16949:2016 Certified</p>
                  </div>

                  <div className="p-3 bg-navy rounded border border-secondary mb-3" style={{ backgroundColor: '#071322' }}>
                    <h6 className="text-warning fw-bold mb-2"><i className="bi bi-shield-check me-1"></i> Quality Policy</h6>
                    <p className="small text-white-50 mb-0">{companyData.qualityPolicy}</p>
                  </div>

                  <div className="small text-white-50 font-monospace text-center">
                    Varsha Group • Established 2000
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-5 bg-light border-top">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-2" style={{ backgroundColor: '#f57c00' }}>
              Strategic Orientation
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Our Vision & Mission</h2>
            <p className="text-secondary lead">
              Guided by engineering precision, continuous technological innovation, and absolute quality integrity.
            </p>
          </div>

          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm rounded-4 bg-white">
                <Card.Body className="p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#f57c00' }}>
                      <i className="bi bi-eye-fill fs-3"></i>
                    </div>
                    <h3 className="h4 fw-bold text-navy mb-0">Our Vision</h3>
                  </div>
                  <p className="lead text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                    To be the leading global partner in heavy engineering, structural fabrication, and industrial process equipment manufacturing, setting the benchmark for innovation, quality, and precision engineering across all sectors.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm rounded-4 bg-white">
                <Card.Body className="p-4 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', backgroundColor: '#0b1e36' }}>
                      <i className="bi bi-bullseye fs-3 text-warning"></i>
                    </div>
                    <h3 className="h4 fw-bold text-navy mb-0">Our Mission</h3>
                  </div>
                  <p className="lead text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                    To deliver fully finished, high-quality fabrication products tailored to our clients' exact specifications. We commit to continuous technological advancement, strict adherence to ISO standards, and maintaining a safe, empowering environment for our workforce.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certifications & Awards Section */}
      <section id="certifications" className="py-5 bg-white border-top">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="dark" className="px-3 py-2 text-uppercase font-monospace mb-2">Quality Accreditation</Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Certifications & Standards</h2>
            <p className="text-secondary lead">
              Recognized for an unwavering commitment to quality and zero-defect industrial fabrication.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            <Col md={10} lg={8}>
              <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="bg-navy text-white p-4 text-center" style={{ backgroundColor: '#0b1e36' }}>
                  <i className="bi bi-award-fill text-warning display-4 mb-2 d-block"></i>
                  <h3 className="fw-bold mb-1">ISO 9001:2015 Certified Organization</h3>
                  <span className="badge bg-warning text-navy font-monospace px-3 py-1">Registration & Standards Compliant</span>
                </div>
                <Card.Body className="p-4 p-lg-5 text-center bg-light">
                  <p className="lead text-secondary mb-0" style={{ lineHeight: '1.8' }}>
                    Naveen Auto Components is an ISO 9001:2015 certified organization. This prestigious certification reflects our rigorous quality management systems, stringent inspection processes, and our commitment to delivering defect-free, precision-engineered metal fabrication products to all our clients across South India and internationally.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-5 bg-white border-top">
        <Container className="py-lg-5">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#0b1e36' }}>
              MTK FAB / NAVEEN AUTO
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Industries We Serve</h2>
            <p className="text-secondary lead">
              Naveen Auto Components delivers Metal fabrication solutions for a wide range of industries including
            </p>
          </div>

          <Row className="g-3 align-items-center justify-content-center" data-aos="fade-up">
            {[
              { title: "Power & Energy", img: "/images/hd/industries/power.jpg", height: 400 },
              { title: "Process Engineering", img: "/images/hd/industrial-2.jpg", height: 350 },
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

          <p className="text-center text-muted mt-5 font-monospace small px-md-5">
            Each industry comes with different operational demands, and our team adapts execution to meet project timelines, safety standards, and structural requirements.
          </p>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <Container className="py-lg-5">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-3" style={{ backgroundColor: '#f57c00', color: '#0b1e36' }}>
              NAVEEN AUTO
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-5">See what they are talking about?</h2>
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
            <button onClick={handleTestimonialPrev} className="btn btn-warning fw-bold px-4 me-3 border-0 shadow-sm" style={{ backgroundColor: '#f57c00' }}>Prev</button>
            <button onClick={handleTestimonialNext} className="btn btn-warning fw-bold px-4 border-0 shadow-sm" style={{ backgroundColor: '#f57c00' }}>Next</button>
          </div>
        </Container>
      </section>

      {/* Quality Objectives Checklist */}
      <section className="py-5 bg-light border-top border-bottom">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="secondary" className="px-3 py-2 text-uppercase font-monospace mb-2">QMS Objectives</Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Our ISO 9001:2015 Quality Objectives</h2>
            <p className="text-secondary lead">
              Every manufacturing batch and fabricated component undergoes strict inspection against our core quality targets.
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {companyData.qualityObjectives.map((obj, idx) => (
              <Col key={idx} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm p-3 bg-white">
                  <Card.Body className="d-flex align-items-center">
                    <div className="bg-light p-3 text-warning rounded-circle me-3 fw-bold fs-4" style={{ minWidth: '54px', textAlign: 'center', color: '#f57c00' }}>
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="h6 fw-bold text-navy mb-1">{obj}</h3>
                      <span className="small text-muted font-monospace"><i className="bi bi-check-all text-success me-1"></i> Target Metric</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Organizational Structure */}
      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-2" style={{ backgroundColor: '#f57c00' }}>Leadership & Team</Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Organizational Structure</h2>
            <p className="text-secondary lead">
              Experienced engineering leadership and plant managers driving operational excellence across Chennai and Cuddalore.
            </p>
          </div>

          <Row className="g-4">
            {companyData.organizationStructure.map((lvl, idx) => (
              <Col key={idx} md={6} lg={3}>
                <Card className="h-100 border-0 shadow-sm bg-navy text-white" style={{ backgroundColor: '#0b1e36' }}>
                  <Card.Header className="bg-navy text-warning fw-bold border-secondary py-3 px-3" style={{ backgroundColor: '#071322', color: '#f57c00' }}>
                    <i className="bi bi-diagram-3-fill me-2"></i> {lvl.level}
                  </Card.Header>
                  <Card.Body className="p-3">
                    <ListGroup variant="flush" className="bg-transparent">
                      {lvl.members.map((m, i) => (
                        <ListGroup.Item key={i} className="bg-transparent text-white-50 border-secondary px-0 py-2 small">
                          <i className="bi bi-person-badge text-warning me-2"></i> {m}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
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
