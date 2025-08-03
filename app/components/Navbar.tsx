'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
  
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled ? 'py-2 sm:py-3 bg-gradient-to-r from-teal-900/95 via-ocean-900/95 to-teal-900/95 backdrop-blur-md shadow-xl' : 'py-4 sm:py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl sm:text-2xl font-bold text-white hover:text-algae-300 transition-colors duration-300 transform hover:scale-105"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-algae-500 to-teal-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Alga<span className="text-algae-400">E</span>arth</span>
          </Link>
          
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-teal-100 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 relative group text-sm font-medium"
                >
                  {link.label}
                  <span className="absolute -bottom-0 left-1/2 w-0 h-0.5 bg-algae-400 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </Link>
              ))}
            </div>
            
            <div className="h-8 mx-6 w-px bg-teal-700/50"></div>
            
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-algae-600 to-teal-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-algae-600/20 hover:from-algae-500 hover:to-teal-500 text-sm font-medium"
            >
              Get Started
            </Link>
          </div>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-teal-100 hover:text-white px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-r from-algae-600 to-teal-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-algae-600/20 hover:from-algae-500 hover:to-teal-500 text-sm font-medium mt-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 