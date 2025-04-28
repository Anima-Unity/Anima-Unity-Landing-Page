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
import { Check, Heart, Home, Activity, Stethoscope, Users, ChevronRight } from "lucide-react";

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
      <section className="relative bg-hero-pattern w-full py-24 px-4 md:px-6 lg:px-12 flex items-center justify-center">
        <motion.div 
          className="max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 to-accent-blue bg-clip-text"
            variants={slideUp}
          >
            Help A Paw In Need
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-secondary-dark mb-10 max-w-2xl mx-auto"
            variants={slideUp}
          >
            Your donation directly supports medical care, shelter, and rehabilitation 
            for animals in desperate situations. Every contribution makes a difference.
          </motion.p>
          
          <motion.div variants={slideUp}>
            <Button 
              className="bg-gradient-to-r from-primary to-accent-blue text-white px-8 py-6 rounded-2xl text-lg shadow-button hover:shadow-button-hover transition-all duration-300"
            >
              Donate Now <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Service Overview */}
      <section className="py-20 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Support Provides</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Here&apos;s how your donation helps animals in need across our network of partners
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggeredContainer}
          >
            {/* Healthcare Card */}
            <motion.div variants={slideUp}>
              <Card className="h-full bg-feature-healthcare border-none shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <Stethoscope className="h-6 w-6 text-icon-healthcare" />
                  </div>
                  <CardTitle className="text-xl">Medical Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary mb-4">
                    Provides emergency surgeries, treatments, and ongoing care for injured animals
                  </p>
                  <div className="flex items-center text-accent-green">
                    <Check className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">24/7 Emergency Services</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Shelter Card */}
            <motion.div variants={slideUp}>
              <Card className="h-full bg-feature-shelter border-none shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-icon-shelter" />
                  </div>
                  <CardTitle className="text-xl">Safe Shelter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary mb-4">
                    Supports rescue operations and provides temporary housing until permanent homes are found
                  </p>
                  <div className="flex items-center text-accent-green">
                    <Check className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Rescue & Rehabilitation</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Track & Trace */}
            <motion.div variants={slideUp}>
              <Card className="h-full bg-feature-tracking border-none shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-icon-tracking" />
                  </div>
                  <CardTitle className="text-xl">Rehabilitation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary mb-4">
                    Funds specialized recovery programs for abused and traumatized animals
                  </p>
                  <div className="flex items-center text-accent-green">
                    <Check className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Behavioral Therapy</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Community Support */}
            <motion.div variants={slideUp}>
              <Card className="h-full bg-feature-telemedicine border-none shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-icon-telemedicine" />
                  </div>
                  <CardTitle className="text-xl">Community Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary mb-4">
                    Enables educational initiatives and community outreach for animal welfare
                  </p>
                  <div className="flex items-center text-accent-green">
                    <Check className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">Education & Prevention</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Impact Statistics */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact So Far</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Through the generosity of donors like you, we&apos;ve made a significant difference
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggeredContainer}
          >
            {/* Pets Helped */}
            <motion.div variants={slideUp}>
              <Card className="text-center h-full bg-stat-pets border-none shadow-card">
                <CardContent className="pt-6">
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={countUpAnimation}
                  >
                    <p className="text-4xl font-bold text-primary-dark mb-2">
                      <CountUp end={12578} />
                    </p>
                  </motion.div>
                  <p className="text-lg font-medium">Animals Helped</p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Shelters */}
            <motion.div variants={slideUp}>
              <Card className="text-center h-full bg-stat-shelters border-none shadow-card">
                <CardContent className="pt-6">
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={countUpAnimation}
                  >
                    <p className="text-4xl font-bold text-accent-orange mb-2">
                      <CountUp end={246} />
                    </p>
                  </motion.div>
                  <p className="text-lg font-medium">Shelters Supported</p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Treatments */}
            <motion.div variants={slideUp}>
              <Card className="text-center h-full bg-stat-vets border-none shadow-card">
                <CardContent className="pt-6">
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={countUpAnimation}
                  >
                    <p className="text-4xl font-bold text-accent-blue mb-2">
                      <CountUp end={8935} />
                    </p>
                  </motion.div>
                  <p className="text-lg font-medium">Successful Treatments</p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Volunteers */}
            <motion.div variants={slideUp}>
              <Card className="text-center h-full bg-stat-satisfaction border-none shadow-card">
                <CardContent className="pt-6">
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={countUpAnimation}
                  >
                    <p className="text-4xl font-bold text-accent-teal mb-2">
                      <CountUp end={1250} />
                    </p>
                  </motion.div>
                  <p className="text-lg font-medium">Volunteer Network</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Donation Options */}
      <section className="py-20 px-4 md:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Impact</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Select a donation amount or customize your contribution
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="onetime">One-time</TabsTrigger>
              </TabsList>
              
              <TabsContent value="monthly" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* $25 Option */}
                  <Card className="border-2 border-transparent hover:border-primary transition-colors duration-300 shadow-card hover:shadow-card-hover">
                    <CardHeader>
                      <CardTitle className="text-2xl">$25</CardTitle>
                      <CardDescription>Monthly Support</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-secondary">Provides emergency medical care for one animal each month</p>
                      <Button variant="outline" className="w-full">Select</Button>
                    </CardContent>
                  </Card>
                  
                  {/* $50 Option - Highlighted */}
                  <Card className="border-2 border-primary shadow-card hover:shadow-card-hover bg-gradient-to-br from-white to-green-50">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-2xl">$50</CardTitle>
                        <span className="bg-primary px-2 py-1 rounded-full text-xs text-white font-medium">Popular</span>
                      </div>
                      <CardDescription>Monthly Support</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-secondary">Provides shelter and medical care for two animals each month</p>
                      <Button className="w-full bg-primary hover:bg-primary-dark text-white">Select</Button>
                    </CardContent>
                  </Card>
                  
                  {/* $100 Option */}
                  <Card className="border-2 border-transparent hover:border-primary transition-colors duration-300 shadow-card hover:shadow-card-hover">
                    <CardHeader>
                      <CardTitle className="text-2xl">$100</CardTitle>
                      <CardDescription>Monthly Support</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-secondary">Sponsors comprehensive care for five animals each month</p>
                      <Button variant="outline" className="w-full">Select</Button>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Custom Amount */}
                <Card className="mt-6 shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <div className="relative flex-1 w-full sm:w-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <Input
                          type="text"
                          placeholder="Custom amount"
                          className="pl-8"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                        />
                      </div>
                      <Button className="bg-primary hover:bg-primary-dark text-white w-full sm:w-auto">
                        Donate Monthly
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="onetime" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* $50 Option */}
                  <Card className="border-2 border-transparent hover:border-primary transition-colors duration-300 shadow-card hover:shadow-card-hover">
                    <CardHeader>
                      <CardTitle className="text-2xl">$50</CardTitle>
                      <CardDescription>One-time Donation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-secondary">Provides emergency medical care for one animal</p>
                      <Button variant="outline" className="w-full">Select</Button>
                    </CardContent>
                  </Card>
                  
                  {/* $100 Option - Highlighted */}
                  <Card className="border-2 border-primary shadow-card hover:shadow-card-hover bg-gradient-to-br from-white to-green-50">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-2xl">$100</CardTitle>
                        <span className="bg-primary px-2 py-1 rounded-full text-xs text-white font-medium">Recommended</span>
                      </div>
                      <CardDescription>One-time Donation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-secondary">Provides shelter and medical care for two animals</p>
                      <Button className="w-full bg-primary hover:bg-primary-dark text-white">Select</Button>
                    </CardContent>
                  </Card>
                  
                  {/* $250 Option */}
                  <Card className="border-2 border-transparent hover:border-primary transition-colors duration-300 shadow-card hover:shadow-card-hover">
                    <CardHeader>
                      <CardTitle className="text-2xl">$250</CardTitle>
                      <CardDescription>One-time Donation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-secondary">Sponsors comprehensive care for five animals</p>
                      <Button variant="outline" className="w-full">Select</Button>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Custom Amount */}
                <Card className="mt-6 shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <div className="relative flex-1 w-full sm:w-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <Input
                          type="text"
                          placeholder="Custom amount"
                          className="pl-8"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                        />
                      </div>
                      <Button className="bg-primary hover:bg-primary-dark text-white w-full sm:w-auto">
                        Donate Once
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Story */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Story</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              See how your donations make a real difference
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="rounded-full bg-primary h-10 w-10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Max&apos;s Journey</h3>
                  <p className="text-secondary-dark">
                    Max was found abandoned on the roadside with severe injuries. 
                    Thanks to donors like you, we were able to provide emergency surgery 
                    and rehabilitation.
                  </p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-secondary-dark">
                &quot;When Max came to us, we weren&apos;t sure he would make it. Today, he&apos;s 
                thriving in his forever home, running and playing as if nothing ever happened. 
                That&apos;s the power of your donations at work.&quot;
                <footer className="text-sm font-medium mt-2 not-italic">
                  — Dr. Sarah Johnson, Lead Veterinarian
                </footer>
              </blockquote>
              
              <div className="pt-4">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Read More Stories
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <Image 
                  src="https://pbs.twimg.com/media/GJlV4VZa8AAUjne?format=jpg&name=900x900" 
                  alt="Max before treatment" 
                  width={800}  // lebar maksimum
                  height={600} // tinggi maksimum
                  layout="responsive" // atau "fill" jika ingin mengisi container
                  objectFit="cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden mt-6">
                <Image 
                  src="https://pbs.twimg.com/media/GJlV4glbQAAPYlj?format=jpg&name=medium" 
                  alt="Max after recovery" 
                  width={800}  // lebar maksimum
                  height={600} // tinggi maksimum
                  layout="responsive" // atau "fill" jika ingin mengisi container
                  objectFit="cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Common questions about donations and how they help
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="space-y-4"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  How is my donation used?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-dark">
                  Your donation directly funds animal medical care, shelter, rehabilitation, 
                  and community education programs. We ensure that at least 85% of all donations go 
                  directly to animal care, with the remainder covering essential administrative costs 
                  to maintain our operations.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  Is my donation tax-deductible?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-dark">
                  Yes, all donations are tax-deductible to the extent allowed by law. We are a 
                  registered 501(c)(3) nonprofit organization. You will receive a tax receipt 
                  for your records immediately after your donation.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Can I donate to a specific program?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-dark">
                  Yes, you can designate your donation to a specific program such as emergency 
                  medical care, shelter operations, or community education. Simply include a note 
                  with your donation specifying your preference.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  How can I volunteer besides donating?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-dark">
                  We welcome volunteers in many capacities including animal care, transportation, 
                  event support, and administrative assistance. Visit our &quot;Get Involved&quot; section 
                  to learn about current volunteer opportunities and apply online.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  Can I donate supplies instead of money?
                </AccordionTrigger>
                <AccordionContent className="text-secondary-dark">
                  Absolutely! We maintain a wishlist of needed supplies including pet food, bedding, 
                  toys, and cleaning supplies. Check our &quot;Donate Supplies&quot; page for current needs 
                  and drop-off locations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 px-4 md:px-6 lg:px-12 bg-cta-gradient text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Every Donation Makes a Difference</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Join our community of compassionate supporters and help us create a world 
              where every animal has access to care, shelter, and love.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 rounded-2xl text-lg shadow-button hover:shadow-button-hover transition-all duration-300 animate-pulse-gentle"
              >
                Donate Now <Heart className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}