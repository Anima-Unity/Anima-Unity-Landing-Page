// src/sections/Features.tsx
import { FaHeartbeat, FaHome, FaMapMarkerAlt, FaVideo } from 'react-icons/fa';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative" data-aos="fade-up">
          {/* Decorative elements */}
          <div className="absolute -top-16 -left-8 w-24 h-24 bg-orange-100 rounded-full opacity-50 hidden lg:block"></div>
          <div className="absolute -bottom-16 -right-8 w-20 h-20 bg-blue-100 rounded-full opacity-50 hidden lg:block"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Everything Your Pet Needs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From healthcare to adoption, we&apos;ve built an ecosystem that supports every aspect of pet care.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-5">
              <FaHeartbeat className="text-xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Healthcare Hub</h3>
            <p className="text-gray-600 text-sm">
              Centralized medical records, vaccination reminders, and vet appointment scheduling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
              <FaHome className="text-xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Shelter & Adoption</h3>
            <p className="text-gray-600 text-sm">
              Find your perfect pet match with our verified shelter network and adoption tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-5">
              <FaMapMarkerAlt className="text-xl text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">AniTrack GPS</h3>
            <p className="text-gray-600 text-sm">
              IoT-powered GPS tracking for your pet&apos;s safety with real-time location updates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-5">
              <FaVideo className="text-xl text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Telemedicine</h3>
            <p className="text-gray-600 text-sm">
              24/7 access to licensed veterinarians through video consultations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}