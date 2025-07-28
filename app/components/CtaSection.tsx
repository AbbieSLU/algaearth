import Link from 'next/link';

export default function CtaSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-ocean-900 via-teal-900 to-ocean-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1906440/pexels-photo-1906440.jpeg')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="reveal-on-scroll">
          <div className="inline-block px-3 py-1.5 sm:px-3 sm:py-1 bg-algae-500/20 backdrop-blur-sm rounded-md text-algae-200 text-xs sm:text-sm font-semibold mb-3">
            Get Started
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 px-4">
            Ready to Make the Switch?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto text-ocean-100 px-4">
            Join leading brands in creating a sustainable future with our innovative algae-based packaging solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-gradient-to-r from-algae-600 to-teal-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Sales
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto border-2 border-teal-300 px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-teal-300/10 transition-all duration-700"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 