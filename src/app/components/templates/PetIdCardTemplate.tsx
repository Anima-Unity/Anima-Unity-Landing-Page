'use client';

import React, { useState, useRef, useEffect } from 'react';
import { QrCode, FileText, AlertCircle, Camera, Wifi, Upload, Globe, Phone } from 'lucide-react';
import { FaPaw } from 'react-icons/fa';
import Image from 'next/image';

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
        {/* Hero Section with Gradient Text */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-3 py-1 text-sm">
              Premium Pet Care
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Digital <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-white">Pet ID Card</span>
            <br />Generator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Create a personalized digital ID card for your pet that includes all important information, 
            accessible anytime and anywhere via QR code.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Form */}
          <Card className="lg:col-span-3 border-none shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 border-b border-gray-100">
              <CardTitle className="text-2xl font-bold text-gray-800">Pet Information</CardTitle>
              <CardDescription>Enter the details of your furry friend below</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger value="basic" className="text-sm">Basic Info</TabsTrigger>
                    <TabsTrigger value="medical" className="text-sm">Medical Info</TabsTrigger>
                    <TabsTrigger value="photo" className="text-sm">Pet Photo</TabsTrigger>
                  </TabsList>
                  
                  {/* Basic Info Tab */}
                  <TabsContent value="basic" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700">Pet Name*</Label>
                          <Input 
                            type="text" 
                            id="name"
                            name="name"
                            value={petData.name}
                            onChange={handleInputChange}
                            className="w-full focus:ring-2 focus:ring-orange-500" 
                            placeholder="Enter pet's name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="species" className="text-gray-700">Species*</Label>
                          <Select name="species" value={petData.species} onValueChange={(value) => handleSelectChange('species', value)}>
                            <SelectTrigger className="w-full bg-white">
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
                          <Label htmlFor="breed" className="text-gray-700">Breed</Label>
                          <Input 
                            type="text" 
                            id="breed"
                            name="breed"
                            value={petData.breed}
                            onChange={handleInputChange}
                            className="w-full focus:ring-2 focus:ring-orange-500" 
                            placeholder="Enter breed" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="age" className="text-gray-700">Age</Label>
                            <Input 
                              type="text" 
                              id="age"
                              name="age"
                              value={petData.age}
                              onChange={handleInputChange}
                              className="w-full focus:ring-2 focus:ring-orange-500" 
                              placeholder="Age" 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="weight" className="text-gray-700">Weight</Label>
                            <Input 
                              type="text" 
                              id="weight"
                              name="weight"
                              value={petData.weight}
                              onChange={handleInputChange}
                              className="w-full focus:ring-2 focus:ring-orange-500" 
                              placeholder="Weight" 
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="ownerContact" className="text-gray-700">Owner Contact*</Label>
                          <Input 
                            type="tel" 
                            id="ownerContact"
                            name="ownerContact"
                            value={petData.ownerContact}
                            onChange={handleInputChange}
                            className="w-full focus:ring-2 focus:ring-orange-500" 
                            placeholder="Phone number"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="emergencyContact" className="text-gray-700">Emergency Contact</Label>
                          <Input 
                            type="tel" 
                            id="emergencyContact"
                            name="emergencyContact"
                            value={petData.emergencyContact}
                            onChange={handleInputChange}
                            className="w-full focus:ring-2 focus:ring-orange-500" 
                            placeholder="Emergency phone number" 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="chipId" className="text-gray-700">Microchip ID</Label>
                          <Input 
                            type="text" 
                            id="chipId"
                            name="chipId"
                            value={petData.chipId}
                            onChange={handleInputChange}
                            className="w-full focus:ring-2 focus:ring-orange-500" 
                            placeholder="Microchip ID number" 
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* Medical Info Tab */}
                  <TabsContent value="medical" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="vaccinations" className="text-gray-700">Vaccinations</Label>
                        <Select name="vaccinations" value={petData.vaccinations} onValueChange={(value) => handleSelectChange('vaccinations', value)}>
                          <SelectTrigger className="w-full bg-white">
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
                        <Label htmlFor="allergies" className="text-gray-700">Allergies</Label>
                        <Input
                          id="allergies"
                          name="allergies"
                          value={petData.allergies}
                          onChange={handleInputChange}
                          className="w-full focus:ring-2 focus:ring-orange-500"
                          placeholder="List any allergies"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="lastCheckup" className="text-gray-700">Last Checkup</Label>
                      <Input 
                        type="date" 
                        id="lastCheckup"
                        name="lastCheckup"
                        value={petData.lastCheckup}
                        onChange={handleInputChange}
                        className="w-full focus:ring-2 focus:ring-orange-500" 
                      />
                    </div>
                  </TabsContent>
                  
                  {/* Photo Tab */}
                  <TabsContent value="photo" className="space-y-6">
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
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <Camera size={40} className="text-gray-400" />
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
                          className="mb-2 w-full md:w-auto"
                        >
                          <Upload size={16} className="mr-2" />
                          <span>{petImage ? 'Change Photo' : 'Upload Photo'}</span>
                        </Button>
                        <p className="text-sm text-gray-500">Square image recommended (JPG, PNG)</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-100">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-medium shadow-lg shadow-orange-500/20"
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
                <h2 className="text-2xl font-bold text-gray-800">ID Card Preview</h2>
                <Badge variant="outline" className="bg-white border-orange-200 text-orange-700">Preview</Badge>
              </div>
              
              {/* ID Card Preview - Premium Design */}
              <div className="relative">
                {/* Lanyard/strap */}
                <div className="w-full flex justify-center">
                  <div className="w-10 h-16 bg-gradient-to-b from-blue-400 to-blue-500 relative z-10 rounded-t-md shadow-md">
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 w-8 h-8 rounded-full border-2 border-white bg-gray-100 shadow-inner flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full border border-gray-400 bg-white"></div>
                    </div>
                  </div>
                </div>
                
                {/* Card container with premium effects */}
                <div className="relative -mt-2 transform transition-all duration-500 hover:rotate-1 hover:scale-105 group">
                  {/* Soft glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-orange-400/30 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
                  
                  {/* Glass card */}
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden backdrop-blur-lg border border-white/50" 
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)"
                    }}>
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 text-white flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                          <FaPaw className="w-6 h-6 text-orange-500" />
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
                    <div className="p-6 bg-white/70 backdrop-blur-md"
                      style={{
                        backgroundImage: "radial-gradient(circle at 20px 20px, rgba(251, 146, 60, 0.1) 4px, transparent 0), radial-gradient(circle at 40px 70px, rgba(14, 165, 233, 0.1) 6px, transparent 0), radial-gradient(circle at 90% 10%, rgba(14, 165, 233, 0.1) 16px, transparent 0)",
                        backgroundSize: "100px 100px"
                      }}>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-gray-800 mb-1">
                            {petData.name || 'Rex'}
                          </h3>
                          <div className="flex items-center mb-1">
                            <Badge className="bg-orange-100 text-orange-700 mr-2">{petData.species || 'Dog'}</Badge>
                            <p className="text-gray-500 text-sm">{petData.breed || 'Golden Retriever'}</p>
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
                            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                              <FaPaw className="w-8 h-8 text-gray-300" />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Details section */}
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50/80 p-3 rounded-xl">
                            <p className="text-xs text-gray-500 mb-1">Age</p>
                            <p className="font-medium">{petData.age || 'Unknown'}</p>
                          </div>
                          <div className="bg-gray-50/80 p-3 rounded-xl">
                            <p className="text-xs text-gray-500 mb-1">Weight</p>
                            <p className="font-medium">{petData.weight || 'Unknown'}</p>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50/80 p-3 rounded-xl">
                          <p className="text-xs text-gray-500 mb-1">Owner Contact</p>
                          <p className="font-medium flex items-center">
                            <Phone size={14} className="mr-1 text-gray-400" />
                            {petData.ownerContact || 'Not provided'}
                          </p>
                        </div>
                        
                        <div className="bg-gray-50/80 p-3 rounded-xl">
                          <p className="text-xs text-gray-500 mb-1">Medical Information</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge variant="outline" className="bg-white">
                              Vacc: {petData.vaccinations}
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
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 text-center border-t border-gray-200">
                      <p className="text-xs text-gray-500">Scan QR code for complete digital profile</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tips */}
              <div className="mt-8 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-start">
                  <AlertCircle size={18} className="text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-700 mb-1">Why create a digital pet ID?</h4>
                    <p className="text-sm text-blue-600">Digital pet IDs help reunite lost pets with their owners faster. They provide critical information for veterinarians in emergencies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-200">Features</Badge>
            <h2 className="text-3xl font-bold mb-4">Everything you need for pet safety</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Our digital pet ID cards offer comprehensive solutions for pet safety and identification</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg rounded-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <QrCode className="h-6 w-6 text-orange-500" />
                </div>
                <CardTitle>QR Code Scanning</CardTitle>
                <CardDescription>Anyone who finds your pet can scan the QR code for complete information</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg rounded-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>Complete Medical Records</CardTitle>
                <CardDescription>Keep vaccination history and medical information always accessible</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg rounded-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-emerald-500 to-green-500"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-emerald-500" />
                </div>
                <CardTitle>Accessible Anywhere</CardTitle>
                <CardDescription>Cloud-based pet profiles that can be accessed from any device, anywhere</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPetIDCardTemplate;