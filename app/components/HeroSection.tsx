import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20">
      {/* Semi-transparent shape on the right side for added depth */}
      <div className="absolute top-0 right-0 h-full w-1/3 md:w-1/2 bg-gradient-to-l from-ocean-900/90 to-transparent z-0"></div>
      
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Sustainable Algae Packaging"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        {/* Left-to-right gradient overlay that's stronger on the right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/30 via-teal-900/40 to-ocean-900/70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="flex justify-center md:justify-end">
          <div className="w-full md:w-3/5 lg:w-1/2 backdrop-blur-[2px] p-6 sm:p-8 md:p-12 rounded-2xl bg-ocean-900/10">
            <div className="inline-block px-3 sm:px-4 py-1 bg-algae-500/30 backdrop-blur-sm rounded-full text-algae-200 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fade-in">
              Sustainable Packaging Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up text-white">
              Packaging the Future, <span className="text-algae-300">Naturally</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-ocean-100 leading-relaxed animate-slide-up delay-100">
              Say goodbye to plastic. AlgaEarth creates biodegradable, compostable packaging made from algae and other regenerative materials — safe for people, safe for the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
              <button className="bg-gradient-to-r from-algae-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-700 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-algae-600/20 w-full sm:w-auto">
                Explore Products
              </button>
              <button className="border-2 border-teal-300 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-teal-300/10 transition-all duration-700 w-full sm:w-auto">
                Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-ocean-900 to-transparent"></div>
    </section>
  );
} 