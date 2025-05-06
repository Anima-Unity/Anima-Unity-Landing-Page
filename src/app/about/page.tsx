// src/app/about/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Shield, Heart, Globe, Medal, Award, Handshake, Star, UserIcon, Mail, ShieldCheck, Presentation, Home, User, PawPrint, ArrowRight, Lightbulb, Users, Sun, FlameKindling, CircleDot, Sparkles, SunMoon, Flame, Mountain, Sunrise, Orbit, SunDim} from "lucide-react";
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
  className="relative px-4 pt-24 pb-20 overflow-hidden bg-gradient-to-b from-white to-feature-lightPink md:px-6 lg:px-8"
>
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary-light/10 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 -left-20 w-60 h-60 bg-accent-coral/5 rounded-full blur-3xl"></div>
    <div className="absolute w-2 h-2 bg-primary-coral rounded-full top-20 left-1/4 animate-pulse-gentle"></div>
    <div className="absolute w-3 h-3 bg-accent-blue/50 rounded-full bottom-20 right-1/3 animate-pulse-gentle" 
         style={{ animationDelay: '1s' }}></div>
    <div className="absolute w-2 h-2 bg-accent-green/50 rounded-full top-40 right-1/4 animate-pulse-gentle"
         style={{ animationDelay: '2s' }}></div>
  </div>

  <div className="relative max-w-6xl mx-auto">
    <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
      <motion.div 
        className="lg:w-3/5 z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Badge 
            variant="outline" 
            className="px-4 py-1 mb-6 text-sm font-medium bg-primary-coral/10 text-primary-coral border-primary-coral/20"
          >
            About Anima Unity
          </Badge>
        </motion.div>
        
        <motion.h1 
          className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Pioneering the Future of
          <div className="text-primary-gradient"> Animal Welfare</div>
        </motion.h1>
        
        <motion.p 
          className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground lg:mx-0 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Anima Unity merges cutting-edge technology with compassionate care, creating innovative solutions for animal welfare organizations worldwide.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-8 lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <Button className="px-8 py-6 text-white transition-all bg-coral-gradient shadow-button hover:shadow-button-hover group">
            <span>Join Our Mission</span> 
            <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            className="px-8 py-6 transition-all border-2 border-primary-coral hover:bg-primary/5 text-primary-coral"
          >
            View Our Solutions
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero image */}
      <motion.div 
        className="hidden lg:block lg:w-2/5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="relative p-2 bg-white rounded-lg shadow-card overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary-light/20 rounded-full blur-xl -mr-8 -mt-8"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent-blue/10 rounded-full blur-xl -ml-6 -mb-6"></div>
          <div className="relative overflow-hidden rounded-lg aspect-square">
            {/* Replace with actual image when available */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-coral/20 to-accent-blue/20 flex items-center justify-center">
              <span className="text-6xl">🐾</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Abstract shape at the bottom */}
    <div className="absolute bottom-0 left-0 w-full h-12 bg-white/50 backdrop-blur-sm -mb-6 rounded-t-[100%] z-0"></div>
  </div>
