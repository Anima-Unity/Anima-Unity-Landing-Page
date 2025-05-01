import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PetCareGuideTemplate() {
  
 type Guide = {
  title: string;
  description: string;
  icon: string;
  image: string;
  category: "Dogs" | "Cats" | "Healthcare" | "Lifestyle";
  color: string;
  bgColor: string;
  readTime?: string | null;
  date?: string | null;
  authorAvatar?: string | null;
  author?: string | null;
}

type FeaturedGuide = {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string; // lo bisa ganti ke Date kalo nanti datanya di-parse
  category?: string | null;
  authorTitle?: string | null;
}
  
  const guides: Guide[] = [
    {
      title: "New Puppy Care",
      description: "Essential tips for welcoming a new puppy into your home, including training and socialization.",
      icon: "🐶",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Dogs",
      color: "bg-icon-shelter",
      bgColor: "text-icon-shelter bg-feature-shelter bg-opacity-50"
    },
    {
      title: "Cat Nutrition Guide",
      description: "Learn about proper feline nutrition, dietary needs, and feeding schedules.",
      icon: "🐱",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Cats",
      color: "bg-icon-healthcare",
      bgColor: "text-icon-healthcare bg-feature-healthcare bg-opacity-50"
    },
    {
      title: "Senior Pet Health",
      description: "Special care tips for aging pets to ensure comfort and quality of life.",
      icon: "❤️",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Healthcare",
      color: "bg-accent-orange",
      bgColor: "text-accent-orange bg-feature-healthcare bg-opacity-50"
    },
    {
      title: "Pet Emergency Care",
      description: "How to recognize emergency situations and provide first aid for your pet.",
      icon: "🚑",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Healthcare",
      color: "bg-accent-orange",
      bgColor: "text-accent-orange bg-feature-healthcare bg-opacity-50"
    },
    {
      title: "Building a Safe Space",
      description: "Guidelines for creating a pet-friendly home environment.",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Lifestyle",
      color: "bg-icon-tracking",
      bgColor: "text-icon-tracking bg-feature-tracking bg-opacity-50"
    },
    {
      title: "Exercise & Enrichment",
      description: "Activities and exercise routines to keep your pet physically and mentally stimulated.",
      icon: "🎾",
      image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Lifestyle",
      color: "bg-icon-tracking",
      bgColor: "text-icon-tracking bg-feature-tracking bg-opacity-50"
    }
  ];

  const featuredGuides: FeaturedGuide[] = [
    {
      title: "Comprehensive Vaccine Schedule",
      description: "A complete guide to understanding which vaccines your pet needs and when they need them.",
      image: "https://plus.unsplash.com/premium_photo-1663047317286-26dd72a99938?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Dr. Sarah Johnson",
      date: "April 15, 2025"
    },
    {
      title: "Adopting a Rescue Pet",
      description: "Everything you need to know about welcoming a shelter pet into your family.",
      image: "https://plus.unsplash.com/premium_photo-1663133665481-35b4bf5d97c7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author: "Mark Thompson",
      date: "April 10, 2025"
    }
  ];
  
 
return (
      <main data-aos="fade-up" className="font-sans">
{/* Hero Section */}
<section className="py-12 lg:py-20 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-coral/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
  <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
  
  {/* Subtle Pattern Overlay */}
  <div className="absolute inset-0 bg-white/40 paw-bg opacity-20"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Content Column */}
      <div className="lg:w-5/12 space-y-6 text-center lg:text-left">
        <div className="inline-block bg-accent-coral/10 text-accent-coral px-4 py-1 rounded-full font-medium text-sm mb-2">
          The Ultimate Pet Care Resource
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight">
          <span className="text-gray-800">Expert </span>
          <span className="text-gradient bg-coral-gradient">Pet Care</span>
          <br />
          <span className="text-gray-800">Guides & Resources</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
          Comprehensive guides, tips, and advice for pet parents, 
          created by veterinarians and animal care experts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-8">
          <button className="customizr-button flex items-center justify-center gap-2 px-6 py-3 font-medium text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            Browse All Guides
          </button>
          
          <button className="border border-gray-300 bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            Subscribe to Updates
          </button>
        </div>
      </div>
      
      {/* Right Feature Card Column */}
      <div className="lg:w-6/12 relative">
        <div className="bg-gradient-to-br from-white to-feature-lightPink rounded-3xl p-6 md:p-8 shadow-app relative z-10 transform transition-all hover:-translate-y-2 hover:shadow-lg">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent-coral/10 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-blue/10 rounded-full"></div>
          
          <div className="bg-white rounded-2xl shadow-card p-6 backdrop-blur-sm">
            <div className="space-y-6">
              {/* Feature Item 1 */}
              <div className="flex items-center gap-4 transform transition-all hover:translate-x-1">
                <div className="shrink-0 w-14 h-14 bg-accent-coral/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">1,000+ Pet Care Resources</h3>
                  <p className="text-gray-600 text-sm">From health guides to training tips</p>
                </div>
              </div>
              
              {/* Feature Item 2 */}
              <div className="flex items-center gap-4 transform transition-all hover:translate-x-1">
                <div className="shrink-0 w-14 h-14 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Vet-Approved Content</h3>
                  <p className="text-gray-600 text-sm">Created and reviewed by professionals</p>
                </div>
              </div>
              
              {/* Feature Item 3 */}
              <div className="flex items-center gap-4 transform transition-all hover:translate-x-1">
                <div className="shrink-0 w-14 h-14 bg-accent-green/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Regular Updates</h3>
                  <p className="text-gray-600 text-sm">Fresh content added weekly</p>
                </div>
              </div>
              
              {/* New Feature Item */}
              <div className="flex items-center gap-4 transform transition-all hover:translate-x-1">
                <div className="shrink-0 w-14 h-14 bg-warning/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Searchable Database</h3>
                  <p className="text-gray-600 text-sm">Find answers quickly with our smart search</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="inline-flex px-4 py-2 text-sm font-medium text-accent-coral">
              <span>Trusted by 100,000+ pet parents</span>
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative Elements */}
    <div className="hidden lg:block absolute -bottom-16 right-1/4 w-32 h-32 bg-accent-coral/5 rounded-full"></div>
    <div className="hidden lg:block absolute top-1/4 left-1/4 w-6 h-6 bg-accent-blue/20 rounded-full animate-pulse-gentle"></div>
  </div>
