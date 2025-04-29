import React from 'react';

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 bg-feature-lightPink relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 paw-bg opacity-30"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div 
          className="bg-card-gradient rounded-2xl p-8 md:p-12 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden border border-gray-100"
        >
          {/* Coral accent in top corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary-coral/10 rounded-bl-full"></div>
          
          <div className="w-full relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-primary-gradient text-3xl md:text-4xl font-bold mb-4">
                Join the Movement for Pet Welfare
              </h2>
              
              <p className="text-accent-gray text-lg mb-8">
                Be part of our community empowering animals, shelters, and pet lovers worldwide.
                <span className="block mt-2 font-medium">Start with just your email.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-coral focus:border-transparent transition-all duration-200 text-accent-black"
              />
              
              <button
                type="submit"
                className="btn-primary px-8 py-4 rounded-xl font-semibold text-white button-shadow sm:whitespace-nowrap"
              >
                Support Animals Today
              </button>
            </div>
            
            <p className="text-accent-gray text-sm text-center">
              No spam. Just pure love for animals.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Inspiring Stories */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-coral-gradient rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h6a2 2 0 012 2v14a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-accent-black mb-3">Inspiring Stories Every Week</h3>
            <p className="text-accent-gray">Hear real stories from shelters, rescuers, and pet owners making a difference in their communities.</p>
          </div>

          {/* Tips for Better Pet Care */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-coral-gradient rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-accent-black mb-3">Tips for Better Pet Care</h3>
            <p className="text-accent-gray">Get expert advice and health tips to keep your pets happy, healthy, and thriving throughout their lives.</p>
          </div>

          {/* Join Animal Welfare Campaigns */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-2">
            <div className="w-14 h-14 bg-coral-gradient rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl text-accent-black mb-3">Join Animal Welfare Campaigns</h3>
            <p className="text-accent-gray">Stay updated and make a difference in your community by participating in local and global animal welfare initiatives.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-sm border border-gray-100">
            <span className="flex h-3 w-3 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-coral opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-coral"></span>
            </span>
            <p className="text-accent-gray font-medium">
              <span className="text-primary-coral font-bold">250+</span> animal lovers have joined our journey
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}