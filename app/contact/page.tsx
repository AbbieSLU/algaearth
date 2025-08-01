'use client';

import { useState } from 'react';
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-ocean-900 via-teal-900 to-ocean-900">
      <Navbar />

      {/* Creative Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-900 via-teal-900 to-ocean-900 opacity-90"></div>
          
          {/* Animated circles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-algae-500/20"
                  style={{
                    width: `${600 + i * 200}px`,
                    height: `${600 + i * 200}px`,
                    top: `-${300 + i * 100}px`,
                    left: `-${300 + i * 100}px`,
                    animation: `spin ${20 + i * 5}s linear infinite ${i * 2}s`,
                    animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-algae-500/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  transform: `scale(${1 + Math.random()})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column - Text */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
                  Let's Start a
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-algae-400 to-teal-400 animate-gradient">
                    Conversation
                  </span>
                </h1>
                <p className="text-xl text-ocean-100 max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in delay-100">
                  Have questions about our sustainable packaging solutions? We'd love to hear from you.
                </p>
                <div className="space-y-6 animate-fade-in delay-200">
                  <div className="flex items-center space-x-4 text-ocean-100">
                    <div className="w-12 h-12 bg-algae-500/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-algae-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="mailto:contact@algaearth.com" className="hover:text-algae-400 transition-colors">
                      contact@algaearth.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4 text-ocean-100">
                    <div className="w-12 h-12 bg-algae-500/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-algae-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-4 text-ocean-100">
                    <div className="w-12 h-12 bg-algae-500/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-algae-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>Response time: within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="relative animate-fade-in delay-300">
                <div className="relative bg-ocean-800/30 rounded-3xl p-8 backdrop-blur-sm border border-ocean-700/30">
                  {/* Animated background */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-algae-600/5 to-teal-600/5"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-algae-500/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleSubmit} className="relative space-y-6">
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-ocean-100 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-ocean-900/50 border border-ocean-700/50 rounded-xl text-white placeholder-ocean-400 focus:outline-none focus:ring-2 focus:ring-algae-500/50 focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-ocean-100 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-ocean-900/50 border border-ocean-700/50 rounded-xl text-white placeholder-ocean-400 focus:outline-none focus:ring-2 focus:ring-algae-500/50 focus:border-transparent transition-all duration-300"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-ocean-100 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-3 bg-ocean-900/50 border border-ocean-700/50 rounded-xl text-white placeholder-ocean-400 focus:outline-none focus:ring-2 focus:ring-algae-500/50 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="How can we help you?"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-algae-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-algae-600/20 relative group overflow-hidden ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Send Message</span>
                        )}
                      </span>
                      {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-algae-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus !== 'idle' && (
                      <div className={`mt-6 p-4 rounded-xl ${
                        submitStatus === 'success' 
                          ? 'bg-green-900/30 border border-green-700/50 text-green-300' 
                          : 'bg-red-900/30 border border-red-700/50 text-red-300'
                      }`}>
                        <div className="flex items-center space-x-3">
                          {submitStatus === 'success' ? (
                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                          )}
                          <p className="text-sm">{statusMessage}</p>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 