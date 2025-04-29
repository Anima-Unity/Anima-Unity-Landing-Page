"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Heart, MessageCircle, PawPrint, Calendar, Map, 
  Users, Star, ChevronRight, Sun, Moon 
} from "lucide-react";

// Type definitions
type Post = {
  id: string;
  user: { name: string; avatar: string; };
  content: string;
  likes: number;
  timestamp: string;
};

type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  content: string;
  rating: number;
  petType: string;
};

// Mock data (visual-only)
const MOCK_POSTS: Post[] = [
  {
    id: "p1",
    user: { name: "Alex Johnson", avatar: "/api/placeholder/40/40" },
    content: "Just found an amazing dog park near Downtown! Anyone want to meet up this weekend?",
    likes: 24,
    timestamp: "2h ago"
  },
  {
    id: "p2",
    user: { name: "Sophia Chen", avatar: "/api/placeholder/40/40" },
    content: "My cat Luna just got her checkup at Pawsome Vet Clinic. Highly recommend Dr. Miller!",
    likes: 18,
    timestamp: "4h ago"
  },
  {
    id: "p3",
    user: { name: "Marcus Webb", avatar: "/api/placeholder/40/40" },
    content: "Looking for recommendations on pet-friendly cafés in the North District. Any suggestions?",
    likes: 12,
    timestamp: "7h ago"
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Emma Wilson",
    avatar: "/api/placeholder/48/48",
    content: "This community helped me find a pet sitter when I had an emergency trip. Everyone is so supportive!",
    rating: 5,
    petType: "Dog owner"
  },
  {
    id: "t2",
    name: "David Garcia",
    avatar: "/api/placeholder/48/48",
    content: "I've connected with so many fellow cat lovers. My Whiskers has made new friends too!",
    rating: 5,
    petType: "Cat owner"
  },
  {
    id: "t3",
    name: "Jasmine Patel",
    avatar: "/api/placeholder/48/48",
    content: "Found an amazing vet through community recommendations. The interactive map feature is so useful!",
    rating: 4,
    petType: "Multiple pets"
  }
];

const FEATURES = [
  {
    id: "f1",
    title: "Pet Meetups",
    description: "Connect with local pet owners and arrange playdates",
    icon: <Users className="h-6 w-6 text-icon-digital" />,
    color: "digital"
  },
  {
    id: "f2",
    title: "Healthcare Tips",
    description: "Access expert advice on pet wellness and care",
    icon: <PawPrint className="h-6 w-6 text-icon-healthcare" />,
    color: "healthcare"
  },
  {
    id: "f3",
    title: "Event Calendar",
    description: "Never miss pet-friendly events in your area",
    icon: <Calendar className="h-6 w-6 text-icon-shelter" />,
    color: "shelter"
  },
  {
    id: "f4",
    title: "Community Map",
    description: "Discover pet-friendly locations near you",
    icon: <Map className="h-6 w-6 text-icon-tracking" />,
    color: "tracking"
  },
];

const STATS = [
  { label: "Active Pet Shelters", value: "500+", bgColor: "bg-stat-shelters" },
  { label: "Verified Veterinarians", value: "350+", bgColor: "bg-stat-vets" },
  { label: "Registered Pets", value: "15K+", bgColor: "bg-stat-pets" },
  { label: "User Satisfaction", value: "98%", bgColor: "bg-stat-satisfaction" }
];

