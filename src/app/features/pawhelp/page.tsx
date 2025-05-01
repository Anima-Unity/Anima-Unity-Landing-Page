"use client";

import { useState, useEffect } from "react";
import Image from "next/image"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion,AccordionContent,AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import { Check, Heart, Home, Activity, Stethoscope, Users, ChevronRight, ArrowRight, PawPrint, HeartHandshake, CircleDollarSign, ChevronDown, Receipt, Target, HandHeart, PackageOpen, Mail, Star} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const countUpAnimation = {
  hidden: { opacity: 0, count: 0 },
  visible: {
    opacity: 1,
    count: 1,
    transition: { duration: 1.5 }
  }
};

// CountUp component
const CountUp = ({ end, ...props }: { end: number } & React.HTMLAttributes<HTMLSpanElement>) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 1500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * progress);
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [end]);
  
  return <span {...props}>{count.toLocaleString()}</span>;
};

export default function PawHelpDetail() {
  const [inView, setInView] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  
  // Set inView to true after component mounts to trigger animations
  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">
{/* Hero Section */}
<section className="relative w-full overflow-hidden py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-12">
  {/* Background Elements */}
  <div className="absolute inset-0 paw-bg opacity-20 z-0"></div>
  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-coral/10 rounded-full blur-3xl -mr-32 -mt-20"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl -ml-40 -mb-40"></div>

  <div className="container mx-auto max-w-6xl relative z-10">
    <motion.div 
      className="flex flex-col lg:flex-row items-center justify-between gap-12"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
    >
      {/* Left Content */}
      <motion.div 
        className="flex-1 text-center lg:text-left"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <motion.span 
          className="inline-block px-4 py-1.5 rounded-full bg-primary-light/10 text-primary-coral font-medium text-sm mb-6"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
          }}
        >
          Make A Difference Today
        </motion.span>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-coral-gradient text-gradient leading-tight"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          Help A Paw <br className="hidden md:block" />In Need
        </motion.h1>
        
        <motion.p 
          className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
          }}
        >
          Your donation directly supports medical care, shelter, and rehabilitation 
          for animals in desperate situations. Every contribution makes a difference.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
          }}
        >
          <Button 
            className="btn-primary text-white px-8 py-3 rounded-full text-lg shadow-button flex items-center justify-center gap-2 hover:shadow-button-hover"
          >
            Donate Now <ChevronRight className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            className="btn-secondary rounded-full px-8 py-3 text-lg border-2 border-primary-coral/20 text-primary-coral hover:bg-primary-coral/5"
          >
            Learn More
          </Button>
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-center lg:justify-start gap-6 mt-10"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } }
          }}
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-feature-lightGray flex items-center justify-center overflow-hidden">
                <span className="text-xs font-medium">🐾</span>
              </div>
            ))}
          </div>
          <div className="text-sm">
            <span className="font-semibold text-primary-coral">300+</span> animals rescued this month
          </div>
        </motion.div>
      </motion.div>
      
      {/* Right Image */}
      <motion.div 
        className="flex-1"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
        }}
      >
        <div className="relative">
          <div className="absolute -inset-0.5 bg-coral-gradient rounded-3xl blur opacity-30"></div>
          <div className="relative bg-white rounded-3xl p-4 shadow-app overflow-hidden">
            <div className="aspect-[4/3] rounded-2xl bg-feature-lightPink flex items-center justify-center overflow-hidden">
              {/* Replace with actual image */}
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🐶</div>
                <div className="text-xl font-medium text-primary-coral">Help us save more lives</div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute -right-8 -bottom-6 bg-white p-3 rounded-2xl shadow-card flex items-center gap-3 animate-pulse-gentle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-feature-lightPink rounded-full flex items-center justify-center text-xl">
              ❤️
            </div>
            <div>
              <div className="font-medium">$1,245</div>
              <div className="text-xs text-muted-foreground">Raised today</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -left-6 top-10 bg-white p-3 rounded-2xl shadow-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center text-success">
                ✓
              </div>
              <div className="text-sm font-medium">
                <span className="text-success">87%</span> success rate
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </div>
  
  {/* Wave Divider */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16 lg:h-20" fill="currentColor">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-background"></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-background"></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-background"></path>
    </svg>
  </div>
</section>
      
{/* Service Overview */}
<section className="py-24 px-4 md:px-6 lg:px-12 bg-gradient-to-b from-background to-feature-lightPink/30">
  <div className="max-w-7xl mx-auto">
    <motion.div 
      className="text-center max-w-3xl mx-auto mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary-coral/10 text-primary-coral font-medium text-sm mb-6">
        Making Real Impact
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-coral-gradient text-gradient">
        Your Support Provides
      </h2>
      <p className="text-lg text-muted-foreground">
        Here&apos;s how your donation helps animals in need across our network of partners
      </p>
    </motion.div>
    
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { 
            staggerChildren: 0.15
          }
        }
      }}
    >
      {/* Medical Care Card */}
      <motion.div 
        className="group"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <div className="relative h-full rounded-3xl bg-white p-1 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-card-hover">
          <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-chart-1 to-chart-5 rounded-t-3xl"></div>
          <div className="p-6 pt-8">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-chart-1 to-chart-5 rounded-full blur-md opacity-70"></div>
              <div className="relative h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <Stethoscope className="h-8 w-8 text-primary-coral" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-accent-black group-hover:text-primary-coral transition-colors duration-300">
              Medical Care
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Provides emergency surgeries, treatments, and ongoing care for injured and sick animals in desperate situations.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <span className="text-sm">24/7 Emergency Services</span>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <span className="text-sm">Veterinary Treatment</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Animals Treated</div>
                <div className="font-semibold text-primary-coral">1,240+</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Safe Shelter Card */}
      <motion.div 
        className="group"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <div className="relative h-full rounded-3xl bg-white p-1 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-card-hover">
          <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-chart-2 to-chart-4 rounded-t-3xl"></div>
          <div className="p-6 pt-8">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-chart-2 to-chart-4 rounded-full blur-md opacity-70"></div>
              <div className="relative h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <Home className="h-8 w-8 text-accent-blue" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-accent-black group-hover:text-accent-blue transition-colors duration-300">
              Safe Shelter
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Supports rescue operations and provides temporary housing until permanent loving homes are found.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <span className="text-sm">Rescue & Rehabilitation</span>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <span className="text-sm">Temporary Housing</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Animals Sheltered</div>
                <div className="font-semibold text-accent-blue">950+</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Rehabilitation Card */}
      <motion.div 
        className="group"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <div className="relative h-full rounded-3xl bg-white p-1 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-card-hover">
          <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-success to-chart-4 rounded-t-3xl"></div>
          <div className="p-6 pt-8">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-success to-chart-4 rounded-full blur-md opacity-70"></div>
              <div className="relative h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <Activity className="h-8 w-8 text-success" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-accent-black group-hover:text-success transition-colors duration-300">
              Rehabilitation
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Funds specialized recovery programs for abused and traumatized animals to help them heal.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <span className="text-sm">Behavioral Therapy</span>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <span className="text-sm">Recovery Programs</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Successful Cases</div>
                <div className="font-semibold text-success">830+</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Community Programs Card */}
      <motion.div 
        className="group"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        <div className="relative h-full rounded-3xl bg-white p-1 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-card-hover">
          <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-accent-blue to-primary-coral rounded-t-3xl"></div>
          <div className="p-6 pt-8">
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-primary-coral rounded-full blur-md opacity-70"></div>
              <div className="relative h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
                <Users className="h-8 w-8 text-accent-blue" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-accent-black group-hover:text-accent-blue transition-colors duration-300">
              Community Programs
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Enables educational initiatives and community outreach for animal welfare and prevention.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <span className="text-sm">Education & Prevention</span>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center mr-3">
                  <Check className="h-3 w-3 text-success" />
                </div>
                <span className="text-sm">Outreach Initiatives</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Communities Reached</div>
                <div className="font-semibold text-accent-blue">120+</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    
    {/* CTA Bar */}
    <motion.div 
      className="mt-16 lg:mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-coral-gradient opacity-95"></div>
        <div className="absolute bottom-0 right-0 opacity-20">
          <svg width="218" height="224" viewBox="0 0 218 224" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M170 30C194.853 30 215 50.1472 215 75C215 99.8528 194.853 120 170 120C145.147 120 125 99.8528 125 75C125 50.1472 145.147 30 170 30ZM75 104C99.8528 104 120 124.147 120 149C120 173.853 99.8528 194 75 194C50.1472 194 30 173.853 30 149C30 124.147 50.1472 104 75 104ZM185 5C199.359 5 211 16.6406 211 31C211 45.3594 199.359 57 185 57C170.641 57 159 45.3594 159 31C159 16.6406 170.641 5 185 5ZM31 143C45.3594 143 57 154.641 57 169C57 183.359 45.3594 195 31 195C16.6406 195 5 183.359 5 169C5 154.641 16.6406 143 31 143Z" stroke="white" strokeWidth="10"/>
          </svg>
        </div>
        
        <div className="relative py-10 px-6 md:py-12 md:px-10 lg:py-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Want to make a bigger impact?</h3>
            <p className="text-white/90 max-w-lg">
              Become a monthly donor and provide consistent support for animals in need
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Button className="bg-white text-primary-coral hover:bg-white/90 px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Become a Monthly Donor
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
      
{/* Impact Statistics Section */}
<section className="py-24 px-4 md:px-6 lg:px-12 relative overflow-hidden bg-feature-lightPink">
  {/* Decorative background pattern */}
  <div className="absolute inset-0 paw-bg opacity-20"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <motion.div 
      className="text-center mb-16"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-gradient text-gradient">Our Impact So Far</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Through the generosity of donors like you, we&apos;ve made a significant difference
      </p>
    </motion.div>
    
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggeredContainer}
    >
      {/* Pets Helped */}
      <motion.div variants={slideUp} className="transform transition-all duration-300 hover:-translate-y-2">
        <Card className="text-center h-full border-none rounded-2xl bg-card-gradient shadow-card hover:shadow-card-hover overflow-hidden">
          <CardContent className="pt-8 pb-6 px-6">
            <div className="w-16 h-16 bg-primary-coral rounded-full flex items-center justify-center mx-auto mb-6 shadow-button">
              <PawPrint size={28} className="text-white" />
            </div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={countUpAnimation}
            >
              <p className="text-5xl font-bold text-primary-coral mb-3">
                <CountUp end={12578} />
              </p>
            </motion.div>
            <p className="text-lg font-medium text-accent-black">Animals Helped</p>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Shelters */}
      <motion.div variants={slideUp} className="transform transition-all duration-300 hover:-translate-y-2">
        <Card className="text-center h-full border-none rounded-2xl bg-card-gradient shadow-card hover:shadow-card-hover overflow-hidden">
          <CardContent className="pt-8 pb-6 px-6">
            <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-button">
              <Home size={28} className="text-white" />
            </div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={countUpAnimation}
            >
              <p className="text-5xl font-bold text-accent-blue mb-3">
                <CountUp end={246} />
              </p>
            </motion.div>
            <p className="text-lg font-medium text-accent-black">Shelters Supported</p>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Treatments */}
      <motion.div variants={slideUp} className="transform transition-all duration-300 hover:-translate-y-2">
        <Card className="text-center h-full border-none rounded-2xl bg-card-gradient shadow-card hover:shadow-card-hover overflow-hidden">
          <CardContent className="pt-8 pb-6 px-6">
            <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-button">
              <Heart size={28} className="text-white" />
            </div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={countUpAnimation}
            >
              <p className="text-5xl font-bold text-accent-green mb-3">
                <CountUp end={8935} />
              </p>
            </motion.div>
            <p className="text-lg font-medium text-accent-black">Successful Treatments</p>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Volunteers */}
      <motion.div variants={slideUp} className="transform transition-all duration-300 hover:-translate-y-2">
        <Card className="text-center h-full border-none rounded-2xl bg-card-gradient shadow-card hover:shadow-card-hover overflow-hidden">
          <CardContent className="pt-8 pb-6 px-6">
            <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-6 shadow-button">
              <Users size={28} className="text-white" />
            </div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={countUpAnimation}
            >
              <p className="text-5xl font-bold text-warning mb-3">
                <CountUp end={1250} />
              </p>
            </motion.div>
            <p className="text-lg font-medium text-accent-black">Volunteer Network</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
    
    {/* Call to Action */}
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.6 }}
    >
      <Button className="btn-primary px-8 py-6 text-lg rounded-full">
        Join Our Mission
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </motion.div>
  </div>
</section>
      
{/* Donation Options */}
<section className="py-24 px-4 md:px-6 lg:px-12 bg-feature-lightGray relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-feature-lightPink rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-feature-lightPink rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/2"></div>
  
  <div className="max-w-5xl mx-auto relative z-10">
    <motion.div 
      className="text-center mb-16"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-gradient text-gradient">Choose Your Impact</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Select a donation amount or customize your contribution
      </p>
    </motion.div>
    
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className="transform transition-all duration-500"
    >
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 p-1 bg-muted rounded-full">
          <TabsTrigger 
            value="monthly" 
            className="rounded-full data-[state=active]:bg-primary-coral data-[state=active]:text-white"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger 
            value="onetime" 
            className="rounded-full data-[state=active]:bg-primary-coral data-[state=active]:text-white"
          >
            One-time
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="monthly" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* $25 Option */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="border border-border hover:border-primary-coral rounded-2xl shadow-card hover:shadow-card-hover overflow-hidden h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-accent-black">$25</CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">Monthly Support</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="mb-6 text-muted-foreground">Provides emergency medical care for one animal each month</p>
                  <Button variant="outline" className="w-full rounded-xl hover:border-primary-coral hover:text-primary-coral transition-all">
                    Select
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* $50 Option - Highlighted */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="border-2 border-primary-coral rounded-2xl shadow-card hover:shadow-button-hover overflow-hidden h-full bg-card-gradient">
                <div className="absolute top-0 right-0 left-0 h-1 bg-coral-gradient rounded-t-2xl"></div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-3xl font-bold text-primary-coral">$50</CardTitle>
                    <span className="bg-coral-gradient px-3 py-1 rounded-full text-xs text-white font-semibold shadow-button">
                      Popular
                    </span>
                  </div>
                  <CardDescription className="text-muted-foreground font-medium">Monthly Support</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="mb-6 text-muted-foreground">Provides shelter and medical care for two animals each month</p>
                  <Button className="w-full bg-coral-gradient hover:bg-primary-light text-white rounded-xl shadow-button hover:shadow-button-hover transition-all">
                    Select
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* $100 Option */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="border border-border hover:border-primary-coral rounded-2xl shadow-card hover:shadow-card-hover overflow-hidden h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-accent-black">$100</CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">Monthly Support</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="mb-6 text-muted-foreground">Sponsors comprehensive care for five animals each month</p>
                  <Button variant="outline" className="w-full rounded-xl hover:border-primary-coral hover:text-primary-coral transition-all">
                    Select
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Custom Amount */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card className="mt-8 rounded-2xl shadow-card border border-border">
              <CardContent className="pt-6 pb-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="relative flex-1 w-full sm:w-auto">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-muted-foreground font-medium">$</span>
                    </div>
                    <Input
                      type="text"
                      placeholder="Custom amount"
                      className="pl-8 rounded-xl border-border focus:border-primary-coral focus:ring-primary-coral"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  </div>
                  <Button className="bg-coral-gradient hover:bg-primary-light text-white rounded-xl shadow-button hover:shadow-button-hover transition-all w-full sm:w-auto">
                    <span>Donate Monthly</span>
                    <i className="fas fa-heart ml-2 text-sm"></i>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="onetime" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* $50 Option */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="border border-border hover:border-primary-coral rounded-2xl shadow-card hover:shadow-card-hover overflow-hidden h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-accent-black">$50</CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">One-time Donation</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="mb-6 text-muted-foreground">Provides emergency medical care for one animal</p>
                  <Button variant="outline" className="w-full rounded-xl hover:border-primary-coral hover:text-primary-coral transition-all">
                    Select
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* $100 Option - Highlighted */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="border-2 border-primary-coral rounded-2xl shadow-card hover:shadow-button-hover overflow-hidden h-full bg-card-gradient">
                <div className="absolute top-0 right-0 left-0 h-1 bg-coral-gradient rounded-t-2xl"></div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-3xl font-bold text-primary-coral">$100</CardTitle>
                    <span className="bg-coral-gradient px-3 py-1 rounded-full text-xs text-white font-semibold shadow-button">
                      Recommended
                    </span>
                  </div>
                  <CardDescription className="text-muted-foreground font-medium">One-time Donation</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="mb-6 text-muted-foreground">Provides shelter and medical care for two animals</p>
                  <Button className="w-full bg-coral-gradient hover:bg-primary-light text-white rounded-xl shadow-button hover:shadow-button-hover transition-all">
                    Select
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* $250 Option */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="border border-border hover:border-primary-coral rounded-2xl shadow-card hover:shadow-card-hover overflow-hidden h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-accent-black">$250</CardTitle>
                  <CardDescription className="text-muted-foreground font-medium">One-time Donation</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="mb-6 text-muted-foreground">Sponsors comprehensive care for five animals</p>
                  <Button variant="outline" className="w-full rounded-xl hover:border-primary-coral hover:text-primary-coral transition-all">
                    Select
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Custom Amount */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card className="mt-8 rounded-2xl shadow-card border border-border">
              <CardContent className="pt-6 pb-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="relative flex-1 w-full sm:w-auto">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-muted-foreground font-medium">$</span>
                    </div>
                    <Input
                      type="text"
                      placeholder="Custom amount"
                      className="pl-8 rounded-xl border-border focus:border-primary-coral focus:ring-primary-coral"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  </div>
                  <Button className="bg-coral-gradient hover:bg-primary-light text-white rounded-xl shadow-button hover:shadow-button-hover transition-all w-full sm:w-auto">
                    <span>Donate Once</span>
                    <i className="fas fa-heart ml-2 text-sm"></i>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
      
      {/* Trust indicators */}
      <motion.div 
        className="flex flex-wrap justify-center items-center gap-6 mt-16"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center text-muted-foreground">
          <i className="fas fa-lock mr-2"></i>
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <i className="fas fa-shield-alt mr-2"></i>
          <span>Data Protection</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <i className="fas fa-hand-holding-heart mr-2"></i>
          <span>Tax Deductible</span>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
      
