// src/sections/Hero.tsx
export default function Hero() {
  return (
    <section id="home" className="paw-bg pt-32 pb-20 md:pt-40 md:pb-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="md:flex items-center">
      <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Unite Pet Care in <span className="text-orange-400">One Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.
        </p>
        <div className="flex space-x-4">
          <a
            href="#features"
            className="btn-primary text-white px-8 py-3 rounded-full text-sm font-medium"
          >
            Explore Features
          </a>
          <a
            href="#cta"
            className="btn-secondary border-2 border-gray-300 px-8 py-3 rounded-full text-sm font-medium"
          >
            Join Now
          </a>
        </div>
      </div>
      <div className="md:w-1/2" data-aos="fade-left">
        <img
          src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
          alt="Woman holding a cat"
          className="rounded-2xl shadow-xl w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>
  )
}