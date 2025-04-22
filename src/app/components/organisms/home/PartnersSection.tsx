'use client'

//import { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

const PARTNERS = [
 /* { name: 'Tokopedia', logo: '/img/partners-logo/tokopedia.png' },
  { name: 'Happy Pet', logo: '/img/partners-logo/happy-pet.png' },*/
/*  { name: 'Animal Defenders', logo: '/img/partners-logo/defenders.png' },*/
  { name: 'Gojek', logo: '/img/partners-logo/gojek.png' },
  { name: 'Grab', logo: '/img/partners-logo/grab.png' },
  { name: 'Halodoc', logo: '/img/partners-logo/halodoc.png' },
  { name: 'Allianz', logo: '/img/partners-logo/allianz.png' },
]

export default function PartnersSection() {

  return (
    <section className="relative bg-white/80 backdrop-blur-lg py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        {/* Section Title */}
        <h2
          className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4"
          data-aos="fade-up"
        >
          Trusted by top companies & organizations
        </h2>

        {/* Description */}
        <p
          className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We collaborate with leading brands to improve animal welfare together.
        </p>

        {/* Partner Logos - Marquee */}
        <div 
          className="overflow-hidden"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover
            className="py-4"
          >
            {PARTNERS.map(({ name, logo }, index) => (
              <div
                key={index}
                className="mx-4 sm:mx-6 md:mx-8 flex items-center justify-center"
                data-aos="zoom-in"
                data-aos-delay={100 + (index * 50)}
              >
                <div className="w-20 sm:w-24 md:w-28 h-12 sm:h-16 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 ease-in-out">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={120}
                    height={80}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}