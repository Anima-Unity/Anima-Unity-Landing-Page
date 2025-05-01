// src/sections/About.tsx
import { FaPaw, FaUserMd, FaHeart, FaSmile } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const stats = [
    {
      icon: <FaPaw className="text-accent-coral text-xl" />,
      title: "500+ Shelters",
      description: "Connected nationwide",
      accent: "bg-primary-light/20"
    },
    {
      icon: <FaUserMd className="text-accent-blue text-xl" />,
      title: "1,200+ Vets",
      description: "In our network",
      accent: "bg-blue-100"
    },
    {
      icon: <FaHeart className="text-accent-green text-xl" />,
      title: "10,000+ Pets",
      description: "Rehomed successfully",
      accent: "bg-green-100"
    },
    {
      icon: <FaSmile className="text-amber-500 text-xl" />,
      title: "98% Satisfaction",
      description: "From our users",
      accent: "bg-amber-100"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute top-0 left-0 w-full h-full bg-card-gradient opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl"></div>
      <div className="absolute top-24 right-10 w-40 h-40 bg-primary-light/10 rounded-full blur-xl"></div>
      
      {/* Subtle paw pattern overlay */}
      <div className="absolute inset-0 paw-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex items-center gap-16">
          {/* Image section with overlapping elements */}
          <div className="lg:w-1/2 mb-16 lg:mb-0" data-aos="fade-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-lg bg-primary-light/20 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-lg bg-primary-light/20 -z-10"></div>
              
              {/* Main image */}
              <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-app">
                <Image
                  src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                  alt="Dog and cat together"
                  fill
                  className="object-cover"
                />
                
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Stats floating card */}
                <div className="absolute -bottom-10 -right-10 md:right-5 w-40 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-card rotate-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary-light/20 flex items-center justify-center">
                      <FaHeart className="text-primary-coral" />
                    </div>
                    <p className="font-bold text-2xl">100k+</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Happy pets served</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="lg:w-1/2" data-aos="fade-left">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-light/20 text-primary-coral text-sm font-medium mb-4">
              Our Mission
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Creating a <span className="text-primary-gradient">better world</span> for pets
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              At Anima Unity, we believe every pet deserves access to quality care and every shelter deserves visibility. Our platform bridges the gap between pet owners, veterinarians, and animal shelters to create a unified pet care ecosystem.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start group">
                  <div className={`${stat.accent} p-3 rounded-xl mr-4 transition-all duration-300 group-hover:scale-110`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 font-display">{stat.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/about" 
              className="group inline-flex items-center px-6 py-3 bg-coral-gradient text-white font-medium rounded-xl hover:shadow-button-hover transition duration-300 shadow-button"
            >
              Lihat Detail Selengkapnya
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}