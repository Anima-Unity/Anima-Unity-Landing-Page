// src/sections/Features.tsx
import { FaHeartbeat, FaHome, FaMapMarkerAlt, FaVideo } from 'react-icons/fa';

export default function Features() {
  return (
<section id="features" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Your Pet Needs</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        From healthcare to adoption, we've built an ecosystem that supports every aspect of pet care.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="feature-card bg-white p-8 rounded-2xl shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
          <FaHeartbeat className="text-2xl text-orange-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">Healthcare Hub</h3>
        <p className="text-gray-600">
          Centralized medical records, vaccination reminders, and vet appointment scheduling.
        </p>
      </div>

      <div className="feature-card bg-white p-8 rounded-2xl shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <FaHome className="text-2xl text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">Shelter & Adoption</h3>
        <p className="text-gray-600">
          Find your perfect pet match with our verified shelter network and adoption tools.
        </p>
      </div>

      <div className="feature-card bg-white p-8 rounded-2xl shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <FaMapMarkerAlt className="text-2xl text-green-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">AniTrack GPS</h3>
        <p className="text-gray-600">
          IoT-powered GPS tracking for your pet's safety with real-time location updates.
        </p>
      </div>

      <div className="feature-card bg-white p-8 rounded-2xl shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
          <FaVideo className="text-2xl text-purple-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">Telemedicine</h3>
        <p className="text-gray-600">
          24/7 access to licensed veterinarians through video consultations.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}