"use client";

import { useRef } from "react";
import Image from "next/image";

interface TestimonialProps {
  avatar: string;
  name: string;
  position: string;
  quote: string;
}

export default function Testimonials() {
  const testimonials: TestimonialProps[] = [
    {
      avatar: "https://images.unsplash.com/photo-1699746277651-3b1438122eaa?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
      name: "Dr. Sarah Johnson",
      position: "Veterinarian",
      quote: "Anima Unity has transformed how I manage my practice. The telemedicine features allow me to consult with pet owners remotely, and the centralized health records save me so much time."
    },
    {
      avatar: "https://plus.unsplash.com/premium_photo-1710695570399-7d6e3725ba23?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Michael Rodriguez",
      position: "Shelter Director",
      quote: "Since joining Anima Unity, our adoption rates have increased by 40%. The platform makes it so easy for potential adopters to find and connect with our animals."
    },
    {
      avatar: "https://plus.unsplash.com/premium_photo-1661918391309-7ddd44addee6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Emma Chen",
      position: "Pet Owner",
      quote: "The AniTrack GPS gave me peace of mind when my cat got out. I located him within minutes! The vet appointment reminders are also a lifesaver for busy pet parents."
    }
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm uppercase font-medium tracking-wider text-gray-500 mb-1">
              OUR REVIEWS
            </p>
            <h2 className="text-4xl font-bold">
              What Our <span className="text-gray-400">Clients</span> Say
            </h2>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-black text-white"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-black text-white"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto space-x-6 pb-10 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-none w-full max-w-md bg-white p-8 rounded-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      width={48} 
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                </div>
              </div>
              
              <div className="mb-8">
                <blockquote className="text-xl font-medium mb-4 relative">
                  <span className="text-blue-300 text-4xl absolute -top-6 -left-2">&quot;</span>
                  {testimonial.quote}
                </blockquote>
              </div>
              
              <div className="mt-auto">
                <h4 className="font-bold text-sm">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}