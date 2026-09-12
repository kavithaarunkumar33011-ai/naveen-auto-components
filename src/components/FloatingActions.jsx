import React, { useState, useEffect } from 'react';
import { companyData } from '../data/companyData';

export const FloatingActions = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', checkScrollTop, { passive: true });
    checkScrollTop();
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const rawPhone = companyData.contact?.mobile ? companyData.contact.mobile.replace(/[^0-9]/g, '') : '919790942501';
  const displayPhone = companyData.contact?.mobile || '+91-9790942501';

  return (
    <>
      <style>
        {`
          .floating-actions-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            z-index: 1050;
            pointer-events: none;
          }
          .floating-btn {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            pointer-events: auto;
            transition: all 0.3s ease;
            font-size: 1.5rem;
            border: none;
            cursor: pointer;
          }
          .floating-btn:hover {
            transform: translateY(-5px);
            color: #fff;
            box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          }
          .btn-whatsapp {
            background-color: #25d366;
          }
          .btn-whatsapp:hover {
            background-color: #128c7e;
          }
          .btn-phone {
            background-color: #0d6efd;
          }
          .btn-phone:hover {
            background-color: #0b5ed7;
          }
          .btn-scroll-top {
            background-color: #f57c00;
            opacity: 0;
            transform: scale(0.8);
            visibility: hidden;
            pointer-events: none;
            transition: all 0.3s ease;
          }
          .btn-scroll-top.visible {
            opacity: 1;
            transform: scale(1);
            visibility: visible;
            pointer-events: auto;
          }
          .btn-scroll-top:hover {
            background-color: #e67300;
            transform: translateY(-5px);
          }
          
          @media (max-width: 768px) {
            .floating-actions-container {
              bottom: 20px;
              right: 20px;
              gap: 10px;
            }
            .floating-btn {
              width: 45px;
              height: 45px;
              font-size: 1.2rem;
            }
          }
        `}
      </style>

      <div className="floating-actions-container">
        {/* Telephone Button */}
        <a href={`tel:${displayPhone}`} className="floating-btn btn-phone" title="Call Us" aria-label="Call Us">
          <i className="bi bi-telephone-fill"></i>
        </a>
        
        {/* WhatsApp Button */}
        <a href={`https://wa.me/${rawPhone}`} target="_blank" rel="noopener noreferrer" className="floating-btn btn-whatsapp" title="WhatsApp Us" aria-label="WhatsApp Us">
          <i className="bi bi-whatsapp"></i>
        </a>
        
        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop} 
          className={`floating-btn btn-scroll-top ${showTopBtn ? 'visible' : ''}`} 
          title="Scroll to Top" 
          aria-label="Scroll to Top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      </div>
    </>
  );
};