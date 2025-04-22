'use client';

import React, { useState, useRef, useEffect } from 'react';
import { QrCode, FileText, AlertCircle, Camera, Wifi, Upload, RefreshCw, Globe, Phone } from 'lucide-react';
import { FaPaw } from 'react-icons/fa';

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

const DigitalPetIDCard: React.FC = () => {
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
    // Generate random ID hanya pada sisi klien
    setPetIdCode(`bcm-${Math.random().toString(36).substring(2, 10)}-${Math.floor(Math.random() * 100)}`);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Digital <span className="text-orange-500">Pet ID Card</span> <br />
            Generator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create a personalized digital ID card for your pet that includes all important information, 
            accessible anytime and anywhere via QR code.
          </p>
        </div>

        {/* Card Creator Section */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Column - Form */}
          <div className="md:col-span-3 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">Pet Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1.5 font-medium">Pet Name*</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={petData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Enter pet&apos;s name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="species" className="block text-gray-700 mb-1.5 font-medium">Species*</label>
                    <select 
                      id="species"
                      name="species"
                      value={petData.species}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white transition-colors"
                      required
                    >
                      <option value="Cat">Cat</option>
                      <option value="Dog">Dog</option>
                      <option value="Bird">Bird</option>
                      <option value="Rabbit">Rabbit</option>
                      <option value="Fish">Fish</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="breed" className="block text-gray-700 mb-1.5 font-medium">Breed</label>
                    <input 
                      type="text" 
                      id="breed"
                      name="breed"
                      value={petData.breed}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Enter breed" 
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="age" className="block text-gray-700 mb-1.5 font-medium">Age</label>
                      <input 
                        type="text" 
                        id="age"
                        name="age"
                        value={petData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                        placeholder="Age" 
                      />
                    </div>
                    <div>
                      <label htmlFor="weight" className="block text-gray-700 mb-1.5 font-medium">Weight</label>
                      <input 
                        type="text" 
                        id="weight"
                        name="weight"
                        value={petData.weight}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                        placeholder="Weight" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="ownerContact" className="block text-gray-700 mb-1.5 font-medium">Owner Contact*</label>
                    <input 
                      type="tel" 
                      id="ownerContact"
                      name="ownerContact"
                      value={petData.ownerContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="emergencyContact" className="block text-gray-700 mb-1.5 font-medium">Emergency Contact</label>
                    <input 
                      type="tel" 
                      id="emergencyContact"
                      name="emergencyContact"
                      value={petData.emergencyContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Emergency phone number" 
                    />
                  </div>

                  <div>
                    <label htmlFor="chipId" className="block text-gray-700 mb-1.5 font-medium">Microchip ID</label>
                    <input 
                      type="text" 
                      id="chipId"
                      name="chipId"
                      value={petData.chipId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                      placeholder="Microchip ID number" 
                    />
                  </div>

                  <div>
                    <label htmlFor="lastCheckup" className="block text-gray-700 mb-1.5 font-medium">Last Checkup</label>
                    <input 
                      type="date" 
                      id="lastCheckup"
                      name="lastCheckup"
                      value={petData.lastCheckup}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" 
                    />
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-4">Medical Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vaccinations" className="block text-gray-700 mb-1.5 font-medium">Vaccinations</label>
                    <select
                      id="vaccinations"
                      name="vaccinations"
                      value={petData.vaccinations}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white transition-colors"
                    >
                      <option value="Up to date">Up to date</option>
                      <option value="Partially vaccinated">Partially vaccinated</option>
                      <option value="Not vaccinated">Not vaccinated</option>
                      <option value="Unknown">Unknown</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="allergies" className="block text-gray-700 mb-1.5 font-medium">Allergies</label>
                    <input
                      id="allergies"
                      name="allergies"
                      value={petData.allergies}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="List any allergies"
                    />
                  </div>
                </div>
              </div>

              {/* Photo Upload */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-medium mb-4">Pet Photo</h3>
                <div className="flex items-center space-x-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
                    {petImage ? (
                      <img 
                        src={petImage} 
                        alt="Pet preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <Camera size={32} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button 
                      type="button"
                      onClick={triggerFileInput}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center space-x-2"
                    >
                      <Upload size={18} />
                      <span>{petImage ? 'Change Photo' : 'Upload Photo'}</span>
                    </button>
                    <p className="text-xs text-gray-500 mt-2">Square image recommended (JPG, PNG)</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="border-t pt-6">
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition flex items-center justify-center"
                >
                  <span>Generate Digital ID Card</span>
                </button>
              </div>
            </form>
          </div>
          
          {/* Right Column - ID Card Preview */}
          <div className="md:col-span-2">
            <div className="sticky top-6">
              <h2 className="text-2xl font-semibold mb-6">ID Card Preview</h2>
              
              {/* ID Card Preview */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-orange-500 p-4 text-white flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                      <FaPaw className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl tracking-tight">Anima Unity</h3>
                      <p className="text-xs text-orange-100">PET ID CARD</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-400 rounded-full p-2">
                      <Wifi size={18} className="text-white" />
                    </div>
                    <div className="bg-orange-400 rounded-full p-2">
                      <span className="text-white font-semibold">2</span>
                    </div>
                  </div>
                </div>
                
                {/* Pet Info */}
                <div className="p-6 bg-white bg-opacity-90" style={{backgroundImage: "radial-gradient(circle, #fef3e9 1px, transparent 1px)", backgroundSize: "20px 20px"}}>
                  <div className="flex justify-between mb-6">
                    <div>
                      <h3 className="text-4xl font-bold text-gray-800 mb-1">
                        {petData.name || 'Deteria'}
                      </h3>
                      <h4 className="text-2xl font-bold text-gray-700 mb-4">
                        {petData.breed || 'Francescana'}
                      </h4>
                      <p className="text-gray-500">{petIdCode}</p>
                    </div>
                    <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-200">
                      {petImage ? (
                        <img 
                          src={petImage} 
                          alt="Pet" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <img src="/api/placeholder/120/120" alt="Pet" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Medical Information */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="text-blue-800 font-semibold mb-4">MEDICAL INFORMATION</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Vaccinations</p>
                        <p className="font-medium">{petData.vaccinations}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Allergies</p>
                        <p className="font-medium">{petData.allergies}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Last Checkup</p>
                        <p className="font-medium">{petData.lastCheckup || '15 Jun 2023'}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Chip ID</p>
                        <p className="font-medium">{petData.chipId || '985 11235813'}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* QR Code */}
                  <div className="flex items-center justify-between">
                    <div className="bg-orange-100 w-24 h-24 flex items-center justify-center rounded-lg">
                      <QrCode size={64} className="text-orange-800" />
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 mb-1">Create my 5th code</p>
                      <p className="text-orange-600 font-semibold">Registered to Anima Unity PetCare</p>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
                    <p>Scan QR code for complete pet profile</p>
                    <div className="flex justify-center mt-2 space-x-6">
                      <button className="p-2 text-orange-500">
                        <Globe size={20} />
                      </button>
                      <button className="p-2 text-orange-500">
                        <Phone size={20} />
                      </button>
                      <button className="p-2 text-orange-500">
                        <RefreshCw size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section - Updated for Digital Pet ID content */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Digital Pet ID Features</h2>
          <p className="text-center text-gray-600 mb-8">
            Discover all the benefits of our digital pet identification system to keep your pet safe and information accessible.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Quick Identification Feature */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <QrCode size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Identification</h3>
              <p className="text-gray-600">
                Scannable QR code allows anyone who finds your pet to immediately access their critical information and contact you.
              </p>
            </div>
            
            {/* Medical Records Feature */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <FileText size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Medical Information</h3>
              <p className="text-gray-600">
                Store important health information like vaccinations, allergies, and medication needs that can be critical in emergencies.
              </p>
            </div>
            
            {/* Smart Alerts Feature */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <AlertCircle size={28} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
              <p className="text-gray-600">
                Receive instant notifications when your pet&apos;s ID is scanned, allowing for immediate action if they&apos;re found.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPetIDCard;