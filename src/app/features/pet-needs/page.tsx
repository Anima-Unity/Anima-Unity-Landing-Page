// src/app/pet-needs/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  ShoppingCart, 
  Filter, 
  ChevronDown, 
  Search, 
  Star,
  PawPrint,
  Shield,
  Award,
  Truck,
  BadgeCheck
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Type definitions
type Product = {
  id: number;
  name: string;
  category: "food" | "vitamins" | "toys" | "cages" | "accessories";
  animal: "dog" | "cat" | "bird" | "small-pet" | "other";
  price: number;
  rating: number;
  image: string;
  description: string;
  isBestseller?: boolean;
  isNew?: boolean;
  discount?: number;
};

const PetNeedsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedAnimal, setSelectedAnimal] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<number>(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Premium Organic Dog Food",
      category: "food",
      animal: "dog",
      price: 39.99,
      rating: 4.8,
      image: "https://cateredbowl.com/app/uploads/2018/02/food-bag-dog-organicturkey@2x.png",
      description: "Nutritionally balanced organic food for adult dogs with real chicken and vegetables.",
      isBestseller: true
    },
    {
      id: 2,
      name: "Daily Multivitamin Chews",
      category: "vitamins",
      animal: "dog",
      price: 24.99,
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUXA2P5QJADTrTyF0qYcNdhZABJWjFFbi7CX_hU8a0taWTh89XtGNlnIH&s=10",
      description: "Complete daily vitamins to support immune health, joint function, and overall wellbeing."
    },
    {
      id: 3,
      name: "Interactive Treat Puzzle",
      category: "toys",
      animal: "dog",
      price: 19.95,
      rating: 4.5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BIwc938UpjUjocVvR0GfPLYUEXUm8x5yWQ5N217lbfJxncRxiAbxz0SA&s=10",
      description: "Mental stimulation toy that rewards your dog with treats while solving puzzles."
    },
    {
      id: 4,
      name: "Grain-Free Kitten Food",
      category: "food",
      animal: "cat",
      price: 29.99,
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZoGlkImCzUv8DgVCFf01klj0ibnOu8KDgTqzCS5B3xQNt21OW64tIX3P&s=10",
      description: "Specially formulated grain-free nutrition for kittens with omega-3 for brain development.",
      isNew: true
    },
    {
      id: 5,
      name: "Eco-Friendly Cat Cage",
      category: "cages",
      animal: "cat",
      price: 89.99,
      rating: 4.6,
      image: "https://s.alicdn.com/@sc04/kf/H2a301dc4a8324c71a020cbcab93a51a1h.jpg_720x720q50.jpg",
      description: "Sustainably made multi-level cat cage with natural materials and ample space.",
      discount: 15
    },
    {
      id: 6,
      name: "Bird Calcium Supplement",
      category: "vitamins",
      animal: "bird",
      price: 12.99,
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRbAt08p12b26zDLN_TdN7TPv6GrkO4NIBn-3V_M6bvHejyAUkyvQcJ-N&s=10",
      description: "Essential calcium supplement for proper bone development and egg production in birds."
    },
    {
      id: 7,
      name: "Wooden Exercise Wheel",
      category: "toys",
      animal: "small-pet",
      price: 24.95,
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvdgl-cQf7vQUiTMAUZpjgqb8wRd1h_CfqXARSYlybC9UZL8WgPjihfON&s=10",
      description: "Silent, natural wood exercise wheel for hamsters, gerbils and other small pets."
    },
    {
      id: 8,
      name: "Premium Hamster Cage Kit",
      category: "cages",
      animal: "small-pet",
      price: 59.99,
      rating: 4.5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDIXwGB6EwCXT5EXwqWc9d-U0tsqFDl5-kxkEgIuvnjM4QEYXUr8C0io&s=10",
      description: "Complete habitat with tunnels, exercise wheel, feeding area and deep bedding tray.",
      discount: 10
    }
  ];

  // Filter products based on category, animal and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesAnimal = selectedAnimal === "all" || product.animal === selectedAnimal;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesAnimal && matchesSearch;
  });

  // Add to cart function
  const addToCart = (productId: number) => {
    setCartItems(prevItems => prevItems + 1);
    // Here you would normally update your cart state or call an API
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-feature-lightPink">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary-gradient">Pet Needs</span> Marketplace
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              All-in-one solution for your pet's daily essentials—food, vitamins, toys, and cages—delivered to your door. Supporting responsible pet ownership.
            </motion.p>
          </div>
          
          {/* Search and Cart */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search for pet products..." 
                className="pl-10 pr-4 py-2 rounded-full border-gray-200 shadow-sm focus:ring-primary-coral focus:border-primary-coral"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter size={16} />
                    Filter by animal
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSelectedAnimal("all")}>All Animals</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedAnimal("dog")}>Dogs</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedAnimal("cat")}>Cats</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedAnimal("bird")}>Birds</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedAnimal("small-pet")}>Small Pets</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="ghost" className="relative">
                <ShoppingCart />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary-coral text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
          
          {/* Category Tabs */}
          <Tabs 
            defaultValue="all" 
            className="w-full"
            onValueChange={setSelectedCategory}
          >
            <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 bg-feature-lightGray rounded-full p-1 mb-8">
              <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary-coral">
                All Products
              </TabsTrigger>
              <TabsTrigger value="food" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary-coral">
                Food
              </TabsTrigger>
              <TabsTrigger value="vitamins" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary-coral">
                Vitamins
              </TabsTrigger>
              <TabsTrigger value="toys" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary-coral">
                Toys
              </TabsTrigger>
              <TabsTrigger value="cages" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary-coral">
                Cages
              </TabsTrigger>
            </TabsList>
            
            {/* Products Grid */}
            <TabsContent value={selectedCategory} className="mt-0">
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <motion.div key={product.id} variants={itemVariants}>
                      <Card className="overflow-hidden transition-all duration-300 hover:shadow-card-hover h-full flex flex-col bg-card-gradient border border-gray-100">
                        <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 right-3 flex flex-col gap-2">
                            <button className="bg-white p-1.5 rounded-full shadow-sm hover:scale-110 transition-transform">
                              <Heart size={18} className="text-gray-500 hover:text-primary-coral" />
                            </button>
                          </div>
                          {product.isBestseller && (
                            <Badge className="absolute top-3 left-3 bg-amber-500 text-white hover:bg-amber-600">
                              Bestseller
                            </Badge>
                          )}
                          {product.isNew && (
                            <Badge className="absolute top-3 left-3 bg-primary-coral text-white hover:bg-primary-light">
                              New Arrival
                            </Badge>
                          )}
                          {product.discount && (
                            <Badge className="absolute top-3 left-3 bg-green-500 text-white hover:bg-green-600">
                              {product.discount}% OFF
                            </Badge>
                          )}
                        </div>
                        
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="bg-feature-lightPink text-primary-coral border-none">
                              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </Badge>
                            <div className="flex items-center">
                              <Star size={14} className="fill-amber-400 text-amber-400" />
                              <span className="text-sm ml-1">{product.rating}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg mt-2 line-clamp-1">{product.name}</CardTitle>
                          <CardDescription className="line-clamp-2 text-sm text-gray-600 h-10">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="pb-2 flex-grow">
                          <div className="flex items-center gap-2 text-sm my-1">
                            <PawPrint size={14} className="text-primary-coral" />
                            <span className="text-gray-600">
                              For {product.animal === "small-pet" ? "Small Pets" : 
                                  product.animal.charAt(0).toUpperCase() + product.animal.slice(1) + "s"}
                            </span>
                          </div>
                        </CardContent>
                        
                        <CardFooter className="pt-0">
                          <div className="flex items-center justify-between w-full">
                            <div className="font-medium text-lg">
                              ${product.price.toFixed(2)}
                              {product.discount && (
                                <span className="text-sm text-gray-400 line-through ml-2">
                                  ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                                </span>
                              )}
                            </div>
                            <Button 
                              className="bg-primary-coral text-white hover:bg-primary-light shadow-button hover:shadow-button-hover"
                              onClick={() => addToCart(product.id)}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-16">
                    <motion.div 
                      className="mx-auto w-16 h-16 mb-4 bg-feature-lightPink rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <PawPrint size={28} className="text-primary-coral" />
                    </motion.div>
                    <h3 className="text-lg font-medium">No products found</h3>
                    <p className="text-gray-500 mt-2">Try adjusting your filters or search term</p>
                  </div>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
      
      {/* Trust Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl font-bold text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Our Pet Essentials?
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-feature-lightPink rounded-2xl p-6 text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Shield className="text-primary-coral" size={24} />
              </div>
              <h3 className="font-medium mb-2">Vet-Approved Quality</h3>
              <p className="text-sm text-gray-600">All products are tested and approved by licensed veterinarians</p>
            </motion.div>
            
            <motion.div 
              className="bg-feature-lightPink rounded-2xl p-6 text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Award className="text-primary-coral" size={24} />
              </div>
              <h3 className="font-medium mb-2">Premium Ingredients</h3>
              <p className="text-sm text-gray-600">We source only the highest quality, natural ingredients for our products</p>
            </motion.div>
            
            <motion.div 
              className="bg-feature-lightPink rounded-2xl p-6 text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Truck className="text-primary-coral" size={24} />
              </div>
              <h3 className="font-medium mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Get your pet essentials delivered to your door within 24-48 hours</p>
            </motion.div>
            
            <motion.div 
              className="bg-feature-lightPink rounded-2xl p-6 text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <BadgeCheck className="text-primary-coral" size={24} />
              </div>
              <h3 className="font-medium mb-2">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">Sustainable packaging and ethical sourcing to protect our planet</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Pet Welfare Commitment */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-feature-lightGray">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-2xl font-bold mb-4">Our Commitment to Animal Welfare</h2>
                <p className="text-gray-600 mb-6">
                  Every purchase you make supports our mission to promote responsible pet ownership. 
                  We donate 5% of our profits to animal shelters and welfare organizations, helping 
                  animals in need find loving homes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="min-w-6 mt-1">
                      <PawPrint size={18} className="text-primary-coral" />
                    </div>
                    <p className="text-sm">Only cruelty-free products that prioritize animal welfare</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-6 mt-1">
                      <PawPrint size={18} className="text-primary-coral" />
                    </div>
                    <p className="text-sm">Educational resources on proper pet care with every purchase</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="min-w-6 mt-1">
                      <PawPrint size={18} className="text-primary-coral" />
                    </div>
                    <p className="text-sm">Partnership with veterinarians to ensure product safety and efficacy</p>
                  </div>
                </div>
                <Button className="mt-6 bg-primary-coral hover:bg-primary-light text-white shadow-button hover:shadow-button-hover">
                  Learn More About Our Mission
                </Button>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="aspect-video rounded-2xl overflow-hidden bg-feature-lightPink flex items-center justify-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1NXRJWx1E3lXbZiLnwxUJvzN3OqNdx6O2PdbfU4JWgTGAj_rXbYVYwEs&s=10" alt="Animal Welfare" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-radial">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-3">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Get exclusive deals, pet care tips, and new product announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-full flex-grow"
              />
              <Button className="bg-primary-coral hover:bg-primary-light text-white rounded-full shadow-button hover:shadow-button-hover">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PetNeedsPage;