import React, { useState, useEffect } from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';

export const ImageLightboxModal = ({ show, onHide, imageSrc, imageAlt }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Reset zoom whenever modal opens with a new image
  useEffect(() => {
    if (show) {
      setZoomLevel(1);
    }
  }, [show, imageSrc]);

  // Keyboard controls (+, -, Esc)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!show) return;
      if (e.key === 'Escape') onHide();
      if (e.key === '+' || e.key === '=') setZoomLevel(prev => Math.min(prev + 0.25, 3.5));
      if (e.key === '-' || e.key === '_') setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
      if (e.key === '0') setZoomLevel(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [show, onHide]);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.3, 3.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.3, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  if (!show) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      fullscreen
      centered
      contentClassName="bg-dark text-white border-0"
      style={{ backgroundColor: 'rgba(7, 19, 34, 0.95)', zIndex: 1060 }}
    >
      {/* Top Toolbar Header */}
      <div 
        className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom border-secondary text-white" 
        style={{ backgroundColor: '#071322', zIndex: 10 }}
      >
        <div className="d-flex align-items-center me-3">
          <Badge bg="warning" className="text-navy me-2 px-2 py-1 text-uppercase fw-bold" style={{ backgroundColor: '#f57c00' }}>
            Full Screen View
          </Badge>
          <span className="fw-semibold text-truncate max-w-400 fs-6 text-light">
            {imageAlt || 'Factory & Machinery View'}
          </span>
        </div>

        {/* Zoom Controls & Close Button */}
        <div className="d-flex align-items-center gap-2">
          <Button 
            variant="outline-light" 
            size="sm" 
            onClick={handleZoomOut} 
            disabled={zoomLevel <= 0.5}
            title="Zoom Out (-)"
            className="px-3"
          >
            <i className="bi bi-zoom-out me-1"></i> Zoom Out
          </Button>
          
          <Badge bg="secondary" className="px-3 py-2 font-monospace fs-7">
            {Math.round(zoomLevel * 100)}%
          </Badge>
          
          <Button 
            variant="outline-light" 
            size="sm" 
            onClick={handleZoomIn} 
            disabled={zoomLevel >= 3.5}
            title="Zoom In (+)"
            className="px-3"
          >
            <i className="bi bi-zoom-in me-1"></i> Zoom In
          </Button>

          <Button 
            variant="outline-warning" 
            size="sm" 
            onClick={handleResetZoom} 
            title="Reset Zoom (100%)"
            className="px-2"
            style={{ borderColor: '#f57c00', color: '#f57c00' }}
          >
            Reset
          </Button>

          <Button 
            variant="danger" 
            size="sm" 
            onClick={onHide} 
            title="Close Full Screen (Esc)"
            className="ms-2 px-3 fw-bold"
          >
            <i className="bi bi-x-lg me-1"></i> Close
          </Button>
        </div>
      </div>

      {/* Main Image Container */}
      <Modal.Body 
        className="p-0 d-flex align-items-center justify-content-center overflow-auto position-relative"
        style={{ minHeight: 'calc(100vh - 70px)', cursor: 'grab' }}
      >
        <div 
          className="d-flex align-items-center justify-content-center p-3"
          style={{ 
            transition: 'transform 0.25s ease-out', 
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center'
          }}
        >
          <img 
            src={imageSrc} 
            alt={imageAlt || 'Factory view'} 
            className="img-fluid rounded shadow-lg"
            style={{ 
              maxHeight: zoomLevel === 1 ? '82vh' : 'none', 
              maxWidth: zoomLevel === 1 ? '90vw' : 'none',
              objectFit: 'contain',
              userSelect: 'none'
            }} 
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};
