"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "EcoFlex Containers",
      description: "Revolutionary flexible packaging that adapts to your product's shape while maintaining strength and durability.",
      features: ["Fully biodegradable", "Custom shapes", "Moisture resistant"],
      image: "/products/eco-flex.webp",
      color: "from-teal-400 to-algae-500"
    },
    {
      name: "AquaShield Wraps",
      description: "Water-resistant, breathable wrapping solutions that keep products fresh while protecting the environment.",
      features: ["Breathable material", "Water resistant", "Extended shelf life"],
      image: "/products/aqua-shield.webp",
      color: "from-ocean-400 to-teal-500"
    },
    {
      name: "BioForm Trays",
      description: "Sturdy, heat-resistant trays perfect for food service and retail packaging needs.",
      features: ["Heat resistant", "Stackable design", "Multiple sizes"],
      image: "/products/bio-form.webp",
      color: "from-algae-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-ocean-50 to-algae-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block px-4 py-2 bg-ocean-500/10 backdrop-blur-sm rounded-lg text-ocean-700 text-sm font-semibold mb-5">
            Our Solutions
          </div>
          <h2 className="text-5xl font-bold text-ocean-900 mb-6">
            Innovative Packaging Solutions
          </h2>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto leading-relaxed">
            Discover our range of sustainable packaging solutions designed to protect both your products and our planet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Product Showcase */}
          <div className="relative h-[600px] reveal-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-200/30 to-algae-200/30 rounded-3xl backdrop-blur-sm"></div>
            
            {/* Product Image Container */}
            <div className="relative h-full w-full">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-700 transform
                    ${activeProduct === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                  <div className="relative w-full h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-20 rounded-2xl blur-2xl ${product.color}`}></div>
                    <Image
                      src="https://images.pexels.com/photos/10763771/pexels-photo-10763771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt={product.name}
                      fill
                      className="object-fill p-0"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${products[activeProduct].color} opacity-20
                    animate-float`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Product Selection */}
          <div className="space-y-6 reveal-on-scroll">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]
                  ${activeProduct === index ? 'scale-[1.02]' : ''}`}
                onClick={() => setActiveProduct(index)}
              >
                <div className={`relative p-8 rounded-2xl backdrop-blur-md transition-all duration-500
                  ${activeProduct === index 
                    ? 'bg-gradient-to-r shadow-lg ' + product.color + ' bg-opacity-20'
                    : 'bg-white/60 hover:bg-white/80'}`}>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300
                      ${activeProduct === index ? 'text-white' : 'text-ocean-800 group-hover:text-ocean-600'}`}>
                      {product.name}
                    </h3>
                    <p className={`mb-4 transition-colors duration-300
                      ${activeProduct === index ? 'text-white/90' : 'text-ocean-600'}`}>
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-3">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
                            ${activeProduct === index 
                              ? 'bg-white/20 text-white' 
                              : 'bg-ocean-100 text-ocean-600'}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div className={`absolute inset-0 bg-gradient-to-r blur-xl opacity-20 ${product.color}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 