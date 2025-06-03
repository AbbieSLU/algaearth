export default function ProcessSection() {
  return (
    <section id="process" className="py-12 sm:py-16 lg:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 reveal-on-scroll">
          <div className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-md text-xs sm:text-sm font-semibold mb-3">
            Our Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 mb-3 sm:mb-4">
            How We Transform Algae Into Packaging
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
            From cultivation to compostability, every step is designed with sustainability in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
          {[
            {
              icon: "🌿",
              title: "Algae Cultivation",
              description: "We cultivate specific strains of algae in our sustainable bioreactors, optimizing growth conditions for maximum yield.",
              color: "bg-ocean-50"
            },
            {
              icon: "⚗️",
              title: "Sustainable Processing",
              description: "Using clean energy, we extract and process the algae into our proprietary biomaterial using zero-waste methods.",
              color: "bg-ocean-50"
            },
            {
              icon: "🏭",
              title: "Product Manufacturing",
              description: "Our advanced facilities transform the biomaterial into durable, customizable packaging solutions.",
              color: "bg-ocean-50"
            },
            {
              icon: "♻️",
              title: "Natural Decomposition",
              description: "After use, our packaging completely biodegrades, returning valuable nutrients to the earth.",
              color: "bg-ocean-50"
            }
          ].map((step, index) => (
            <div key={index} className="relative group reveal-on-scroll">
              <div className={`${step.color} p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-105 hover:bg-gradient-to-br hover:from-ocean-50 hover:to-teal-50 border border-teal-100`}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-700">{step.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-ocean-800 mb-2 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-teal-200">
                    <div className="absolute right-0 top-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}
              </div>
              {/* Mobile and tablet connector lines */}
              {index < 3 && (
                <div className="lg:hidden absolute left-1/2 bottom-0 w-0.5 h-4 sm:h-6 bg-teal-200 transform translate-x-[-50%] translate-y-full">
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-teal-400 rounded-full transform translate-y-1/2 -translate-x-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 