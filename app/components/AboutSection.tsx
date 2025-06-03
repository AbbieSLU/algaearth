import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-neutral-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="reveal-on-scroll order-2 md:order-1 px-4 sm:px-6 lg:px-8">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-md text-sm font-semibold mb-3">
              Our Mission
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4 sm:mb-6">
              A Smarter Way to Package
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 mb-4 sm:mb-6 leading-relaxed">
              AlgaEarth is on a mission to replace wasteful, petroleum-based packaging with bio-based alternatives that actually disappear. Our algae-based materials are renewable, non-toxic, and compostable — designed for circularity from day one.
            </p>
            <p className="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed">
              Born from a belief that sustainability should be functional, affordable, and beautiful, we partner with food producers, grocers, and eco-conscious brands to reduce single-use waste at the source.
            </p>
            <button className="w-full sm:w-auto bg-teal-600 text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-teal-700 transition-all duration-700 shadow-md hover:shadow-lg">
              Learn About Our Process
            </button>
          </div>
          <div className="relative order-1 md:order-2 mb-8 md:mb-0 px-4 sm:px-6 lg:px-8">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl reveal-on-scroll">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
                alt="Innovative Algae Technology"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-48 sm:w-64 h-auto sm:h-64 rounded-lg bg-ocean-50 p-4 sm:p-6 shadow-xl animate-fade-in delay-300">
              <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-algae-500 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 sm:w-6 h-5 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-ocean-800">Innovation</h3>
              </div>
              <p className="text-sm sm:text-base text-ocean-600">Patented bioprocessing technology converts algae into versatile packaging materials.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 