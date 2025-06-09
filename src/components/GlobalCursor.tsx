
import React, { useEffect } from 'react';

const GlobalCursor = () => {
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const cursor = document.querySelector('body::before') as HTMLElement;
      const cursorDot = document.querySelector('body::after') as HTMLElement;
      
      // Update CSS custom properties for cursor position
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursor(e);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, .cursor-hover')) {
        document.body.classList.add('cursor-hover-active');
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, .cursor-hover')) {
        document.body.classList.remove('cursor-hover-active');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return null;
};

export default GlobalCursor;