</motion.section>

      {/* Our Story Section */}
      <section className="px-4 py-20 bg-gradient-to-b from-white to-feature-lightPink/30 md:px-6 lg:px-8 md:py-28">
  <div className="max-w-6xl mx-auto">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <Badge 
        variant="outline" 
        className="px-4 py-1 mb-4 text-sm font-medium bg-primary-coral/10 text-primary-coral border-primary-coral/20"
      >
        Our Journey
      </Badge>
      <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
        The <span className="text-primary-gradient">Anima Unity</span> Story
      </h2>
    </motion.div>
    
    <motion.div 
      className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-20 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div 
        variants={fadeIn}
        className="relative aspect-square md:aspect-auto md:h-[480px] rounded-3xl overflow-hidden shadow-card order-2 md:order-1"
      >
        <div className="absolute inset-0 bg-primary-coral/10 mix-blend-multiply"></div>
        <Image 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Anima Unity team collaborating" 
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-accent-black/70 to-transparent"></div>
        
        {/* Timeline element */}
        <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-card">
          <div className="w-3 h-3 rounded-full bg-primary-coral animate-pulse"></div>
          <p className="text-sm font-semibold">Est. 2020</p>
        </div>
        
        {/* Caption */}
        <div className="absolute bottom-0 left-0 p-8">
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <p className="text-lg font-medium text-white">From vision to global impact</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-block w-12 h-1 bg-primary-coral rounded-full"></span>
              <span className="inline-block w-3 h-1 bg-white/50 rounded-full"></span>
              <span className="inline-block w-3 h-1 bg-white/50 rounded-full"></span>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={fadeIn} className="flex flex-col justify-center order-1 md:order-2">
        <div className="space-y-6">
          <p className="text-base text-muted-foreground md:text-lg">
            Anima Unity was founded in 2020 by a team of veterinarians, animal welfare experts, and technology specialists with a shared vision: to revolutionize animal welfare through innovation.
          </p>
          
          <p className="text-base text-muted-foreground md:text-lg">
            What began as a digital platform for shelter management has evolved into a comprehensive ecosystem of tools, resources, and networks dedicated to improving animal lives across the globe.
          </p>
          
          <p className="text-base text-muted-foreground md:text-lg">
            Today, we&apos;re proud to support thousands of organizations worldwide, connecting animal welfare professionals with the technology they need to make a difference.
          </p>
        </div>
        
        <motion.div 
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-border">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-coral/10">
              <span className="text-primary-coral">🏆</span>
            </div>
            <p className="text-sm font-medium">Global Impact</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-border">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-coral/10">
              <span className="text-primary-coral">🐾</span>
            </div>
            <p className="text-sm font-medium">Animal-First Approach</p>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-border">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-coral/10">
              <span className="text-primary-coral">💻</span>
            </div>
            <p className="text-sm font-medium">Tech Innovation</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
  
  {/* Decorative elements */}
  <div className="absolute left-0 bottom-0 w-full h-20 overflow-hidden opacity-10 pointer-events-none">
    <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-primary-coral rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-accent-blue rounded-full blur-3xl"></div>
  </div>
</section>

{/* Mission & Values Section */}
<section className="relative px-4 py-20 bg-gradient-to-br from-feature-lightPink to-white md:px-6 lg:px-8 md:py-28 overflow-hidden">
  {/* Background decorations */}
  <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-coral/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>
  <div className="paw-bg absolute inset-0 opacity-20"></div>
  
  <div className="relative max-w-6xl mx-auto">
    <motion.div 
      className="mb-16 text-center"
      initial="hidden" 
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <Badge 
        variant="outline" 
        className="px-5 py-1.5 mb-5 text-sm font-medium bg-accent-blue/10 text-accent-blue border-accent-blue/20 rounded-full"
      >
        <span className="mr-1.5">🔍</span> What Drives Us
      </Badge>
      <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        Our <span className="text-primary-gradient">Mission</span> & <span className="text-primary-gradient">Values</span>
      </h2>
      <div className="flex justify-center mt-3 mb-6">
        <div className="h-1 w-16 bg-gradient-to-r from-accent-blue to-primary-coral rounded-full"></div>
      </div>
      <p className="max-w-3xl mx-auto text-base text-muted-foreground md:text-lg leading-relaxed">
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
      {/* Protection Card */}
      <motion.div 
        variants={fadeIn} 
        className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-card hover:shadow-card-hover group hover:-translate-y-2"
      >
        <div className="relative pt-8 px-6 pb-6 md:px-8 md:pb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center p-3 mb-6 text-white rounded-xl w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-blue/80 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="mb-4 text-xl font-semibold group-hover:text-accent-blue transition-colors duration-300">Protection</h3>
            <p className="text-muted-foreground">
              We believe every animal deserves safety, dignity, and the highest standard of care possible, regardless of circumstance.
            </p>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center text-sm text-accent-blue">
                <div className="flex space-x-1">
                  <span className="block w-2 h-2 rounded-full bg-accent-blue"></span>
                  <span className="block w-2 h-2 rounded-full bg-accent-blue/60"></span>
                  <span className="block w-2 h-2 rounded-full bg-accent-blue/30"></span>
                </div>
                <span className="ml-2 font-medium">Core Value</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Compassion Card */}
      <motion.div 
        variants={fadeIn} 
        className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-card hover:shadow-card-hover group hover:-translate-y-2"
      >
        <div className="relative pt-8 px-6 pb-6 md:px-8 md:pb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-coral/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center p-3 mb-6 text-white rounded-xl w-16 h-16 bg-gradient-to-br from-primary-coral to-primary-light shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="mb-4 text-xl font-semibold group-hover:text-primary-coral transition-colors duration-300">Compassion</h3>
            <p className="text-muted-foreground">
              Our approach blends technology with empathy, ensuring that every solution we create puts animal wellbeing at the center.
            </p>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center text-sm text-primary-coral">
                <div className="flex space-x-1">
                  <span className="block w-2 h-2 rounded-full bg-primary-coral"></span>
                  <span className="block w-2 h-2 rounded-full bg-primary-coral/60"></span>
                  <span className="block w-2 h-2 rounded-full bg-primary-coral/30"></span>
                </div>
                <span className="ml-2 font-medium">Core Value</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Innovation Card */}
      <motion.div 
        variants={fadeIn} 
        className="overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-card hover:shadow-card-hover group hover:-translate-y-2"
      >
        <div className="relative pt-8 px-6 pb-6 md:px-8 md:pb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center p-3 mb-6 text-white rounded-xl w-16 h-16 bg-gradient-to-br from-accent-green to-accent-green/80 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="mb-4 text-xl font-semibold group-hover:text-accent-green transition-colors duration-300">Innovation</h3>
            <p className="text-muted-foreground">
              We constantly push boundaries to create transformative technologies that solve real-world problems in animal welfare.
            </p>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center text-sm text-accent-green">
                <div className="flex space-x-1">
                  <span className="block w-2 h-2 rounded-full bg-accent-green"></span>
                  <span className="block w-2 h-2 rounded-full bg-accent-green/60"></span>
                  <span className="block w-2 h-2 rounded-full bg-accent-green/30"></span>
                </div>
                <span className="ml-2 font-medium">Core Value</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    
    {/* Mission Statement - New Addition */}
    <motion.div
      className="mt-16 md:mt-24 bg-white rounded-3xl shadow-card p-8 md:p-10 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-blue via-primary-coral to-accent-green"></div>
      <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
        <div className="text-primary-coral/10 text-9xl">
          <span className="font-bold">&quot;</span>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <div className="md:w-1/3">
          <h3 className="text-2xl font-bold mb-3">Our Promise</h3>
          <div className="h-1 w-12 bg-primary-coral rounded-full mb-4"></div>
          <p className="text-muted-foreground">We are committed to creating a future where technology empowers every animal welfare organization to achieve their mission effectively.</p>
        </div>
        
        <div className="h-px w-full md:h-32 md:w-px bg-border"></div>
        
        <div className="md:w-2/3">
          <blockquote className="text-lg md:text-xl font-medium text-foreground italic">
            &quot;Every day, we strive to build bridges between technology and compassion, ensuring that those who dedicate their lives to animal welfare have the tools they need to make the greatest possible impact.&quot;
          </blockquote>
          <div className="mt-4 flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary-coral/10 flex items-center justify-center">
              <span className="text-primary-coral text-sm">AU</span>
            </div>
            <div className="ml-3">
              <p className="font-medium">Anima Unity Team</p>
              <p className="text-sm text-muted-foreground">Leadership Council</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* Impact Stats Section */}
<section className="relative px-4 py-16 bg-gradient-to-b from-white to-feature-lightPink md:px-6 lg:px-8 md:py-24 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full paw-bg opacity-30 pointer-events-none"></div>
  <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary-coral/5 blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary-coral/5 blur-3xl"></div>
  
  <div className="relative max-w-6xl mx-auto">
    <motion.div 
      className="mb-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary-coral/10 text-primary-coral">Making A Difference</span>
      <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        Our <span className="text-primary-gradient">Global Impact</span>
      </h2>
      <p className="max-w-3xl mx-auto text-base text-muted-foreground md:text-lg">
        Through innovation and collaboration, we&apos;re building a better world for animals everywhere. Here&apos;s our impact so far:
      </p>
    </motion.div>
    
    <motion.div 
      className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 md:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.div 
        variants={fadeIn} 
        className="p-6 text-center bg-white rounded-3xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-2"
      >
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-coral/10">
          <Home className="text-2xl text-primary-coral" />
        </div>
        <p className="mb-1 text-4xl font-bold text-primary-coral">{shelters.toLocaleString()}+</p>
        <p className="text-muted-foreground">Shelters Supported</p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn} 
        className="p-6 text-center bg-white rounded-3xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-2"
      >
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-accent-blue/10">
          <User className="text-2xl text-accent-blue" />
        </div>
        <p className="mb-1 text-4xl font-bold text-accent-blue">{vets.toLocaleString()}+</p>
        <p className="text-muted-foreground">Veterinarians Connected</p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn} 
        className="p-6 text-center bg-white rounded-3xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-2"
      >
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-accent-green/10">
          <PawPrint size={24} className="text-accent-green" />
        </div>
        <p className="mb-1 text-4xl font-bold text-accent-green">{pets.toLocaleString()}+</p>
        <p className="text-muted-foreground">Animals Helped</p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn} 
        className="p-6 text-center bg-white rounded-3xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-2"
      >
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-order-completed/10">
          <Heart className="text-2xl text-order-completed" />
        </div>
        <p className="mb-1 text-4xl font-bold text-order-completed">{satisfaction}%</p>
        <p className="text-muted-foreground">Partner Satisfaction</p>
      </motion.div>
    </motion.div>
    
    {/* CTA Button */}
    <motion.div 
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      viewport={{ once: true }}
    >
      <button className="px-8 py-3 font-medium text-white rounded-full btn-primary hover:shadow-button-hover">
        Learn More About Our Mission
      </button>
    </motion.div>
  </div>
