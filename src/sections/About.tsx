// src/sections/About.tsx
import { FaPaw, FaUserMd, FaHeart, FaSmile } from 'react-icons/fa';

export default function About() {
  return (
      <section id="about" className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="md:flex items-center">
      <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
        <img
          src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
          alt="Dog and cat together"
          className="rounded-2xl shadow-xl w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 md:pl-16" data-aos="fade-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8">
          At Anima Unity, we believe every pet deserves access to quality care and every shelter deserves visibility. Our platform bridges the gap between pet owners, veterinarians, and animal shelters to create a unified pet care ecosystem.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <FaPaw className="text-orange-400" />
            </div>
            <div>
              <h4 className="font-bold mb-1">500+ Shelters</h4>
              <p className="text-sm text-gray-600">Connected nationwide</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FaUserMd className="text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold mb-1">1,200+ Vets</h4>
              <p className="text-sm text-gray-600">In our network</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FaHeart className="text-green-400" />
            </div>
            <div>
              <h4 className="font-bold mb-1">10,000+ Pets</h4>
              <p className="text-sm text-gray-600">Rehomed successfully</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <FaSmile className="text-purple-400" />
            </div>
            <div>
              <h4 className="font-bold mb-1">98% Satisfaction</h4>
              <p className="text-sm text-gray-600">From our users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}