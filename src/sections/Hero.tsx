// src/sections/Hero.tsx
export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-800">
              Unite Pet Care in <span className="text-orange-400 block">One Platform</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-lg">
              Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#features"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Explore Features
              </a>
              <a
                href="#cta"
                className="bg-white border border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-500 px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Join Now
              </a>
            </div>
          </div>
          <div className="md:w-5/12" data-aos="fade-up" data-aos-delay="200">
            <div className="relative">
              {/* Mobile device frame */}
              <div className="flex justify-center items-center">
                <div className="relative mx-auto">
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-100 rounded-full opacity-70"></div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-orange-200 rounded-full opacity-70"></div>
                  
                  {/* Phone mockup with shadow and border */}
                  <div className="relative z-10 bg-white rounded-3xl shadow-xl border border-gray-200 p-3 mx-auto w-64 md:w-72">
                    {/* Phone screen */}
                    <div className="rounded-2xl overflow-hidden bg-white">
                      {/* Status bar */}
                      <div className="bg-gray-100 h-6 w-full flex justify-between items-center px-4">
                        <div className="text-xs">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="p-4">
                        {/* App header */}
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-xs font-bold text-orange-500">AnimalCare</div>
                          <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                        </div>
                        
                        {/* App content */}
                        <div className="space-y-3">
                          <div className="h-20 bg-orange-50 rounded-lg p-3">
                            <div className="w-1/2 h-3 bg-orange-200 rounded mb-2"></div>
                            <div className="w-3/4 h-3 bg-orange-100 rounded mb-2"></div>
                            <div className="w-1/3 h-3 bg-orange-100 rounded"></div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="h-12 w-1/3 bg-blue-50 rounded-lg"></div>
                            <div className="h-12 w-1/3 bg-green-50 rounded-lg"></div>
                            <div className="h-12 w-1/3 bg-orange-50 rounded-lg"></div>
                          </div>
                          <div className="h-24 bg-gray-50 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}