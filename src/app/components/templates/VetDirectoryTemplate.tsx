// pages/vet-directory.tsx
'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Clock, MapPin, Navigation, Phone } from 'lucide-react';

// Types
interface Vet {
  id: number;
  name: string;
  specialty: string;
  location: string;
  distance: string;
  rating: number;
  reviewCount: number;
  availability: string;
  imageUrl: string;
  specialties?: string | null;
  workingHours?: string | null;
}

// Constants
const FILTERS = ['All', 'Small Animals', 'Exotic', 'Emergency', 'Surgery', 'Behavior & Training'];
const MOCK_LOADING_TIME = 1500;

// Components
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = [];
  
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      // Full star
      stars.push(
        <svg key={i} className="w-4 h-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      // Half star
      stars.push(
        <svg key={i} className="w-4 h-4 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    } else {
      // Empty star
      stars.push(
        <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
  }
  
  return <div className="flex">{stars}</div>;
};

const VetCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-card overflow-hidden animate-pulse">
    <div className="bg-gray-200 h-48"></div>
    <div className="p-5">
      <div className="flex items-start justify-between mb-2">
        <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>
      <div className="space-y-2 mb-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
      <div className="flex items-center mb-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
          ))}
        </div>
        <div className="h-4 bg-gray-200 rounded w-16 ml-2"></div>
      </div>
      <div className="flex space-x-3">
        <div className="h-10 bg-gray-200 rounded flex-grow"></div>
        <div className="h-10 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
  </div>
);


