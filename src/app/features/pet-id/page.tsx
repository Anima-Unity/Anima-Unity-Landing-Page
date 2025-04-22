'use client';

import React, { useState } from 'react';
import { QrCode, FileText, AlertCircle } from 'lucide-react';

interface PetFormData {
  name: string;
  species: string;
  breed: string;
  age: string;
  weight: string;
  ownerContact: string;
  emergencyContact: string;
}

const DigitalPetIDCard: React.FC = () => {
  const [petData, setPetData] = useState<PetFormData>({
    name: '',
    species: 'Dog',
    breed: '',
    age: '',
    weight: '',
    ownerContact: '', 
    emergencyContact: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPetData({
      ...petData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Pet data submitted:', petData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Digital Pet ID Card</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create a personalized digital ID card for your pet with all essential information, medical records, and QR code for emergency access.
          </p>
        </div>

        {/* Card Creator Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Create Your Pet&apos;s Digital ID</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Pet Information Form */}
              <div>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Pet Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={petData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                    placeholder="Enter pet's name" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="species" className="block text-gray-700 mb-2 font-medium">Species</label>
                  <select 
                    id="species"
                    name="species"
                    value={petData.species}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="breed" className="block text-gray-700 mb-2 font-medium">Breed</label>
                  <input 
                    type="text" 
                    id="breed"
                    name="breed"
                    value={petData.breed}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                    placeholder="Enter breed" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="age" className="block text-gray-700 mb-2 font-medium">Age</label>
                    <input 
                      type="text" 
                      id="age"
                      name="age"
                      value={petData.age}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                      placeholder="Age" 
                    />
                  </div>
                  <div>
                    <label htmlFor="weight" className="block text-gray-700 mb-2 font-medium">Weight</label>
                    <input 
                      type="text" 
                      id="weight"
                      name="weight"
                      value={petData.weight}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                      placeholder="Weight" 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="ownerContact" className="block text-gray-700 mb-2 font-medium">Owner Contact</label>
                  <input 
                    type="text" 
                    id="ownerContact"
                    name="ownerContact"
                    value={petData.ownerContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                    placeholder="Phone number" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="emergencyContact" className="block text-gray-700 mb-2 font-medium">Emergency Contact</label>
                  <input 
                    type="text" 
                    id="emergencyContact"
                    name="emergencyContact"
                    value={petData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
                    placeholder="Emergency phone number" 
                  />
                </div>
              </div>
              
              {/* Right Column - Pet Photo Upload and Preview */}
              <div className="flex flex-col items-center">
                <div className="mb-6 w-full">
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-64">
                    <div className="text-gray-500 mb-4">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-500 text-center mb-4">Upload your pet&apos;s photo</p>
                    <button 
                      type="button"
                      className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                    >
                      Upload Photo
                    </button>
                  </div>
                </div>
                
                <div className="w-full bg-gray-50 border rounded-lg p-4">
                  <h3 className="font-medium text-gray-700 mb-2">ID Card Preview</h3>
                  <div className="border rounded-lg p-4 bg-white shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="font-bold">{petData.name || 'Pet Name'}</p>
                        <p className="text-sm text-gray-500">
                          {petData.breed ? `${petData.breed} • ` : ''}
                          {petData.age ? `${petData.age} • ` : ''}
                          {petData.weight || ''}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Owner Contact: {petData.ownerContact || 'xxx-xxx-xxxx'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                type="submit" 
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition"
              >
                Generate Digital ID Card
              </button>
            </div>
          </form>
        </div>
        
        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">ID Card Features</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* QR Code Feature */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                <QrCode size={24} className="text-orange-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">QR Code</h3>
              <p className="text-gray-600">Scan for instant access to your pet&apos;s complete profile in emergencies</p>
            </div>
            
            {/* Medical Records Feature */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <FileText size={24} className="text-blue-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">Medical Records</h3>
              <p className="text-gray-600">Store vaccination history, medications, and health conditions</p>
            </div>
            
            {/* Emergency Info Feature */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <AlertCircle size={24} className="text-red-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">Emergency Info</h3>
              <p className="text-gray-600">Critical information available instantly to whoever finds your pet</p>
            </div>
          </div>
        </div>
        
        {/* Sample ID Cards Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center">Sample ID Cards</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Sample Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-orange-200"></div>
                </div>
                <div>
                  <h3 className="font-bold">Buddy</h3>
                  <p className="text-sm text-gray-500">Golden Retriever • 3 years</p>
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Owner:</span>
                  <span>John Smith</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">ID:</span>
                  <span>#ANI-12345</span>
                </div>
              </div>
            </div>
            
            {/* Sample Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-blue-200"></div>
                </div>
                <div>
                  <h3 className="font-bold">Luna</h3>
                  <p className="text-sm text-gray-500">Siamese Cat • 2 years</p>
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Owner:</span>
                  <span>Emily Johnson</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">ID:</span>
                  <span>#ANI-67890</span>
                </div>
              </div>
            </div>
            
            {/* Sample Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-green-200"></div>
                </div>
                <div>
                  <h3 className="font-bold">Max</h3>
                  <p className="text-sm text-gray-500">Border Collie • 4 years</p>
                </div>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Owner:</span>
                  <span>Sarah Williams</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">ID:</span>
                  <span>#ANI-24680</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPetIDCard;