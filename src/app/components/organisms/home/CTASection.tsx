import React from 'react';

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-16 bg-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div 
          className="bg-newsletter-card rounded-xl p-8 md:p-12 shadow-card relative overflow-hidden border border-gray-100"
        >
          <div className="w-full relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-newsletter-text mb-4">
                Join the Movement for Pet Welfare
              </h2>
              
              <p className="text-newsletter-subtle text-base mb-6">
                Be part of our community empowering animals, shelters, and pet lovers worldwide. Start with just your email.
              </p>
            </div>

            <div className="mb-8">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-newsletter-text"
              />
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-button hover:shadow-button-hover w-full sm:w-auto mb-4"
              >
                Support Animals Today
              </button>
              
              <p className="text-newsletter-subtle text-xs text-center">
                No spam. Just pure love for animals.
              </p>
            </div>
          </div>
        </div>

<div className="mt-12 grid md:grid-cols-3 gap-8">
  {/* Inspiring Stories */}
  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h6a2 2 0 012 2v14a2 2 0 01-2 2z" />
      </svg>
    </div>
    <h3 className="font-semibold text-newsletter-text mb-2">Inspiring Stories Every Week</h3>
    <p className="text-newsletter-subtle text-sm">Hear real stories from shelters, rescuers, and pet owners..</p>
  </div>

  {/* Tips for Better Pet Care */}
  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4c-2.5 0-4.5 2-4.5 4.5S9.5 13 12 15.5 16.5 18 16.5 15.5 14.5 9 12 6.5 14.5 4 12 4z" />
      </svg>
    </div>
    <h3 className="font-semibold text-newsletter-text mb-2">Tips for Better Pet Care</h3>
    <p className="text-newsletter-subtle text-sm">Get expert advice and health tips to keep your pets happy.</p>
  </div>

  {/* Join Animal Welfare Campaigns */}
  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h3 className="font-semibold text-newsletter-text mb-2">Join Animal Welfare Campaigns</h3>
    <p className="text-newsletter-subtle text-sm">Stay updated and make a difference in your community.</p>
  </div>
</div>

        <div className="mt-8 text-center">
          <p className="text-newsletter-subtle text-sm">
            250+ animal lovers have joined our journey.
          </p>
        </div>
      </div>
    </section>
  );
}