// Component for feature cards with flip animation
const FeatureCard = ({ feature }: { feature: typeof FEATURES[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <motion.div
      className={`h-64 relative cursor-pointer perspective-1000`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front face */}
        <div 
          className={`absolute w-full h-full bg-feature-${feature.color} rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300`}
        >
          <div className="rounded-full bg-white/30 w-12 h-12 flex items-center justify-center backdrop-blur-sm">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </div>
        
        {/* Back face */}
        <div 
          className={`absolute w-full h-full bg-gradient-to-br from-white to-feature-${feature.color} rounded-2xl p-6 flex items-center justify-center backface-hidden shadow-card rotateY-180`}
        >
          <div className="text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <p className="text-gray-800 font-medium">Tap to learn more about<br /><span className="font-bold">{feature.title}</span></p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Component for post cards with animations
const PostCard = ({ post }: { post: Post }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-card p-4 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 mb-4"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-full overflow-hidden flex-shrink-0">
          <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-medium text-gray-900 dark:text-gray-100">{post.user.name}</h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">{post.timestamp}</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{post.content}</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors text-sm">
              <Heart className="h-4 w-4" /> {post.likes}
            </button>
            <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors text-sm">
              <MessageCircle className="h-4 w-4" /> Reply
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Component for testimonial cards with drag animation
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="min-w-[300px] max-w-sm p-6 rounded-2xl bg-white dark:bg-card shadow-card flex flex-col gap-4 mr-6"
    >
      <div className="flex items-center gap-3">
        <div className="rounded-full overflow-hidden">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.petType}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-accent-yellow fill-accent-yellow' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
    </motion.div>
  );
};

// Stats component with counter animation
const StatCard = ({ stat, index }: { stat: typeof STATS[0], index: number }) => {
  const [count, setCount] = useState(0);
  const value = stat.value.replace(/\D/g, '');
  const suffix = stat.value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.floor(Number(value) * progress);
      
      if (frame === totalFrames) {
        clearInterval(timer);
        setCount(Number(value));
      } else {
        setCount(currentCount);
      }
    }, frameDuration);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={`${stat.bgColor} p-6 rounded-2xl flex flex-col items-center justify-center text-center`}
    >
      <span className="text-3xl md:text-4xl font-bold text-gray-900">{count}{suffix}</span>
      <span className="text-sm md:text-base text-gray-700">{stat.label}</span>
    </motion.div>
  );
};

// Main component
export default function PetCommunityPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [posts] = useState(MOCK_POSTS);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  // For drag to scroll in testimonials
  const [dragConstraints, setDragConstraints] = useState(0);
  useEffect(() => {
    // Calculate width of testimonial container minus viewport width
    const testimonialSection = document.getElementById('testimonials-container');
    if (testimonialSection) {
      const scrollWidth = testimonialSection.scrollWidth;
      const clientWidth = testimonialSection.clientWidth;
      setDragConstraints(clientWidth - scrollWidth);
    }
  }, []);
  
  return (
    <div className={`min-h-screen w-full bg-background text-foreground transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Theme toggle */}
      <button 
        onClick={toggleDarkMode} 
        className="fixed right-5 top-5 z-50 rounded-full p-2 bg-white dark:bg-gray-800 shadow-md"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
      
      {/* Hero Section with 3D Background */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }} 
        className="min-h-screen relative flex items-center justify-center px-4 md:px-8 bg-hero-pattern overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-background dark:to-gray-900 opacity-50"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-6 p-2 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 dark:bg-gray-800/30 dark:border-gray-700/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <PawPrint className="w-4 h-4" /> Welcome to PetConnect Community
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Where <span>Pets</span> and <span>People</span> Connect
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
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
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl font-medium text-white bg-cta-gradient shadow-button transition-transform duration-300"
              >
                Join Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl font-medium border-2 border-primary text-primary hover:bg-primary/5 transition-colors duration-300"
              >
                Explore Features
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating shapes in the background */}
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            x: [0, 10, 0], 
            y: [0, 15, 0],
            opacity: [0.4, 0.5, 0.4] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-accent-blue/10 blur-3xl"
          animate={{ 
            x: [0, -10, 0], 
            y: [0, -15, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.section>
      
      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Growing Community</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
      
      {/* Features Section with Card Flip Animation */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Join Our Community?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
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
      
      {/* Live Activity Feed Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Community Activity
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              See what pet lovers are discussing right now
            </motion.p>
          </div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </AnimatePresence>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Load more posts <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section with Horizontal Drag Scroll */}
      <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Community Says
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
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
            <motion.div 
              id="testimonials-container"
              className="flex overflow-x-auto pb-6 no-scrollbar"
              drag="x"
              dragConstraints={{ right: 0, left: dragConstraints }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Join Our Pet-Loving Community?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Connect with fellow pet parents, access resources, and enhance your pet care journey.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-xl font-medium text-white bg-cta-gradient shadow-button transition-transform duration-300 text-lg"
          >
            Join PetConnect Today
          </motion.button>
        </motion.div>
      </section>
      
      {/* Added CSS for 3D card flip and other effects */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .text-primary-gradient {
          background: linear-gradient(to right, #10b981, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}