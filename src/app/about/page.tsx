// src/app/about/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Shield, Heart, Lightbulb, Globe, Medal, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  // Stats counter animation
  const [shelters, setShelters] = useState(0);
  const [vets, setVets] = useState(0);
  const [pets, setPets] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShelters(prev => (prev < 1200 ? prev + 20 : 1200));
      setVets(prev => (prev < 4500 ? prev + 75 : 4500));
      setPets(prev => (prev < 65000 ? prev + 1000 : 65000));
      setSatisfaction(prev => (prev < 98 ? prev + 2 : 98));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative px-4 pt-20 pb-16 overflow-hidden bg-hero-pattern md:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="px-4 py-1 mb-6 text-sm bg-primary/10 text-primary border-primary/20">
                About Anima Unity
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Pioneering the Future of
              <span className="text-primary-gradient"> Animal Welfare</span>
            </motion.h1>
            
            <motion.p 
              className="max-w-2xl mx-auto mb-8 text-lg text-secondary-dark md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Anima Unity merges cutting-edge technology with compassionate care, creating innovative solutions for animal welfare organizations worldwide.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button className="px-6 text-white transition-all shadow-button hover:shadow-button-hover">
                Join Our Mission <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="px-6 transition-all border-primary hover:bg-primary/5">
                View Our Solutions
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="px-4 py-16 bg-white md:px-6 lg:px-8 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Story</h2>
              <p className="mb-6 text-base text-secondary-dark md:text-lg">
                Anima Unity was founded in 2020 by a team of veterinarians, animal welfare experts, and technology specialists with a shared vision: to revolutionize animal welfare through innovation.
              </p>
              <p className="mb-6 text-base text-secondary-dark md:text-lg">
                What began as a digital platform for shelter management has evolved into a comprehensive ecosystem of tools, resources, and networks dedicated to improving animal lives across the globe.
              </p>
              <p className="text-base text-secondary-dark md:text-lg">
                Today, we&apos;re proud to support thousands of organizations worldwide, connecting animal welfare professionals with the technology they need to make a difference.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="relative h-[400px] rounded-3xl overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Anima Unity team collaborating" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <Badge className="mb-4 bg-primary">Est. 2020</Badge>
                <p className="text-lg font-medium text-white">From vision to global impact</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100 md:px-6 lg:px-8 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Mission & Values</h2>
            <p className="max-w-3xl mx-auto text-base text-secondary-dark md:text-lg">
              At the core of everything we do is a commitment to creating a world where all animals receive the care, protection, and dignity they deserve.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="overflow-hidden transition-all bg-white rounded-2xl shadow-card hover:shadow-card-hover">
              <div className="p-6 md:p-8">
                <div className="p-3 mb-6 text-white rounded-full w-14 h-14 bg-accent-blue">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Protection</h3>
                <p className="text-secondary-dark">
                  We believe every animal deserves safety, dignity, and the highest standard of care possible, regardless of circumstance.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="overflow-hidden transition-all bg-white rounded-2xl shadow-card hover:shadow-card-hover">
              <div className="p-6 md:p-8">
                <div className="p-3 mb-6 text-white rounded-full w-14 h-14 bg-accent-teal">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Compassion</h3>
                <p className="text-secondary-dark">
                  Our approach blends technology with empathy, ensuring that every solution we create puts animal wellbeing at the center.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="overflow-hidden transition-all bg-white rounded-2xl shadow-card hover:shadow-card-hover">
              <div className="p-6 md:p-8">
                <div className="p-3 mb-6 text-white rounded-full w-14 h-14 bg-accent-green">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Innovation</h3>
                <p className="text-secondary-dark">
                  We constantly push boundaries to create transformative technologies that solve real-world problems in animal welfare.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="px-4 py-16 bg-white md:px-6 lg:px-8 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Global Impact</h2>
            <p className="max-w-3xl mx-auto text-base text-secondary-dark md:text-lg">
              Through innovation and collaboration, we&apos;re building a better world for animals everywhere. Here&apos;s our impact so far:
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="p-6 text-center rounded-2xl bg-stat-shelters">
              <p className="mb-2 text-4xl font-bold text-secondary-dark">{shelters.toLocaleString()}+</p>
              <p className="text-secondary-dark">Shelters Supported</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="p-6 text-center rounded-2xl bg-stat-vets">
              <p className="mb-2 text-4xl font-bold text-secondary-dark">{vets.toLocaleString()}+</p>
              <p className="text-secondary-dark">Veterinarians Connected</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="p-6 text-center rounded-2xl bg-stat-pets">
              <p className="mb-2 text-4xl font-bold text-secondary-dark">{pets.toLocaleString()}+</p>
              <p className="text-secondary-dark">Animals Helped</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="p-6 text-center rounded-2xl bg-stat-satisfaction">
              <p className="mb-2 text-4xl font-bold text-secondary-dark">{satisfaction}%</p>
              <p className="text-secondary-dark">Partner Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100 md:px-6 lg:px-8 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Leadership Team</h2>
            <p className="max-w-3xl mx-auto text-base text-secondary-dark md:text-lg">
              Driven by passion and expertise, our diverse team brings together decades of experience in veterinary science, animal welfare, and technology innovation.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Dr. Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "Veterinarian with over 15 years of experience in animal welfare technology and shelter management.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPuGhd3-L-pArUfUWNiUN7vT-SN59tW0x-6OhZzUs-LwxwmdEg3OypsuC&s=10"
              },
              {
                name: "Akhmad Fauzi",
                role: "CTO & Co-Founder",
                bio: "Former tech lead at major AI companies, focused on applying machine learning to animal health and welfare solutions.",
                image: "https://pbs.twimg.com/profile_images/1802338165715501056/elc0TeBu_400x400.jpg"
              },
              {
                name: "Dr. Aisha Patel",
                role: "Chief Veterinary Officer",
                bio: "Specialist in shelter medicine with a passion for accessible veterinary care and preventative health technologies.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyxwndTgGTDzb49gT5G5w17SnBQW2iSgk0A&usqp=CAU"
              }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="overflow-hidden bg-white rounded-2xl shadow-card"
              >
                <div className="relative w-full h-64">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="mb-4 text-primary">{member.role}</p>
                  <p className="text-secondary-dark">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Link href="/team" passHref>
              <Button variant="outline" className="border-primary">
                Meet Our Full Team <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="px-4 py-16 bg-white md:px-6 lg:px-8 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Approach</h2>
            <p className="max-w-3xl mx-auto text-base text-secondary-dark md:text-lg">
              We believe that technology should empower the compassionate work of animal welfare professionals, not complicate it.
            </p>
          </motion.div>
          
          <Tabs defaultValue="innovation" className="w-full">
            <motion.div 
              className="flex justify-center mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger value="innovation">Innovation</TabsTrigger>
                <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              </TabsList>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <TabsContent value="innovation">
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image 
                      src="https://cdn.dreampets.ai/web/styles_show/Celestial%20Dreams/Dachshund-astronaut-in-sci-fi-setting.jpg" 
                      alt="Innovation approach" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-4 text-2xl font-semibold">Technology with Purpose</h3>
                    <p className="mb-4 text-secondary-dark">
                      Our innovation process begins by identifying real challenges faced by animal welfare organizations. We work closely with shelters, veterinarians, and rescue groups to understand their unique needs.
                    </p>
                    <p className="mb-6 text-secondary-dark">
                      From there, our team of technologists and animal welfare experts collaborate to create solutions that are both cutting-edge and practical for everyday use.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "AI-powered health monitoring systems",
                        "Data-driven shelter management tools",
                        "Accessible telemedicine platforms",
                        "Community engagement technologies"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="p-1 rounded-full bg-primary/10">
                            <ChevronRight className="w-4 h-4 text-primary" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="collaboration">
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image 
                      src="https://static.wixstatic.com/media/dc50af_93502a3ac3e946f286503dcb0b887c68~mv2.jpg/v1/fill/w_800,h_534,al_c,q_85,enc_avif,quality_auto/dc50af_93502a3ac3e946f286503dcb0b887c68~mv2.jpg" 
                      alt="Collaboration approach" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-4 text-2xl font-semibold">Better Together</h3>
                    <p className="mb-4 text-secondary-dark">
                      We believe the greatest challenges in animal welfare can only be solved through strong partnerships and collaborative networks of dedicated professionals.
                    </p>
                    <p className="mb-6 text-secondary-dark">
                      Anima Unity facilitates connections between organizations, professionals, and resources, creating an ecosystem where knowledge, best practices, and innovations are freely shared.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Global network of veterinary professionals",
                        "Cross-shelter resource sharing platforms",
                        "Collaborative research initiatives",
                        "Community-driven solution development"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="p-1 rounded-full bg-primary/10">
                            <ChevronRight className="w-4 h-4 text-primary" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sustainability">
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <Image 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggKtksDK4xXdkAvNNnImXIHNS8DtOic0ZZquDauFULWIAecpug4r2coar&s=10" 
                      alt="Sustainability approach" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-4 text-2xl font-semibold">Long-Term Vision</h3>
                    <p className="mb-4 text-secondary-dark">
                      True change in animal welfare requires sustainable solutions that can grow and adapt over time. We design all our technologies with longevity and scalability in mind.
                    </p>
                    <p className="mb-6 text-secondary-dark">
                      Our tiered pricing models ensure that organizations of all sizes can access our tools, while our open development approach allows for continuous improvement based on community feedback.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Scalable infrastructure for growing organizations",
                        "Accessible pricing models for all budgets",
                        "Eco-friendly operational practices",
                        "Continuous improvement through community feedback"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="p-1 rounded-full bg-primary/10">
                            <ChevronRight className="w-4 h-4 text-primary" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </motion.div>
          </Tabs>
        </div>
      </section>

      {/* Partners & Recognition Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100 md:px-6 lg:px-8 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Partners & Recognition</h2>
            <p className="max-w-3xl mx-auto text-base text-secondary-dark md:text-lg">
              We&apos;re proud to work with leading organizations and have received recognition for our innovative approach to animal welfare.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-6 mb-16 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: Globe, title: "Global Veterinary Alliance", desc: "Strategic Partner" },
              { icon: Medal, title: "Tech for Good Awards", desc: "2023 Winner" },
              { icon: Shield, title: "Animal Welfare Institute", desc: "Innovation Partner" },
              { icon: Users, title: "Shelter Tech Consortium", desc: "Founding Member" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="flex flex-col items-center p-6 text-center bg-white rounded-2xl shadow-card"
              >
                <div className="p-3 mb-4 text-white rounded-full bg-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="p-8 bg-white rounded-2xl shadow-card">
              <h3 className="mb-6 text-2xl font-semibold">Industry Recognition</h3>
              <ul className="space-y-4">
                {[
                  "2023 Tech for Good Award in Animal Welfare Innovation",
                  "Featured in Veterinary Technology Quarterly, Spring 2023",
                  "Top 10 Pet Tech Startups, Innovation Summit 2022",
                  "Best Shelter Management Platform, Digital Solutions Awards"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 mt-1 rounded-full bg-primary/10">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-secondary-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={fadeIn} className="p-8 bg-white rounded-2xl shadow-card">
              <h3 className="mb-6 text-2xl font-semibold">Our Partners</h3>
              <ul className="space-y-4">
                {[
                  "Global Veterinary Alliance - Strategic Technology Partner",
                  "Animal Welfare Institute - Innovation Collaboration",
                  "Shelter Tech Consortium - Founding Member",
                  "PetCare Research Foundation - Research Partner"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 mt-1 rounded-full bg-primary/10">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-secondary-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-white md:px-6 lg:px-8 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="p-8 overflow-hidden bg-card-gradient rounded-3xl md:p-12 lg:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="grid gap-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join Our Mission</h2>
                <p className="mb-6 text-lg text-secondary-dark">
                  Together, we can transform animal welfare through innovation, collaboration, and compassion. Whether you&apos;re a shelter, veterinary practice, or animal welfare advocate, there&apos;s a place for you in our community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="px-6 text-white shadow-button hover:shadow-button-hover">
                    Become a Partner
                  </Button>
                  <Button variant="outline" className="px-6 border-primary hover:bg-primary/5">
                    Request a Demo
                  </Button>
                </div>
              </div>
              <div className="relative md:col-span-2">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-accent-blue/10 rounded-2xl rotate-3 scale-105"></div>
                <div className="relative p-6 bg-white rounded-2xl shadow-card">
                  <h3 className="mb-4 text-xl font-semibold">Stay Connected</h3>
                  <p className="mb-4 text-secondary-dark">
                    Join our newsletter to receive updates on new features, success stories, and animal welfare innovations.
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full p-3 border rounded-lg border-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <Button className="w-full text-white shadow-button hover:shadow-button-hover">
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}