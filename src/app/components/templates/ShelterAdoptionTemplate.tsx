// Refactored implementation of the Shelter & Adoption section with updated color scheme (Option 1)
// This maintains the existing structure while updating the color palette to use primary teal with blue accents

"use client";
import { FaPaw, FaSearch, FaHeart, FaMapMarkerAlt, FaStar, FaCheck } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Image from 'next/image'

export default function ShelterAdoptionTemplate() {
  // Sample data for shelters
  const shelters = [
    { id: 1, name: "Happy Paws Shelter", location: "Jakarta", rating: 4.8, verified: true, pets: 23 },
    { id: 2, name: "Furry Friends Haven", location: "Bandung", rating: 4.5, verified: true, pets: 17 },
    { id: 3, name: "Whisker Sanctuary", location: "Surabaya", rating: 4.9, verified: true, pets: 31 },
  ];

  // Sample data for adoptable pets
  const pets = [
    { 
      id: 1, 
      name: "Buddy", 
      type: "Dog", 
      breed: "Golden Retriever", 
      age: "2 years", 
      gender: "Male",
      image: "https://images.unsplash.com/photo-1653356162165-ed104b1f90cb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { id: 2, name: "Luna", type: "Cat", breed: "Siamese", age: "1.5 years", gender: "Female", image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { id: 3, name: "Max", type: "Dog", breed: "Labrador", age: "3 years", gender: "Male", image: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Bella", type: "Cat", breed: "Persian", age: "8 months", gender: "Female", image: "https://images.unsplash.com/photo-1608032364895-0da67af36cd2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Updated with teal as primary color */}
      <section className="bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800 pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="flex items-center mb-2">
            <Badge className="bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300 mr-2">Anima Unity Feature</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Shelter & Adoption
            <span className="block text-primary mt-1">Find Your Perfect Match</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
            Find your perfect pet match with our verified shelter network and adoption tools.
            Our platform connects you with reputable shelters and simplifies the adoption process.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary-600 text-white px-8 py-2 text-base rounded-md">
              Browse Pets
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary-50 dark:hover:bg-gray-800 px-8 py-2 text-base rounded-md">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-12" data-aos="fade-up">
            Find your new companion with ease
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border-0">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                  <FaSearch className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-gray-800 dark:text-white">Verified Shelters</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  All shelters in our network are thoroughly vetted and regularly inspected
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border-0">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                  <FaPaw className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-gray-800 dark:text-white">Pet Matching Tool</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Find your perfect companion based on lifestyle, space, and preferences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border-0">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                  <FaHeart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-gray-800 dark:text-white">Simple Adoption Process</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Clear steps and guidance throughout the entire adoption journey
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pet Matching Tool - Updated background to teal palette */}
      <section className="py-16 px-6 bg-primary-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Find Your Perfect Pet Match
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Our intelligent matching algorithm helps you find the perfect pet based on your lifestyle, living situation, and preferences. Simply answer a few questions and we&apos;ll suggest pets that would be a great fit for your home.
              </p>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <Select>
                    <SelectTrigger className="border-gray-300 dark:border-gray-700">
                      <SelectValue placeholder="Pet Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Pets</SelectItem>
                      <SelectItem value="dog">Dogs</SelectItem>
                      <SelectItem value="cat">Cats</SelectItem>
                      <SelectItem value="other">Other Animals</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select>
                    <SelectTrigger className="border-gray-300 dark:border-gray-700">
                      <SelectValue placeholder="Age Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baby">Baby (0-6 months)</SelectItem>
                      <SelectItem value="young">Young (6 months-2 years)</SelectItem>
                      <SelectItem value="adult">Adult (2-8 years)</SelectItem>
                      <SelectItem value="senior">Senior (8+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select>
                    <SelectTrigger className="border-gray-300 dark:border-gray-700">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jakarta">Jakarta</SelectItem>
                      <SelectItem value="bandung">Bandung</SelectItem>
                      <SelectItem value="surabaya">Surabaya</SelectItem>
                      <SelectItem value="bali">Bali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary-600 text-white">
                  Find Matches
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1611170078485-6c1c9ca31936?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Pet matching interface" 
                  className="rounded-lg shadow-lg w-full"
                  width={1170}  // Set the reference width
                  height={780}  // Set the reference height
                  layout="responsive" // This makes the image responsive to its container's width
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500 flex items-center gap-1">
                      <FaCheck /> <span className="font-medium">94% Match Rate</span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Based on 1,000+ successful adoptions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Shelters */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2" data-aos="fade-up">
            Featured Shelters
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8" data-aos="fade-up">
            Browse our network of verified animal shelters with the highest standards of care
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
            {shelters.map((shelter) => (
              <Card key={shelter.id} className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border-0">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-800 dark:text-white">{shelter.name}</CardTitle>
                    {shelter.verified && (
                      <Badge className="bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                    <FaMapMarkerAlt className="text-primary" /> {shelter.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-blue-400" />
                      <span className="font-medium">{shelter.rating}</span>
                      <span className="text-gray-500 text-sm">(120 reviews)</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{shelter.pets} pets available</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary-50 dark:hover:bg-gray-800">
                    View Pets
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8" data-aos="fade-up">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary-50 dark:hover:bg-gray-800">
              View All Shelters
            </Button>
          </div>
        </div>
      </section>

      {/* Adoption Process - Alternating background with teal */}
      <section className="py-16 px-6 bg-primary-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-12" data-aos="fade-up">
            Simple 3-Step Adoption Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
            {[
              { 
                step: "1", 
                title: "Browse & Match", 
                desc: "Search through our database of pets or take our matching quiz", 
                icon: <FaSearch className="w-6 h-6" /> 
              },
              { 
                step: "2", 
                title: "Meet & Greet", 
                desc: "Schedule a visit to meet your potential new family member", 
                icon: <FaPaw className="w-6 h-6" /> 
              },
              { 
                step: "3", 
                title: "Welcome Home", 
                desc: "Complete the adoption process and welcome your pet home", 
                icon: <FaHeart className="w-6 h-6" /> 
              },
            ].map((item) => (
              <div key={item.step} className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Featured Pets */}
<section className="py-16 px-6 bg-white dark:bg-gray-900">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2" data-aos="fade-up">
      Pets Looking for Homes
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-8" data-aos="fade-up">
      Meet some of the wonderful animals currently available for adoption
    </p>
    
    {/* Add Filter Buttons like in reference */}
    <div className="flex flex-wrap gap-2 mb-6" data-aos="fade-up">
      <Button variant="outline" size="sm">Dog</Button>
      <Button variant="outline" size="sm">Cat</Button>
      <Button variant="outline" size="sm">Others</Button>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
      {pets.map((pet) => (
        <Card key={pet.id} className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border-0 overflow-hidden h-full flex flex-col">
          <div className="relative aspect-[4/3]"> {/* Better aspect ratio */}
            <Image 
              src={pet.image || '/placeholder-pet.jpg'}
              alt={pet.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <Badge className="absolute top-2 right-2 bg-white/90 text-gray-800">
              {pet.type}
            </Badge>
          </div>
          <CardHeader className="pb-2 px-4 pt-3">
            <CardTitle className="text-md font-medium text-gray-800 dark:text-white">{pet.name}</CardTitle>
            <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
              {pet.breed} • {pet.age} • {pet.gender}
            </CardDescription>
          </CardHeader>
          <CardFooter className="px-4 pb-3 mt-auto">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary-50 dark:hover:bg-gray-700 text-sm">
              <FaHeart className="mr-2" /> Meet Me
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
    
    <div className="text-center mt-8" data-aos="fade-up">
      <Button variant="ghost" className="text-primary hover:bg-primary-50">
        Browse All Pets
      </Button>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Join Our Shelter Network
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Are you a shelter or rescue organization? Join our network to increase your visibility and help more animals find their forever homes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-primary hover:bg-primary-600 text-white px-8">
              Join as Shelter
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary-50 dark:hover:bg-gray-800 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}