const VetCard: React.FC<{ vet: Vet }> = ({ vet }) => (
  <div className="bg-card-gradient rounded-3xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border border-border/30">
    <div className="h-56 relative">
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-white/80 backdrop-blur-sm text-primary-coral text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
          {vet.availability}
        </span>
      </div>
      <Image 
        src={vet.imageUrl} 
        alt={`${vet.name} - ${vet.specialty}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4">
          <div className="flex space-x-2">
            {['Dogs', 'Cats', 'Birds'].map((specialty, index) => (
              vet.specialties?.includes(specialty) && (
                <span key={index} className="px-2 py-1 bg-white/80 backdrop-blur-sm text-xs font-medium rounded-full text-accent-black">
                  {specialty}
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-semibold text-accent-black">{vet.name}</h3>
          <p className="text-sm text-primary-coral font-medium">{vet.specialty}</p>
        </div>
        <div className="bg-feature-lightPink h-10 w-10 rounded-full flex items-center justify-center shadow-sm">
          <Phone size={18} className="text-primary-coral" />
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center">
          <MapPin size={16} className="text-primary-coral mr-2" />
          <span className="text-sm text-muted-foreground">{vet.location}</span>
        </div>
        <div className="flex items-center">
          <Navigation size={16} className="text-primary-coral mr-2" />
          <span className="text-sm text-muted-foreground">{vet.distance}</span>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="text-primary-coral mr-2" />
          <span className="text-sm text-muted-foreground">Available {vet.workingHours || '9AM - 5PM'}</span>
        </div>
      </div>
      
      <div className="flex items-center mb-5 bg-feature-lightGray rounded-lg p-2">
        <div className="flex mr-2">
          <StarRating rating={vet.rating} />
        </div>
        <span className="text-sm text-gray-600">({vet.reviewCount} reviews)</span>
        
        {vet.rating >= 4.5 && (
          <span className="ml-auto text-xs bg-success/10 text-success px-2 py-0.5 rounded-full font-medium">
            Top Rated
          </span>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-coral-gradient text-white py-3 px-4 rounded-xl font-semibold transition duration-300 ease-in-out transform hover:shadow-button-hover active:scale-95 shadow-button">
          Book Now
        </button>
        <button className="bg-white border border-border text-accent-black py-3 px-4 rounded-xl font-medium hover:bg-feature-lightPink transition duration-200 hover:text-primary-coral">
          View Profile
        </button>
      </div>
    </div>
  </div>
);



// Mock data service
const useMockVetData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [vets, setVets] = useState<Vet[]>([]);

  useEffect(() => {
    const fetchVets = async () => {
      setIsLoading(true);
      
      // Simulating API call with a timeout
      setTimeout(() => {
        setVets([
          {
            id: 1,
            name: "Dr. Emily Carter",
            specialty: "Small Animal Medicine",
            location: "PetCare Clinic, 123 Main St",
            distance: "2.3 miles",
            rating: 4.9,
            reviewCount: 127,
            availability: "Available today",
            imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=500&auto=format&fit=crop"
          },
          {
            id: 2,
            name: "Dr. Michael Roberts",
            specialty: "Emergency & Critical Care",
            location: "City Pet Hospital, 456 Oak Ave",
            distance: "3.7 miles",
            rating: 4.8,
            reviewCount: 93,
            availability: "Available tomorrow",
            imageUrl: "https://images.unsplash.com/photo-1612349316228-5942a9b489c2?q=80&w=500&auto=format&fit=crop"
          },
          {
            id: 3,
            name: "Dr. Sarah Johnson",
            specialty: "Feline Medicine",
            location: "Feline Wellness Center, 789 Pine Rd",
            distance: "1.5 miles",
            rating: 5.0,
            reviewCount: 156,
            availability: "Available today",
            imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=500&auto=format&fit=crop"
          },
          {
            id: 4,
            name: "Dr. David Wilson",
            specialty: "Canine Behavior & Training",
            location: "Happy Paws Veterinary, 101 Maple Dr",
            distance: "4.2 miles",
            rating: 4.7,
            reviewCount: 82,
            availability: "Available in 2 days",
            imageUrl: "https://images.unsplash.com/photo-1537815749002-de6a533c64db?q=80&w=500&auto=format&fit=crop"
          },
          {
            id: 5,
            name: "Dr. Jessica Lee",
            specialty: "Exotic Pet Medicine",
            location: "Exotic Animal Care, 202 Cedar Blvd",
            distance: "5.8 miles",
            rating: 4.9,
            reviewCount: 74,
            availability: "Available today",
            imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop"
          },
          {
            id: 6,
            name: "Dr. Robert Thompson",
            specialty: "Veterinary Surgery",
            location: "Advanced Vet Surgical Center, 303 Elm St",
            distance: "3.1 miles",
            rating: 4.8,
            reviewCount: 118,
            availability: "Available tomorrow",
            imageUrl: "https://images.unsplash.com/photo-1579165466741-7f35e4755182?q=80&w=500&auto=format&fit=crop"
          }
        ]);
        setIsLoading(false);
      }, MOCK_LOADING_TIME);
    };

    fetchVets();
  }, []);

  return { vets, isLoading };
};

const VetDirectoryTemplate: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const { vets, isLoading } = useMockVetData();

  const filteredVets = selectedFilter === 'All' 
    ? vets 
    : vets.filter(vet => vet.specialty.includes(selectedFilter.replace('Small Animals', 'Small Animal')));

  const resetFilter = () => setSelectedFilter('All');

  return (
    <div className="min-h-screen bg-gray-50" data-aos="fade-up">
{/* Hero Section */}
<section className="relative py-24 px-4 md:px-8 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-hero-pattern opacity-70"></div>
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-coral opacity-5 rounded-full"></div>
  <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-primary-coral opacity-5 rounded-full"></div>
  
  {/* Floating decorative elements */}
  <div className="hidden md:block absolute top-1/4 left-16 w-12 h-12 bg-feature-lightPink rounded-full animate-pulse-gentle"></div>
  <div className="hidden md:block absolute bottom-1/4 right-16 w-16 h-16 bg-feature-lightPink rounded-full animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
  
  {/* Paw print patterns */}
  <div className="absolute top-0 left-0 w-full h-full paw-bg opacity-20"></div>
  
  <div className="max-w-5xl mx-auto text-center relative z-10">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
      <span className="w-2 h-2 bg-primary-coral rounded-full"></span>
      <span className="text-sm font-medium text-gray-700">Find Vets Near You</span>
      <span className="w-2 h-2 bg-primary-coral rounded-full"></span>
    </div>
    
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
      Your Pet&apos;s Health Is <span className="text-primary-gradient">Our Priority</span>
    </h1>
    
    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
      Find trusted veterinarians near you, browse by specialty, and book appointments easily. Your furry friends deserve the best care available.
    </p>
    
    <div className="bg-white rounded-3xl shadow-lg p-3 md:p-4 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-xl">
      <div className="relative flex-grow w-full mb-3 md:mb-0">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-coral">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Enter your location or zip code" 
          className="w-full py-4 pl-12 pr-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-coral text-gray-700"
        />
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-primary-coral transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
      </div>
      
      <button className="w-full md:w-auto md:ml-3 bg-coral-gradient text-white py-4 px-8 rounded-2xl font-medium transition-all duration-300 shadow-button hover:shadow-button-hover hover:-translate-y-1 flex items-center justify-center gap-2">
        <span>Find Vets</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
    
    {/* Popular searches */}
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <span className="text-sm text-gray-500">Popular:</span>
      <a href="#" className="text-sm text-primary-coral hover:underline transition-all">Emergency Vets</a>
      <span className="text-gray-300">•</span>
      <a href="#" className="text-sm text-primary-coral hover:underline transition-all">Dentistry</a>
      <span className="text-gray-300">•</span>
      <a href="#" className="text-sm text-primary-coral hover:underline transition-all">Exotic Pets</a>
      <span className="text-gray-300">•</span>
      <a href="#" className="text-sm text-primary-coral hover:underline transition-all">Dermatology</a>
    </div>
    
    {/* Trust indicators */}
    <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-12">
      <div className="flex flex-col items-center">
        <span className="font-bold text-2xl text-gray-800">5,000+</span>
        <span className="text-sm text-gray-500">Verified Vets</span>
      </div>
      <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-2xl text-gray-800">120k+</span>
        <span className="text-sm text-gray-500">Happy Pet Owners</span>
      </div>
      <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-2xl text-gray-800">98%</span>
        <span className="text-sm text-gray-500">Satisfaction Rate</span>
      </div>
    </div>
  </div>
</section>

{/* Filter Section */}
<section className="py-8 px-4 md:px-8 border-b border-gray-200 bg-gradient-to-r from-white to-feature-lightPink">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
      <div className="flex items-center mb-4 md:mb-0">
        <i className="fas fa-user-md text-accent-coral mr-3 text-xl"></i>
        <h2 className="text-2xl font-semibold text-gradient bg-coral-gradient">Available Veterinarians</h2>
      </div>
      
      <div className="flex items-center bg-white p-2 rounded-full shadow-card">
        <span className="text-gray-600 mr-2 text-sm font-medium ml-2">Sort by:</span>
        <select className="bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-accent-coral text-sm font-medium pr-8">
          <option>Distance</option>
          <option>Rating</option>
          <option>Availability</option>
        </select>
      </div>
    </div>
    
    <div className="flex flex-wrap gap-3 animate-fade-in">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            selectedFilter === filter
              ? 'bg-coral-gradient text-white shadow-button-hover'
              : 'bg-white text-gray-700 hover:bg-gray-50 shadow-card'
          }`}
          onClick={() => setSelectedFilter(filter)}
          disabled={isLoading}
        >
          {filter === 'All' && <i className="fas fa-globe-americas mr-2"></i>}
          {filter === 'Dogs' && <i className="fas fa-dog mr-2"></i>}
          {filter === 'Cats' && <i className="fas fa-cat mr-2"></i>}
          {filter === 'Birds' && <i className="fas fa-dove mr-2"></i>}
          {filter === 'Reptiles' && <i className="fas fa-dragon mr-2"></i>}
          {filter === 'Small Pets' && <i className="fas fa-rabbit mr-2"></i>}
          {filter === 'Exotic' && <i className="fas fa-paw mr-2"></i>}
          {filter}
        </button>
      ))}
    </div>
    
    {isLoading && (
      <div className="flex justify-center mt-4">
        <div className="inline-flex items-center px-4 py-2 bg-feature-lightPink rounded-full text-sm font-medium text-accent-coral animate-pulse-gentle">
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-accent-coral" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading veterinarians...
        </div>
      </div>
    )}
  </div>
