// src/sections/Pricing.tsx
export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Choose the plan that fits your needs. All plans include our core features.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="pricing-card bg-white p-8 rounded-2xl shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Pet Owner</h3>
          <p className="text-gray-600 mb-4">Ideal for individual pet owners</p>
          <div className="flex items-end">
            <span className="text-4xl font-bold">$9</span>
            <span className="text-gray-500 ml-1">/month</span>
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>Basic health tracking</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>Vaccination reminders</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>1 teleconsultation/month</span>
          </li>
          <li className="flex items-center text-gray-400">
            <i className="fas fa-times text-gray-300 mr-2"></i>
            <span>No AniTrack GPS</span>
          </li>
        </ul>
        <a href="#cta" className="btn-secondary w-full text-center border-2 border-gray-300 px-6 py-2 rounded-full text-sm font-medium">
          Get Started
        </a>
      </div>

      <div className="pricing-card popular bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 relative" data-aos="fade-up" data-aos-delay="200">
        <div className="absolute top-0 right-0 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Pet Owner Plus</h3>
          <p className="text-gray-600 mb-4">Best value for dedicated owners</p>
          <div className="flex items-end">
            <span className="text-4xl font-bold">$15</span>
            <span className="text-gray-500 ml-1">/month</span>
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>Advanced health tracking</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>4 teleconsultations/month</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>AniTrack GPS included</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>Priority vet scheduling</span>
          </li>
        </ul>
        <a href="#cta" className="btn-primary w-full text-center text-white px-6 py-2 rounded-full text-sm font-medium">
          Get Started
        </a>
      </div>

      <div className="pricing-card bg-white p-8 rounded-2xl shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Shelter/Vet Pro</h3>
          <p className="text-gray-600 mb-4">For shelters & veterinary clinics</p>
          <div className="flex items-end">
            <span className="text-4xl font-bold">$49</span>
            <span className="text-gray-500 ml-1">/month</span>
          </div>
        </div>
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>Unlimited pet profiles</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>Shelter management tools</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>Vet clinic dashboard</span>
          </li>
          <li className="flex items-center">
            <i className="fas fa-check text-green-400 mr-2"></i>
            <span>Premium listing</span>
          </li>
        </ul>
        <a href="#cta" className="btn-secondary w-full text-center border-2 border-gray-300 px-6 py-2 rounded-full text-sm font-medium">
          Contact Sales
        </a>
      </div>
    </div>
  </div>
</section>
  )
}