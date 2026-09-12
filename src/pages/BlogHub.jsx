import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { blogPosts } from '../data/blogData';

export const BlogHub = () => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Naveen Auto Components Engineering & Fabrication Insights",
    "url": "https://www.naveenauto.com/blog",
    "description": "Technical insights on heavy engineering fabrication, storage tanks, steam distribution pipeline ducts, PEB structural steel & ISO 9001 standards."
  };

  return (
    <>
      <SEO 
        title="Heavy Fabrication Blog & Insights | Chennai and Cuddalore"
        description="Technical articles & engineering insights on Heavy Fabrication in Chennai and Cuddalore: storage tank manufacturing, steam pipeline ducts, PEB steel, & ISO 9001 standards."
        canonical="/blog"
        schema={blogSchema}
      />

      <PageBanner 
        title="News & Events" 
        subtitle="Technical insights on Heavy Fabrication in Chennai and Cuddalore."
        breadcrumbs={[{ label: 'News & Events', url: '/blog' }]}
        image="/images/hd/events.jpg"
      />

      <section className="py-5 bg-light">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-2" style={{ backgroundColor: '#f57c00' }}>
              Engineering & Industry Insights
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Technical Knowledge Hub</h2>
            <p className="text-secondary lead">
              Stay informed on industry standards, metal plate rolling, pressure vessel compliance, and heavy logistics in Tamil Nadu.
            </p>
          </div>

          <Row className="g-4">
            {blogPosts.map((post) => (
              <Col key={post.slug} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm rounded-3 overflow-hidden bg-white service-card transition-all">
                  <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', filter: 'brightness(0.95)' }}
                    />
                    <Badge 
                      bg="warning" 
                      className="position-absolute top-0 start-0 m-3 px-3 py-2 text-navy fw-bold font-monospace shadow-sm"
                      style={{ backgroundColor: '#f57c00' }}
                    >
                      {post.category}
                    </Badge>
                  </div>

                  <Card.Body className="p-4 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center text-muted small font-monospace mb-2">
                        <i className="bi bi-calendar3 text-warning me-2"></i> {post.date}
                        <span className="mx-2">•</span>
                        <i className="bi bi-clock me-1"></i> {post.readTime}
                      </div>

                      <h2 className="h5 fw-bold text-navy mb-3">
                        <Link to={`/blog/${post.slug}`} className="text-navy text-decoration-none hover-amber">
                          {post.title}
                        </Link>
                      </h2>

                      <p className="small text-secondary mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <span className="small text-muted font-monospace">
                        <i className="bi bi-person-fill text-warning me-1"></i> {post.author}
                      </span>
                      <Button as={Link} to={`/blog/${post.slug}`} variant="outline-dark" size="sm" className="fw-bold">
                        Read Article <i className="bi bi-arrow-right ms-1"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
