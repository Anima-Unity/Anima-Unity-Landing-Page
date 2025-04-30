// Mock data for PetConnect Community

import { Post, Testimonial, Feature, Stat } from "@/types/community";
import { PawPrint, Users, Calendar, Map } from "lucide-react";

/**
 * Mock posts for the community activity section
 */
export const MOCK_POSTS: Post[] = [
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

/**
 * Testimonials for community reviews section
 */
export const TESTIMONIALS: Testimonial[] = [
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

/**
 * Features for the features section
 */
export const FEATURES: Feature[] = [
  {
    id: "f1",
    title: "Pet Meetups",
    description: "Connect with local pet owners and arrange playdates",
    icon: <Users className="h-6 w-6" />,
    color: "blue"
  },
  {
    id: "f2",
    title: "Healthcare Tips",
    description: "Access expert advice on pet wellness and care",
    icon: <PawPrint className="h-6 w-6" />,
    color: "green"
  },
  {
    id: "f3",
    title: "Event Calendar",
    description: "Never miss pet-friendly events in your area",
    icon: <Calendar className="h-6 w-6" />,
    color: "orange" 
  },
  {
    id: "f4",
    title: "Community Map",
    description: "Discover pet-friendly locations near you",
    icon: <Map className="h-6 w-6" />,
    color: "purple"
  },
];

/**
 * Stats for the statistics section
 */
export const STATS: Stat[] = [
  { label: "Active Pet Shelters", value: "500+", bgColor: "bg-stat-shelters" },
  { label: "Verified Veterinarians", value: "350+", bgColor: "bg-stat-vets" },
  { label: "Registered Pets", value: "15K+", bgColor: "bg-stat-pets" },
  { label: "User Satisfaction", value: "98%", bgColor: "bg-stat-satisfaction" }
];