{/* Featured Success Story */}
<section className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-white to-feature-lightPink">
  {/* Background decoration */}
  <div className="absolute inset-0 paw-bg opacity-30"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    <div 
      className="text-center mb-16"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-gradient">
        Success Story
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        See how your donations make a real difference in the lives of animals in need
      </p>
    </div>
    
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      {/* Content side */}
      <div className="space-y-8 order-2 lg:order-1">
        <div className="flex space-x-5">
          <div className="rounded-full bg-accent-coral h-12 w-12 flex items-center justify-center flex-shrink-0 shadow-button">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-accent-black">Max&apos;s Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Max was found abandoned on the roadside with severe injuries. 
              Thanks to donors like you, we were able to provide emergency surgery 
              and rehabilitation for this precious soul.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300">
          <blockquote className="border-l-4 border-accent-coral pl-5 italic text-muted-foreground leading-relaxed">
            &quot;When Max came to us, we weren&apos;t sure he would make it. Today, he&apos;s 
            thriving in his forever home, running and playing as if nothing ever happened. 
            That&apos;s the power of your donations at work.&quot;
            <footer className="text-sm font-medium mt-3 not-italic text-accent-black">
              — Dr. Sarah Johnson, Lead Veterinarian
            </footer>
          </blockquote>
        </div>
        
        <div className="pt-4">
          <Button className="btn-primary rounded-full py-2.5 px-8 font-medium">
            <span>Read More Stories</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Image grid side */}
      <div className="order-1 lg:order-2">
        <div className="relative h-[450px]">
          {/* Before image */}
          <div 
            className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-app transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <Image 
              src="https://pbs.twimg.com/media/GJlV4VZa8AAUjne?format=jpg&name=900x900" 
              alt="Max before treatment" 
              width={400}
              height={300}
              layout="responsive"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <span className="text-white text-sm font-medium">Before</span>
            </div>
          </div>
          
          {/* After image */}
          <div 
            className="absolute right-0 top-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-app transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <Image 
              src="https://pbs.twimg.com/media/GJlV4glbQAAPYlj?format=jpg&name=medium" 
              alt="Max after recovery" 
              width={400}
              height={300}
              layout="responsive" 
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <span className="text-white text-sm font-medium">After</span>
            </div>
          </div>
          
          {/* Decorative element */}
          <div 
            className="absolute -z-10 rounded-full w-48 h-48 bg-coral-gradient opacity-10 blur-3xl"
            style={{ left: '25%', top: '25%' }}
          ></div>
        </div>
      </div>
    </div>
    
    {/* Impact metrics - Optional addition */}
    <div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      <div className="bg-white rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-card-hover transition-all duration-300">
        <div className="text-accent-coral mb-2 flex justify-center">
          <PawPrint className="h-10 w-10" />
        </div>
        <h4 className="text-xl font-bold text-accent-black">328</h4>
        <p className="text-muted-foreground">Animals Rescued</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-card-hover transition-all duration-300">
        <div className="text-accent-coral mb-2 flex justify-center">
          <Home className="h-10 w-10" />
        </div>
        <h4 className="text-xl font-bold text-accent-black">287</h4>
        <p className="text-muted-foreground">Forever Homes Found</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-card-hover transition-all duration-300">
        <div className="text-accent-coral mb-2 flex justify-center">
          <HeartHandshake className="h-10 w-10" />
        </div>
        <h4 className="text-xl font-bold text-accent-black">$167K</h4>
        <p className="text-muted-foreground">Donations Received</p>
      </div>
    </div>
  </div>
