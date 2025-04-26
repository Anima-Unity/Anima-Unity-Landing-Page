'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
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
    className="flex items-center justify-center h-20 px-6"
  >
    <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition duration-300 ease-in-out">
      {/* Use img instead of Next.js Image component for guaranteed display */}
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="object-contain max-h-12 max-w-[120px]"
        loading="eager"
      />
    </div>
  </div>
)

export default function PartnersSection(): JSX.Element {
  return (
    <section className="relative py-16 bg-blue-50/30 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-teal-100/30 blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-blue-100/30 blur-3xl opacity-70" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Partners in Pet Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re proud to collaborate with leading companies committed to improving animal welfare and pet care services.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Desktop view - Evenly distributed 2-row grid layout */}
          <div className="hidden lg:block">
            {/* First row */}
            <div className="grid grid-cols-5 gap-4">
              {firstRowPartners.map((partner, index) => (
                <PartnerLogo key={`first-row-${index}`} partner={partner} />
              ))}
            </div>
            
            {/* Second row */}
            <div className="grid grid-cols-5 gap-4 mt-8">
              {/* Center the logos in the second row */}
              {secondRowPartners.length < 5 && <div className={`col-span-${Math.floor((5 - secondRowPartners.length) / 2)}`} />}
              {secondRowPartners.map((partner, index) => (
                <PartnerLogo key={`second-row-${index}`} partner={partner} />
              ))}
            </div>
          </div>
          
          {/* Mobile/Tablet view - Debug view to ensure logos appear */}
          <div className="lg:hidden">
            <div className="flex flex-wrap justify-center gap-4 py-4">
              {PARTNERS.slice(0, 4).map((partner, index) => (
                <div key={`mobile-${index}`} className="w-1/3 max-w-[140px]">
                  <PartnerLogo partner={partner} />
                </div>
              ))}
            </div>
            
            {/* Static display of logos */}
            <div className="mt-4 flex flex-wrap justify-center gap-4 py-4">
              {PARTNERS.slice(4, 8).map((partner, index) => (
                <div key={`mobile-static-${index}`} className="w-1/3 max-w-[140px]">
                  <PartnerLogo partner={partner} />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Dots - Improved positioning */}
          <div className="absolute top-4 right-4 w-32 h-32 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1.5" fill="currentColor" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            Interested in becoming a partner?{' '}
            <a href="#contact" className="text-teal-500 hover:text-teal-600 font-medium">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}