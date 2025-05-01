'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Define partner type
type Partner = {
  name: string
  logo: string
  width: number
  height: number
}

// Enhanced partner data with consistent dimensions
const PARTNERS: Partner[] = [
  { 
    name: 'Halodoc', 
    logo: 'https://upload.wikimedia.org/wikipedia/id/3/39/Logo_Halodoc.png',
    width: 140,
    height: 50
  },
  { 
    name: 'Allianz', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Allianz.svg',
    width: 140,
    height: 50
  },
  { 
    name: 'Gojek', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gojek_logo_2022.svg/250px-Gojek_logo_2022.svg.png',
    width: 140,
    height: 50
  },
  { 
    name: 'Tokopedia', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Logo-Tokopedia.png/1200px-Logo-Tokopedia.png',
    width: 140,
    height: 50
  },
  { 
    name: 'Grab', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Grab_Logo.svg/1200px-Grab_Logo.svg.png',
    width: 140,
    height: 50
  },
  { 
    name: 'Gopay', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Logo_Gopay.svg/1200px-Logo_Gopay.svg.png',
    width: 140,
    height: 50
  },
  { 
    name: 'IPB', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Bogor_Agricultural_University_%28IPB%29_symbol.svg',
    width: 140,
    height: 50
  },
  { 
    name: 'ITB', 
    logo: 'https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png',
    width: 140,
    height: 50
  },
  { 
    name: 'Nodeflux', 
    logo: 'https://www.centraldatatech.com/wp-content/uploads/2023/02/nodeflux-logo.png.webp',
    width: 140,
    height: 50
  },
  { 
    name: 'Qlue', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Master_Logo_-_Qlue_Corporate.png',
    width: 140,
    height: 50
  },
]

// Split partners evenly for desktop layout
const firstRowPartners = PARTNERS.slice(0, Math.ceil(PARTNERS.length / 2))
const secondRowPartners = PARTNERS.slice(Math.ceil(PARTNERS.length / 2))

// Partner logo component for consistent rendering
const PartnerLogo = ({ partner }: { partner: Partner }) => (
  <div 
    className="flex items-center justify-center h-20 px-6 group"
  >
    <div className="flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:scale-105">
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="object-contain max-h-12 max-w-[120px]"
        loading="eager"
        width={partner.width}
        height={partner.height}
      />
    </div>
  </div>
)

export default function PartnersSection(): JSX.Element {
  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Item variants for logo animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative py-20 bg-feature-lightPink overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary-coral/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary-coral/10 blur-3xl" />
      <div className="absolute -left-10 top-1/2 w-40 h-40 rounded-full bg-accent-coral/5 blur-2xl" />
      
      {/* Paw pattern background for texture */}
      <div className="absolute inset-0 paw-bg opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-coral font-medium block mb-2">Trusted By Industry Leaders</span>
          <h2 className="text-3xl md:text-4xl font-bold text-accent-black mb-4">
            Our <span className="text-primary-gradient">Pet Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading companies committed to improving animal welfare and providing exceptional pet care services.
          </p>
        </motion.div>

        <motion.div
          className="bg-card rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 p-8 sm:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Desktop view - Evenly distributed 2-row grid layout */}
          <motion.div 
            className="hidden lg:block"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* First row */}
            <div className="grid grid-cols-5 gap-6">
              {firstRowPartners.map((partner, index) => (
                <motion.div key={`first-row-${index}`} variants={itemVariants}>
                  <PartnerLogo partner={partner} />
                </motion.div>
              ))}
            </div>
            
            {/* Subtle divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-6 opacity-50"></div>
            
            {/* Second row */}
            <div className="grid grid-cols-5 gap-6">
              {/* Center the logos in the second row */}
              {secondRowPartners.length < 5 && <div className={`col-span-${Math.floor((5 - secondRowPartners.length) / 2)}`} />}
              {secondRowPartners.map((partner, index) => (
                <motion.div key={`second-row-${index}`} variants={itemVariants}>
                  <PartnerLogo partner={partner} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Mobile/Tablet view - Responsive grid */}
          <motion.div 
            className="lg:hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {PARTNERS.map((partner, index) => (
                <motion.div key={`mobile-${index}`} variants={itemVariants}>
                  <PartnerLogo partner={partner} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M22.5,35c-0.3,0-0.5-0.1-0.7-0.3c-1.9-1.9-2.8-3.2-3.4-4.3c-0.8-1.3-1.5-2.5-3.9-4.9c-1.8-1.8-3.1-2.7-4.2-3.3
              c-1.4-0.8-2.5-1.5-5-3.9c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c2.7,2.7,4.1,3.5,5.3,4.2c1.3,0.8,2.1,1.5,3.3,2.7
              c2.7,2.7,3.5,4.1,4.2,5.3c0.8,1.3,1.5,2.1,2.7,3.3c0.4,0.4,0.4,1,0,1.4C23,34.9,22.8,35,22.5,35z" fill="currentColor"/>
              <path d="M61.9,74.4c-0.3,0-0.5-0.1-0.7-0.3c-2.7-2.7-4.1-3.5-5.3-4.2c-1.3-0.8-2.1-1.5-3.3-2.7c-2.7-2.7-3.5-4.1-4.2-5.3
              c-0.8-1.3-1.5-2.1-2.7-3.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c1.9,1.9,2.8,3.2,3.4,4.3c0.8,1.3,1.5,2.5,3.9,4.9
              c1.8,1.8,3.1,2.7,4.2,3.3c1.4,0.8,2.5,1.5,5,3.9c0.4,0.4,0.4,1,0,1.4C62.4,74.3,62.1,74.4,61.9,74.4z" fill="currentColor"/>
              <path d="M34.9,47.3c-0.5,0-1-0.2-1.4-0.6c-0.8-0.8-0.8-2,0-2.8l7.3-7.3c3.8-3.8,10-3.8,13.9,0c0.8,0.8,0.8,2,0,2.8
              c-0.8,0.8-2,0.8-2.8,0c-2.3-2.3-6-2.3-8.3,0l-7.3,7.3C35.9,47.1,35.4,47.3,34.9,47.3z" fill="currentColor"/>
              <circle cx="31.8" cy="24.4" r="6" fill="currentColor"/>
              <circle cx="69.6" cy="62.2" r="6" fill="currentColor"/>
              <circle cx="69.6" cy="31.8" r="6" fill="currentColor"/>
              <circle cx="31.8" cy="69.6" r="6" fill="currentColor"/>
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            Want to join our growing partner network?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-transparent hover:bg-primary-coral/10 text-primary-coral px-4 py-2 rounded-full font-medium transition-all duration-300 button-shadow hover:button-shadow"
          >
            Become a Partner
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}