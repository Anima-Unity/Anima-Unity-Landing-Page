// src/sections/About.tsx
import { FaPaw, FaUserMd, FaHeart, FaSmile } from 'react-icons/fa';
import Image from 'next/image'

export default function About() {
  const stats = [
    {
      icon: <FaPaw className="text-icon-shelter" />,
      title: "500+ Shelters",
      description: "Connected nationwide",
      bgColor: "bg-stat-shelters"
    },
    {
      icon: <FaUserMd className="text-icon-digital" />,
      title: "1,200+ Vets",
      description: "In our network",
      bgColor: "bg-stat-vets"
    },
    {
      icon: <FaHeart className="text-icon-tracking" />,
      title: "10,000+ Pets",
      description: "Rehomed successfully",
      bgColor: "bg-stat-pets"
    },
    {
      icon: <FaSmile className="text-icon-telemedicine" />,
      title: "98% Satisfaction",
      description: "From our users",
      bgColor: "bg-stat-satisfaction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-card-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-app">
              <Image
                src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                alt="Dog and cat together"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-16" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Anima Unity, we believe every pet deserves access to quality care and every shelter deserves visibility. Our platform bridges the gap between pet owners, veterinarians, and animal shelters to create a unified pet care ecosystem.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start">
                  <div className={`${stat.bgColor} p-3 rounded-xl mr-4`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 font-display">{stat.title}</h4>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}