export default function CtaSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-ocean-900 via-teal-900 to-ocean-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1906440/pexels-photo-1906440.jpeg')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="reveal-on-scroll">
          <div className="inline-block px-3 py-1 bg-algae-500/20 backdrop-blur-sm rounded-md text-algae-200 text-sm font-semibold mb-3">
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Make the Switch?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-ocean-100">
            Join leading brands in creating a sustainable future with our innovative algae-based packaging solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-algae-600 to-teal-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-700 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Sales
            </button>
            <button className="border-2 border-teal-300 px-10 py-4 rounded-full text-lg font-semibold hover:bg-teal-300/10 transition-all duration-700">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 