</section>

{/* Vet Listings */}
<section className="py-10 px-4 md:px-8 bg-white relative">
  {/* Subtle decorative pattern */}
  <div className="absolute inset-0 opacity-5 paw-bg pointer-events-none"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    {isLoading ? (
      // Loading state with improved animations
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <VetCardSkeleton />
          </div>
        ))}
      </div>
    ) : filteredVets.length > 0 ? (
      // Loaded state with results and animations
      <>
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 font-medium">
            <span className="text-accent-coral font-semibold">{filteredVets.length}</span> veterinarians found
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center text-sm text-accent-coral hover:text-accent-coral/80 transition-colors"
          >
            <i className="fas fa-arrow-up mr-2"></i> Back to top
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVets.map((vet, index) => (
            <div 
              key={vet.id} 
              className="transform transition-all duration-500 hover:translate-y-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <VetCard vet={vet} />
            </div>
          ))}
        </div>
      </>
    ) : (
      // No results with improved styling
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <div className="bg-feature-lightPink w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-card">
          <i className="fas fa-search text-3xl text-accent-coral"></i>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">No veterinarians found</h3>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          We couldn&apos;t find any veterinarians matching your current filter. 
          Please try a different category or reset your filter.
        </p>
        <button
          onClick={resetFilter}
          className="px-6 py-3 rounded-full bg-coral-gradient text-white shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:scale-105 flex items-center"
        >
          <i className="fas fa-sync-alt mr-2"></i>
          Reset Filter
        </button>
      </div>
    )}
  </div>
