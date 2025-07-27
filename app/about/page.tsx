'use client';

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-ocean-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3735245/pexels-photo-3735245.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Algae Research Lab"
            fill
            className="object-cover brightness-[0.4]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/90 via-teal-900/80 to-ocean-900/90"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean-900 to-transparent"></div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-algae-400 to-teal-400 opacity-20 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 12}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-4 py-2 bg-algae-500/20 backdrop-blur-sm rounded-full text-algae-200 text-sm font-semibold mb-6 animate-fade-in">
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Reimagining Packaging for a 
              <span className="text-algae-300"> Sustainable Future</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-ocean-100 leading-relaxed animate-slide-up delay-100 max-w-3xl mx-auto">
              From a small lab to a global movement—discover how AlgaEarth is transforming the way the world thinks about packaging, one algae cell at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
              <Link 
                href="#story"
                className="bg-gradient-to-r from-algae-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Our Journey
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-teal-300 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-300/10 transition-all duration-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="story" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-ocean-900 via-teal-900 to-ocean-900">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-on-scroll">
              <div className="inline-block px-4 py-2 bg-algae-500/20 backdrop-blur-sm rounded-lg text-algae-200 text-sm font-semibold mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Creating a World Without Waste
              </h2>
              <p className="text-lg text-ocean-100 mb-6 leading-relaxed">
                At AlgaEarth, we believe that packaging shouldn't outlive the products it protects. Our mission is to eliminate single-use plastic waste by creating packaging materials that are not just biodegradable, but actively beneficial to the environment.
              </p>
              <p className="text-lg text-ocean-100 mb-8 leading-relaxed">
                We envision a circular economy where every package becomes food for the earth, where manufacturing processes regenerate rather than deplete, and where businesses can grow sustainably without compromising our planet's future.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-ocean-800/50 backdrop-blur-sm rounded-lg shadow-lg border border-ocean-700/50">
                  <div className="text-3xl font-bold text-algae-300 mb-2">100%</div>
                  <div className="text-sm text-ocean-100">Biodegradable</div>
                </div>
                <div className="text-center p-4 bg-ocean-800/50 backdrop-blur-sm rounded-lg shadow-lg border border-ocean-700/50">
                  <div className="text-3xl font-bold text-algae-300 mb-2">0%</div>
                  <div className="text-sm text-ocean-100">Plastic Waste</div>
                </div>
              </div>
            </div>

            <div className="relative reveal-on-scroll">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
                  alt="Sustainable Laboratory"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/50 to-transparent"></div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-8 -right-8 bg-ocean-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl animate-bounce-slow border border-ocean-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-algae-500 rounded-full flex items-center justify-center text-white text-xl">
                    🌿
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-algae-300">Natural</div>
                    <div className="text-sm text-ocean-100">Materials</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-ocean-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl animate-bounce-slow delay-1000 border border-ocean-700/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-algae-500 rounded-full flex items-center justify-center text-white text-xl">
                    ⚡
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-algae-300">Clean</div>
                    <div className="text-sm text-ocean-100">Energy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-ocean-800 via-teal-900 to-ocean-800">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 lg:mb-16 reveal-on-scroll">
            <div className="inline-block px-4 py-2 bg-algae-500/20 backdrop-blur-sm rounded-lg text-algae-200 text-sm font-semibold mb-4">
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Principles That Guide Us
            </h2>
            <p className="text-lg text-ocean-100 max-w-3xl mx-auto">
              These core values shape every decision we make and every product we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Regenerative Innovation",
                description: "We don't just reduce harm—we actively restore and regenerate natural systems through our processes.",
                icon: "🌱",
                color: "from-algae-400 to-teal-500"
              },
              {
                title: "Radical Transparency",
                description: "Every ingredient, every process, every impact metric is openly shared with our community and partners.",
                icon: "🔍",
                color: "from-ocean-400 to-algae-500"
              },
              {
                title: "Collaborative Impact",
                description: "We believe the climate crisis requires unprecedented collaboration across industries and communities.",
                icon: "🤝",
                color: "from-teal-400 to-ocean-500"
              },
              {
                title: "Future-First Thinking",
                description: "Every decision is made with the next seven generations in mind, ensuring long-term planetary health.",
                icon: "🔮",
                color: "from-emerald-400 to-teal-500"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group relative reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative p-8 bg-ocean-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-ocean-700/50">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-110 transform transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-ocean-100 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.color} opacity-10 transform rotate-45 translate-x-10 -translate-y-10`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 