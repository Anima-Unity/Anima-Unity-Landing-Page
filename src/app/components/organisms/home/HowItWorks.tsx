import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

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
      icon: "🐾",
      title: "Register Your Pet",
      description: "Create a digital profile with your pet's medical history and essential information.",
      color: "bg-feature-lightPink",
      iconBg: "bg-primary-light"
    },
    {
      icon: "🏥",
      title: "Connect Services",
      description: "Link to veterinarians, shelters, and adoption networks in your area.",
      color: "bg-feature-lightGray",
      iconBg: "bg-accent-coral"
    },
    {
      icon: "📅",
      title: "Receive Care Updates",
      description: "Get notifications for vaccinations, appointments, and pet safety alerts.",
      color: "bg-feature-white",
      iconBg: "bg-primary-coral"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-feature-lightPink relative overflow-hidden">
      {/* Background decoration elements - Paw pattern */}
      <div className="absolute inset-0 paw-bg opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-light opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-coral opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          <Badge variant="outline" className="px-4 py-1 mb-4 text-sm font-medium bg-primary-coral/10 text-primary-coral border-primary-coral/20" > Simple Process </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How <span className="text-primary-gradient">Anima Unity</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform simplifies pet care management with a seamless digital experience.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
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
              <div className={`rounded-3xl p-8 transition-all duration-300 group-hover:shadow-card ${step.color} border border-gray-100 h-full`}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${step.iconBg} text-white shadow-button mb-2`}>
                    <span className="text-4xl">{step.icon}</span>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-primary-coral ml-auto">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary-coral transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Arrow connector (only for the first two steps) */}
                {index < 2 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-primary-coral">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="#join-now" 
            className="btn-primary text-white px-8 py-4 rounded-full text-base font-medium inline-flex items-center shadow-button hover:shadow-button-hover"
          >
            Start Your Pet Journey
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          
          <div className="mt-8 text-sm text-muted-foreground">
            Join thousands of pet owners who trust Anima Unity
          </div>
        </motion.div>
      </div>
    </section>
  );
}