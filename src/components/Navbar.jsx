import React, { useState } from 'react';
import { Navbar as BsNavbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export const MainNavbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      <style>
        {`
          .custom-navbar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1030;
            background: transparent !important;
            box-shadow: none !important;
            padding-top: 0 !important;
          }
          .custom-navbar .nav-link {
            color: rgba(255, 255, 255, 0.9) !important;
            font-weight: 500;
            padding: 1.5rem 1rem !important;
            font-size: 0.95rem;
            position: relative;
            transition: color 0.3s ease !important;
          }
          .custom-navbar .nav-link:hover,
          .custom-navbar .nav-link:focus {
            color: #f57c00 !important;
          }
          .custom-navbar .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: 20px;
            left: 1rem;
            right: 1rem;
            height: 2px;
            background-color: #fff;
          }
          .logo-tab {
            background-color: #ffffff;
            padding: 1rem 1.5rem 1.5rem;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            text-align: center;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            text-decoration: none;
          }
          .logo-icon {
            font-family: 'JetBrains Mono', monospace;
            background-color: #f57c00;
            color: #0b1e36;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }
          .logo-text {
            color: #fff;
            font-weight: 800;
            letter-spacing: 1px;
            line-height: 1.2;
            font-size: 1rem;
          }
          .logo-subtext {
            color: #f57c00;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: 2px;
          }
          .navbar-toggler {
            background-color: rgba(255,255,255,0.1);
            border: none;
            padding: 0.5rem;
            margin-top: 1rem;
          }
          .navbar-toggler-icon {
            filter: invert(1);
          }
          /* Dark background for dropdowns */
          .dropdown-menu {
            background-color: rgba(11, 30, 54, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
          }
          .dropdown-item {
            color: #fff;
          }
          .dropdown-item:hover {
            background-color: #f57c00;
            color: #0b1e36;
          }
          @media (min-width: 992px) {
            .dropdown-menu.show {
              animation: fadeIn 0.2s ease;
            }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 991.98px) {
            .custom-navbar {
              background: #0b1e36 !important;
              position: relative;
            }
            .logo-tab {
              padding: 0.5rem;
              border-radius: 0;
              box-shadow: none;
            }
          }
        `}
      </style>
      <BsNavbar expand="lg" className="custom-navbar">
        <Container fluid className="px-lg-5 align-items-start">
          
          {/* Brand Logo Tab */}
          <Link to="/" className="logo-tab">
            <img 
              src="/images/logos/logo-white-cropped.jpeg" 
              alt="Naveen Auto Components"
              style={{ height: '70px', objectFit: 'contain' }}
            />
          </Link>

          <BsNavbar.Toggle aria-controls="main-navbar-nav" />

          <BsNavbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
              
              <NavDropdown 
                title="Services" 
                id="services-nav-dropdown"
                show={showServices}
                onMouseEnter={() => window.innerWidth >= 992 && setShowServices(true)}
                onMouseLeave={() => window.innerWidth >= 992 && setShowServices(false)}
                onClick={() => setShowServices(!showServices)}
              >
                <NavDropdown.Item as={NavLink} to="/services" end className="fw-bold border-bottom border-secondary pb-2 mb-1">
                  All Capabilities
                </NavDropdown.Item>
                {servicesData.map((svc) => (
                  <NavDropdown.Item key={svc.slug} as={NavLink} to={`/services/${svc.slug}`}>
                    {svc.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link as={NavLink} to="/facilities">Infrastructure</Nav.Link>
              <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
              <Nav.Link as={NavLink} to="/clients">Clients</Nav.Link>
              <Nav.Link as={NavLink} to="/blog">News & Events</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </BsNavbar.Collapse>

        </Container>
      </BsNavbar>
    </>
  );
};
