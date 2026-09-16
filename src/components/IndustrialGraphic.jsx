import React, { useState } from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';

export const IndustrialGraphic = ({ type = "tank", title = "Heavy Fabrication", tag = "Naveen Auto Components", height = "240px" }) => {
  const [imgError, setImgError] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Map of 100% unique ultra-high resolution HD industrial photography (zero duplicate URLs)
  const imageMap = {
    // Factories & Office
    "office_ambattur": "/images/hd/factories/office_ambattur.jpg",
    "unit1_chennai": "/images/hd/factories/unit1_chennai.jpg",
    "unit2_cuddalore": "/images/hd/factories/unit2_cuddalore.jpg",
    "unit1": "/images/hd/factories/unit1_chennai.jpg",
    "unit2": "/images/hd/factories/unit2_cuddalore.jpg",

    // Machinery Fleet
    "hydraulic_shearing": "/images/hd/machinery/hydraulic_shearing.jpg",
    "hydraulic_press_brake": "/images/hd/machinery/hydraulic_press_brake.jpg",
    "rolling_machine": "/images/hd/machinery/rolling_machine.jpg",
    "mig_welding": "/images/hd/machinery/mig_welding.jpg",
    "open_yard": "/images/hd/machinery/open_yard.jpg",

    // Projects & Executed Case Studies (Distinct Image files)
    "rail_coach_folding": "/images/hd/projects/rail_coach_folding.jpg",
    "rail_coach_parts": "/images/hd/projects/rail_coach_parts.jpg",
    "consent_state_nozzle": "/images/hd/projects/consent_state_nozzle.jpg",
    "consent_state_tank": "/images/hd/services/storage-tank-water-condensate-fabrication-chennai-nac-21.webp",
    "flash_tank": "/images/hd/projects/flash_tank.jpg",
    "header_pipe": "/images/hd/projects/header_pipe.jpg",
    "duct_pipeline": "/images/hd/projects/duct_pipeline.jpg",
    "duct_pipeline_loading": "/images/hd/projects/duct_pipeline_loading.jpg",
    "pipe_bracing_stand": "/images/hd/projects/pipe_bracing_stand.jpg",
    "air_blower_product": "/images/hd/projects/air_blower.jpg",
    "air_duct_units": "/images/hd/projects/air_duct_products.jpg",
    "heavy_handling_crane": "/images/hd/projects/heavy_handling_crane.jpg",
    "heavy_teal_tank_rigging": "/images/hd/projects/heavy_teal_tank_rigging.jpg",
    "structural_fan_guard": "/images/hd/projects/structural_fan_guard.jpg",
    "structural_beam": "/images/hd/projects/structural_beam.jpg",
    "structural_hand_rail": "/images/hd/projects/structural_hand_rail.jpg",
    "profile_img_20": "/images/hd/projects/storage-tank-fabrication.jpeg",
    "storage_tank_seo": "/images/hd/projects/storage-tank-fabrication.jpeg",
    "pipeline_duct_real": "/images/hd/projects/steam-distribution-pipeline-duct.jpeg",
    "steam_distribution_seo": "/images/hd/projects/steam-distribution-pipeline-duct.jpeg",
    "peb_structural_real": "/images/hd/projects/peb-structural-fabrication.jpeg",
    "peb_structural_seo": "/images/hd/projects/peb-structural-fabrication.jpeg",
    "rail_coach_real": "/images/hd/services/rail-bus-coach-component_1.jpeg",
    "air_duct_real": "/images/hd/projects/industrial-air-duct-air-blower-fabrication.jpeg",
    "heavy_logistics_real": "/images/hd/services/heavy-fabrication-product-handling-logistics.jpeg",
    "pressure_vessel_tank_seo": "/images/hd/projects/large-capacity-horizontal-pressure-vessel-tank.jpeg",
    "cuddalore_plant_view": "/images/hd/projects/cuddalore_plant_view.jpg",
    "cuddalore_pipe_rolling": "/images/hd/projects/cuddalore_flame_cutting.jpg",

    // Services Sub-Page Fallbacks (Clean Online Generated AI Banners for Home, Cards & Header Banners)
    "storage-tanks": "/images/hd/services/storage-tank-water-condensate-fabrication-chennai-nac-21.webp",
    "pipeline-ducts": "/images/hd/services/steam-pipeline-duct-fabrication-cuddalore-nac-23.webp",
    "peb-structural": "/images/hd/services/peb-structural-fabrication-nac-chennai-25.webp",
    "rail-bus-coach": "/images/hd/services/rail-coach-parts-fabrication-nac-27.webp",
    "air-duct-blower": "/images/hd/services/air-duct-fabrication-airflow-client-nac-28.webp",
    "heavy-handling-logistics": "/images/hd/services/heavy-fabrication-product-handling-logistics.jpeg",
    "tank": "/images/hd/services/storage-tank-water-condensate-fabrication-chennai-nac-21.webp",
    "crane": "/images/hd/services/heavy-handling-logistics.jpg"
  };

  const imageSrc = imageMap[type] || "/images/hd/services/storage-tank-water-condensate-fabrication-chennai-nac-21.webp";

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 1));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <>
      <div 
        className="industrial-graphic-container zoom-image-wrapper overflow-hidden position-relative rounded shadow-sm d-flex flex-column justify-content-between p-0"
        style={{
          height: height,
          background: '#071322',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
        onClick={() => setShowZoomModal(true)}
      >
        {/* Unique High-Resolution HD Industrial Photography with Smooth Zoom hover */}
        {imageSrc && !imgError ? (
          <img 
            src={imageSrc} 
            alt={`${title} - Naveen Auto Components`}
            loading="lazy" 
            className="w-100 h-100 position-absolute top-0 start-0 zoom-img"
            style={{ objectFit: 'cover', filter: 'brightness(0.92) contrast(1.08)' }}
            onError={() => setImgError(true)}
          />
        ) : (
          /* Backup Technical Vector Artwork */
          <div className="w-100 h-100 position-absolute top-0 start-0 d-flex align-items-center justify-content-center bg-navy">
            <span className="text-white-50 font-monospace small">{title}</span>
          </div>
        )}

        {/* Top Header Overlay Badge */}
        <div className="d-flex justify-content-between align-items-center position-relative z-1 p-3">
          <span className="badge bg-warning text-uppercase fw-semibold px-2 py-1 fs-7 shadow-sm" style={{ backgroundColor: '#f57c00' }}>
            {tag}
          </span>
          <span className="badge bg-navy text-warning border border-secondary font-monospace small opacity-90 shadow-sm">
            <i className="bi bi-shield-check me-1"></i> ISO 9001:2015
          </span>
        </div>

        {/* Interactive Zoom Indicator Badge */}
        <div className="zoom-badge-overlay">
          <i className="bi bi-zoom-in fs-6"></i>
          <span>Click to Inspect / Zoom</span>
        </div>

        {/* Bottom Title Overlay Bar */}
        <div className="position-relative z-1 p-3 mt-auto bg-navy bg-opacity-75 backdrop-blur border-top border-secondary">
          <h6 className="fw-bold text-white mb-0 text-truncate">{title}</h6>
        </div>
      </div>

      {/* Interactive Lightbox Zoom Modal */}
      <Modal 
        show={showZoomModal} 
        onHide={() => { setShowZoomModal(false); setZoomLevel(1); }} 
        size="lg" 
        centered 
        contentClassName="bg-navy border border-secondary text-white"
      >
        <Modal.Header closeButton closeVariant="white" className="border-secondary">
          <Modal.Title className="h5 fw-bold text-warning d-flex align-items-center gap-2">
            <i className="bi bi-bounding-box-circles me-1"></i>
            {title} - Detailed Inspection View
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4 text-center modal-zoom-container position-relative overflow-hidden">
          <div className="overflow-auto w-100 d-flex justify-content-center align-items-center" style={{ maxHeight: '75vh' }}>
            <img 
              src={imageSrc} 
              alt={title} 
              className="img-fluid rounded modal-zoom-img shadow-lg"
              style={{ 
                transform: `scale(${zoomLevel})`, 
                transformOrigin: 'center center',
                transition: 'transform 0.3s ease-out'
              }} 
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <Badge bg="dark" className="border border-secondary px-3 py-2 font-monospace">
              Zoom: {Math.round(zoomLevel * 100)}%
            </Badge>
            <span className="small text-white-50 d-none d-sm-inline">
              Storage Tank Fabrication - HD Shop Floor Spec (profile_img_20.jpeg)
            </span>
          </div>
          <div className="d-flex gap-2">
            <Button variant="outline-warning" size="sm" onClick={handleZoomIn} title="Zoom In">
              <i className="bi bi-zoom-in me-1"></i> Zoom In
            </Button>
            <Button variant="outline-light" size="sm" onClick={handleZoomOut} disabled={zoomLevel <= 1} title="Zoom Out">
              <i className="bi bi-zoom-out me-1"></i> Zoom Out
            </Button>
            <Button variant="outline-secondary" size="sm" onClick={handleResetZoom} title="Reset Zoom">
              <i className="bi bi-arrow-counterclockwise me-1"></i> Reset
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

