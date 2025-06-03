import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-ocean-950 via-teal-950 to-ocean-950 text-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4">
            <div className="flex items-center space-x-2 text-2xl font-bold text-white mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-algae-500 to-teal-500 flex items-center justify-center">
                <span className="text-white text-lg font-bold">A</span>
              </div>
              <span>AlgaEarth</span>
            </div>
            <p className="text-ocean-200 mb-6 max-w-md">
              Pioneering sustainable packaging solutions through innovative algae technology. Building a future where packaging returns to the earth, not pollutes it.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "twitter", href: "#" },
                { icon: "facebook", href: "#" },
                { icon: "instagram", href: "#" },
                { icon: "linkedin", href: "#" }
              ].map((social) => (
                <Link 
                  key={social.icon} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-ocean-800 hover:bg-algae-600 flex items-center justify-center transition-colors duration-300"
                >
                  <span className="sr-only">{social.icon}</span>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-ocean-200 hover:text-algae-300 transition-colors">Food Packaging</Link></li>
              <li><Link href="#" className="text-ocean-200 hover:text-algae-300 transition-colors">Retail Solutions</Link></li>
              <li><Link href="#" className="text-ocean-200 hover:text-algae-300 transition-colors">Industrial Packaging</Link></li>
              <li><Link href="#" className="text-ocean-200 hover:text-algae-300 transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-ocean-200 hover:text-algae-300 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-ocean-200 hover:text-algae-300 transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-ocean-200 hover:text-algae-300 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-ocean-200 hover:text-algae-300 transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-ocean-200 mb-4">Subscribe to our newsletter for the latest updates on sustainable packaging innovations.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-ocean-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-algae-400"
              />
              <button className="bg-algae-600 hover:bg-algae-500 text-white px-4 py-3 rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-ocean-800 pt-8 mt-8 text-center text-ocean-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 AlgaEarth. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-algae-300 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-algae-300 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-algae-300 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 