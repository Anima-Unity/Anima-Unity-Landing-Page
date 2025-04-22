import Hero from '@/app/components/organisms/home/Hero'
import Features from '@/app/components/organisms/home/Features'
import About from '@/app/components/organisms/home/About'
//import Pricing from '@/app/components/organisms/home/Pricing'
import Testimonials from '@/app/components/organisms/home/Testimonials'
import HowItWorks from '@/app/components/organisms/home/HowItWorks'
import CTASection from '@/app/components/organisms/home/CTASection'
import PartnersSection from '@/app/components/organisms/home/PartnersSection'

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