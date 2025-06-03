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
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" }
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
              <span className="text-white text-base sm:text-lg font-bold">A</span>
            </div>
            <span>AlgaEarth</span>
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
            
            <button className="bg-gradient-to-r from-algae-600 to-teal-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-algae-600/20 hover:from-algae-500 hover:to-teal-500 text-sm font-medium">
              Get Started
            </button>
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
            <button className="bg-gradient-to-r from-algae-600 to-teal-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-algae-600/20 hover:from-algae-500 hover:to-teal-500 text-sm font-medium mt-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 