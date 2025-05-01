import { FaHeartbeat, FaHome, FaMapMarkerAlt, FaVideo, FaIdCard, FaHandHoldingHeart, FaUsers, FaPaw } from 'react-icons/fa';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Define type for badge colors
type BadgeColor = 'coral' | 'blue' | 'green' | 'purple' | 'teal' | 'amber';

// Define type for badge
interface Badge {
  text: string;
  color: BadgeColor;
}

// Define type for feature
interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  path: string;
  delay: string;
  badges: Badge[];
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: <FaHeartbeat className="text-2xl text-accent-coral" />,
      title: "Healthcare Hub",
      description: "Centralized medical records, vaccination reminders, and vet appointment scheduling.",
      path: "/features/healthcare-hub",
      delay: "100",
      badges: [
        { text: "Medical Records", color: "coral" },
        { text: "Reminders", color: "coral" },
        { text: "Appointments", color: "coral" }
      ]
    },
    {
      icon: <FaHome className="text-2xl text-accent-blue" />,
      title: "Shelter & Adoption",
      description: "Find your perfect pet match with our verified shelter network and adoption tools.",
      path: "/features/shelter-adoption",
      delay: "200",
      badges: [
        { text: "Shelter Network", color: "blue" },
        { text: "Match Finder", color: "blue" },
        { text: "Verified", color: "blue" }
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-accent-green" />,
      title: "AniTrack GPS",
      description: "IoT-powered GPS tracking for your pet's safety with real-time location updates.",
      path: "/features/anitrack-gps",
      delay: "300",
      badges: [
        { text: "Real-time", color: "green" },
        { text: "IoT-powered", color: "green" },
        { text: "Location Alerts", color: "green" }
      ]
    },
    {
      icon: <FaUsers className="text-2xl text-purple-500" />,
      title: "Pet Community",
      description: "Connect with fellow pet owners, share experiences, and get recommendations from pet experts and enthusiasts.",
      path: "/features/pet-community",
      delay: "350",
      badges: [
        { text: "Pet Meetups", color: "purple" },
        { text: "Expert Advice", color: "purple" },
        { text: "Resource Sharing", color: "purple" }
      ]
    },
    {
      icon: <FaVideo className="text-2xl text-blue-500" />,
      title: "Telemedicine",
      description: "24/7 access to licensed veterinarians through video consultations.",
      path: "/features/telemedicine",
      delay: "400",
      badges: [
        { text: "24/7 Access", color: "blue" },
        { text: "Licensed Vets", color: "blue" },
        { text: "Video Consults", color: "blue" }
      ]
    },
    {
      icon: <FaIdCard className="text-2xl text-teal-500" />,
      title: "Digital Pet ID Card",
      description: "Create a personalized digital ID card for your pet with all essential information, medical records, and QR code for emergency access.",
      path: "/features/pet-id",
      delay: "500",
      badges: [
        { text: "QR Code", color: "teal" },
        { text: "Medical Records", color: "teal" },
        { text: "Emergency Info", color: "teal" }
      ]
    },
    {
      icon: <FaHandHoldingHeart className="text-2xl text-accent-coral" />,
      title: "PawHelp Donations",
      description: "Provide direct support to abandoned animals and those in need of medical care through our donation platform.",
      path: "/features/pawhelp",
      delay: "600",
      badges: [
        { text: "Medical Support", color: "coral" },
        { text: "Direct Donations", color: "coral" },
        { text: "Emergency Aid", color: "coral" }
      ]
    },
{
  icon: <FaPaw className="text-2xl text-amber-500" />,
  title: "Pet Needs",
  description: "All-in-one solution for your pet's daily essentials—food, grooming, wellness, and accessories—delivered to your door.",
  path: "/features/pet-needs",
  delay: "650",
  badges: [
    { text: "Daily Essentials", color: "amber" },
    { text: "Healthy & Fresh", color: "amber" },
    { text: "Easy Access", color: "amber" }
  ]
},
  ];

  // Badge color classes mapping
  const badgeColorClasses: Record<BadgeColor, string> = {
    coral: "bg-primary-light/20 text-primary-coral",
    blue: "bg-blue-100 text-accent-blue",
    green: "bg-green-100 text-accent-green",
    purple: "bg-purple-100 text-purple-500",
    teal: "bg-teal-100 text-teal-500",
    amber: "bg-amber-100 text-amber-500"
  };

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-light/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-light/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl"></div>
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-light/20 text-primary-coral text-sm font-medium mb-4">
            Complete Pet Care
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100 font-display">
            <span className="text-primary-gradient">Everything</span> Your Pet Needs
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From healthcare to adoption, we&apos;ve built an ecosystem that supports every aspect of pet care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Link 
              href={feature.path} 
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 active:scale-[98%]"
              data-aos="fade-up"
              data-aos-delay={feature.delay}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-feature-lightPink dark:bg-gray-700 rounded-xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} className="text-primary-coral" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100 font-display">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{feature.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {feature.badges.map((badge, idx) => (
                  <span 
                    key={idx} 
                    className={`inline-block ${badgeColorClasses[badge.color]} px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
          <Link href="/all-features" className="customizr-button group inline-flex items-center px-6 py-3 rounded-full">
            <span>Explore All Features</span>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}