</section>
      
{/* FAQ Section */}
<section className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
  {/* Background decoration elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-coral-gradient opacity-5 rounded-full blur-3xl -z-10"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral-gradient opacity-5 rounded-full blur-3xl -z-10"></div>
  
  <div className="max-w-4xl mx-auto">
    <div 
      className="text-center mb-16"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <span className="inline-block text-accent-coral font-medium mb-3 bg-feature-lightPink px-4 py-1 rounded-full text-sm">
        Got Questions?
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-gradient">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Common questions about donations and how they help our furry friends
      </p>
    </div>
    
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="space-y-5"
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border border-border rounded-xl mb-4 overflow-hidden bg-white shadow-card">
          <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-feature-lightPink/30 transition-colors group text-accent-black">
            <div className="flex items-center">
              <span className="text-accent-coral mr-3">
                <CircleDollarSign className="h-5 w-5" />
              </span>
              How is my donation used?
            </div>
            <div className="flex-shrink-0 text-accent-coral group-data-[state=open]:rotate-180 transition-transform duration-300">
              <ChevronDown className="h-5 w-5" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground px-6 pb-6 pt-2 leading-relaxed">
            <div className="pl-8 border-l-2 border-accent-coral/30">
              Your donation directly funds animal medical care, shelter, rehabilitation, 
              and community education programs. We ensure that at least 85% of all donations go 
              directly to animal care, with the remainder covering essential administrative costs 
              to maintain our operations.
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2" className="border border-border rounded-xl mb-4 overflow-hidden bg-white shadow-card">
          <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-feature-lightPink/30 transition-colors group text-accent-black">
            <div className="flex items-center">
              <span className="text-accent-coral mr-3">
                <Receipt className="h-5 w-5" />
              </span>
              Is my donation tax-deductible?
            </div>
            <div className="flex-shrink-0 text-accent-coral group-data-[state=open]:rotate-180 transition-transform duration-300">
              <ChevronDown className="h-5 w-5" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground px-6 pb-6 pt-2 leading-relaxed">
            <div className="pl-8 border-l-2 border-accent-coral/30">
              Yes, all donations are tax-deductible to the extent allowed by law. We are a 
              registered 501(c)(3) nonprofit organization. You will receive a tax receipt 
              for your records immediately after your donation.
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3" className="border border-border rounded-xl mb-4 overflow-hidden bg-white shadow-card">
          <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-feature-lightPink/30 transition-colors group text-accent-black">
            <div className="flex items-center">
              <span className="text-accent-coral mr-3">
                <Target className="h-5 w-5" />
              </span>
              Can I donate to a specific program?
            </div>
            <div className="flex-shrink-0 text-accent-coral group-data-[state=open]:rotate-180 transition-transform duration-300">
              <ChevronDown className="h-5 w-5" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground px-6 pb-6 pt-2 leading-relaxed">
            <div className="pl-8 border-l-2 border-accent-coral/30">
              Yes, you can designate your donation to a specific program such as emergency 
              medical care, shelter operations, or community education. Simply include a note 
              with your donation specifying your preference.
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4" className="border border-border rounded-xl mb-4 overflow-hidden bg-white shadow-card">
          <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-feature-lightPink/30 transition-colors group text-accent-black">
            <div className="flex items-center">
              <span className="text-accent-coral mr-3">
                <HandHeart className="h-5 w-5" />
              </span>
              How can I volunteer besides donating?
            </div>
            <div className="flex-shrink-0 text-accent-coral group-data-[state=open]:rotate-180 transition-transform duration-300">
              <ChevronDown className="h-5 w-5" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground px-6 pb-6 pt-2 leading-relaxed">
            <div className="pl-8 border-l-2 border-accent-coral/30">
              We welcome volunteers in many capacities including animal care, transportation, 
              event support, and administrative assistance. Visit our &quot;Get Involved&quot; section 
              to learn about current volunteer opportunities and apply online.
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5" className="border border-border rounded-xl mb-4 overflow-hidden bg-white shadow-card">
          <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-feature-lightPink/30 transition-colors group text-accent-black">
            <div className="flex items-center">
              <span className="text-accent-coral mr-3">
                <PackageOpen className="h-5 w-5" />
              </span>
              Can I donate supplies instead of money?
            </div>
            <div className="flex-shrink-0 text-accent-coral group-data-[state=open]:rotate-180 transition-transform duration-300">
              <ChevronDown className="h-5 w-5" />
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground px-6 pb-6 pt-2 leading-relaxed">
            <div className="pl-8 border-l-2 border-accent-coral/30">
              Absolutely! We maintain a wishlist of needed supplies including pet food, bedding, 
              toys, and cleaning supplies. Check our &quot;Donate Supplies&quot; page for current needs 
              and drop-off locations.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
    {/* Additional CTA */}
    <div 
      className="mt-16 text-center"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <p className="text-muted-foreground mb-6">
        Don&apos;t see your question answered? We&apos;re here to help!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-white border border-accent-coral text-accent-coral hover:bg-feature-lightPink rounded-full py-2.5 px-8 font-medium">
          <Mail className="mr-2 h-4 w-4" />
          <span>Contact Support</span>
        </Button>
        <Button className="btn-primary rounded-full py-2.5 px-8 font-medium">
          <span>Donate Now</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</section>
      
