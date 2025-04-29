"use client";

import { useRef, useState, useEffect } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollPrev = () => {
    if (sliderRef.current) {
      const newIndex = Math.max(0, activeIndex - 1);
      setActiveIndex(newIndex);
      const cardWidth = sliderRef.current.querySelector('div')?.clientWidth || 0;
      sliderRef.current.scrollTo({ left: cardWidth * newIndex, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const newIndex = Math.min(testimonials.length - 1, activeIndex + 1);
      setActiveIndex(newIndex);
      const cardWidth = sliderRef.current.querySelector('div')?.clientWidth || 0;
      sliderRef.current.scrollTo({ left: cardWidth * newIndex, behavior: "smooth" });
    }
  };

  // Mouse events for drag scrolling
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    if (sliderRef.current) {
      const x = e.pageX - sliderRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Update active index when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const cardWidth = sliderRef.current.querySelector('div')?.clientWidth || 0;
        const index = Math.round(sliderRef.current.scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-feature-lightPink relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-primary-coral opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary-coral opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <p className="text-sm uppercase font-semibold tracking-wider text-primary-coral mb-2">
              WHAT PET LOVERS SAY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="text-primary-gradient">Happy</span> Clients
            </h2>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={scrollPrev}
              className={`p-4 rounded-full border transition-all duration-300 ${
                activeIndex === 0 
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                  : 'hover:border-primary-coral hover:text-primary-coral border-gray-300 text-gray-500'
              }`}
              aria-label="Previous"
              disabled={activeIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              className={`p-4 rounded-full border transition-all duration-300 ${
                activeIndex === testimonials.length - 1 
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                  : 'hover:border-primary-coral hover:text-primary-coral border-gray-300 text-gray-500'
              }`}
              aria-label="Next"
              disabled={activeIndex === testimonials.length - 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
        
        {/* Testimonials carousel */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseUpOrLeave}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-none w-full md:w-1/2 lg:w-1/3 px-3 snap-start"
            >
              <div className="bg-card rounded-3xl shadow-card hover:shadow-card-hover transform transition-all duration-300 p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden mr-4 border-2 border-primary-coral">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        width={56} 
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="text-primary-coral">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.59 5.34C9.21 5.57 7 7.1 7 10.14C7 12.8 8.97 14.99 11.63 14.99C13.9 14.99 15.75 13.13 15.75 10.86C15.75 8.81 14.13 7.19 12.08 7.19C11.78 7.19 11.49 7.23 11.21 7.3C11.77 6.47 12.58 6 13.13 5.86C13.35 5.8 13.41 5.53 13.24 5.37C12.84 4.99 12.37 4.77 12.06 4.67C11.59 4.5 10.99 4.19 9.59 5.34Z" fill="currentColor"/>
                      <path d="M4.59 5.34C4.21 5.57 2 7.1 2 10.14C2 12.8 3.97 14.99 6.63 14.99C8.9 14.99 10.75 13.13 10.75 10.86C10.75 8.81 9.13 7.19 7.08 7.19C6.78 7.19 6.49 7.23 6.21 7.3C6.77 6.47 7.58 6 8.13 5.86C8.35 5.8 8.41 5.53 8.24 5.37C7.84 4.99 7.37 4.77 7.06 4.67C6.59 4.5 5.99 4.19 4.59 5.34Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex-grow mb-6">
                  <blockquote className="text-base font-medium">
                    {testimonial.quote}
                  </blockquote>
                </div>
                
                {/* Star rating */}
                <div className="flex items-center mt-auto">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary-coral fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (sliderRef.current) {
                  setActiveIndex(index);
                  const cardWidth = sliderRef.current.querySelector('div')?.clientWidth || 0;
                  sliderRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary-coral w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}