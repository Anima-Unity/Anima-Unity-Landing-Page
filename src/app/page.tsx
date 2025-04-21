// src/app/page.tsx
import Hero from '@/sections/Hero'
import Features from '@/sections/Features'
import About from '@/sections/About'
import Pricing from '@/sections/Pricing'
import Testimonials from '@/sections/Testimonials'
import HowItWorks from '@/sections/HowItWorks'
import CTASection from '@/sections/CTASection'
import PartnersSection from '@/sections/PartnersSection'

export default function Home() {
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