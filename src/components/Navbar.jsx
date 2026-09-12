import React, { useState, useEffect } from 'react';
import { Navbar as BsNavbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export const MainNavbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Auto-close mobile navbar drawer when path changes
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

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
            padding: 1.25rem 1rem !important;
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
            bottom: 12px;
            left: 1rem;
            right: 1rem;
            height: 2px;
            background-color: #f57c00;
          }
          .logo-tab {
            background-color: #ffffff;
            padding: 0.8rem 1.2rem;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            text-align: center;
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.25);
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .navbar-toggler {
            background-color: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.25);
            padding: 0.5rem 0.75rem;
            margin-top: 0.75rem;
            border-radius: 6px;
          }
          .navbar-toggler:focus {
            box-shadow: 0 0 0 0.25rem rgba(245, 124, 0, 0.4);
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
            padding: 0.6rem 1.2rem;
          }
          .dropdown-item:hover, .dropdown-item:focus {
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
              padding: 0.5rem 0 !important;
            }
            .logo-tab {
              padding: 0.4rem 0.75rem;
              border-radius: 6px;
              box-shadow: none;
            }
            .logo-tab img {
              height: 48px !important;
            }
            .navbar-collapse {
              background-color: #071322;
              padding: 1rem;
              border-radius: 10px;
              margin-top: 0.75rem;
              border: 1px solid rgba(255,255,255,0.1);
              box-shadow: 0 12px 30px rgba(0,0,0,0.5);
            }
            .custom-navbar .nav-link {
              padding: 0.75rem 1rem !important;
              border-bottom: 1px solid rgba(255,255,255,0.06);
            }
            .custom-navbar .nav-link.active::after {
              display: none;
            }
            .custom-navbar .nav-link.active {
              color: #f57c00 !important;
              font-weight: 700;
              background-color: rgba(245, 124, 0, 0.1);
              border-radius: 6px;
            }
          }
        `}
      </style>
      <BsNavbar expand="lg" className="custom-navbar" expanded={expanded} onToggle={(isExp) => setExpanded(isExp)}>
        <Container fluid className="px-3 px-lg-5 align-items-center align-items-lg-start">
          
          {/* Brand Logo Tab */}
          <Link to="/" className="logo-tab" onClick={() => setExpanded(false)}>
            <img 
              src="/images/logos/logo-white-cropped.jpeg" 
              alt="Naveen Auto Components"
              style={{ height: '70px', objectFit: 'contain' }}
            />
          </Link>

          <BsNavbar.Toggle aria-controls="main-navbar-nav" />

          <BsNavbar.Collapse id="main-navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link as={NavLink} to="/" end onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>About Us</Nav.Link>
              
              <NavDropdown 
                title="Services" 
                id="services-nav-dropdown"
                show={showServices}
                onMouseEnter={() => window.innerWidth >= 992 && setShowServices(true)}
                onMouseLeave={() => window.innerWidth >= 992 && setShowServices(false)}
                onClick={() => setShowServices(!showServices)}
              >
                <NavDropdown.Item as={NavLink} to="/services" end onClick={() => setExpanded(false)} className="fw-bold border-bottom border-secondary pb-2 mb-1">
                  All Capabilities
                </NavDropdown.Item>
                {servicesData.map((svc) => (
                  <NavDropdown.Item key={svc.slug} as={NavLink} to={`/services/${svc.slug}`} onClick={() => setExpanded(false)}>
                    {svc.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link as={NavLink} to="/facilities" onClick={() => setExpanded(false)}>Infrastructure</Nav.Link>
              <Nav.Link as={NavLink} to="/projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
              <Nav.Link as={NavLink} to="/clients" onClick={() => setExpanded(false)}>Clients</Nav.Link>
              <Nav.Link as={NavLink} to="/blog" onClick={() => setExpanded(false)}>News & Events</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
            </Nav>
          </BsNavbar.Collapse>

        </Container>
      </BsNavbar>
    </>
  );
};

