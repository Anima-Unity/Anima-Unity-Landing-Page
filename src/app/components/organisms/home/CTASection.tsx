import React from 'react';
import Image from 'next/image'

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden"
        >
          {/* Phone mockup */}
          <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block">
            <div className="h-full w-full relative">
              {/* Phone frame */}
              <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 h-auto max-h-[90%] w-60 bg-gray-900 rounded-3xl p-3 shadow-xl">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-xl z-10"></div>
                
                {/* Phone screen */}
                <div className="w-full h-full bg-gray-100 rounded-2xl overflow-hidden relative">
                  {/* App screenshot */}
                  <div className="relative w-full aspect-[240/500]">
  <Image
    src="/api/placeholder/240/500"
    alt="Placeholder"
    fill
    className="object-cover rounded-2xl shadow-xl"
  />
</div>
                  
                  {/* App UI elements overlay */}
                  <div className="absolute top-0 left-0 w-full h-14 bg-teal-500 flex items-center px-4">
                    <div className="text-white font-semibold">Anima Unity</div>
                    <div className="ml-auto flex space-x-2">
                      <div className="w-4 h-4 rounded-full bg-white opacity-70"></div>
                      <div className="w-4 h-4 rounded-full bg-white opacity-70"></div>
                    </div>
                  </div>
                  
                  {/* App bottom navigation */}
                  <div className="absolute bottom-0 left-0 w-full h-14 bg-white flex justify-around items-center px-4">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-sm bg-teal-500"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-sm bg-teal-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* Phone buttons */}
                <div className="absolute -left-1 top-24 h-12 w-1 bg-gray-800 rounded-l-lg"></div>
                <div className="absolute -right-1 top-20 h-8 w-1 bg-gray-800 rounded-r-lg"></div>
                <div className="absolute -right-1 top-32 h-12 w-1 bg-gray-800 rounded-r-lg"></div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Join Our Pet Care Community
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                Connect with veterinarians, shelters, and fellow pet lovers in one unified platform. Experience seamless pet care management.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Centralized pet records</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Verified vet network</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Real-time location tracking</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Join Now
                </button>
              </div>
              
              <p className="text-gray-500 text-sm mt-3">
                Join 10,000+ pet owners already using Anima Unity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}