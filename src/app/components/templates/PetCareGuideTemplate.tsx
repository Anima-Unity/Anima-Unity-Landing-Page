import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GuideCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
  color: string;
}

const GuideCard: React.FC<GuideCardProps> = ({ title, description, icon, category, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
      <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${color}`}>
        <span className="text-white text-xl">{icon}</span>
      </div>
      <span className="text-sm font-medium text-gray-500 mb-2 block">{category}</span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <Link 
          href="#" 
          className="text-orange-500 font-medium inline-flex items-center hover:text-orange-600"
        >
          Read more 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

interface FeaturedGuideProps {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}

const FeaturedGuide: React.FC<FeaturedGuideProps> = ({ title, description, image, author, date }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {author} · {date}</span>
          <Link 
            href="#" 
            className="text-orange-500 font-medium inline-flex items-center hover:text-orange-600"
          >
            Read article
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function PetCareGuideTemplate() {
  
  const guides = [
    {
      title: "New Puppy Care",
      description: "Essential tips for welcoming a new puppy into your home, including training and socialization.",
      icon: "🐶",
      category: "Dogs",
      color: "bg-blue-500"
    },
    {
      title: "Cat Nutrition Guide",
      description: "Learn about proper feline nutrition, dietary needs, and feeding schedules.",
      icon: "🐱",
      category: "Cats",
      color: "bg-orange-500"
    },
    {
      title: "Senior Pet Health",
      description: "Special care tips for aging pets to ensure comfort and quality of life.",
      icon: "❤️",
      category: "Healthcare",
      color: "bg-red-500"
    },
    {
      title: "Pet Emergency Care",
      description: "How to recognize emergency situations and provide first aid for your pet.",
      icon: "🚑",
      category: "Healthcare",
      color: "bg-red-500"
    },
    {
      title: "Building a Safe Space",
      description: "Guidelines for creating a pet-friendly home environment.",
      icon: "🏠",
      category: "Lifestyle",
      color: "bg-green-500"
    },
    {
      title: "Exercise & Enrichment",
      description: "Activities and exercise routines to keep your pet physically and mentally stimulated.",
      icon: "🎾",
      category: "Lifestyle",
      color: "bg-green-500"
    }
  ];

  const featuredGuides = [
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
      <main data-aos="fade-up" >
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-gray-800">Expert </span>
                  <span className="text-orange-500">Pet Care</span>
                  <br />
                  <span className="text-gray-800">Guides & Resources</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Comprehensive guides, tips, and advice for pet parents, 
                  created by veterinarians and animal care experts.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition">
                    Browse All Guides
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition">
                    Subscribe to Updates
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="bg-orange-100 rounded-3xl p-8 relative z-10">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📚</span>
                      </div>
                      <div>
                        <h3 className="font-bold">1,000+ Pet Care Resources</h3>
                        <p className="text-gray-600 text-sm">From health guides to training tips</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👨‍⚕️</span>
                      </div>
                      <div>
                        <h3 className="font-bold">Vet-Approved Content</h3>
                        <p className="text-gray-600 text-sm">Created and reviewed by professionals</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <div>
                        <h3 className="font-bold">Regular Updates</h3>
                        <p className="text-gray-600 text-sm">Fresh content added weekly</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Popular Guide Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our extensive collection of pet care resources organized by categories to find exactly what you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center hover:shadow-md transition">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐶</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Dogs</h3>
                <p className="text-gray-600 mb-4">Comprehensive guides for dogs of all ages and breeds.</p>
                <Link 
                  href="#" 
                  className="text-orange-500 font-medium inline-flex items-center justify-center hover:text-orange-600"
                >
                  View guides
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center hover:shadow-md transition">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cats</h3>
                <p className="text-gray-600 mb-4">Essential care information for your feline companions.</p>
                <Link 
                  href="#" 
                  className="text-orange-500 font-medium inline-flex items-center justify-center hover:text-orange-600"
                >
                  View guides
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center hover:shadow-md transition">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-600 mb-4">Medical advice, preventative care, and emergency guides.</p>
                <Link 
                  href="#" 
                  className="text-orange-500 font-medium inline-flex items-center justify-center hover:text-orange-600"
                >
                  View guides
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Featured Guides</h2>
              <Link 
                href="#" 
                className="text-orange-500 font-medium inline-flex items-center hover:text-orange-600"
              >
                View all guides
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredGuides.map((guide, index) => (
                <FeaturedGuide
                  key={index}
                  title={guide.title}
                  description={guide.description}
                  image={guide.image}
                  author={guide.author}
                  date={guide.date}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Regular Guides */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Latest Pet Care Guides</h2>
              <div className="flex space-x-2">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition">
                  All
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition">
                  Dogs
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition">
                  Cats
                </button>
                <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 transition">
                  Healthcare
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <GuideCard
                  key={index}
                  title={guide.title}
                  description={guide.description}
                  icon={guide.icon}
                  category={guide.category}
                  color={guide.color}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition inline-flex items-center">
                Load More Guides
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-orange-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Pet Care Tips</h2>
              <p className="text-lg mb-8 opacity-90">
                Subscribe to our newsletter to receive weekly pet care advice, new guides alerts, and exclusive content.
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-3 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
                <button className="bg-white text-orange-500 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm opacity-75">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Expert Section */}
        <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="relative">
          <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg relative z-10 overflow-hidden">
            {/* Using an img tag instead of background for better mobile support */}
            <Image 
              src="https://plus.unsplash.com/premium_photo-1661963279669-48d017318c96?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Veterinarian with pet" 
              className="w-full h-full object-cover object-center"
              loading="eager" // Force eager loading for this important image
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-orange-100 rounded-lg z-0"></div>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-3xl font-bold mb-6">Created by Pet Care Experts</h2>
        <p className="text-gray-600 mb-8">
          Our guides are written and reviewed by a team of veterinarians, animal behaviorists, and pet care specialists with decades of combined experience. Trust that you&apos;re getting accurate, up-to-date information for your beloved companions.
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700">Peer-reviewed by licensed veterinarians</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700">Updated regularly with the latest research</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700">Practical and actionable advice</span>
          </div>
          </div>
        <div className="mt-8">
          <a 
            href="#" 
            className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition inline-block"
          >
            Meet Our Experts
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>
      )
}