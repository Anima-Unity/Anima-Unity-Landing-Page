'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Define partner type
type Partner = {
  name: string
  logo: string
}

const PARTNERS: Partner[] = [
  { name: 'Gojek', logo: '/img/partners-logo/gojek.png' },
  { name: 'Halodoc', logo: '/img/partners-logo/halodoc.png' },
  { name: 'Allianz', logo: '/img/partners-logo/allianz.png' },
]

export default function PartnersSection(): JSX.Element {
  return (
    <section className="relative py-16 bg-blue-50/30">
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
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Marquee
            gradient
            gradientColor="#ffffff"
            gradientWidth={50}
            speed={30}
            pauseOnHover
            className="py-4"
          >
            {PARTNERS.map((partner, index) => (
              <div key={index} className="mx-8 md:mx-12">
                <div className="w-24 md:w-32 h-16 md:h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition duration-300 ease-in-out">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </Marquee>

          {/* Decorative Dots */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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