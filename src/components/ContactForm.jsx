import React, { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { servicesData } from '../data/servicesData';

export const ContactForm = () => {
  const defaultService = servicesData[0]?.title || 'Storage Tank Fabrication';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const existing = JSON.parse(localStorage.getItem('nac_inquiries') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('nac_inquiries', JSON.stringify(existing));
    } catch (err) {
      console.warn('Could not save inquiry to storage', err);
    }

    // Simulate API form submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <Card className="shadow border-0 rounded-3">
      <Card.Header className="bg-navy text-white py-3 px-4" style={{ backgroundColor: '#0b1e36' }}>
        <h4 className="h5 fw-bold mb-0 text-white">
          <i className="bi bi-envelope-paper-fill text-warning me-2"></i> Request Fabrication Quote / Inquiry
        </h4>
        <small className="text-white-50">Our engineering team will respond within 24 business hours.</small>
      </Card.Header>

      <Card.Body className="p-4 bg-white">
        {submitted ? (
          <Alert variant="success" className="p-4 text-center">
            <i className="bi bi-check-circle-fill text-success display-4 d-block mb-3"></i>
            <h4 className="fw-bold">Quote Request Received!</h4>
            <p className="mb-3">
              Thank you, <strong>{formData.name}</strong>. Your requirement for <strong>{formData.service}</strong> has been logged into our procurement desk.
            </p>
            <p className="small text-muted mb-4">
              We have dispatched an automated confirmation summary to <strong>{formData.email}</strong>.
            </p>
            <Button 
              variant="outline-dark" 
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', service: defaultService, quantity: '', message: '' });
              }}
            >
              Submit Another Inquiry
            </Button>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <Form.Group controlId="contactName">
                  <Form.Label className="fw-semibold text-navy small">Full Name / Company Representative *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Mr. Rajesh Kumar"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group controlId="contactEmail">
                  <Form.Label className="fw-semibold text-navy small">Official Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group controlId="contactPhone">
                  <Form.Label className="fw-semibold text-navy small">Contact Mobile / Phone *</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91-9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group controlId="contactService">
                  <Form.Label className="fw-semibold text-navy small">Required Fabrication Service *</Form.Label>
                  <Form.Select name="service" value={formData.service} onChange={handleChange}>
                    {servicesData.map((svc) => (
                      <option key={svc.slug} value={svc.title}>
                        {svc.title}
                      </option>
                    ))}
                    <option value="Custom General Heavy Engineering">Custom General Heavy Engineering</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="col-12">
                <Form.Group controlId="contactMessage">
                  <Form.Label className="fw-semibold text-navy small">Technical Specifications / Project Details *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    required
                    placeholder="Provide details such as metal grade (MS/SS), plate thickness, drawings, delivery timeline, or plant location..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div className="col-12">
                <Button 
                  type="submit" 
                  variant="warning" 
                  size="lg" 
                  disabled={loading}
                  className="w-100 fw-bold text-navy shadow-sm py-3"
                  style={{ backgroundColor: '#f57c00', borderColor: '#f57c00', color: '#fff' }}
                >
                  {loading ? (
                    <span><i className="bi bi-hourglass-split me-2"></i> Transmitting Request...</span>
                  ) : (
                    <span><i className="bi bi-send-fill me-2"></i> Send RFQ to Naveen Auto Procurement</span>
                  )}
                </Button>
              </div>
            </div>

            <div className="mt-3 text-muted fs-8 text-center">
              <i className="bi bi-lock-fill text-success me-1"></i>
              Your technical drawings and corporate data are protected under non-disclosure standards.
            </div>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
};
