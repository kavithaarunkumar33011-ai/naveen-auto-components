import React from 'react';
import { Table, Badge, Card } from 'react-bootstrap';
import { machineryData, infrastructureData } from '../data/machineryData';

export const MachineryTable = () => {
  return (
    <div>
      <h3 className="h4 fw-bold text-navy mb-3">
        <i className="bi bi-tools text-warning me-2"></i> Primary Machinery Specs & Fleet Capacities
      </h3>
      <div className="table-responsive shadow-sm rounded-3 overflow-hidden mb-5">
        <Table hover striped className="align-middle mb-0 bg-white border">
          <thead className="bg-navy text-white" style={{ backgroundColor: '#0b1e36', color: '#fff' }}>
            <tr>
              <th className="py-3 px-3">Equipment / Machine Name</th>
              <th className="py-3 px-3">Qty</th>
              <th className="py-3 px-3">Bed Size / Specs</th>
              <th className="py-3 px-3">Max Work Capacity</th>
              <th className="py-3 px-3">Category</th>
            </tr>
          </thead>
          <tbody>
            {machineryData.map((item, idx) => (
              <tr key={idx}>
                <td className="px-3 fw-bold text-navy">
                  {item.name}
                  <div className="text-muted fw-normal small">{item.description}</div>
                </td>
                <td className="px-3">
                  <Badge bg="dark" className="px-2 py-1 font-monospace fs-7">
                    {item.qty}
                  </Badge>
                </td>
                <td className="px-3 font-monospace small text-primary fw-semibold">
                  {item.bedSize}
                </td>
                <td className="px-3 small fw-medium">
                  {item.capacity}
                </td>
                <td className="px-3">
                  <span className="badge bg-light text-navy border font-monospace fs-8">
                    {item.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Infrastructure Summary Grid */}
      <h3 className="h4 fw-bold text-navy mb-3">
        <i className="bi bi-building-gear text-warning me-2"></i> Workshop & Yard Facilities
      </h3>
      <div className="row g-4">
        {infrastructureData.map((infra, idx) => (
          <div key={idx} className="col-md-6 col-lg-3">
            <Card className="h-100 border-0 shadow-sm bg-light">
              <Card.Body className="p-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-warning fs-4 me-2"></i>
                  <h6 className="fw-bold mb-0 text-navy">{infra.title}</h6>
                </div>
                <div className="badge bg-warning text-navy font-monospace mb-2" style={{ backgroundColor: '#f57c00', color: '#fff' }}>
                  {infra.capacity}
                </div>
                <p className="text-secondary small mb-0">
                  {infra.details}
                </p>
                <div className="mt-2 text-muted font-monospace fs-8">
                  <i className="bi bi-geo-alt me-1"></i> {infra.location}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
