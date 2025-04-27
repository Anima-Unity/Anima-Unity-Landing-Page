// src/components/sections/Features.tsx
import { FaHeartbeat, FaHome, FaMapMarkerAlt, FaVideo, FaIdCard } from 'react-icons/fa';
import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: <FaHeartbeat className="text-2xl text-icon-healthcare" />,
      title: "Healthcare Hub",
      description: "Centralized medical records, vaccination reminders, and vet appointment scheduling.",
      bgColor: "bg-feature-healthcare",
      path: "/features/healthcare-hub",
      delay: "100",
      badges: [
        { text: "Medical Records", color: "healthcare" },
        { text: "Reminders", color: "healthcare" },
        { text: "Appointments", color: "healthcare" }
      ]
    },
    {
      icon: <FaHome className="text-2xl text-icon-shelter" />,
      title: "Shelter & Adoption",
      description: "Find your perfect pet match with our verified shelter network and adoption tools.",
      bgColor: "bg-feature-shelter",
      path: "/features/shelter-adoption",
      delay: "200",
      badges: [
        { text: "Shelter Network", color: "shelter" },
        { text: "Match Finder", color: "shelter" },
        { text: "Verified", color: "shelter" }
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-icon-tracking" />,
      title: "AniTrack GPS",
      description: "IoT-powered GPS tracking for your pet's safety with real-time location updates.",
      bgColor: "bg-feature-tracking",
      path: "/features/anitrack-gps",
      delay: "300",
      badges: [
        { text: "Real-time", color: "tracking" },
        { text: "IoT-powered", color: "tracking" },
        { text: "Location Alerts", color: "tracking" }
      ]
    },
    {
      icon: <FaVideo className="text-2xl text-icon-telemedicine" />,
      title: "Telemedicine",
      description: "24/7 access to licensed veterinarians through video consultations.",
      bgColor: "bg-feature-telemedicine",
      path: "/features/telemedicine",
      delay: "400",
      badges: [
        { text: "24/7 Access", color: "telemedicine" },
        { text: "Licensed Vets", color: "telemedicine" },
        { text: "Video Consults", color: "telemedicine" }
      ]
    },
    {
      icon: <FaIdCard className="text-2xl text-icon-digital" />,
    title: "Digital Pet ID Card",
    description: "Create a personalized digital ID card for your pet with all essential information, medical records, and QR code for emergency access.",
    bgColor: "bg-feature-digital",
    path: "/features/pet-id",
    delay: "500",
    badges: [
      { text: "QR Code", color: "digital" },
      { text: "Medical Records", color: "digital" },
      { text: "Emergency Info", color: "digital" }
    ]
    },
  ];

  return (
    <section id="features" className="py-20 bg-hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative" data-aos="fade-up">
          <div className="absolute -top-16 -left-8 w-24 h-24 bg-feature-healthcare rounded-full opacity-50 hidden lg:block"></div>
          <div className="absolute -bottom-16 -right-8 w-20 h-20 bg-feature-shelter rounded-full opacity-50 hidden lg:block"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-display">Everything Your Pet Needs</h2>
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
              className="bg-white p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 active:scale-[98%]"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 font-display">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.badges.map((badge, idx) => {
                  const badgeColorClass = {
                    healthcare: "bg-feature-healthcare text-icon-healthcare",
                    shelter: "bg-feature-shelter text-icon-shelter",
                    tracking: "bg-feature-tracking text-icon-tracking",
                    telemedicine: "bg-feature-telemedicine text-icon-telemedicine",
                    digital: "bg-feature-digital text-icon-digital"
                  }[badge.color] || "bg-gray-100 text-gray-600";
                  
                  return (
                    <span 
                      key={idx} 
                      className={`inline-block ${badgeColorClass} px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {badge.text}
                    </span>
                  );
                })}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}