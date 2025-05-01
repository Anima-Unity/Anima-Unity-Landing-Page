import { motion } from 'framer-motion';

export default function Hero() {
  // Framer Motion variants untuk animasi bertahap
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
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-8 text-accent-black font-display"
              variants={item}
            >
              Unite Pet Care in <span className="text-gradient bg-primary-gradient inline-block">One Platform</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-dark mb-10 max-w-xl leading-relaxed"
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
                className="btn-primary rounded-full text-white px-8 py-3 text-base font-medium text-center"
              >
                Explore Features
              </a>
              <a
                href="#cta"
                className="btn-secondary bg-white border border-gray-200 hover:border-primary-coral text-secondary-dark hover:text-primary-coral px-8 py-3 rounded-full text-base font-medium text-center"
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
              {/* Elemen dekoratif */}
              <div className="absolute -top-12 -left-10 w-32 h-32 bg-gradient-to-br from-primary-light/20 to-accent-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-accent-blue/20 to-accent-blue/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 bg-accent-blue/20 rounded-full blur-sm"></div>
              <div className="absolute top-1/4 right-0 w-6 h-6 bg-accent-blue/20 rounded-full blur-sm"></div>

              {/* Mockup telepon dengan styling yang ditingkatkan */}
              <div className="relative z-10">
                <div className="relative mx-auto">
                  {/* Mockup telepon dengan bayangan dan border */}
                  <div className="relative z-10 bg-white rounded-4xl shadow-app border border-gray-100 p-4 mx-auto w-72 md:w-80 backdrop-blur-sm">
                    {/* Layar telepon */}
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

                      {/* Konten aplikasi */}
                      <div className="p-4 bg-card-gradient">
                        {/* Header aplikasi */}
                        <div className="flex justify-between items-center mb-5">
                          <div className="text-sm font-bold text-primary-coral">AnimalCare</div>
                          <div className="w-8 h-8 rounded-full bg-coral-gradient"></div>
                        </div>

                        {/* Konten aplikasi */}
                        <div className="space-y-4">
                          <div className="h-24 bg-feature-lightPink rounded-xl p-4 card-shadow">
                            <div className="w-1/2 h-3 bg-primary-light/30 rounded-full mb-2.5"></div>
                            <div className="w-3/4 h-3 bg-primary-light/20 rounded-full mb-2.5"></div>
                            <div className="w-2/5 h-3 bg-primary-light/20 rounded-full"></div>
                          </div>
                          <div className="flex space-x-3">
                            <div className="h-14 w-1/3 bg-feature-lightGray rounded-xl card-shadow flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-primary-coral/30"></div>
                            </div>
                            <div className="h-14 w-1/3 bg-feature-white rounded-xl card-shadow flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-accent-blue/30"></div>
                            </div>
                            <div className="h-14 w-1/3 bg-feature-lightPink rounded-xl card-shadow flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-accent-green/30"></div>
                            </div>
                          </div>
                          <div className="h-28 bg-white rounded-xl card-shadow p-4">
                            <div className="w-1/3 h-3 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="flex space-x-2 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-feature-lightGray"></div>
                              <div className="flex-1 space-y-1.5 pt-1">
                                <div className="w-3/4 h-2 bg-gray-100 rounded-full"></div>
                                <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <div className="w-10 h-10 rounded-lg bg-feature-lightPink"></div>
                              <div className="flex-1 space-y-1.5 pt-1">
                                <div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
                                <div className="w-1/3 h-2 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Indikator home */}
                    <div className="mt-3 flex justify-center">
                      <div className="w-1/3 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Tambahan badges sebagai trust indicator */}
        <motion.div 
          className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-order-completed rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-sm text-secondary-dark">Trusted by 500+ Shelters</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-order-processing rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-sm text-secondary-dark">2000+ Veterinarians</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-primary-coral rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <span className="text-sm text-secondary-dark">100K+ Pet Owners</span>
          </div>
          <div className="flex items-center space-x-2 paw-bg px-4 py-1 rounded-full">
            <span className="text-sm font-medium text-primary-coral">4.9/5 Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}