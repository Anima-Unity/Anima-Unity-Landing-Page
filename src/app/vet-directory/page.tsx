// pages/vet-directory.tsx
'use client'

import React, { useState } from 'react';

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
}

const VetDirectory: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const vets: Vet[] = [
    {
      id: 1,
      name: "Dr. Emily Carter",
      specialty: "Small Animal Medicine",
      location: "PetCare Clinic, 123 Main St",
      distance: "2.3 miles",
      rating: 4.9,
      reviewCount: 127,
      availability: "Available today",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962708264-d7f9e2026e2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      imageUrl: "https://plus.unsplash.com/premium_photo-1661962233314-d5bd7635e0d1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      imageUrl: "https://plus.unsplash.com/premium_photo-1664304060029-662e73fc5aea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      imageUrl: "/images/vets/vet-4.jpg"
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
      imageUrl: "/images/vets/vet-5.jpg"
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
      imageUrl: "/images/vets/vet-6.jpg"
    }
  ];

  const filters = ['All', 'Small Animals', 'Exotic', 'Emergency', 'Surgery', 'Behavior & Training'];

  const filteredVets = selectedFilter === 'All' 
    ? vets 
    : vets.filter(vet => vet.specialty.includes(selectedFilter.replace('Small Animals', 'Small Animal')));

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50" data-aos="fade-up">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-orange-50 py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Veterinarian Directory
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find trusted veterinarians near you, browse by specialty, and book appointments easily.
          </p>
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Enter your location or zip code" 
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
            <button className="ml-4 bg-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-600 transition duration-200">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-6 px-4 md:px-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Available Veterinarians</h2>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Sort by:</span>
              <select className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Distance</option>
                <option>Rating</option>
                <option>Availability</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedFilter === filter
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vet Listings */}
      <div className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVets.map((vet) => (
              <div key={vet.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
                <div className="bg-gray-200 h-48 relative">
                  <div className="absolute w-full h-full flex items-center justify-center text-gray-500">
                    {/* Placeholder for actual images */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{vet.name}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {vet.availability}
                    </span>
                  </div>
                  <p className="text-sm text-orange-600 font-medium mb-2">{vet.specialty}</p>
                  <div className="mb-3">
                    <div className="flex items-center mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">{vet.location}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <span className="text-sm text-gray-600">{vet.distance}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {renderStars(vet.rating)}
                    </div>
                    <span className="text-sm text-gray-600">({vet.reviewCount} reviews)</span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-orange-500 text-white py-2 px-4 rounded font-medium hover:bg-orange-600 transition duration-200 flex-grow">
                      Book Appointment
                    </button>
                    <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded font-medium hover:bg-gray-100 transition duration-200">
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-blue-50 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Why Choose Our Vet Network?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our extensive network includes only verified and highly-rated veterinary professionals to ensure the best care for your pets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Verified Professionals</h3>
              <p className="text-gray-600">All veterinarians are thoroughly verified and must maintain high standards of care and expertise.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Find emergency veterinary care at any time of day or night through our network of professionals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Verified Reviews</h3>
              <p className="text-gray-600">All reviews come from actual pet owners who have used the services of our listed veterinarians.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetDirectory;