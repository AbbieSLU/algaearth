"use client";

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-[spin_3s_linear_infinite]"/>
          <path d="M12 3C16.9706 3 21 7.02944 21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-[spin_3s_linear_infinite]" style={{ animationDirection: 'reverse' }}/>
          <path d="M12 16L12 8M12 8L15 11M12 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Fully Circular",
      description: "Our products complete the cycle - from nature, to use, and back to nature again. Every component is designed with sustainability in mind."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M12 9.5V3M12 3L14 5.5M12 3L10 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14.5V21M12 21L14 18.5M12 21L10 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="4" className="animate-pulse" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Heat Resistant",
      description: "Withstands temperatures up to 220°F, making it perfect for hot foods and liquids while maintaining structural integrity."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-[spin_3s_ease-in-out_infinite]"/>
          <path d="M12 8C12 8 10.5 10 10.5 12C10.5 13.1046 11.3954 14 12.5 14C13.6046 14 14.5 13.1046 14.5 12C14.5 10 13 8 13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-[bounce_2s_ease-in-out_infinite]"/>
        </svg>
      ),
      title: "Water Resistant",
      description: "Naturally hydrophobic properties ensure contents remain secure and protected, without requiring harmful chemical coatings."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-[spin_8s_linear_infinite]"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Lightweight",
      description: "30% lighter than traditional alternatives, significantly reducing transportation emissions and carbon footprint."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 11H13M11 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Transparent Options",
      description: "Available in clear and translucent varieties, offering perfect product visibility while maintaining eco-friendly properties."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-bounce"/>
          <circle cx="12" cy="12" r="2" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.1s' }}/>
          <circle cx="16" cy="16" r="2" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.2s' }}/>
        </svg>
      ),
      title: "Customizable",
      description: "Adaptable to various shapes, sizes, and colors. Our solutions can be tailored to match your brand identity perfectly."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-ocean-100 via-teal-100 to-algae-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block px-5 py-2 bg-algae-500/20 backdrop-blur-sm rounded-xl text-algae-700 text-sm font-semibold mb-5 shadow-md">
            Key Advantages
          </div>
          <h2 className="text-5xl font-bold text-ocean-900 mb-6 tracking-tight">
            Innovating for a Greener Tomorrow
          </h2>
          <p className="text-xl text-ocean-700/90 max-w-3xl mx-auto leading-relaxed">
            Discover how AlgaEarth's algae-based packaging solutions are setting new standards in sustainability and performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="reveal-on-scroll [perspective:1200px] h-[340px] group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform">
                {/* Front of Card */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                  <div className="h-full p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-teal-100/50 flex flex-col items-center justify-center group/card hover:shadow-xl transition-shadow duration-500">
                    {/* Icon Container with Gradient Background */}
                    <div className="relative mb-6 w-20 h-20">
                      <div className="absolute inset-0 bg-gradient-to-br from-algae-300 to-teal-400 rounded-full blur-2xl opacity-20 group-hover/card:opacity-30 transition-opacity"></div>
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-algae-400 to-teal-500 flex items-center justify-center text-white transform group-hover/card:scale-110 group-hover/card:rotate-[360deg] transition-all duration-1000 shadow-lg">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-ocean-800 text-center mb-3">
                      {feature.title}
                    </h3>
                    <div className="mt-auto text-ocean-600/80 text-center text-sm font-medium">
                      Hover to explore
                    </div>
                  </div>
                </div>
                
                {/* Back of Card */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="h-full p-8 bg-gradient-to-br from-algae-500/95 to-teal-600/95 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center justify-center">
                    <div className="flex-1 flex items-center">
                      <p className="text-base leading-relaxed text-center text-white/90">
                        {feature.description}
                      </p>
                    </div>
                    <button className="mt-6 px-5 py-2.5 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-all duration-300 text-white font-medium hover:scale-105 hover:shadow-lg text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 