</section>

{/* Popular Categories */}
<section className="py-16 md:py-24 relative overflow-hidden">
  {/* Background Styling */}
  <div className="absolute inset-0 bg-gradient-to-b from-white to-feature-lightPink/30"></div>
  <div className="absolute inset-0 paw-bg opacity-10"></div>
  
  {/* Decorative Elements */}
  <div className="absolute top-1/4 right-10 w-24 h-24 bg-accent-coral/10 rounded-full blur-xl"></div>
  <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-accent-blue/10 rounded-full blur-xl"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-12">
      <div className="inline-block px-4 py-1 bg-accent-coral/10 text-accent-coral rounded-full text-sm font-medium mb-4">
        Find What You Need
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
        Popular Guide <span className="text-gradient bg-coral-gradient">Categories</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Browse our extensive collection of pet care resources organized by categories to find exactly what you need.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {/* Category Card - Dogs */}
      <div className="bg-white rounded-3xl shadow-card group hover:shadow-card-hover transition duration-300 overflow-hidden">
        <div className="h-40 bg-accent-coral/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300">🐶</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="p-6 pt-4 text-center">
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent-coral transition-colors">Dogs</h3>
          <p className="text-gray-600 mb-4 text-sm">Comprehensive guides for dogs of all ages and breeds.</p>
          <Link 
            href="#" 
            className="text-accent-coral font-medium inline-flex items-center justify-center group-hover:translate-x-1 transition-transform"
          >
            View guides
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Category Card - Cats */}
      <div className="bg-white rounded-3xl shadow-card group hover:shadow-card-hover transition duration-300 overflow-hidden">
        <div className="h-40 bg-accent-blue/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300">🐱</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="p-6 pt-4 text-center">
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent-coral transition-colors">Cats</h3>
          <p className="text-gray-600 mb-4 text-sm">Essential care information for your feline companions.</p>
          <Link 
            href="#" 
            className="text-accent-coral font-medium inline-flex items-center justify-center group-hover:translate-x-1 transition-transform"
          >
            View guides
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Category Card - Healthcare */}
      <div className="bg-white rounded-3xl shadow-card group hover:shadow-card-hover transition duration-300 overflow-hidden">
        <div className="h-40 bg-accent-green/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300">❤️</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="p-6 pt-4 text-center">
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent-coral transition-colors">Healthcare</h3>
          <p className="text-gray-600 mb-4 text-sm">Medical advice, preventative care, and emergency guides.</p>
          <Link 
            href="#" 
            className="text-accent-coral font-medium inline-flex items-center justify-center group-hover:translate-x-1 transition-transform"
          >
            View guides
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Category Card - Training */}
      <div className="bg-white rounded-3xl shadow-card group hover:shadow-card-hover transition duration-300 overflow-hidden">
        <div className="h-40 bg-warning/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300">🎾</span>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="p-6 pt-4 text-center">
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent-coral transition-colors">Training</h3>
          <p className="text-gray-600 mb-4 text-sm">Behavior training tips and techniques for all pets.</p>
          <Link 
            href="#" 
            className="text-accent-coral font-medium inline-flex items-center justify-center group-hover:translate-x-1 transition-transform"
          >
            View guides
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    
    {/* View All Categories Button */}
    <div className="flex justify-center mt-12">
      <Link
        href="#"
        className="group inline-flex items-center gap-2 px-6 py-3 bg-white border border-accent-coral/30 text-accent-coral rounded-full font-medium hover:bg-accent-coral hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <span>View All Categories</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  </div>