{/* Final CTA */}
<section className="py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-br from-primary-coral to-primary-light">
  {/* Decorative patterns */}
  <div className="absolute inset-0 paw-bg opacity-10"></div>
  
  {/* Radial gradient overlay */}
  <div className="absolute inset-0 bg-hero-pattern mix-blend-overlay"></div>
  
  <div className="max-w-5xl mx-auto relative z-10">
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            staggerChildren: 0.2
          }
        }
      }}
      className="space-y-10 text-center"
    >
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-3xl md:text-5xl font-bold text-white leading-tight"
      >
        Every Donation Makes a <span className="relative inline-block">
          Difference
          <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
            <path d="M0,5 Q50,0 100,5" stroke="white" strokeWidth="6" fill="none" />
          </svg>
        </span>
      </motion.h2>
      
      <motion.p 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 font-light"
      >
        Join our community of compassionate supporters and help us create a world 
        where every animal has access to care, shelter, and love.
      </motion.p>
      
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className="bg-white text-primary-coral hover:bg-gray-50 px-8 py-6 rounded-2xl text-lg font-medium shadow-button hover:shadow-button-hover transition-all duration-300"
          >
            Donate Now <Heart className="ml-2 h-5 w-5 text-primary-coral" />
          </Button>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="ghost"
            className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 px-8 py-6 rounded-2xl text-lg font-medium transition-all duration-300"
          >
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Testimonial snippet */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="mt-12 bg-white/10 backdrop-blur-sm rounded-3xl p-6 max-w-md mx-auto border border-white/20"
      >
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs text-white">
                {i}
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-light">Joined by <span className="font-medium">2,500+</span> donors</p>
            <div className="flex items-center mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 fill-current text-white" />
              ))}
              <span className="ml-1 text-xs text-white/90">this month</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
  
  {/* Wave bottom */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,146.86,102.18,217.91,92.83Z" fill="white" opacity="0.2"></path>
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" opacity="0.1"></path>
    </svg>
  </div>
</section>
    </main>
  );
}