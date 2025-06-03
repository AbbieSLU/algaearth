'use client';

import { useEffect } from 'react';

export default function AnimationObserver() {
  useEffect(() => {
    // Function to handle intersection observations
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Add the visible class when the element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    // Create an observer with appropriate options
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // use the viewport
      rootMargin: '0px',
      threshold: 0.15 // trigger when 15% of the element is visible
    });

    // Observe all elements with reveal-on-scroll class
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(element => {
      observer.observe(element);
    });

    // Add styles to the document
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      /* Base styles for elements before animation */
      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 1s ease, transform 1s ease;
      }
      
      /* Animated state when element becomes visible */
      .reveal-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Add delay for cascade effect */
      .reveal-on-scroll:nth-child(2) { transition-delay: 100ms; }
      .reveal-on-scroll:nth-child(3) { transition-delay: 200ms; }
      .reveal-on-scroll:nth-child(4) { transition-delay: 300ms; }
      .reveal-on-scroll:nth-child(5) { transition-delay: 400ms; }
      .reveal-on-scroll:nth-child(6) { transition-delay: 500ms; }
      
      /* Animation keyframes */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(30px); 
        }
        to { 
          opacity: 1;
          transform: translateY(0); 
        }
      }
      
      /* Animation utility classes */
      .animate-fade-in {
        animation: fadeIn 1.5s ease forwards;
      }
      
      .animate-slide-up {
        animation: slideUp 1s ease forwards;
      }
      
      .delay-100 {
        animation-delay: 100ms;
      }
      
      .delay-200 {
        animation-delay: 200ms;
      }
      
      .delay-300 {
        animation-delay: 300ms;
      }
    `;
    document.head.appendChild(styleElement);

    // Clean up
    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
      document.head.removeChild(styleElement);
    };
  }, []);

  // This component doesn't render anything
  return null;
} 