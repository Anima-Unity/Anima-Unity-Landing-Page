// src/components/sections/Features.tsx
import { FaHeartbeat, FaHome, FaMapMarkerAlt, FaVideo, FaIdCard } from 'react-icons/fa';
import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: <FaHeartbeat className="text-xl text-orange-500" />,
      title: "Healthcare Hub",
      description: "Centralized medical records, vaccination reminders, and vet appointment scheduling.",
      bgColor: "bg-orange-100",
      path: "/healthcare",
      delay: "100"
    },
    {
      icon: <FaHome className="text-xl text-blue-500" />,
      title: "Shelter & Adoption",
      description: "Find your perfect pet match with our verified shelter network and adoption tools.",
      bgColor: "bg-blue-100",
      path: "/features/shelter-adoption",
      delay: "200"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-green-500" />,
      title: "AniTrack GPS",
      description: "IoT-powered GPS tracking for your pet's safety with real-time location updates.",
      bgColor: "bg-green-100",
      path: "/features/anitrack-gps",
      delay: "300"
    },
    {
      icon: <FaVideo className="text-xl text-purple-500" />,
      title: "Telemedicine",
      description: "24/7 access to licensed veterinarians through video consultations.",
      bgColor: "bg-purple-100",
      path: "/telemedicine",
      delay: "400"
    },
  ];

  const petIdCard = {
    icon: <FaIdCard className="text-xl text-indigo-500" />,
    title: "Digital Pet ID Card",
    description: "Create a personalized digital ID card for your pet with all essential information, medical records, and QR code for emergency access.",
    bgColor: "bg-indigo-100",
    path: "/features/pet-id",
    delay: "500"
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative" data-aos="fade-up">
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
          {features.map((feature, index) => (
            <Link 
              href={feature.path} 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 active:scale-[98%]"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Link>
          ))}
        </div>

        {/* Pet ID Card Feature */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
          <Link
            href={petIdCard.path}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 active:scale-[98%]"
            data-aos="fade-up"
            data-aos-delay={petIdCard.delay}
          >
            <div className={`w-14 h-14 ${petIdCard.bgColor} rounded-lg flex items-center justify-center mb-5`}>
              {petIdCard.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{petIdCard.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{petIdCard.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                QR Code
              </span>
              <span className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                Medical Records
              </span>
              <span className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                Emergency Info
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}