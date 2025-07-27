'use client';

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function TeamPage() {
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
    <main className="min-h-screen bg-gradient-to-br from-ocean-900 via-teal-900 to-ocean-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/90 via-teal-900/80 to-ocean-900/90"></div>
          {/* Grid decoration */}
          <div className="absolute inset-0 grid grid-cols-6 gap-4 transform -skew-y-12 opacity-10">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="h-32 bg-gradient-to-br from-teal-400/20 to-algae-400/20 rounded-lg"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Our <span className="text-algae-400">Leadership</span>
            </h1>
            <p className="text-lg sm:text-xl text-ocean-100 max-w-3xl mx-auto">
              Passionate innovators dedicated to revolutionizing sustainable packaging
            </p>
          </div>

          {/* CEO Section */}
          <div className="max-w-6xl mx-auto mb-32 reveal-on-scroll">
            <div className="relative bg-gradient-to-br from-ocean-800/50 to-teal-900/50 rounded-3xl p-8 sm:p-12 overflow-hidden backdrop-blur-sm border border-ocean-700/30">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-algae-500/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl"></div>

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square w-full max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-algae-500/20 to-teal-500/20 rounded-3xl transform rotate-6"></div>
                  <Image
                    src="/abbie.jpg"
                    alt="Dr. Sarah Chen"
                    fill
                    className="object-cover rounded-3xl brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent rounded-3xl"></div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="inline-block px-4 py-2 bg-algae-500/10 rounded-full text-algae-300 text-sm font-semibold mb-6">
                    Founder & CEO
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Abigail Avila, Ph.D.</h2>
                  <p className="text-lg text-ocean-100 mb-8 leading-relaxed">
                    A purpose-led innovator with a passion for sustainable solutions, Dr. Avila combines her expertise in biotechnology and environmental science to lead AlgaEarth's mission of revolutionizing eco-friendly packaging. Her vision drives our commitment to creating a more sustainable future.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                    {["Biotechnology", "Sustainable Innovation", "Environmental Science"].map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-ocean-800/50 rounded-full text-ocean-100 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://linkedin.com/in/abigail-avila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-algae-400 hover:text-algae-300 transition-colors"
                  >
                    <span>Connect on LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                name: "Marcus Rodriguez",
                role: "Chief Technology Officer",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                bio: "Former Tesla engineer leading our bioprocessing technology and manufacturing innovation.",
                expertise: ["Bioprocessing", "Manufacturing", "R&D"]
              },
              {
                name: "Dr. Priya Patel",
                role: "Head of Research",
                image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
                bio: "PhD in Materials Science with breakthrough patents in biodegradable polymer development.",
                expertise: ["Materials Science", "Innovation", "Sustainability"]
              },
              {
                name: "James Wilson",
                role: "VP of Sustainability",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
                bio: "Environmental policy expert ensuring our processes meet the highest sustainability standards.",
                expertise: ["Environmental Policy", "Compliance", "Strategy"]
              }
            ].map((member, index) => (
              <div
                key={index}
                className="group relative reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-ocean-800/50 to-teal-900/50 rounded-2xl p-6 backdrop-blur-sm border border-ocean-700/30 overflow-hidden">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-algae-500/5 to-transparent rounded-full blur-2xl group-hover:opacity-75 transition-opacity duration-500"></div>

                  <div className="relative">
                    {/* Profile Image */}
                    <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-algae-500/10 to-teal-500/10 transform -rotate-6"></div>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="inline-block px-3 py-1 bg-algae-500/10 rounded-full text-algae-300 text-sm font-medium mb-3">
                        {member.role}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-ocean-100 mb-4">{member.bio}</p>
                      
                      {/* Expertise tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-ocean-800/50 rounded-full text-ocean-100 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-algae-400 hover:text-algae-300 transition-colors text-sm"
                      >
                        <span>View Profile</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-ocean-800 via-teal-900 to-ocean-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/30 via-teal-900/30 to-ocean-900/30"></div>
          {/* Decorative Elements */}
          <div className="absolute inset-0 grid grid-cols-8 gap-4 transform -skew-y-12 opacity-5">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="h-32 bg-gradient-to-br from-teal-400/20 to-algae-400/20 rounded-lg"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-ocean-100 mb-8">
              We're always looking for passionate individuals who want to make a difference in sustainable packaging innovation.
            </p>
            <a
              href="mailto:careers@algaearth.com"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-algae-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-algae-600/20 group"
            >
              <span>Join Our Team</span>
              <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 