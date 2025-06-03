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
    <section className="py-20 bg-gradient-to-br from-ocean-900 to-teal-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 grid grid-cols-2 -skew-y-12 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-32 border-t border-white/20" />
            ))}
          </div>

          {/* Content */}
          <div className="relative">
            <div className="text-center mb-16 reveal-on-scroll">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-teal-300 text-sm font-semibold mb-4">
                Environmental Impact
              </div>
              <h2 className="text-4xl font-bold mb-6 max-w-2xl mx-auto">
                Built to Disappear — Not to Pollute
              </h2>
              <p className="text-xl text-ocean-100 max-w-3xl mx-auto leading-relaxed">
                Every AlgaEarth product is designed to return to the earth without harming it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative reveal-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card */}
                  <div className="relative z-10 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    {/* Icon */}
                    <div className="text-4xl mb-4 group-hover:scale-110 transform transition-transform duration-300">
                      {stat.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-algae-200 mb-3">
                      {stat.title}
                    </h3>
                    <p className="text-ocean-100 leading-relaxed">
                      {stat.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-algae-400/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -inset-px bg-gradient-to-r from-teal-400/50 to-algae-400/50 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
              <p className="text-lg text-ocean-100 mb-8 leading-relaxed">
                We prioritize local sourcing, low-energy processing, and circular design principles to reduce carbon emissions and plastic dependency across the supply chain.
              </p>
              <button className="bg-algae-600/90 hover:bg-algae-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-700 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Sustainability Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 