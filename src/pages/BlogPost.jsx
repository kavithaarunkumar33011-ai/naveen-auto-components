import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Accordion, Badge } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { blogPosts } from '../data/blogData';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seoDesc,
    "image": `https://www.naveenauto.com${post.image}`,
    "author": {
      "@type": "Organization",
      "name": "Naveen Auto Components"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Naveen Auto Components",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.naveenauto.com/images/logos/logo-white-cropped.jpeg"
      }
    },
    "datePublished": "2026-08-28"
  };

  return (
    <>
      <SEO 
        title={post.seoTitle}
        description={post.seoDesc}
        canonical={`/blog/${post.slug}`}
        schema={postSchema}
      />

      <PageBanner 
        title={post.title} 
        subtitle={`Published on ${post.date} • ${post.readTime}`}
        breadcrumbs={[
          { label: "Blog", url: "/blog" },
          { label: post.title, url: `/blog/${post.slug}` }
        ]}
      />

      <section className="py-5 bg-white">
        <Container className="py-lg-4">
          <Row className="g-5 justify-content-center">
            <Col lg={8}>
              <div className="mb-4 rounded-3 overflow-hidden shadow-sm" style={{ maxHeight: '420px' }}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom font-monospace small">
                <Badge bg="warning" className="text-navy px-3 py-2" style={{ backgroundColor: '#f57c00' }}>
                  <i className="bi bi-tag-fill me-1"></i> {post.category}
                </Badge>
                <span className="text-muted">
                  <i className="bi bi-person-circle me-1 text-warning"></i> Author: {post.author}
                </span>
              </div>

              {/* Main Article Content with Styled Q&A FAQ Variant Cards */}
              <article className="blog-article-content text-navy mb-5" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {(() => {
                  const formatText = (text) => {
                    const parts = text.split(/(\*\*.*?\*\*)/g);
                    return parts.map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="text-navy fw-bold">{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    });
                  };

                  const paragraphs = post.content.split('\n\n');
                  const renderedElements = [];
                  let i = 0;

                  while (i < paragraphs.length) {
                    const paragraph = paragraphs[i].trim();
                    if (!paragraph) {
                      i++;
                      continue;
                    }

                    if (paragraph === '---' || paragraph === '***') {
                      renderedElements.push(<hr key={i} className="my-4 border-secondary opacity-25" />);
                      i++;
                      continue;
                    }

                    if (paragraph.startsWith('# ')) {
                      renderedElements.push(<h2 key={i} className="h3 fw-bold text-navy my-4">{formatText(paragraph.replace('# ', ''))}</h2>);
                      i++;
                      continue;
                    }

                    if (paragraph.startsWith('## ')) {
                      const headingText = paragraph.replace('## ', '');
                      if (headingText.toLowerCase().includes('faq') || headingText.toLowerCase().includes('frequently asked questions')) {
                        renderedElements.push(
                          <div key={i} className="mt-5 mb-4 p-3 bg-light rounded border-start border-warning border-4">
                            <h3 className="h4 fw-bold text-navy mb-1 d-flex align-items-center">
                              <i className="bi bi-question-square-fill text-warning me-2 fs-3"></i>
                              Frequently Asked Questions (FAQ)
                            </h3>
                            <p className="small text-muted font-monospace mb-0">Common technical queries & engineering answers</p>
                          </div>
                        );
                      } else {
                        renderedElements.push(<h3 key={i} className="h4 fw-bold text-navy mt-4 mb-3">{formatText(headingText)}</h3>);
                      }
                      i++;
                      continue;
                    }

                    // Check for Q&A Question-Answer Pairs
                    if (paragraph.startsWith('### ') || paragraph.endsWith('?')) {
                      const questionText = paragraph.replace('### ', '').trim();
                      const nextParagraph = (i + 1 < paragraphs.length) ? paragraphs[i + 1].trim() : '';

                      // If next paragraph exists and is not a header, treat as Question & Answer pair
                      if (nextParagraph && !nextParagraph.startsWith('#') && !nextParagraph.startsWith('-') && nextParagraph !== '---') {
                        renderedElements.push(
                          <div key={i} className="faq-variant-card mb-4 rounded-3 border overflow-hidden shadow-sm">
                            {/* Question Header Box */}
                            <div className="bg-navy text-white p-3 p-md-4 d-flex align-items-center" style={{ backgroundColor: '#0b1e36' }}>
                              <span className="badge bg-warning text-navy font-monospace fw-extrabold me-3 px-3 py-2 fs-6 shadow-sm" style={{ backgroundColor: '#f57c00', color: '#0b1e36' }}>Q:</span>
                              <h4 className="h6 fw-bold mb-0 text-white" style={{ lineHeight: '1.5', fontSize: '1.08rem' }}>{formatText(questionText)}</h4>
                            </div>

                            {/* Answer Box on New Line - Non-bold body with bold SEO keywords */}
                            <div className="bg-white p-3 p-md-4 border-top">
                              <div className="d-flex align-items-center mb-2">
                                <span className="badge bg-success font-monospace fw-extrabold px-3 py-1 fs-6" style={{ backgroundColor: '#2e7d32' }}>A:</span>
                                <span className="small text-muted font-monospace ms-2">Technical Specification Answer</span>
                              </div>
                              <div className="text-secondary fw-normal pt-1" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#334155', fontWeight: 400 }}>
                                {formatText(nextParagraph)}
                              </div>
                            </div>
                          </div>
                        );
                        i += 2; // Skip both question and answer
                        continue;
                      } else {
                        renderedElements.push(<h4 key={i} className="h5 fw-bold text-navy mt-3 mb-2">{formatText(questionText)}</h4>);
                        i++;
                        continue;
                      }
                    }

                    if (paragraph.startsWith('- ')) {
                      renderedElements.push(
                        <ul key={i} className="mb-3">
                          {paragraph.split('\n').map((item, itemIdx) => (
                            <li key={itemIdx} className="mb-2">{formatText(item.replace(/^[-*]\s+/, ''))}</li>
                          ))}
                        </ul>
                      );
                      i++;
                      continue;
                    }

                    renderedElements.push(<p key={i} className="text-secondary mb-3">{formatText(paragraph)}</p>);
                    i++;
                  }

                  return renderedElements;
                })()}
              </article>

              {/* Internal Links to Relevant Services */}
              <Card className="border-0 shadow-sm bg-light p-4 mb-5">
                <Card.Body>
                  <h4 className="h5 fw-bold text-navy mb-3">
                    <i className="bi bi-link-45deg text-warning me-2"></i> Relevant Engineering Services & Specs:
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    <Button as={Link} to="/services/storage-tanks" variant="outline-dark" size="sm" className="fw-bold">
                      Storage Tank Fabrication <i className="bi bi-chevron-right ms-1"></i>
                    </Button>
                    <Button as={Link} to="/services/pipeline-ducts" variant="outline-dark" size="sm" className="fw-bold">
                      Steam Pipeline Ducts <i className="bi bi-chevron-right ms-1"></i>
                    </Button>
                    <Button as={Link} to="/facilities" variant="outline-dark" size="sm" className="fw-bold">
                      Machinery Specs <i className="bi bi-chevron-right ms-1"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              {/* Contact CTA Banner */}
              <Card className="border-0 bg-navy text-white p-4 text-center rounded-3 shadow-lg" style={{ backgroundColor: '#0b1e36' }}>
                <Card.Body>
                  <h3 className="h4 fw-bold text-white mb-2">Need Custom Heavy Fabrication Specs?</h3>
                  <p className="text-white-50 small mb-4">
                    Send your CAD drawings, metal grades, and tank volume requirements to our procurement engineers in Chennai.
                  </p>
                  <Button as={Link} to="/contact" variant="warning" size="lg" className="fw-bold px-4 py-3 text-navy" style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}>
                    <i className="bi bi-envelope-paper-fill me-2"></i> Request RFQ Proposal
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