</section>

{/* Featured Section */}
<section className="bg-gradient-to-b from-white to-feature-lightPink py-16 px-4 md:px-8 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-primary-light rounded-full opacity-5 transform -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full opacity-5 transform translate-x-1/3 translate-y-1/3"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-1 bg-white text-accent-coral rounded-full text-sm font-medium shadow-card mb-4">
        <i className="fas fa-medal mr-2"></i>Premium Care Network
      </span>
      <h2 className="text-3xl font-bold mb-4 text-gradient bg-primary-gradient">Why Choose Our Vet Network?</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Our extensive network includes only verified and highly-rated veterinary professionals to ensure the best care for your pets.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature Card 1: Verified Professionals */}
      <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transform transition-all duration-500 hover:-translate-y-2 group animate-fade-in">
        <div className="p-8">
          <div className="w-16 h-16 rounded-full bg-feature-lightPink flex items-center justify-center mb-6 group-hover:bg-accent-coral group-hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-coral group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-accent-coral transition-colors duration-300">Verified Professionals</h3>
          <p className="text-gray-600">All veterinarians are thoroughly verified and must maintain high standards of care and expertise.</p>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <span className="text-sm text-accent-coral flex items-center font-medium">
              <span>Learn about our verification process</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      
      {/* Feature Card 2: 24/7 Availability */}
      <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transform transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: '150ms' }}>
        <div className="p-8">
          <div className="w-16 h-16 rounded-full bg-feature-lightPink flex items-center justify-center mb-6 group-hover:bg-accent-coral group-hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-coral group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-accent-coral transition-colors duration-300">24/7 Availability</h3>
          <p className="text-gray-600">Find emergency veterinary care at any time of day or night through our network of professionals.</p>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <span className="text-sm text-accent-coral flex items-center font-medium">
              <span>Find emergency care now</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      
      {/* Feature Card 3: Verified Reviews */}
      <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transform transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: '300ms' }}>
        <div className="p-8">
          <div className="w-16 h-16 rounded-full bg-feature-lightPink flex items-center justify-center mb-6 group-hover:bg-accent-coral group-hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-coral group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-accent-coral transition-colors duration-300">Verified Reviews</h3>
          <p className="text-gray-600">All reviews come from actual pet owners who have used the services of our listed veterinarians.</p>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <span className="text-sm text-accent-coral flex items-center font-medium">
              <span>Read our customer testimonials</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
    
    {/* Additional trust indicators */}
    <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
      <img src="/api/placeholder/100/40" alt="Veterinary Association" className="h-10 grayscale hover:grayscale-0 transition-all duration-300" />
      <img src="/api/placeholder/100/40" alt="Pet Health Organization" className="h-10 grayscale hover:grayscale-0 transition-all duration-300" />
      <img src="/api/placeholder/100/40" alt="Animal Care Institute" className="h-10 grayscale hover:grayscale-0 transition-all duration-300" />
      <img src="/api/placeholder/100/40" alt="Pet Owners Association" className="h-10 grayscale hover:grayscale-0 transition-all duration-300" />
    </div>
  </div>
</section>

