import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { IndustrialGraphic } from './IndustrialGraphic';

const projectImageMap = {
  1: "/images/hd/services/rail-bus-coach-component_1.jpeg",
  2: "/images/hd/services/consent-state-tank-nozzle-fitup-12.jpeg",
  3: "/images/hd/services/storage-tank.jpeg",
  4: "/images/hd/Industrial Air Duct & Air Blower Fabrication.jpeg",
  5: "/images/hd/services/header-pipe-power-cooling-14.jpeg",
  6: "/images/hd/services/duct-pipeline-products-loading-9.jpeg",
  7: "/images/hd/services/pipe-bracing-stand-blasting-3.jpeg",
  8: "/images/hd/services/air-blower-products-spec.jpeg",
  9: "/images/hd/Heavy Duty Duct Shell & Cylinder Rolling Facility with Press Brake.jpeg",
  10: "/images/hd/services/handling-heavy-fabrication-products-5.jpeg",
  11: "/images/hd/services/fabrication-structural-fan-guard.jpeg",
  12: "/images/hd/Rail & Bus Coach Component Fabrication.jpeg",
  13: "/images/hd/services/structural-hand-rail.jpeg",
  14: "/images/hd/services/heat-handling-bin.jpeg",
  15: "/images/hd/services/material-handling-bin.jpeg",
  16: "/images/hd/services/pressure-valve-tank.jpeg",
  17: "/images/hd/services/heavy-fabrication-duct.jpeg"
};

export const ProjectCard = ({ project, onImageClick }) => {
  const getSlugFromCategory = (cat) => {
    if (cat.includes("Tank")) return "storage-tanks";
    if (cat.includes("Pipeline")) return "pipeline-ducts";
    if (cat.includes("Structural") || cat.includes("PEB")) return "peb-structural";
    if (cat.includes("Rail")) return "rail-bus-coach";
    if (cat.includes("Air")) return "air-duct-blower";
    return "heavy-handling-logistics";
  };

  const realImgSrc = project.imageSrc || projectImageMap[project.id];

  return (
    <Card className="h-100 shadow-sm border-0 rounded-3 overflow-hidden project-card transition-all">
      <div 
        className="position-relative img-zoom-wrapper" 
        style={{ height: '220px', overflow: 'hidden', backgroundColor: '#071322', cursor: 'pointer' }}
        onClick={() => onImageClick && onImageClick(realImgSrc || project.title, project.title)}
      >
        {realImgSrc ? (
          <img 
            src={realImgSrc} 
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <IndustrialGraphic 
            type={project.imageTag || getSlugFromCategory(project.category)} 
            title={project.title} 
            tag={project.customer} 
            height="220px" 
          />
        )}
        
        <Badge 
          bg="dark" 
          className="position-absolute bottom-0 end-0 m-3 px-2 py-1 opacity-90 font-monospace small"
          style={{ border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', zIndex: 3 }}
        >
          <i className="bi bi-geo-alt-fill text-warning me-1"></i> {project.location}
        </Badge>

        <div 
          className="position-absolute top-0 start-0 m-2 px-2 py-1 bg-navy text-white rounded-pill extra-small fw-semibold"
          style={{ backgroundColor: 'rgba(7, 19, 34, 0.8)', fontSize: '0.75rem', zIndex: 3 }}
        >
          <i className="bi bi-arrows-fullscreen text-warning me-1"></i> Expand
        </div>
      </div>

      <Card.Body className="p-4 bg-white d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Badge bg="secondary" className="px-2 py-1 mb-2 text-uppercase font-monospace fs-8">
            {project.category}
          </Badge>
          <span className="small fw-bold text-warning" style={{ color: '#f57c00' }}>
            <i className="bi bi-building me-1"></i> {project.customer}
          </span>
        </div>

        <Card.Title as="h3" className="h6 fw-bold text-navy mb-2">
          {project.title}
        </Card.Title>

        <Card.Text className="text-secondary small mb-3 flex-grow-1">
          {project.description}
        </Card.Text>

        <div className="bg-light p-2 rounded small font-monospace">
          <div className="fw-bold text-muted fs-8 text-uppercase mb-1">Execution Highlights:</div>
          <ul className="list-inline mb-0 small text-navy">
            {project.highlights.map((h, i) => (
              <li key={i} className="list-inline-item me-2 mb-1">
                <span className="badge bg-white text-navy border">✓ {h}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};
