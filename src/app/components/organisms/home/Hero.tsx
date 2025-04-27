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
      className="bg-hero-pattern pt-28 pb-20 md:pt-36 md:pb-28"
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
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-8 text-gray-900 font-display"
              variants={item}
            >
              Unite Pet Care in <span className="text-gradient bg-cta-gradient inline-block">One Platform</span>
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
                className="bg-cta-gradient hover:opacity-90 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 shadow-button hover:shadow-button-hover text-center"
              >
                Explore Features
              </a>
              <a
                href="#cta"
                className="bg-white border border-gray-200 hover:border-primary text-gray-800 hover:text-primary px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md text-center"
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
              <div className="absolute -top-12 -left-10 w-32 h-32 bg-gradient-to-br from-primary-light/20 to-accent-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-accent-blue/20 to-accent-blue/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 bg-accent-blue/20 rounded-full blur-sm"></div>
              <div className="absolute top-1/4 right-0 w-6 h-6 bg-accent-blue/20 rounded-full blur-sm"></div>

              {/* Phone mockup with enhanced styling */}
              <div className="relative z-10">
                <div className="relative mx-auto">
                  {/* Phone mockup with shadow and border */}
                  <div className="relative z-10 bg-white rounded-4xl shadow-app border border-gray-100 p-4 mx-auto w-72 md:w-80 backdrop-blur-sm">
                    {/* Phone screen */}
                    <div className="rounded-3xl overflow-hidden bg-white">
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
                      <div className="p-4 bg-card-gradient">
                        {/* App header */}
                        <div className="flex justify-between items-center mb-5">
                          <div className="text-sm font-bold text-primary">AnimalCare</div>
                          <div className="w-8 h-8 rounded-full bg-cta-gradient"></div>
                        </div>

                        {/* App content */}
                        <div className="space-y-4">
                          <div className="h-24 bg-feature-tracking rounded-xl p-4 shadow-card">
                            <div className="w-1/2 h-3 bg-primary-light/30 rounded-full mb-2.5"></div>
                            <div className="w-3/4 h-3 bg-primary-light/20 rounded-full mb-2.5"></div>
                            <div className="w-2/5 h-3 bg-primary-light/20 rounded-full"></div>
                          </div>
                          <div className="flex space-x-3">
                            <div className="h-14 w-1/3 bg-feature-healthcare rounded-xl shadow-card flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-icon-healthcare/30"></div>
                            </div>
                            <div className="h-14 w-1/3 bg-feature-shelter rounded-xl shadow-card flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-icon-shelter/30"></div>
                            </div>
                            <div className="h-14 w-1/3 bg-feature-telemedicine rounded-xl shadow-card flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-icon-telemedicine/30"></div>
                            </div>
                          </div>
                          <div className="h-28 bg-card-gradient rounded-xl shadow-card p-4">
                            <div className="w-1/3 h-3 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="flex space-x-2 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-feature-shelter"></div>
                              <div className="flex-1 space-y-1.5 pt-1">
                                <div className="w-3/4 h-2 bg-gray-100 rounded-full"></div>
                                <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <div className="w-10 h-10 rounded-lg bg-feature-tracking"></div>
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