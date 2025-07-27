import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-950 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,var(--tw-gradient-stops))] from-algae-600/10 via-transparent to-transparent"></div>
        <div className="absolute right-0 inset-y-0 w-1/2 bg-[linear-gradient(30deg,var(--tw-gradient-stops))] from-transparent via-teal-600/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-algae-500 to-teal-500 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-ocean-200 bg-clip-text text-transparent">
                AlgaEarth
              </span>
            </div>
            <p className="text-ocean-100 text-lg leading-relaxed">
              Revolutionizing packaging with sustainable, algae-based solutions that protect both products and our planet.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/company/algaearth"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Follow us on LinkedIn"
              >
                <div className="w-12 h-12 rounded-lg bg-ocean-800/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-algae-600/20 group-hover:shadow-lg group-hover:shadow-algae-600/10">
                  <svg className="w-6 h-6 text-ocean-100 transition-colors duration-300 group-hover:text-algae-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </a>
              <a
                href="mailto:contact@algaearth.com"
                className="group"
                aria-label="Send us an email"
              >
                <div className="w-12 h-12 rounded-lg bg-ocean-800/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-algae-600/20 group-hover:shadow-lg group-hover:shadow-algae-600/10">
                  <svg className="w-6 h-6 text-ocean-100 transition-colors duration-300 group-hover:text-algae-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#products" className="text-ocean-100 hover:text-algae-300 transition-colors">
                    Food Packaging
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-ocean-100 hover:text-algae-300 transition-colors">
                    Retail Solutions
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-ocean-100 hover:text-algae-300 transition-colors">
                    Industrial Use
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-ocean-100 hover:text-algae-300 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-ocean-100 hover:text-algae-300 transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-ocean-100 hover:text-algae-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-ocean-100">
                <a href="mailto:contact@algaearth.com" className="hover:text-algae-300 transition-colors">
                  contact@algaearth.com
                </a>
              </p>
              <p className="text-ocean-100">
                San Francisco, CA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-ocean-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-ocean-100 text-sm">
              &copy; {new Date().getFullYear()} AlgaEarth. All rights reserved.
            </p>
            <div className="text-sm text-ocean-100">
              Made with 🌿 for a sustainable future
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 