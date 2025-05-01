'use client'


import Hero from '@/components/organisms/home/Hero'
import Features from '@/components/organisms/home/Features'
import About from '@/components/organisms/home/About'
//import Pricing from '@/components/organisms/home/Pricing'
import Testimonials from '@/components/organisms/home/Testimonials'
import HowItWorks from '@/components/organisms/home/HowItWorks'
import CTASection from '@/components/organisms/home/CTASection'
import PartnersSection from '@/components/organisms/home/PartnersSection'

export default function HomeTemplate() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      {/*<Pricing />*/}
      <Testimonials />
      <HowItWorks />
      <PartnersSection />
      <CTASection />
    </>
  )
}