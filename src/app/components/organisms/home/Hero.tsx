// src/sections/Hero.tsx
import { motion } from 'framer-motion';

export default function Hero() {
  // Framer Motion variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      id="home" 
      className="bg-white pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="md:flex items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-16 md:mb-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-8 text-gray-900"
              variants={item}
            >
              Unite Pet Care in <span className="text-gradient bg-gradient-to-r from-teal-500 to-blue-600 inline-block">One Platform</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed"
              variants={item}
            >
              Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              variants={item}
            >
              <a
                href="#features"
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:opacity-90 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-blue-200/50 text-center"
              >
                Explore Features
              </a>
              <a
                href="#cta"
                className="bg-white border border-gray-200 hover:border-blue-400 text-gray-800 hover:text-blue-600 px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md text-center"
              >
                Join Now
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-5/12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-10 w-32 h-32 bg-gradient-to-br from-teal-300/20 to-blue-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-blue-400/20 to-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 bg-blue-500/20 rounded-full blur-sm"></div>
              <div className="absolute top-1/4 right-0 w-6 h-6 bg-blue-500/20 rounded-full blur-sm"></div>

              {/* Phone mockup with enhanced styling */}
              <div className="relative z-10">
                <div className="relative mx-auto">
                  {/* Phone mockup with shadow and border */}
                  <div className="relative z-10 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-4 mx-auto w-72 md:w-80 backdrop-blur-sm">
                    {/* Phone screen */}
                    <div className="rounded-2xl overflow-hidden bg-white">
                      {/* Status bar */}
                      <div className="bg-gray-100 h-7 w-full flex justify-between items-center px-4">
                        <div className="text-xs font-medium">9:41</div>
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                        </div>
                      </div>

                      {/* App content */}
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
                        {/* App header */}
                        <div className="flex justify-between items-center mb-5">
                          <div className="text-sm font-bold text-blue-600">AnimalCare</div>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-600"></div>
                        </div>

                        {/* App content */}
                        <div className="space-y-4">
                          <div className="h-24 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-4 shadow-sm">
                            <div className="w-1/2 h-3 bg-blue-200 rounded-full mb-2.5"></div>
                            <div className="w-3/4 h-3 bg-blue-100 rounded-full mb-2.5"></div>
                            <div className="w-2/5 h-3 bg-blue-100 rounded-full"></div>
                          </div>
                          <div className="flex space-x-3">
                            <div className="h-14 w-1/3 bg-teal-50 rounded-xl shadow-sm flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-teal-200"></div>
                            </div>
                            <div className="h-14 w-1/3 bg-blue-50 rounded-xl shadow-sm flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-blue-200"></div>
                            </div>
                            <div className="h-14 w-1/3 bg-blue-50 rounded-xl shadow-sm flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-blue-200"></div>
                            </div>
                          </div>
                          <div className="h-28 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm p-4">
                            <div className="w-1/3 h-3 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="flex space-x-2 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-blue-100"></div>
                              <div className="flex-1 space-y-1.5 pt-1">
                                <div className="w-3/4 h-2 bg-gray-100 rounded-full"></div>
                                <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <div className="w-10 h-10 rounded-lg bg-teal-100"></div>
                              <div className="flex-1 space-y-1.5 pt-1">
                                <div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
                                <div className="w-1/3 h-2 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Home indicator */}
                    <div className="mt-3 flex justify-center">
                      <div className="w-1/3 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}