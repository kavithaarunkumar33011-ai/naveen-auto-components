import React, { lazy, Suspense, useEffect } from 'react';
import { createBrowserRouter, Outlet, ScrollRestoration, useLocation, Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { MainNavbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CustomCursor } from './components/CustomCursor';

// Lazy-loaded page components for fast initial load & Web Vitals optimization
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const ServicesHub = lazy(() => import('./pages/ServicesHub').then(m => ({ default: m.ServicesHub })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(m => ({ default: m.ServiceDetail })));
const Facilities = lazy(() => import('./pages/Facilities').then(m => ({ default: m.Facilities })));
const Projects = lazy(() => import('./pages/Projects').then(m => ({ default: m.Projects })));
const Clients = lazy(() => import('./pages/Clients').then(m => ({ default: m.Clients })));
const BlogHub = lazy(() => import('./pages/BlogHub').then(m => ({ default: m.BlogHub })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const VisionMission = lazy(() => import('./pages/VisionMission').then(m => ({ default: m.VisionMission })));
const Certifications = lazy(() => import('./pages/Certifications').then(m => ({ default: m.Certifications })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Loading fallback component
const PageLoader = () => (
  <div className="d-flex flex-column align-items-center justify-content-center min-vh-50 py-5 my-5">
    <Spinner animation="border" variant="warning" role="status" style={{ width: '3rem', height: '3rem' }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <p className="mt-3 text-muted font-monospace small">Loading Naveen Auto Components...</p>
  </div>
);

// Main Site Layout Wrapper
const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        offset: 50,
      });
      window.AOS.refresh();
    }
  }, [location.pathname]);

  return (
    <div className="site-wrapper d-flex flex-column min-vh-100 bg-white">
      <CustomCursor />
      <ScrollRestoration />
      <MainNavbar />
      <main className="flex-grow-1">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "vision-mission", element: <Navigate to="/about" replace /> },
      { path: "certifications", element: <Navigate to="/about" replace /> },
      { path: "services", element: <ServicesHub /> },
      { path: "services/:slug", element: <ServiceDetail /> },
      { path: "facilities", element: <Facilities /> },
      { path: "projects", element: <Projects /> },
      { path: "clients", element: <Clients /> },
      { path: "blog", element: <BlogHub /> },
      { path: "blog/:slug", element: <BlogPost /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);