{/* Stats Section */}
<section className="py-20 px-4 md:px-8 relative overflow-hidden">
  {/* Background with subtle pattern and gradient */}
  <div className="absolute inset-0 bg-feature-lightPink paw-bg opacity-40 z-0"></div>
  
  {/* Decorative gradient circles */}
  <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary-light opacity-10 blur-3xl"></div>
  <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-primary-light opacity-10 blur-3xl"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    <div className="text-center mb-12" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-gradient text-gradient">Our Network By The Numbers</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Join thousands of pet owners who trust our platform for their pet healthcare needs.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
      {/* Stat Cards with hover effects */}
      <div className="bg-card-gradient rounded-3xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-coral bg-opacity-10 mb-4">
          <i className="fas fa-home text-xl text-primary-coral"></i>
        </div>
        <div className="text-5xl font-bold text-primary-coral mb-2 animate-pulse-gentle">250+</div>
        <div className="text-gray-700 font-medium">Partner Shelters</div>
      </div>
      
      <div className="bg-card-gradient rounded-3xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-blue bg-opacity-10 mb-4">
          <i className="fas fa-user-md text-xl text-accent-blue"></i>
        </div>
        <div className="text-5xl font-bold text-accent-blue mb-2 animate-pulse-gentle">1,000+</div>
        <div className="text-gray-700 font-medium">Verified Veterinarians</div>
      </div>
      
      <div className="bg-card-gradient rounded-3xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-green bg-opacity-10 mb-4">
          <i className="fas fa-paw text-xl text-accent-green"></i>
        </div>
        <div className="text-5xl font-bold text-accent-green mb-2 animate-pulse-gentle">50,000+</div>
        <div className="text-gray-700 font-medium">Pets Treated</div>
      </div>
      
      <div className="bg-card-gradient rounded-3xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success bg-opacity-10 mb-4">
          <i className="fas fa-heart text-xl text-success"></i>
        </div>
        <div className="text-5xl font-bold text-success mb-2 animate-pulse-gentle">98%</div>
        <div className="text-gray-700 font-medium">Satisfaction Rate</div>
      </div>
    </div>
    
    {/* Call to action button */}
    <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
      <a href="#join-now" className="btn-primary inline-flex items-center px-6 py-3 text-white font-medium rounded-full text-lg shadow-button hover:shadow-button-hover">
        Join Our Network
        <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="relative py-20 px-4 md:px-8 overflow-hidden">
  {/* Background with gradient */}
  <div className="absolute inset-0 bg-primary-gradient opacity-95 z-0"></div>
  
  {/* Animated shapes */}
  <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"></div>
  
  {/* Paw pattern overlay */}
  <div className="absolute inset-0 paw-bg opacity-5 z-1"></div>
  
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <div data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to find the perfect vet for your pet?</h2>
      <p className="text-xl text-white opacity-90 mb-10 max-w-3xl mx-auto">Join thousands of happy pet owners who have found reliable veterinary care through our platform.</p>
    </div>
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8" data-aos="fade-up" data-aos-delay="200">
      <a href="#download" className="group bg-white py-4 px-8 rounded-full font-semibold flex items-center justify-center gap-3 text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 min-w-64">
        <i className="fas fa-download text-primary-coral"></i>
        <span className="text-primary-coral">Download Our App</span>
      </a>
      
      <a href="#learn-more" className="group bg-transparent border-2 border-white py-4 px-8 rounded-full font-semibold text-white flex items-center justify-center gap-3 text-lg hover:bg-white hover:text-primary-coral transform transition-all duration-300 hover:-translate-y-1 min-w-64">
        <span>Learn More</span>
        <i className="fas fa-arrow-right transform transition-transform duration-300 group-hover:translate-x-1"></i>
      </a>
    </div>
    
    {/* App store badges */}
    <div className="flex flex-wrap justify-center gap-4 mt-10" data-aos="fade-up" data-aos-delay="400">
      <a href="#app-store" className="bg-black bg-opacity-20 py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-opacity-30 transition duration-300">
        <i className="fab fa-apple text-2xl text-white"></i>
        <div className="text-left">
          <div className="text-xs text-white opacity-80">Download on the</div>
          <div className="text-white font-medium">App Store</div>
        </div>
      </a>
      
      <a href="#play-store" className="bg-black bg-opacity-20 py-3 px-6 rounded-xl flex items-center gap-3 hover:bg-opacity-30 transition duration-300">
        <i className="fab fa-google-play text-2xl text-white"></i>
        <div className="text-left">
          <div className="text-xs text-white opacity-80">GET IT ON</div>
          <div className="text-white font-medium">Google Play</div>
        </div>
      </a>
    </div>
    
    {/* Trust indicators */}
    <div className="mt-12 flex flex-wrap justify-center gap-6 text-white opacity-90" data-aos="fade-up" data-aos-delay="600">
      <div className="flex items-center gap-2">
        <i className="fas fa-shield-alt"></i>
        <span>Secure & Private</span>
      </div>
      <div className="flex items-center gap-2">
        <i className="fas fa-star"></i>
        <span>4.9/5 Rating</span>
      </div>
      <div className="flex items-center gap-2">
        <i className="fas fa-headset"></i>
        <span>24/7 Support</span>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default VetDirectoryTemplate;