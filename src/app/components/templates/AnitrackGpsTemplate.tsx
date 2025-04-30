"use client";

import { IoLocationOutline } from "react-icons/io5";
import { FaMobileAlt, FaHistory, FaBell, FaBatteryThreeQuarters, FaPaw } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';

export default function AnitrackGpsTemplate() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 px-6 bg-hero-pattern">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1 w-1 rounded-full bg-accent-coral"></span>
              <Badge className="bg-feature-lightPink text-accent-coral text-xs font-medium px-2 py-1 rounded-md">Pet Safety Solution</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-black mb-6 leading-tight">
              Keep Your Pet Safe <span className="text-primary-gradient">Anywhere</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Advanced pet tracking for peace of mind when traveling or at home. Simple systems that keep your furry family members safe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary rounded-full text-sm text-white px-8 py-6">Get Started</Button>
              <Button variant="outline" className="border-gray-200 text-muted-foreground hover:bg-muted rounded-full text-sm px-8 py-6 flex items-center gap-2">
                See How It Works
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#ff6b52" fillOpacity="0.1"/>
                  <path d="M10 8L14 12L10 16" stroke="#ff6b52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="relative z-10 bg-card rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-coral-gradient"></div>
              <div className="p-6">
                <Image 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNOZ_0WG2EDLaJdfugmevz-qqgEXIpakLjLgArhIkRQpolz2UdVZSgGk&s=10" 
                  alt="Pet Tracking Map" 
                  className="rounded-2xl w-full h-auto max-w-full"
                  width={800}
                  height={450}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                  }}
                />
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-feature-lightPink p-4 rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                        <IoLocationOutline className="w-5 h-5 text-primary-coral" />
                      </div>
                      <div className="text-xs text-gray-500 font-medium">Pet Status</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-2 w-2 bg-success rounded-full inline-block mr-2"></div>
                        <span className="text-xs font-medium">Active Now</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-feature-lightPink p-4 rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                        <FaHistory className="w-4 h-4 text-primary-coral" />
                      </div>
                      <div className="text-xs text-gray-500 font-medium">Quick Access</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">View Report</span>
                    </div>
                  </div>
                  
                  <div className="bg-feature-lightPink p-4 rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                        <FaBell className="w-4 h-4 text-primary-coral" />
                      </div>
                      <div className="text-xs text-gray-500 font-medium">New Alert</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">2 updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 -left-6 bg-white rounded-2xl p-4 shadow-button z-0 animate-pulse-gentle">
              <div className="flex items-center gap-3">
                <div className="bg-feature-lightPink w-8 h-8 rounded-full flex items-center justify-center">
                  <FaPaw className="text-sm text-primary-coral" />
                </div>
                <span className="text-sm font-medium text-gray-700">Safe Zone</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 -left-6 bg-white rounded-2xl p-4 shadow-button z-0 animate-pulse-gentle">
              <div className="flex items-center gap-3">
                <div className="bg-feature-lightPink w-8 h-8 rounded-full flex items-center justify-center">
                  <IoLocationOutline className="text-sm text-primary-coral" />
                </div>
                <span className="text-sm font-medium text-gray-700">Park Visit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-6 bg-feature-lightPink">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-accent-black mb-4">Keep your pets safe with GPS tracking</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our lightweight solution provides industry-leading accuracy with features designed for modern pet care needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <IoLocationOutline className="w-6 h-6" />,
                title: "Real-Time Tracking",
                desc: "Live updates every 5 seconds on your dashboard so you always know where your pet is.",
                color: "bg-white",
                textColor: "text-primary-coral"
              },
              {
                icon: <FaHistory className="w-5 h-5" />,
                title: "Journey History",
                desc: "Review your pet's past locations and activity patterns with detailed timeline views.",
                color: "bg-white",
                textColor: "text-primary-coral"
              },
              {
                icon: <FaBell className="w-5 h-5" />,
                title: "Smart Notifications",
                desc: "Create custom alerts and get instant notifications if your pet leaves designated safe zones.",
                color: "bg-white",
                textColor: "text-primary-coral"
              },
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 rounded-3xl overflow-hidden feature-card bg-card-gradient"
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 ${feature.color} rounded-full flex items-center justify-center mb-6 shadow-sm`}>
                    <div className={feature.textColor}>{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-medium text-accent-black mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Content Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-accent-black mb-6">
              Monitor your pet&apos;s location easily from anywhere
            </h2>
            <p className="text-muted-foreground mb-8">
              Our intuitive interface makes it simple to track, monitor, and ensure your pet&apos;s safety from any device.
            </p>
            
            <ul className="space-y-6">
              {[
                {
                  icon: <FaMobileAlt className="w-4 h-4" />,
                  title: "Mobile App Access",
                  desc: "Easy-to-use interface for all devices."
                },
                {
                  icon: <IoLocationOutline className="w-4 h-4" />,
                  title: "Precision Tracking",
                  desc: "Accuracy up to 10 feet with global connectivity."
                },
                {
                  icon: <FaBatteryThreeQuarters className="w-4 h-4" />,
                  title: "Long Battery Life",
                  desc: "Up to 7 days on a single charge."
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-feature-lightPink p-3 rounded-full shadow-button">
                    <div className="text-primary-coral">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-accent-black text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <Button className="btn-primary rounded-full text-sm px-6 py-6 text-white">
                Try it Free
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-4xl overflow-hidden shadow-app">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYwIhOH5QH3vkXh5t-HfB7rVa4DOd30bgzA5SMdgHSRGSDy86VP6EMpoB&s=10"
                alt="Pet tracking map"
                className="w-full h-auto"
                width={1200}
                height={630}
                loading="lazy"
                quality={90}
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                }}
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-6 bg-feature-lightPink paw-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-accent-black mb-4">How It Works?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple three-step process to start tracking your pet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                <div className="flex items-center mb-6">
                  <div className="bg-white shadow-button rounded-full w-14 h-14 flex items-center justify-center text-primary-coral font-semibold text-lg">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block h-1 w-24 bg-primary-light"></div>
                  )}
                </div>
                <h3 className="text-xl font-medium text-accent-black mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-center">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Button className="btn-primary rounded-full text-base px-8 py-6 text-white">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 border-y border-accent-coral border-opacity-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-base text-center text-muted-foreground mb-10">Trusted By Over 100+ Veterinarians and Pet Care Professionals</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            <div className="text-muted-foreground opacity-70 text-lg font-medium">VET PLUS</div>
            <div className="text-muted-foreground opacity-70 text-lg font-medium">PAWCARE</div>
            <div className="text-muted-foreground opacity-70 text-lg font-medium">PET HAVEN</div>
            <div className="text-muted-foreground opacity-70 text-lg font-medium">ANIMAL CARE</div>
            <div className="text-muted-foreground opacity-70 text-lg font-medium">PETWORLD</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-coral-gradient rounded-4xl text-white p-12 shadow-button-hover">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Ready to keep your pet safe?</h2>
            <p className="text-white opacity-90 mb-10 text-lg">
              Join thousands of pet owners who trust AniTrack GPS for their beloved companions.
              Get started in minutes with our simple setup process.
            </p>
            <Button className="bg-white text-primary-coral hover:bg-gray-50 rounded-full text-base px-8 py-6 shadow-button hover:shadow-button-hover transition-all duration-300">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}