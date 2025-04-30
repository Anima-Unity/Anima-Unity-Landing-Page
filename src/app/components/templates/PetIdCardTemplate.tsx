'use client';

import React, { useState, useRef, useEffect } from 'react';
import { QrCode, FileText, AlertCircle, Camera, Wifi, Upload, Globe, Phone, PawPrint, ArrowRight, Shield, CheckCircle, Users, ChevronDown, Bell, MapPin} from 'lucide-react';
import { FaPaw } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from "framer-motion";

// Import shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface PetFormData {
  name: string;
  species: string;
  breed: string;
  age: string;
  weight: string;
  ownerContact: string;
  emergencyContact: string;
  chipId: string;
  vaccinations: string;
  allergies: string;
  lastCheckup: string;
}

const DigitalPetIDCardTemplate: React.FC = () => {
  const [petIdCode, setPetIdCode] = useState('bcm-placeholder-00');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [petImage, setPetImage] = useState<string | null>(null);
  const [petData, setPetData] = useState<PetFormData>({
    name: '',
    species: 'Cat',
    breed: '',
    age: '',
    weight: '',
    ownerContact: '', 
    emergencyContact: '',
    chipId: '',
    vaccinations: 'Up to date',
    allergies: 'None',
    lastCheckup: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPetData({
      ...petData,
      [name]: value
    });
  };

  // Special handler for select components from shadcn/ui
  const handleSelectChange = (name: string, value: string) => {
    setPetData({
      ...petData,
      [name]: value
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Pet data submitted:', petData);
    alert('Pet ID Card Generated Successfully!');
  };
  
  // Generate a random ID for the pet
  useEffect(() => {
    setPetIdCode(`bcm-${Math.random().toString(36).substring(2, 10)}-${Math.floor(Math.random() * 100)}`);
  }, []);
  
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
{/* Hero Section with Enhanced Styling */}
<section className="relative py-16 md:py-24 overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute -top-24 -right-24 w-64 h-64 bg-feature-lightPink rounded-full blur-3xl opacity-60"></div>
  <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-feature-lightPink rounded-full blur-3xl opacity-50"></div>
  
  {/* Paw pattern overlay */}
  <div className="absolute inset-0 paw-bg opacity-5"></div>
  
  <div className="relative z-10 container mx-auto px-4 md:px-6">
    <div className="text-center mb-16 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block"
      >
        <Badge className="bg-gradient-to-r from-primary-coral/20 to-primary-light/20 text-primary-coral hover:from-primary-coral/30 hover:to-primary-light/30 px-4 py-1.5 text-sm font-medium rounded-full border border-primary-coral/20">
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-primary-coral mr-2 animate-pulse"></span>
            Premium Pet Care
          </span>
        </Badge>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
      >
        <span className="relative inline-block">
          Digital
          <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 385 16" height="8" preserveAspectRatio="none">
            <path d="M0,14.5C79.8,4.5,158.5,0,238.2,3c79.7,3,147.3,8.9,146.8,6" stroke="#ff6b52" strokeWidth="8" fill="none" strokeLinecap="round" />
          </svg>
        </span>{" "}
        <span className="bg-coral-gradient text-gradient font-extrabold"> 
          Pet ID Card
        </span>
        <br />
        <span className="relative z-10">Generator</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light"
      >
        Create a personalized digital ID card for your pet that includes all 
        important information, accessible anytime and anywhere via QR code.
      </motion.p>
      
      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
      >
        <Button 
          className="bg-coral-gradient hover:bg-primary-light px-6 py-6 rounded-2xl text-white font-medium shadow-button hover:shadow-button-hover transition-all duration-300"
        >
          Create Pet ID <PawPrint className="ml-2 h-5 w-5" />
        </Button>
        <Button 
          variant="outline"
          className="bg-transparent border-2 border-primary-coral/30 text-primary-coral hover:bg-primary-coral/5 px-6 py-6 rounded-2xl font-medium transition-all duration-300"
        >
          See Examples <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
      
      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="pt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
      >
        <div className="flex items-center">
          <Shield className="w-4 h-4 mr-2 text-primary-coral" />
          <span>Secure & Private</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 mr-2 text-primary-coral" />
          <span>Vet Approved</span>
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-2 text-primary-coral" />
          <span>10,000+ Happy Pet Owners</span>
        </div>
      </motion.div>
      
      {/* Preview indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="pt-6 flex justify-center"
      >
        <div className="flex items-center text-xs text-muted-foreground/70">
          <ChevronDown className="w-4 h-4 mr-1 animate-bounce" />
          <span>Scroll to see ID card examples</span>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* Main Content Area */}
<div className="grid lg:grid-cols-5 gap-8">
  {/* Left Column - Form */}
  <Card className="lg:col-span-3 border-none shadow-card hover:shadow-card-hover transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden">
    <CardHeader className="bg-gradient-to-r from-primary-coral/10 to-primary-light/10 border-b border-gray-100">
      <CardTitle className="text-2xl font-bold text-accent-black">Pet Information</CardTitle>
      <CardDescription className="text-muted-foreground">Enter the details of your furry friend below</CardDescription>
    </CardHeader>
    <CardContent className="pt-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 bg-secondary">
            <TabsTrigger 
              value="basic" 
              className="text-sm font-medium data-[state=active]:bg-primary-coral data-[state=active]:text-white"
            >
              Basic Info
            </TabsTrigger>
            <TabsTrigger 
              value="medical" 
              className="text-sm font-medium data-[state=active]:bg-primary-coral data-[state=active]:text-white"
            >
              Medical Info
            </TabsTrigger>
            <TabsTrigger 
              value="photo" 
              className="text-sm font-medium data-[state=active]:bg-primary-coral data-[state=active]:text-white"
            >
              Pet Photo
            </TabsTrigger>
          </TabsList>
          
          {/* Basic Info Tab */}
          <TabsContent value="basic" className="space-y-6 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-accent-black font-medium">Pet Name*</Label>
                  <Input 
                    type="text" 
                    id="name"
                    name="name"
                    value={petData.name}
                    onChange={handleInputChange}
                    className="w-full border-input focus:ring-2 focus:ring-primary-coral focus:border-primary-coral transition-all" 
                    placeholder="Enter pet's name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="species" className="text-accent-black font-medium">Species*</Label>
                  <Select name="species" value={petData.species} onValueChange={(value) => handleSelectChange('species', value)}>
                    <SelectTrigger className="w-full bg-white border-input focus:ring-2 focus:ring-primary-coral">
                      <SelectValue placeholder="Select species" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cat">Cat</SelectItem>
                      <SelectItem value="Dog">Dog</SelectItem>
                      <SelectItem value="Bird">Bird</SelectItem>
                      <SelectItem value="Rabbit">Rabbit</SelectItem>
                      <SelectItem value="Fish">Fish</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="breed" className="text-accent-black font-medium">Breed</Label>
                  <Input 
                    type="text" 
                    id="breed"
                    name="breed"
                    value={petData.breed}
                    onChange={handleInputChange}
                    className="w-full border-input focus:ring-2 focus:ring-primary-coral focus:border-primary-coral transition-all" 
                    placeholder="Enter breed" 
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-accent-black font-medium">Age</Label>
                    <Input 
                      type="text" 
                      id="age"
                      name="age"
                      value={petData.age}
                      onChange={handleInputChange}
                      className="w-full border-input focus:ring-2 focus:ring-primary-coral focus:border-primary-coral transition-all" 
                      placeholder="Age" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight" className="text-accent-black font-medium">Weight</Label>
                    <Input 
                      type="text" 
                      id="weight"
                      name="weight"
                      value={petData.weight}
                      onChange={handleInputChange}
                      className="w-full border-input focus:ring-2 focus:ring-primary-coral focus:border-primary-coral transition-all" 
                      placeholder="Weight" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ownerContact" className="text-accent-black font-medium">Owner Contact*</Label>
                  <Input 
                    type="tel" 
                    id="ownerContact"
                    name="ownerContact"
                    value={petData.ownerContact}
                    onChange={handleInputChange}
                    className="w-full border-input focus:ring-2 focus:ring-primary-coral focus:border-primary-coral transition-all" 
                    placeholder="Phone number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="emergencyContact" className="text-accent-black font-medium">Emergency Contact</Label>
                  <Input 
                    type="tel" 
                    id="emergencyContact"
                    name="emergencyContact"
                    value={petData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full border-input focus:ring-2 focus:ring-primary-coral focus:border-primary-coral transition-all" 
                    placeholder="Emergency phone number" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="chipId" className="text-accent-black font-medium">Microchip ID</Label>
                  <Input 
                    type="text" 
                    id="chipId"
                    name="chipId"
                    value={petData.chipId}
                    onChange={handleInputChange}
                    className="w-full border-input focus:ring-2 focus:ring-primary-coral focus:border-primary-coral transition-all" 
                    placeholder="Microchip ID number" 
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Medical Info Tab */}
          <TabsContent value="medical" className="space-y-6 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="vaccinations" className="text-accent-black font-medium">Vaccinations</Label>
                <Select name="vaccinations" value={petData.vaccinations} onValueChange={(value) => handleSelectChange('vaccinations', value)}>
                  <SelectTrigger className="w-full bg-white border-input focus:ring-2 focus:ring-primary-coral">
                    <SelectValue placeholder="Vaccination status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Up to date">Up to date</SelectItem>
                    <SelectItem value="Partially vaccinated">Partially vaccinated</SelectItem>
                    <SelectItem value="Not vaccinated">Not vaccinated</SelectItem>
                    <SelectItem value="Unknown">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="allergies" className="text-accent-black font-medium">Allergies</Label>
                <Input
                  id="allergies"
                  name="allergies"
                  value={petData.allergies}
                  onChange={handleInputChange}
                  className="w-full border-input focus:ring-2 focus:ring-primary-coral focus:border-primary-coral transition-all"
                  placeholder="List any allergies"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="lastCheckup" className="text-accent-black font-medium">Last Checkup</Label>
              <Input 
                type="date" 
                id="lastCheckup"
                name="lastCheckup"
                value={petData.lastCheckup}
                onChange={handleInputChange}
                className="w-full border-input focus:ring-2 focus:ring-primary-coral focus:border-primary-coral transition-all" 
              />
            </div>
          </TabsContent>
          
          {/* Photo Tab */}
          <TabsContent value="photo" className="space-y-6 animate-slide-up">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {petImage ? (
                  <Image
                    src={petImage}
                    alt="Pet preview"
                    className="w-full h-full object-cover"
                    width={200}
                    height={200}
                    loading="eager"
                    quality={90}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-feature-lightPink to-feature-lightGray flex items-center justify-center">
                    <Camera size={40} className="text-primary-coral/50" />
                  </div>
                )}
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <Button 
                  type="button"
                  onClick={triggerFileInput}
                  variant="outline"
                  className="mb-2 w-full md:w-auto hover:bg-primary-coral/10 border-primary-coral/30 text-accent-black hover:text-primary-coral transition-all"
                >
                  <Upload size={16} className="mr-2" />
                  <span>{petImage ? 'Change Photo' : 'Upload Photo'}</span>
                </Button>
                <p className="text-sm text-muted-foreground">Square image recommended (JPG, PNG)</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Submit Button */}
        <div className="pt-6 border-t border-gray-100">
          <Button 
            type="submit" 
            className="w-full bg-coral-gradient hover:opacity-90 hover:scale-[1.01] active:scale-[0.98] text-white font-medium button-shadow hover:shadow-button-hover transition-all duration-300"
          >
            <QrCode size={16} className="mr-2" />
            Generate Digital ID Card
          </Button>
        </div>
      </form>
    </CardContent>
  </Card>
  
  {/* Right Column - ID Card Preview */}
  <div className="lg:col-span-2">
    <div className="sticky top-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-accent-black">ID Card Preview</h2>
        <Badge variant="outline" className="bg-feature-lightPink border-primary-coral/20 text-primary-coral">Preview</Badge>
      </div>
      
      {/* ID Card Preview - Premium Design */}
      <div className="relative">
        {/* Lanyard/strap */}
        <div className="w-full flex justify-center">
          <div className="w-10 h-16 bg-gradient-to-b from-primary-coral to-primary-dark relative z-10 rounded-t-md shadow-md">
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 w-8 h-8 rounded-full border-2 border-white bg-gray-100 shadow-inner flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border border-gray-400 bg-white"></div>
            </div>
          </div>
        </div>
        
        {/* Card container with premium effects */}
        <div className="relative -mt-2 transform transition-all duration-500 hover:rotate-1 hover:scale-105 group">
          {/* Soft glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-light/30 to-primary-coral/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
          
          {/* Glass card */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden backdrop-blur-lg border border-white/50" 
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)"
            }}>
            {/* Header */}
            <div className="bg-coral-gradient p-6 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                  <FaPaw className="w-6 h-6 text-primary-coral" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl tracking-tight">Anima Unity</h3>
                  <p className="text-xs text-orange-50 tracking-wider">PET ID CARD</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm border border-white/30">
                  <Wifi size={18} className="text-white" />
                </div>
                <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm border border-white/30">
                  <QrCode size={18} className="text-white" />
                </div>
              </div>
            </div>
            
            {/* Pet Info */}
            <div className="p-6 bg-white/70 backdrop-blur-md paw-bg"
              style={{
                backgroundImage: "radial-gradient(circle at 20px 20px, rgba(255, 107, 82, 0.1) 4px, transparent 0), radial-gradient(circle at 40px 70px, rgba(255, 138, 117, 0.1) 6px, transparent 0), radial-gradient(circle at 90% 10%, rgba(255, 107, 82, 0.1) 16px, transparent 0)",
                backgroundSize: "100px 100px"
              }}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-accent-black mb-1">
                    {petData.name || 'Rex'}
                  </h3>
                  <div className="flex items-center mb-1">
                    <Badge className="bg-feature-lightPink text-primary-coral mr-2">{petData.species || 'Dog'}</Badge>
                    <p className="text-muted-foreground text-sm">{petData.breed || 'Golden Retriever'}</p>
                  </div>
                  <p className="text-gray-400 text-xs mt-1 font-mono">{petIdCode}</p>
                </div>
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  {petImage ? (
                    <Image
                      src={petImage}
                      alt="Pet profile photo"
                      className="w-full h-full object-cover"
                      width={120}
                      height={120}
                      quality={90}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-feature-lightPink to-feature-lightGray flex items-center justify-center">
                      <FaPaw className="w-8 h-8 text-primary-coral/50" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Details section */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-feature-lightPink/30 p-3 rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Age</p>
                    <p className="font-medium text-accent-black">{petData.age || 'Unknown'}</p>
                  </div>
                  <div className="bg-feature-lightPink/30 p-3 rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">Weight</p>
                    <p className="font-medium text-accent-black">{petData.weight || 'Unknown'}</p>
                  </div>
                </div>
                
                <div className="bg-feature-lightPink/30 p-3 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">Owner Contact</p>
                  <p className="font-medium text-accent-black flex items-center">
                    <Phone size={14} className="mr-1 text-primary-coral" />
                    {petData.ownerContact || 'Not provided'}
                  </p>
                </div>
                
                <div className="bg-feature-lightPink/30 p-3 rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">Medical Information</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline" className="bg-white border-primary-coral/20 text-primary-coral">
                      Vacc: {petData.vaccinations || 'Unknown'}
                    </Badge>
                    {petData.allergies && petData.allergies !== 'None' && (
                      <Badge variant="outline" className="bg-white text-amber-600 border-amber-200">
                        Allergies: {petData.allergies}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="bg-feature-lightPink/30 p-3 text-center border-t border-gray-200">
              <p className="text-xs text-muted-foreground">Scan QR code for complete digital profile</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tips */}
      <div className="mt-8 bg-feature-lightPink rounded-xl p-4 border border-primary-coral/20">
        <div className="flex items-start">
          <AlertCircle size={18} className="text-primary-coral mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-primary-dark mb-1">Why create a digital pet ID?</h4>
            <p className="text-sm text-accent-black/80">Digital pet IDs help reunite lost pets with their owners faster. They provide critical information for veterinarians in emergencies.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
{/* Features Section */}
<section className="py-24 bg-feature-lightPink relative overflow-hidden">
  {/* Decorative background patterns */}
  <div className="absolute inset-0 paw-bg opacity-20 z-0"></div>
  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary-light/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/4"></div>
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-radial from-primary-light/20 to-transparent rounded-full translate-y-1/3 -translate-x-1/3"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-flex mb-4 bg-white py-1 px-4 rounded-full shadow-sm items-center">
        <span className="h-2 w-2 rounded-full bg-primary-coral mr-2"></span>
        <span className="text-sm font-medium text-primary-coral">Pet Safety Features</span>
      </div>
      <h2 className="text-4xl font-bold mb-6 text-primary-gradient">Everything you need for pet safety</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our digital pet ID cards offer comprehensive solutions for pet safety and identification</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Feature Card 1 */}
      <div className="feature-card bg-card-gradient rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden">
        <div className="h-2 bg-coral-gradient"></div>
        <div className="p-8">
          <div className="w-16 h-16 rounded-2xl bg-primary-light/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <QrCode className="h-8 w-8 text-primary-coral" />
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-coral transition-colors duration-300">QR Code Scanning</h3>
          <p className="text-gray-600">Anyone who finds your pet can scan the QR code for complete information and contact details instantly.</p>
        </div>
      </div>
      
      {/* Feature Card 2 */}
      <div className="feature-card bg-card-gradient rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden">
        <div className="h-2 bg-coral-gradient"></div>
        <div className="p-8">
          <div className="w-16 h-16 rounded-2xl bg-primary-light/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <FileText className="h-8 w-8 text-primary-coral" />
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-coral transition-colors duration-300">Complete Medical Records</h3>
          <p className="text-gray-600">Keep vaccination history and medical information always accessible for veterinarians and pet sitters.</p>
        </div>
      </div>
      
      {/* Feature Card 3 */}
      <div className="feature-card bg-card-gradient rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden">
        <div className="h-2 bg-coral-gradient"></div>
        <div className="p-8">
          <div className="w-16 h-16 rounded-2xl bg-primary-light/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Globe className="h-8 w-8 text-primary-coral" />
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-coral transition-colors duration-300">Accessible Anywhere</h3>
          <p className="text-gray-600">Cloud-based pet profiles that can be accessed from any device, anywhere in the world, anytime.</p>
        </div>
      </div>
    </div>
    
    {/* Additional Feature Highlights */}
    <div className="mt-16 grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-card flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
          <Bell className="h-6 w-6 text-primary-coral" />
        </div>
        <div>
          <h4 className="font-medium text-lg">Instant Notifications</h4>
          <p className="text-gray-600 text-sm">Get alerted immediately when someone scans your pet&apos;s ID</p>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-card flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
          <MapPin className="h-6 w-6 text-primary-coral" />
        </div>
        <div>
          <h4 className="font-medium text-lg">Location Tracking</h4>
          <p className="text-gray-600 text-sm">See where your pet&apos;s ID was scanned on an interactive map</p>
        </div>
      </div>
    </div>
    
    {/* CTA Button */}
    <div className="mt-16 text-center">
      <button className="customizr-button font-medium text-lg px-8 py-3 shadow-button hover:shadow-button-hover transition-all duration-300">
        Get Your Pet ID Now
      </button>
    </div>
  </div>
</section>
      </div>
    </div>
  );
};

export default DigitalPetIDCardTemplate;