</section>

{/* Leadership Team Section - Redesigned */}
<section className="relative px-4 py-20 bg-gradient-to-br from-white to-feature-lightPink md:px-6 lg:px-8 md:py-28 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full paw-bg opacity-20 pointer-events-none"></div>
  <div className="absolute -top-40 right-0 w-72 h-72 rounded-full bg-accent-blue/5 blur-3xl"></div>
  <div className="absolute -bottom-40 left-0 w-72 h-72 rounded-full bg-primary-coral/5 blur-3xl"></div>
  
  <div className="relative max-w-6xl mx-auto">
    <motion.div 
      className="mb-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary-coral/10 text-primary-coral">Meet Our Experts</span>
      <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        Our <span className="text-primary-gradient">Leadership Team</span>
      </h2>
      <p className="max-w-3xl mx-auto text-base text-muted-foreground md:text-lg">
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
          name: "Akhmad Fauzi",
          role: "Founder & CEO",
          bio: "Self-taught software engineer and animal welfare advocate, building tech-driven solutions to improve the lives of animals and their human companions. Currently leading the vision, design, and development of the Anima Unity ecosystem.",
          image: "https://pbs.twimg.com/profile_images/1802338165715501056/elc0TeBu_400x400.jpg",
          color: "accent-blue",
          icon: "fa-laptop-code"
        },
      ].map((member, index) => (
        <motion.div 
          key={index} 
          variants={fadeIn}
          className="overflow-hidden bg-white rounded-3xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-2 group"
        >
          <div className="relative w-full h-72">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image 
              src={member.image} 
              alt={member.name} 
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 z-20 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center space-x-2">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-accent-black hover:bg-white transition-colors">
                  <i className="text-sm fas fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-accent-black hover:bg-white transition-colors">
                  <i className="text-sm fas fa-twitter"></i>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-accent-black hover:bg-white transition-colors">
                  <i className="text-sm fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 relative">
            <div className={`absolute -top-8 right-6 w-16 h-16 rounded-2xl flex items-center justify-center bg-${member.color}/10 text-${member.color} shadow-sm`}>
              <i className={`text-xl fas ${member.icon}`}></i>
            </div>
            <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
            <p className={`mb-4 text-${member.color} font-medium`}>{member.role}</p>
            <p className="text-muted-foreground">{member.bio}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
    
    <motion.div 
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      viewport={{ once: true }}
    >
      <Link href="/team" passHref>
        <button className="px-8 py-3 font-medium text-white rounded-full btn-primary hover:shadow-button-hover flex items-center mx-auto">
          Meet Our Full Team <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </Link>
    </motion.div>
  </div>
</section>

{/* Our Approach Section - Redesigned */}
<section className="relative px-4 py-20 bg-white md:px-6 lg:px-8 md:py-28 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full paw-bg opacity-10 pointer-events-none"></div>
  <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary-coral/5 blur-3xl"></div>
  <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl"></div>
  
  <div className="relative max-w-6xl mx-auto">
    <motion.div 
      className="mb-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-primary-coral/10 text-primary-coral">How We Work</span>
      <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
        Our <span className="text-primary-gradient">Approach</span>
      </h2>
      <p className="max-w-3xl mx-auto text-base text-muted-foreground md:text-lg">
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
        <TabsList className="grid w-full max-w-2xl grid-cols-3 rounded-full bg-feature-lightPink p-1">
          <TabsTrigger 
            value="innovation" 
            className="rounded-full data-[state=active]:bg-primary-coral data-[state=active]:text-white transition-all duration-300"
          >
            <Sun className="w-4 h-4 mr-2 hidden md:inline-block" />
            Innovation
          </TabsTrigger>
          <TabsTrigger 
            value="collaboration" 
            className="rounded-full data-[state=active]:bg-primary-coral data-[state=active]:text-white transition-all duration-300"
          >
            <FlameKindling className="w-4 h-4 mr-2 hidden md:inline-block" />
            Collaboration
          </TabsTrigger>
          <TabsTrigger 
            value="sustainability" 
            className="rounded-full data-[state=active]:bg-primary-coral data-[state=active]:text-white transition-all duration-300"
          >
            <CircleDot className="w-4 h-4 mr-2 hidden md:inline-block" />
            Sustainability
          </TabsTrigger>
        </TabsList>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mt-8"
      >
        <TabsContent value="innovation">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-card group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image 
                src="https://cdn.dreampets.ai/web/styles_show/Celestial%20Dreams/Dachshund-astronaut-in-sci-fi-setting.jpg" 
                alt="Innovation approach" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="px-4 py-1 text-sm font-medium rounded-full bg-primary-coral/90 text-white">
                  <Sparkles className="w-4 h-4 mr-2 inline-block" />
                  Innovation
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-semibold text-primary-gradient">Technology with Purpose</h3>
              <p className="mb-4 text-muted-foreground">
                Our innovation process begins by identifying real challenges faced by animal welfare organizations. We work closely with shelters, veterinarians, and rescue groups to understand their unique needs.
              </p>
              <p className="mb-6 text-muted-foreground">
                From there, our team of technologists and animal welfare experts collaborate to create solutions that are both cutting-edge and practical for everyday use.
              </p>
              <ul className="space-y-4">
                {[
                  "AI-powered health monitoring systems",
                  "Data-driven shelter management tools",
                  "Accessible telemedicine platforms",
                  "Community engagement technologies"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-coral/10">
                      <SunMoon className="w-5 h-5 text-primary-coral" />
                    </div>
                    <span className="text-accent-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="collaboration">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-card group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image 
                src="https://static.wixstatic.com/media/dc50af_93502a3ac3e946f286503dcb0b887c68~mv2.jpg/v1/fill/w_800,h_534,al_c,q_85,enc_avif,quality_auto/dc50af_93502a3ac3e946f286503dcb0b887c68~mv2.jpg" 
                alt="Collaboration approach" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="px-4 py-1 text-sm font-medium rounded-full bg-accent-blue/90 text-white">
                  <Flame className="w-4 h-4 mr-2 inline-block" />
                  Collaboration
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-semibold" style={{ background: 'linear-gradient(to right, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Better Together</h3>
              <p className="mb-4 text-muted-foreground">
                We believe the greatest challenges in animal welfare can only be solved through strong partnerships and collaborative networks of dedicated professionals.
              </p>
              <p className="mb-6 text-muted-foreground">
                Anima Unity facilitates connections between organizations, professionals, and resources, creating an ecosystem where knowledge, best practices, and innovations are freely shared.
              </p>
              <ul className="space-y-4">
                {[
                  "Global network of veterinary professionals",
                  "Cross-shelter resource sharing platforms",
                  "Collaborative research initiatives",
                  "Community-driven solution development"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-blue/10">
                      <Mountain className="w-5 h-5 text-accent-blue" />
                    </div>
                    <span className="text-accent-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="sustainability">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-card group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <Image 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggKtksDK4xXdkAvNNnImXIHNS8DtOic0ZZquDauFULWIAecpug4r2coar&s=10" 
                alt="Sustainability approach" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="px-4 py-1 text-sm font-medium rounded-full bg-accent-green/90 text-white">
                  <Sunrise className="w-4 h-4 mr-2 inline-block" />
                  Sustainability
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-semibold" style={{ background: 'linear-gradient(to right, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Long-Term Vision</h3>
              <p className="mb-4 text-muted-foreground">
                True change in animal welfare requires sustainable solutions that can grow and adapt over time. We design all our technologies with longevity and scalability in mind.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our tiered pricing models ensure that organizations of all sizes can access our tools, while our open development approach allows for continuous improvement based on community feedback.
              </p>
              <ul className="space-y-4">
                {[
                  "Scalable infrastructure for growing organizations",
                  "Accessible pricing models for all budgets",
                  "Eco-friendly operational practices",
                  "Continuous improvement through community feedback"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-green/10">
                      <Orbit className="w-5 h-5 text-accent-green" />
                    </div>
                    <span className="text-accent-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
      </motion.div>
    </Tabs>
    
    {/* Added CTA Button */}
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      viewport={{ once: true }}
    >
      <Link href="/approach" passHref>
        <button className="px-8 py-3 font-medium border-2 border-primary-coral text-primary-coral rounded-full hover:bg-primary-coral hover:text-white transition-all duration-300 hover:shadow-button flex items-center mx-auto group">
          Learn More About Our Methods
          <SunDim className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </Link>
    </motion.div>
  </div>
</section>

{/* Partners & Recognition Section */}
<section className="px-4 py-20 bg-feature-lightPink md:px-6 lg:px-8 md:py-28 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full paw-bg opacity-10 pointer-events-none"></div>
  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary-coral/5 blur-3xl"></div>
  <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-primary-coral/5 blur-3xl"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    <motion.div 
      className="mb-14 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-coral/10 text-primary-coral">
        Our Network
      </span>
      <h2 className="mb-5 text-3xl font-bold text-gradient bg-coral-gradient md:text-4xl">
        Partners & Recognition
      </h2>
      <p className="max-w-3xl mx-auto text-base text-accent-gray md:text-lg">
        We&apos;re proud to work with leading organizations and have received recognition 
        for our innovative approach to animal welfare.
      </p>
    </motion.div>
    
    <motion.div 
      className="grid gap-8 mb-20 sm:grid-cols-2 lg:grid-cols-4"
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
          className="flex flex-col items-center p-6 text-center bg-card-gradient rounded-3xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-2"
        >
          <div className="p-4 mb-5 rounded-full bg-primary-coral/10">
            <item.icon className="w-6 h-6 text-primary-coral" />
          </div>
          <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-accent-gray">{item.desc}</p>
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
      <motion.div 
        variants={fadeIn} 
        className="p-8 bg-card-gradient rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300"
      >
        <div className="flex items-center mb-6">
          <div className="p-2 mr-3 rounded-full bg-primary-coral/10">
            <Award className="w-5 h-5 text-primary-coral" />
          </div>
          <h3 className="text-2xl font-semibold">Industry Recognition</h3>
        </div>
        <ul className="space-y-5">
          {[
            "2023 Tech for Good Award in Animal Welfare Innovation",
            "Featured in Veterinary Technology Quarterly, Spring 2023",
            "Top 10 Pet Tech Startups, Innovation Summit 2022",
            "Best Shelter Management Platform, Digital Solutions Awards"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className="p-1 mt-1 rounded-full bg-primary-coral/10 group-hover:bg-primary-coral/20 transition-all duration-300">
                <ChevronRight className="w-4 h-4 text-primary-coral" />
              </div>
              <span className="text-accent-black group-hover:text-primary-coral transition-all duration-300">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div 
        variants={fadeIn} 
        className="p-8 bg-card-gradient rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300"
      >
        <div className="flex items-center mb-6">
          <div className="p-2 mr-3 rounded-full bg-primary-coral/10">
            <Handshake className="w-5 h-5 text-primary-coral" />
          </div>
          <h3 className="text-2xl font-semibold">Our Partners</h3>
        </div>
        <ul className="space-y-5">
          {[
            "Global Veterinary Alliance - Strategic Technology Partner",
            "Animal Welfare Institute - Innovation Collaboration",
            "Shelter Tech Consortium - Founding Member",
            "PetCare Research Foundation - Research Partner"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className="p-1 mt-1 rounded-full bg-primary-coral/10 group-hover:bg-primary-coral/20 transition-all duration-300">
                <ChevronRight className="w-4 h-4 text-primary-coral" />
              </div>
              <span className="text-accent-black group-hover:text-primary-coral transition-all duration-300">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
    
    {/* Call to action */}
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-16 text-center"
    >
      <a 
        href="#partner-with-us" 
        className="inline-flex items-center px-6 py-3 text-white rounded-full bg-coral-gradient shadow-button hover:shadow-button-hover transform transition-all duration-300 hover:-translate-y-1"
      >
        <Users className="w-5 h-5 mr-2" />
        Partner With Us
        <ChevronRight className="w-5 h-5 ml-2" />
      </a>
    </motion.div>
  </div>
</section>

{/* CTA Section */}
<section className="px-4 py-20 bg-white md:px-6 lg:px-8 md:py-28 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary-coral/5 blur-3xl"></div>
  <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary-coral/5 blur-3xl"></div>
  
  <div className="max-w-6xl mx-auto">
    <motion.div 
      className="p-8 overflow-hidden bg-gradient-to-br from-feature-lightPink to-white rounded-4xl shadow-card md:p-12 lg:p-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-coral/5 blur-xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-primary-coral/5 blur-xl translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute top-16 right-16 w-8 h-8 rounded-full bg-primary-coral/10"></div>
      <div className="absolute bottom-24 left-24 w-12 h-12 rounded-full bg-primary-coral/10"></div>
      
      <div className="grid gap-10 md:grid-cols-5 relative z-10">
        <div className="md:col-span-3">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary-coral/10 text-primary-coral">
            Get Involved
          </span>
          <h2 className="mb-5 text-3xl font-bold text-gradient bg-coral-gradient md:text-4xl">
            Join Our Mission
          </h2>
          <p className="mb-8 text-lg text-accent-gray">
            Together, we can transform animal welfare through innovation, collaboration, and compassion. 
            Whether you&apos;re a shelter, veterinary practice, or animal welfare advocate, 
            there&apos;s a place for you in our community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="px-6 text-white bg-coral-gradient shadow-button hover:shadow-button-hover transform transition-all duration-300 hover:-translate-y-1">
              <Handshake className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
            <Button variant="outline" className="px-6 border-primary-coral text-primary-coral hover:bg-primary-coral/5 transform transition-all duration-300 hover:-translate-y-1">
              <Presentation className="w-5 h-5 mr-2" />
              Request a Demo
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="mt-10 pt-8 border-t border-primary-coral/10">
            <p className="mb-4 text-sm font-medium text-accent-gray">Trusted by animal welfare organizations worldwide</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center text-primary-coral">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-2 text-sm font-medium">4.9/5</span>
              </div>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary-coral/20 flex items-center justify-center border-2 border-white">
                      <UserIcon className="w-4 h-4 text-primary-coral" />
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-accent-gray">+500 partners</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative md:col-span-2">
          {/* Card decorative backgrounds */}
          <div className="absolute inset-0 bg-primary-coral/10 rounded-3xl -rotate-3 scale-105"></div>
          <div className="absolute inset-0 bg-accent-blue/10 rounded-3xl rotate-3 scale-105"></div>
          
          <div className="relative p-6 bg-white rounded-3xl shadow-card">
            <div className="flex items-center mb-4">
              <div className="p-2 mr-3 rounded-full bg-primary-coral/10">
                <Mail className="w-5 h-5 text-primary-coral" />
              </div>
              <h3 className="text-xl font-semibold">Stay Connected</h3>
            </div>
            
            <p className="mb-6 text-accent-gray">
              Join our newsletter to receive updates on new features, success stories, and animal welfare innovations.
            </p>
            
            <form className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="email" className="text-sm font-medium text-accent-gray">Email address</label>
                <input 
                  type="email"
                  id="email"
                  placeholder="Your email address" 
                  className="w-full p-3 border rounded-lg border-muted focus:border-primary-coral focus:outline-none focus:ring-1 focus:ring-primary-coral transition-all duration-300"
                />
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="w-4 h-4 accent-primary-coral" 
                />
                <label htmlFor="consent" className="ml-2 text-sm text-accent-gray">
                  I agree to receive updates and news
                </label>
              </div>
              
              <Button className="w-full text-white bg-coral-gradient shadow-button hover:shadow-button-hover transform transition-all duration-300 hover:-translate-y-1">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-primary-coral/10">
              <div className="flex items-center text-accent-gray">
                <ShieldCheck className="w-5 h-5 mr-2 text-primary-coral" />
                <span className="text-xs">We respect your privacy. No spam, ever.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
}