</section>

{/* Featured Guides */}
<section className="py-20 bg-gradient-to-b from-white to-feature-lightPink relative overflow-hidden">
  {/* Decorative background pattern */}
  <div className="absolute inset-0 paw-bg opacity-20"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Section header with gradient text */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
      <div className="mb-6 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-gradient mb-2">Featured Guides</h2>
        <p className="text-muted-foreground max-w-md">Expert tips and resources for pet care and training</p>
      </div>
      <Link 
        href="#" 
        className="customizr-button group flex items-center justify-center w-40 h-10 transition-all duration-300"
      >
        <span>View all</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
    
    {/* Cards with enhanced styling */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredGuides.map((guide, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2"
        >
          {/* Image container with overlay on hover */}
          <div className="relative overflow-hidden h-48">
            <img 
              src={guide.image || "/api/placeholder/400/320"} 
              alt={guide.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium">Read guide</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className="bg-accent-coral/10 text-accent-coral text-xs font-medium px-3 py-1 rounded-full">
                {guide.category || "Care Guide"}
              </span>
              <span className="text-xs text-muted-foreground ml-auto">{guide.date}</span>
            </div>
            
            <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-accent-coral transition-colors">
              {guide.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {guide.description}
            </p>
            
            {/* Author info */}
            <div className="flex items-center pt-4 border-t border-border">
              <div className="w-8 h-8 rounded-full bg-accent-coral/20 flex items-center justify-center mr-3">
                <span className="text-accent-coral text-xs font-bold">
                  {guide.author.split(' ').map(name => name[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">{guide.author}</p>
                <p className="text-xs text-muted-foreground">{guide.authorTitle || "Pet Expert"}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Newsletter subscription - additional element */}
    <div className="mt-16 bg-coral-gradient rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-6 md:mb-0 md:mr-8">
        <h3 className="text-white text-2xl font-bold mb-2">Get Weekly Pet Care Tips</h3>
        <p className="text-white text-opacity-90">Join our newsletter for expert advice and exclusive content</p>
      </div>
      <div className="flex flex-col sm:flex-row w-full md:w-auto">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="rounded-l-full rounded-r-full sm:rounded-r-none px-6 py-3 w-full mb-3 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-white" 
        />
        <button className="bg-white text-accent-coral font-medium rounded-full sm:rounded-l-none sm:rounded-r-full px-6 py-3 whitespace-nowrap hover:bg-opacity-90 transition-all duration-300">
          Subscribe Now
        </button>
      </div>
    </div>
  </div>
</section>
{/* Pet Care Guides Section */}
<section className="py-20 bg-feature-lightPink relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full paw-bg opacity-30"></div>
  <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary-light/10 blur-3xl"></div>
  <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent-coral/10 blur-3xl"></div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section header with animation */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-fade-in">
      <div className="mb-8 md:mb-0">
        <span className="text-accent-coral text-sm font-semibold tracking-wider uppercase mb-3 inline-block bg-accent-coral/10 px-4 py-1 rounded-full">Pet Knowledge Base</span>
        <h2 className="text-3xl md:text-4xl font-bold font-display bg-clip-text">Latest Pet Care Guides</h2>
        <p className="text-muted-foreground mt-3 max-w-xl">Discover expert advice, practical tips, and essential information to keep your furry friends happy and healthy.</p>
      </div>
      
      {/* Filter tabs with improved styling */}
      <div className="flex flex-wrap gap-2">
        <button className="bg-coral-gradient text-white px-5 py-2.5 rounded-full shadow-button hover:shadow-button-hover transform hover:-translate-y-0.5 transition-all duration-300 font-medium">
          All
        </button>
        <button className="bg-white text-gray-700 px-5 py-2.5 rounded-full border border-gray-100 hover:border-accent-coral hover:text-accent-coral transition-all duration-300 font-medium">
          Dogs
        </button>
        <button className="bg-white text-gray-700 px-5 py-2.5 rounded-full border border-gray-100 hover:border-accent-coral hover:text-accent-coral transition-all duration-300 font-medium">
          Cats
        </button>
        <button className="bg-white text-gray-700 px-5 py-2.5 rounded-full border border-gray-100 hover:border-accent-coral hover:text-accent-coral transition-all duration-300 font-medium">
          Healthcare
        </button>
      </div>
    </div>
    
    {/* Grid with staggered animation and enhanced cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {guides.map((guide, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Card image */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            <img 
              src={guide.image || "/api/placeholder/400/320"} 
              alt={guide.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-accent-coral px-3 py-1 rounded-full text-xs font-medium">
                {guide.category}
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="bg-accent-coral text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                <i className="far fa-clock mr-1.5"></i>
                {guide.readTime || "5 min read"}
              </span>
            </div>
          </div>
          
          {/* Card content with improved layout */}
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${guide.bgColor || "bg-accent-coral/15"}`}>
                <i className={`fas ${guide.icon || "fa-paw"} ${guide.color || "text-accent-coral"}`}></i>
              </div>
              <div className="ml-3 text-xs text-muted-foreground">
                <span>Posted on {guide.date || "May 15, 2025"}</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold mb-3 group-hover:text-accent-coral transition-colors duration-300 line-clamp-2">
              {guide.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
              {guide.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={guide.authorAvatar || "/api/placeholder/32/32"} 
                    alt={guide.author || "Author"} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{guide.author || "Pet Expert"}</span>
              </div>
              <button className="text-accent-coral font-medium text-sm flex items-center group-hover:font-semibold">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Load more with enhanced styling */}
    <div className="mt-16 flex justify-center">
      <button className="group bg-white shadow-lg border border-gray-100 hover:bg-coral-gradient text-accent-coral hover:text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 inline-flex items-center">
        <span>Load More Guides</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
    
    {/* Stats section with improved visuals */}
    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
      <div className="bg-white p-6 rounded-2xl shadow-card text-center transform hover:translate-y-1 hover:shadow-card-hover transition-all duration-300">
        <div className="w-12 h-12 rounded-full bg-accent-coral/15 flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-book text-accent-coral"></i>
        </div>
        <div className="text-accent-coral text-3xl md:text-4xl font-bold mb-1">200+</div>
        <p className="text-muted-foreground text-sm">Pet Care Articles</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-card text-center transform hover:translate-y-1 hover:shadow-card-hover transition-all duration-300">
        <div className="w-12 h-12 rounded-full bg-accent-coral/15 flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-user-md text-accent-coral"></i>
        </div>
        <div className="text-accent-coral text-3xl md:text-4xl font-bold mb-1">50+</div>
        <p className="text-muted-foreground text-sm">Expert Contributors</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-card text-center transform hover:translate-y-1 hover:shadow-card-hover transition-all duration-300">
        <div className="w-12 h-12 rounded-full bg-accent-coral/15 flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-users text-accent-coral"></i>
        </div>
        <div className="text-accent-coral text-3xl md:text-4xl font-bold mb-1">15k</div>
        <p className="text-muted-foreground text-sm">Monthly Readers</p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-card text-center transform hover:translate-y-1 hover:shadow-card-hover transition-all duration-300">
        <div className="w-12 h-12 rounded-full bg-accent-coral/15 flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-star text-accent-coral"></i>
        </div>
        <div className="text-accent-coral text-3xl md:text-4xl font-bold mb-1">4.9</div>
        <p className="text-muted-foreground text-sm">Average Rating</p>
      </div>
    </div>
  </div>
</section>

{/* Newsletter Section */}
<section className="py-20 relative overflow-hidden bg-coral-gradient">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-8 border-white/20"></div>
    <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border-8 border-white/20"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-8 border-white/10"></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
        <div className="text-center mb-8">
          <span className="text-accent-coral text-sm font-semibold tracking-wider uppercase mb-3 inline-block">Join Our Community</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display bg-clip-text">Stay Updated with Pet Care Tips</h2>
          <p className="text-muted-foreground">
            Subscribe to our newsletter to receive weekly pet care advice, new guides alerts, and exclusive content tailored to your furry friends.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="far fa-envelope text-muted-foreground"></i>
            </div>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="pl-10 pr-4 py-3.5 rounded-lg w-full text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-coral focus:border-transparent"
            />
          </div>
          <button className="bg-coral-gradient text-white px-6 py-3.5 rounded-lg font-medium transition-all duration-300 hover:shadow-button-hover transform hover:-translate-y-1 whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p className="flex items-center">
            <i className="fas fa-shield-alt mr-2"></i>
            We respect your privacy. Unsubscribe at any time.
          </p>
          <p className="flex items-center mt-3 sm:mt-0">
            <i className="fas fa-check-circle mr-2 text-accent-coral"></i>
            Join 15,000+ pet parents
          </p>
        </div>
        
        {/* Testimonial */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                <img src="/api/placeholder/48/48" alt="Satisfied subscriber" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-sm italic text-muted-foreground">&quot;The weekly tips have been incredibly helpful for my new puppy. Highly recommend subscribing!&quot;</p>
              <p className="text-sm font-medium mt-1">— Sarah T., Dog Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Expert Section */}
<section className="py-20 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-feature-lightPink rounded-full opacity-30 -mr-20 -mt-20"></div>
  <div className="absolute bottom-0 left-0 w-48 h-48 bg-feature-lightPink rounded-full opacity-20 -ml-16 -mb-16"></div>
  
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left side - Image with decorative elements */}
      <div className="md:w-1/2 relative">
        <div className="relative z-10 rounded-4xl overflow-hidden shadow-app transition-all duration-300 hover:shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-primary-coral opacity-10 z-10"></div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1661963279669-48d017318c96?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Veterinarian with pet"
            className="w-full h-auto object-cover object-center transition-transform duration-700 hover:scale-105"
            width={1169}
            height={780}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1169px"
            priority
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary-coral opacity-10 rounded-2xl z-0 animate-pulse-gentle"></div>
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-coral opacity-10 rounded-full z-0"></div>
        
        {/* Floating badge */}
        <div className="absolute -bottom-5 left-1/4 transform -translate-x-1/2 bg-white rounded-2xl shadow-card py-3 px-5 z-20">
          <div className="flex items-center gap-2">
            <div className="bg-primary-coral bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-coral" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Trusted by</p>
              <p className="font-medium">10,000+ Pet Owners</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Content */}
      <div className="md:w-1/2">
        <div className="bg-gradient-to-r from-primary-coral to-primary-light bg-clip-text text-transparent inline-block mb-2 font-medium">Our Expertise</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display leading-tight">Created by Pet Care <span className="text-primary-coral">Experts</span></h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          Our guides are written and reviewed by a team of veterinarians, animal behaviorists, and pet care specialists with decades of combined experience. Trust that you&apos;re getting accurate, up-to-date information for your beloved companions.
        </p>
        
        <div className="space-y-5 mb-10">
          <div className="flex items-center bg-feature-lightPink bg-opacity-40 rounded-2xl p-3 transform transition-all duration-300 hover:translate-x-2">
            <div className="w-10 h-10 bg-primary-coral bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-coral" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Peer-reviewed by licensed veterinarians</span>
          </div>
          
          <div className="flex items-center bg-feature-lightPink bg-opacity-40 rounded-2xl p-3 transform transition-all duration-300 hover:translate-x-2">
            <div className="w-10 h-10 bg-primary-coral bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-coral" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Updated regularly with the latest research</span>
          </div>
          
          <div className="flex items-center bg-feature-lightPink bg-opacity-40 rounded-2xl p-3 transform transition-all duration-300 hover:translate-x-2">
            <div className="w-10 h-10 bg-primary-coral bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-coral" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Practical and actionable advice</span>
          </div>
        </div>
        
        <a 
          href="#" 
          className="bg-coral-gradient text-white px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-button hover:shadow-button-hover hover:-translate-y-1"
        >
          Meet Our Experts
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
      </main>
      )
}