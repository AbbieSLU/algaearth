export default function ImpactSection() {
  const stats = [
    {
      icon: "🌱",
      title: "100% Compostable",
      description: "Breaks down fully in soil or compost — leaving no microplastics behind."
    },
    {
      icon: "💧",
      title: "50% Less Water",
      description: "Compared to the production of traditional paper or bioplastic packaging."
    },
    {
      icon: "🌎",
      title: "Regenerative Sourcing",
      description: "Made from fast-growing algae and agricultural byproducts — never trees or fossil fuels."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-ocean-900 to-teal-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 grid grid-cols-2 -skew-y-12 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-24 sm:h-32 border-t border-white/20" />
            ))}
          </div>

          {/* Content */}
          <div className="relative">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16 reveal-on-scroll">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-lg text-teal-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Environmental Impact
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                Built to Disappear — Not to Pollute
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-ocean-100 max-w-3xl mx-auto leading-relaxed px-4">
                Every AlgaEarth product is designed to return to the earth without harming it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative reveal-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card */}
                  <div className="relative z-10 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    {/* Icon */}
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transform transition-transform duration-300">
                      {stat.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-semibold text-algae-200 mb-2 sm:mb-3">
                      {stat.title}
                    </h3>
                    <p className="text-sm sm:text-base text-ocean-100 leading-relaxed">
                      {stat.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-algae-400/20 rounded-lg sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -inset-px bg-gradient-to-r from-teal-400/50 to-algae-400/50 rounded-lg sm:rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center reveal-on-scroll px-4">
              <p className="text-sm sm:text-base lg:text-lg text-ocean-100 mb-6 sm:mb-8 leading-relaxed">
                We prioritize local sourcing, low-energy processing, and circular design principles to reduce carbon emissions and plastic dependency across the supply chain.
              </p>
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 