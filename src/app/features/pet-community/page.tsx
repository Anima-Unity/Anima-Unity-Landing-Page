"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Import shadcn components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import Lucide icons
import { Heart, MessageCircle, PawPrint, Star, ChevronRight, ArrowRight } from "lucide-react";

// Import data types and mock data from separate files
import { Post, Testimonial, Feature, Stat } from "@/types/community";
import { MOCK_POSTS, TESTIMONIALS, FEATURES, STATS } from "@/data/community";

/**
 * Feature Card Component 
 */
const FeatureCard = ({ feature }: { feature: Feature }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-64 relative cursor-pointer"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden border-0 shadow-card hover:shadow-card-hover">
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <motion.div 
            className="rounded-full bg-primary-light bg-opacity-10 w-12 h-12 flex items-center justify-center text-primary-coral"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {feature.icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
            <motion.div 
              className="mt-3 flex items-center text-primary-coral font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/**
 * Post Card Component 
 */
const PostCard = ({ post }: { post: Post }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="border-0 shadow-sm hover:shadow transition-shadow duration-300">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarImage src={post.user.avatar} alt={post.user.name} />
              <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-gray-800">{post.user.name}</h4>
                <span className="text-xs text-gray-500">{post.timestamp}</span>
              </div>
              <p className="text-sm mb-3 text-gray-700">{post.content}</p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-primary-coral flex gap-1 h-8 px-2">
                  <Heart className="h-4 w-4" /> {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-primary-coral flex gap-1 h-8 px-2">
                  <MessageCircle className="h-4 w-4" /> Reply
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/**
 * Testimonial Card Component 
 */
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="mb-4"
    >
      <Card className="min-w-[300px] max-w-sm mr-6 border-0 shadow-lg overflow-hidden">
        <CardHeader className="pb-2 bg-gradient-to-r from-feature-lightPink to-white">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-sm text-gray-800">{testimonial.name}</h4>
              <p className="text-xs text-gray-500">{testimonial.petType}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-primary-coral fill-primary-coral' : 'text-gray-300'}`} />
            ))}
          </div>
          <p className="italic text-sm text-gray-700">&quot;{testimonial.content}&quot;</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/**
 * Stat Card Component 
 */
const StatCard = ({ stat, index }: { stat: Stat, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full border-0 shadow-md bg-gradient-to-br from-white to-feature-lightPink">
        <CardContent className="flex flex-col items-center justify-center text-center p-6">
          <span className="text-3xl md:text-4xl font-bold text-primary-coral mb-2">{stat.value}</span>
          <span className="text-sm md:text-base text-gray-600">{stat.label}</span>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/**
 * Hero Section Component 
 */
const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 md:px-8 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge variant="outline" className="px-4 py-2 gap-2 text-primary-coral border-primary-light border-opacity-30">
              <PawPrint className="w-4 h-4" /> Welcome to PetConnect Community
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-primary-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Where <span>Pets</span> and <span>People</span> Connect
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join our thriving community of pet lovers, find furry friends nearby, and access resources for the best pet care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="btn-primary">
              Join Community
            </Button>
            <Button size="lg" variant="outline" className="border-primary-coral text-primary-coral hover:bg-feature-lightPink btn-secondary">
              Explore Features
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating shapes in the background */}
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-light bg-opacity-10 blur-3xl" 
        animate={{ x: [0, 10, 0], y: [0, 15, 0], opacity: [0.4, 0.5, 0.4] }} 
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} 
      />
      <motion.div 
        className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-primary-light bg-opacity-10 blur-3xl" 
        animate={{ x: [0, -10, 0], y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }} 
      />
    </section>
  );
};

/**
 * Stats Section Component 
 */
const StatsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Growing Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            PetConnect is making a difference for pets and owners everywhere
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Features Section Component 
 */
const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-feature-lightGray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Why Join Our Community?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover all the ways PetConnect enhances your pet parenting journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Community Activity Section Component 
 */
const CommunitySection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Community Activity
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            See what pet lovers are discussing right now
          </motion.p>
        </div>

        <Tabs defaultValue="recent" className="max-w-full">
          <TabsList className="mb-6 justify-start bg-feature-lightPink p-1 rounded-lg">
            <TabsTrigger value="recent" className="data-[state=active]:bg-white data-[state=active]:text-primary-coral data-[state=active]:shadow-sm">Recent Posts</TabsTrigger>
            <TabsTrigger value="popular" className="data-[state=active]:bg-white data-[state=active]:text-primary-coral data-[state=active]:shadow-sm">Popular</TabsTrigger>
            <TabsTrigger value="unanswered" className="data-[state=active]:bg-white data-[state=active]:text-primary-coral data-[state=active]:shadow-sm">Unanswered</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4">
            {MOCK_POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-primary-light text-primary-coral hover:bg-feature-lightPink">
              Load more posts <ChevronRight className="w-4 h-4" />
            </Button>
          </TabsContent>

          <TabsContent value="popular" className="space-y-4">
            {MOCK_POSTS.slice().reverse().map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-primary-light text-primary-coral hover:bg-feature-lightPink">
              Load more posts <ChevronRight className="w-4 h-4" />
            </Button>
          </TabsContent>

          <TabsContent value="unanswered" className="space-y-4">
            {MOCK_POSTS.slice(0, 1).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-primary-light text-primary-coral hover:bg-feature-lightPink">
              Load more posts <ChevronRight className="w-4 h-4" />
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

/**
 * Testimonials Section Component 
 */
const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-feature-lightGray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            What Our Community Says
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Real stories from pet parents just like you
          </motion.p>
        </div>

        <motion.div 
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex overflow-x-auto pb-6 scrollbar-hide">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * CTA Section Component 
 */
const CTASection = () => {
  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-gradient-to-r from-feature-lightPink to-white">
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 text-primary-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Join Our Pet-Loving Community?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Connect with fellow pet parents, access resources, and enhance your pet care journey.
        </motion.p>

        <Button size="lg" className="btn-primary px-10 py-6 text-lg rounded-full shadow-lg">
          Join PetConnect Today <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-32 bg-contain bg-repeat-x opacity-10 paw-bg"
      />
    </section>
  );
};

/**
 * Main PetCommunityPage Component 
 */
export default function PetCommunityPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Page Sections */}
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CommunitySection />
      <TestimonialsSection />
      <CTASection />
      
      {/* Added CSS for smoother scrolling and hiding scrollbars */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}