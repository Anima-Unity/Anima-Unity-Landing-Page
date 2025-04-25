import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const steps = [
    {
      icon: "🩺",
      title: "Register Your Pet",
      description: "Create a digital profile with your pet's medical history and essential information.",
      color: "bg-blue-50"
    },
    {
      icon: "📱",
      title: "Connect Services",
      description: "Link to veterinarians, shelters, and adoption networks in your area.",
      color: "bg-green-50"
    },
    {
      icon: "🔔",
      title: "Receive Care Updates",
      description: "Get notifications for vaccinations, appointments, and pet safety alerts.",
      color: "bg-purple-50"
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-green-100 opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How Anima Unity Works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our platform simplifies pet care management with a seamless digital experience.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="group relative"
              variants={item}
            >
              <div className={`rounded-xl p-8 transition-all duration-300 group-hover:shadow-lg ${step.color} border border-gray-100`}>
                <div className="mb-6 text-4xl">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-teal-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="#join-now" 
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center"
          >
            Join Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}