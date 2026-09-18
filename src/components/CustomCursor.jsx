import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const animFrameRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track interactive hover elements
    const handleElementHoverCheck = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, input, textarea, select, label, [role="button"], .btn, .card, .interactive-card, .service-card, .img-zoom-wrapper, .cursor-pointer, .nav-link, .social-icon-animated, .social-icon-topbar'
      );

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHoverCheck, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    // Smooth Lerp Animation Loop
    const animate = () => {
      const targetX = posRef.current.x;
      const targetY = posRef.current.y;

      // Immediate position for inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // Smooth interpolation for outer trailing ring (lerp factor 0.18)
      ringPosRef.current.x += (targetX - ringPosRef.current.x) * 0.18;
      ringPosRef.current.y += (targetY - ringPosRef.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0)`;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHoverCheck);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Inner Precision Glow Dot */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isVisible ? 'is-visible' : ''} ${isHovered ? 'is-hovered' : ''} ${isClicked ? 'is-clicked' : ''}`}
        aria-hidden="true"
      />

      {/* Outer Fluid Trailing Ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isVisible ? 'is-visible' : ''} ${isHovered ? 'is-hovered' : ''} ${isClicked ? 'is-clicked' : ''}`}
        aria-hidden="true"
      />
    </>
  );
};
