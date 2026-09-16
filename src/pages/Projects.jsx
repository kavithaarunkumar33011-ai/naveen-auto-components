import React, { useState } from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { SEO } from '../components/SEO';
import { PageBanner } from '../components/PageBanner';
import { projectsData, clientsList } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';
import { ImageLightboxModal } from '../components/ImageLightboxModal';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState({ show: false, src: '', alt: '' });

  const handleOpenLightbox = (src, alt) => {
    setLightbox({ show: true, src, alt });
  };

  const handleCloseLightbox = () => {
    setLightbox(prev => ({ ...prev, show: false }));
  };

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter((p) => p.clientTag.toLowerCase().includes(activeFilter.toLowerCase()) || p.customer.toLowerCase().includes(activeFilter.toLowerCase()));

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Naveen Auto Components Project Showcase",
    "description": "Exemplary heavy engineering fabrication projects for ENEXIO, C. Doctor, Airflow, IRG, Enviro Engineering, and OLG."
  };

  return (
    <>
      <SEO 
        title="Heavy Fabrication Projects Gallery in Chennai and Cuddalore | NAC"
        description="Explore executed project references for Heavy Fabrication in Chennai and Cuddalore: rail coach folding, consent-state pressure vessels, header pipes, air blowers, & structural fan guards."
        canonical="/projects"
        schema={projectsSchema}
      />

      <PageBanner 
        title="Completed Projects" 
        subtitle="Portfolio of Heavy Fabrication in Chennai and Cuddalore."
        breadcrumbs={[{ label: 'Projects', url: '/projects' }]}
        image="/images/hd/heavy-fabrication-projects-nac-chennai-cuddalore.webp"
      />

      {/* Filterable Project Gallery */}
      <section className="py-5 bg-light">
        <Container className="py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-4">
            <Badge bg="warning" className="text-navy fw-bold px-3 py-2 text-uppercase mb-2" style={{ backgroundColor: '#f57c00' }}>
              Client Case Studies
            </Badge>
            <h2 className="display-6 fw-bold text-navy mb-3">Heavy Fabrication Projects in Chennai and Cuddalore</h2>
            <p className="text-secondary lead mb-4">
              Filter by customer or category to view specific equipment fabrications and quality execution details. Click any project card to view full page image with zoom.
            </p>

            {/* Filter Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
              {clientsList.map((client) => (
                <Button
                  key={client.id}
                  variant={activeFilter === client.id ? "warning" : "outline-dark"}
                  size="sm"
                  className="fw-bold px-3 py-2 rounded-pill font-monospace"
                  style={activeFilter === client.id ? { backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' } : {}}
                  onClick={() => setActiveFilter(client.id)}
                >
                  {client.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <Row className="g-4">
            {filteredProjects.map((project) => (
              <Col key={project.id} md={6} lg={4}>
                <ProjectCard project={project} onImageClick={handleOpenLightbox} />
              </Col>
            ))}
          </Row>

          {filteredProjects.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-search display-4 text-muted d-block mb-3"></i>
              <h4 className="fw-bold text-navy">No projects found for this filter</h4>
              <p className="text-muted">Try selecting "All Projects" to view full portfolio.</p>
              <Button variant="navy" onClick={() => setActiveFilter("all")} className="fw-bold" style={{ backgroundColor: '#0b1e36', color: '#fff' }}>
                Reset Filter
              </Button>
            </div>
          )}
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
