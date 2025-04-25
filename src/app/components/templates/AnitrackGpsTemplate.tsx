"use client";

import { IoLocationOutline } from "react-icons/io5";
import { FaMobileAlt, FaHistory, FaBell, FaBatteryThreeQuarters, FaPaw } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image'

export default function AnitrackGpsTemplate() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1 w-1 rounded-full bg-teal-500"></span>
              <Badge className="bg-teal-50 text-teal-600 text-xs font-medium px-2 py-1 rounded-md">Pet Safety Solution</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Keep Your Pet Safe <span className="text-teal-500">Anywhere</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Advanced pet tracking for peace of mind when traveling or at home. Simple systems that keep your furry family members safe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-teal-500 hover:bg-teal-600 rounded-full text-sm text-white px-6 py-3">Get Started</Button>
              <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full text-sm px-6 py-3 flex items-center gap-2">
                See How It Works
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#14b8a6" fillOpacity="0.1"/>
                  <path d="M10 8L14 12L10 16" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-teal-400 to-blue-500"></div>
              <div className="p-4">
                <Image 
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNOZ_0WG2EDLaJdfugmevz-qqgEXIpakLjLgArhIkRQpolz2UdVZSgGk&s=10" 
  alt="Pet Tracking Map" 
  className="rounded-lg w-full h-auto max-w-full"
  width={800}  // Set appropriate width
  height={450} // Set appropriate height (maintain aspect ratio)
  loading="lazy" // Optional: for lazy loading
  style={{
    objectFit: 'cover', // or 'contain' depending on your needs
  }}
/>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-teal-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <IoLocationOutline className="w-4 h-4 text-teal-600" />
                      </div>
                      <div className="text-xs text-gray-500">Pet Status</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-2 w-2 bg-green-500 rounded-full inline-block mr-1"></div>
                        <span className="text-xs">Active Now</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <FaHistory className="w-3 h-3 text-blue-600" />
                      </div>
                      <div className="text-xs text-gray-500">Quick Access</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">View Report</span>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <FaBell className="w-3 h-3 text-blue-600" />
                      </div>
                      <div className="text-xs text-gray-500">New Alert</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">2 updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 -left-4 bg-blue-100 rounded-lg p-3 shadow-md z-0">
              <div className="flex items-center gap-2">
                <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                  <FaPaw className="text-xs text-blue-600" />
                </div>
                <span className="text-xs font-medium text-gray-700">Safe Zone</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 -left-4 bg-teal-100 rounded-lg p-3 shadow-md z-0">
              <div className="flex items-center gap-2">
                <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                  <IoLocationOutline className="text-xs text-teal-600" />
                </div>
                <span className="text-xs font-medium text-gray-700">Park Visit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Keep your pets safe with GPS tracking</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our lightweight solution provides industry-leading accuracy with features designed for modern pet care needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <IoLocationOutline className="w-5 h-5" />,
                title: "Real-Time Tracking",
                desc: "Live updates every 5 seconds on your dashboard so you always know where your pet is.",
                color: "bg-teal-100",
                textColor: "text-teal-600"
              },
              {
                icon: <FaHistory className="w-4 h-4" />,
                title: "Journey History",
                desc: "Review your pet's past locations and activity patterns with detailed timeline views.",
                color: "bg-blue-100",
                textColor: "text-blue-600"
              },
              {
                icon: <FaBell className="w-4 h-4" />,
                title: "Smart Notifications",
                desc: "Create custom alerts and get instant notifications if your pet leaves designated safe zones.",
                color: "bg-teal-100",
                textColor: "text-teal-600"
              },
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className={`w-10 h-10 ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                    <div className={feature.textColor}>{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Monitor your pet&apos;s location easily from anywhere
            </h2>
            <p className="text-gray-600 mb-8">
              Our intuitive interface makes it simple to track, monitor, and ensure your pet&apos;s safety from any device.
            </p>
            
            <ul className="space-y-4">
              {[
                {
                  icon: <FaMobileAlt className="w-3 h-3" />,
                  title: "Mobile App Access",
                  desc: "Easy-to-use interface for all devices."
                },
                {
                  icon: <IoLocationOutline className="w-3 h-3" />,
                  title: "Precision Tracking",
                  desc: "Accuracy up to 10 feet with global connectivity."
                },
                {
                  icon: <FaBatteryThreeQuarters className="w-3 h-3" />,
                  title: "Long Battery Life",
                  desc: "Up to 7 days on a single charge."
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`bg-teal-100 p-2 rounded-full`}>
                    <div className="text-teal-600">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <Button className="bg-teal-500 hover:bg-teal-600 rounded-full text-sm px-5 py-2.5 text-white">
                Try it Free
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <Image
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYwIhOH5QH3vkXh5t-HfB7rVa4DOd30bgzA5SMdgHSRGSDy86VP6EMpoB&s=10"
  alt="Pet tracking map"  // Always provide meaningful alt text
  className="rounded-2xl shadow-lg w-full h-auto"
  width={1200}          // Set appropriate intrinsic width
  height={630}         // Set appropriate intrinsic height (maintain aspect ratio)
  loading="lazy"       // Better performance for below-the-fold images
  quality={85}         // Optional: balance quality and performance
  style={{
    objectFit: 'cover', // Ensures proper filling of container
    maxWidth: '100%',  // Prevents overflow
  }}
  // Optional for Next.js Image:
  sizes="(max-width: 768px) 100vw, 80vw" // Responsive sizing hints
/>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-6 bg-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">How It Works?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple three-step process to start tracking your pet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Activate Tracker",
                desc: "Attach the lightweight GPS device to your pet's collar"
              },
              {
                step: "2",
                title: "Connect App",
                desc: "Download our app and pair it with your pet's tracker"
              },
              {
                step: "3",
                title: "Track Anywhere",
                desc: "Monitor your pet's location in real-time"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center mb-4">
                  <div className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-teal-500 font-medium">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block h-0.5 w-24 bg-teal-200"></div>
                  )}
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Button className="bg-teal-500 hover:bg-teal-600 rounded-full text-sm px-6 py-3 text-white">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-6 border-y border-teal-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-center text-gray-500 mb-8">Trusted By Over 100+ Veterinarians and Pet Care Professionals</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 opacity-70">VET PLUS</div>
            <div className="text-gray-400 opacity-70">PAWCARE</div>
            <div className="text-gray-400 opacity-70">PET HAVEN</div>
            <div className="text-gray-400 opacity-70">ANIMAL CARE</div>
            <div className="text-gray-400 opacity-70">PETWORLD</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl text-white p-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to keep your pet safe?</h2>
            <p className="text-teal-50 mb-8">
              Join thousands of pet owners who trust AniTrack GPS for their beloved companions.
              Get started in minutes with our simple setup process.
            </p>
            <Button className="bg-white text-teal-600 hover:bg-teal-50 rounded-full text-sm px-6 py-3">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}