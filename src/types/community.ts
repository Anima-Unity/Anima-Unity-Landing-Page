// Types definitions for PetConnect Community

import { ReactNode } from 'react';

/**
 * Post type for community posts
 */
export type Post = {
  id: string;
  user: { 
    name: string; 
    avatar: string; 
  };
  content: string;
  likes: number;
  timestamp: string;
};

/**
 * Testimonial type for user reviews
 */
export type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  content: string;
  rating: number;
  petType: string;
};

/**
 * Feature type for community features
 */
export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
};

/**
 * Stat type for community statistics
 */
export type Stat = {
  label: string;
  value: string;
  bgColor: string;
};