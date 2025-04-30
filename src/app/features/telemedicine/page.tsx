"use client";

import { useState } from "react";
import { 
  FaVideo, 
  FaUserMd, 
  FaStar, 
  FaClock, 
  FaMobileAlt, 
  FaCheckCircle, 
  FaSearch,
  FaPhone,
  FaMicrophone,
  FaCommentDots,
  FaArrowRight,
  FaFilePrescription,
  FaCalendarCheck
} from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image'
import { Input } from "@/components/ui/input";

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah",
    specialty: "Dermatologi Hewan",
    rating: 4.9,
    online: true,
    image: "https://plus.unsplash.com/premium_photo-1663011290771-f1448413beb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    schedule: "Tersedia 24/7"
  },
  {
    id: 2,
    name: "Dr. Ahmad",
    specialty: "Bedah Hewan",
    rating: 4.8,
    online: true,
    image: "https://plus.unsplash.com/premium_photo-1664298587435-cf106955e9c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    schedule: "9:00 - 18:00"
  },
  {
    id: 3,
    name: "Dr. Rini",
    specialty: "Nutrisi Hewan",
    rating: 4.7,
    online: false,
    image: "https://plus.unsplash.com/premium_photo-1661777003644-2723af4229ed?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    schedule: "10:00 - 17:00"
  },
  {
    id: 4,
    name: "Dr. Budi",
    specialty: "Penyakit Dalam",
    rating: 4.9,
    online: true,
    image: "https://plus.unsplash.com/premium_photo-1661963693154-154c5a027494?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    schedule: "Tersedia 24/7"
  }
];

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    quote: "Dokternya sangat membantu saat anjing saya sakit tengah malam!",
    author: "Budi K.",
    rating: 5,
    petType: "Anjing"
  },
  {
    id: 2,
    quote: "Konsultasi online mudah dan cepat. Kucing saya dapat penanganan tepat.",
    author: "Sinta D.",
    rating: 4,
    petType: "Kucing"
  },
  {
    id: 3,
    quote: "Dokter sangat sabar menjelaskan masalah kesehatan kelinci saya.",
    author: "Agus P.",
    rating: 5,
    petType: "Kelinci"
  }
];

export default function TelemedicinePage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Helper to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar
        key={i}
        className={`${i < Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'} inline-block`}
      />
    ));
  };

return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      
{/* Hero Section */}
<section className="relative overflow-hidden bg-hero-pattern pt-16 pb-20">
  {/* Background decorative elements */}
  <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
    <div
      className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary-light to-primary-coral opacity-20"
      style={{
        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
    ></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="md:flex md:items-center md:justify-between md:space-x-10">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Badge className="mb-4 bg-feature-lightPink text-primary-coral font-medium px-3 py-1 rounded-full animate-fade-in">
          Fitur Kesehatan Hewan
        </Badge>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight animate-slide-up">
          Telemedicine
          <br />
          <span className="text-primary-gradient">Konsultasi Dokter Hewan 24/7</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Akses dokter hewan terpercaya kapan saja dan dimana saja untuk konsultasi kesehatan hewan peliharaan Anda melalui video call.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button className="btn-primary py-2 px-6 rounded-full button-shadow transition-all duration-300 text-white">
            Konsultasi Sekarang
          </Button>
          
          <Button variant="outline" className="border-primary-coral text-primary-coral hover:bg-feature-lightPink py-2 px-6 rounded-full transition-all duration-300">
            <FaMobileAlt className="mr-2" />
            Download Aplikasi
          </Button>
        </div>
      </div>
      
      <div className="md:w-1/2 relative">
        <div className="rounded-4xl overflow-hidden card-shadow bg-card-gradient p-4 transform transition-transform hover:scale-[1.02] duration-300">
          <div className="relative rounded-2xl overflow-hidden">
            <Image 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQWDolFUO0W_iqcSVBn8aTgbHWuct1U-cBP9fVWLBCgkr7P_WhwJ6C30&s=10" 
              alt="Konsultasi dokter hewan via video call"
              className="w-full h-auto rounded-lg object-cover"
              width={800}
              height={450}
              loading="lazy"
              decoding="async"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-coral-gradient bg-opacity-90 rounded-full p-4 shadow-lg transform transition-transform hover:scale-110 cursor-pointer animate-pulse-gentle">
                <FaVideo className="text-white text-2xl" />
              </div>
            </div>
          </div>
          
          <div className="mt-4 px-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="bg-feature-lightPink p-2 rounded-full mr-3">
                  <FaUserMd className="text-primary-coral" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Konsultasi Aktif</p>
                  <p className="text-sm text-gray-500">dengan Dr. Sarah</p>
                </div>
              </div>
              <Badge className="bg-primary-coral text-white px-3 py-1 rounded-full">
                19:45
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Features Section */}
<section className="py-24 bg-white relative overflow-hidden">
  {/* Subtle decorative background patterns */}
  <div className="absolute top-0 left-0 w-full h-64 bg-feature-lightPink opacity-40 -skew-y-3 -translate-y-24"></div>
  <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-feature-lightPink opacity-30 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Konsultasi Kesehatan Hewan <span className="text-primary-gradient">Kapan Saja</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Platform telemedicine kami menghubungkan Anda dengan dokter hewan profesional secara real-time untuk penanganan masalah kesehatan hewan peliharaan Anda.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="feature-card bg-card-gradient border-none card-shadow rounded-3xl overflow-hidden transform transition-all duration-300">
        <CardHeader className="flex flex-col items-center text-center pb-0">
          <div className="w-16 h-16 bg-feature-lightPink rounded-2xl flex items-center justify-center mb-6 shadow-md">
            <FaUserMd className="text-primary-coral text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Dokter Hewan Berpengalaman</h3>
        </CardHeader>
        <CardContent className="text-center text-gray-600 pt-2">
          <p>Tim dokter hewan kami berpengalaman dalam menangani berbagai kondisi dan jenis hewan peliharaan.</p>
        </CardContent>
      </Card>

      <Card className="feature-card bg-card-gradient border-none card-shadow rounded-3xl overflow-hidden transform transition-all duration-300">
        <CardHeader className="flex flex-col items-center text-center pb-0">
          <div className="w-16 h-16 bg-feature-lightPink rounded-2xl flex items-center justify-center mb-6 shadow-md">
            <FaVideo className="text-primary-coral text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Konsultasi Video HD</h3>
        </CardHeader>
        <CardContent className="text-center text-gray-600 pt-2">
          <p>Konsultasi dengan kualitas video HD untuk memudahkan dokter dalam mendiagnosis masalah kesehatan hewan Anda.</p>
        </CardContent>
      </Card>

      <Card className="feature-card bg-card-gradient border-none card-shadow rounded-3xl overflow-hidden transform transition-all duration-300">
        <CardHeader className="flex flex-col items-center text-center pb-0">
          <div className="w-16 h-16 bg-feature-lightPink rounded-2xl flex items-center justify-center mb-6 shadow-md">
            <FaClock className="text-primary-coral text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Layanan 24/7</h3>
        </CardHeader>
        <CardContent className="text-center text-gray-600 pt-2">
          <p>Akses dokter hewan kapan saja, termasuk malam hari dan akhir pekan untuk penanganan darurat.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

   {/* Doctors Section */}
<section className="py-24 bg-feature-lightPink">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <Badge className="mb-4 bg-primary-light bg-opacity-20 text-primary-coral font-medium px-3 py-1 rounded-full">
        Tim Medis
      </Badge>
      <h2 className="text-3xl font-bold text-accent-black mb-4 relative inline-block">
        Dokter Hewan Profesional
        <span className="absolute bottom-0 left-0 w-full h-1 bg-coral-gradient rounded-full opacity-70"></span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        Konsultasikan masalah kesehatan hewan peliharaan Anda dengan dokter hewan terpercaya dan berpengalaman.
      </p>
    </div>

    <div className="flex justify-center mb-10">
      <div className="relative max-w-md w-full">
        <Input
          type="text" 
          placeholder="Cari dokter atau spesialisasi..." 
          className="w-full py-6 px-4 pl-12 border border-gray-200 rounded-full bg-white text-gray-900 shadow-card hover:shadow-card-hover transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-coral" />
      </div>
    </div>

    <Tabs defaultValue="online" className="w-full mb-8">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 p-1 bg-white rounded-full shadow-sm">
        <TabsTrigger value="online" className="rounded-full data-[state=active]:bg-primary-coral data-[state=active]:text-white py-2 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
            Dokter Online
          </div>
        </TabsTrigger>
        <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-primary-coral data-[state=active]:text-white py-2 transition-all duration-300">
          Semua Dokter
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="online">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {doctors.filter(doc => doc.online).map(doctor => (
            <div 
              key={doctor.id} 
              className="bg-card-gradient rounded-2xl shadow-card p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start">
                  <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                    <Avatar className="w-full h-full border-2 border-primary-light border-opacity-40">
                      <AvatarImage src={doctor.image} alt={doctor.name} className="object-cover" />
                      <AvatarFallback className="bg-primary-light bg-opacity-20 text-primary-coral">{doctor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {doctor.online && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white pulse-gentle"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent-black">{doctor.name}</h3>
                    <p className="text-primary-coral font-medium">{doctor.specialty}</p>
                    <div className="flex items-center mt-2">
                      {renderStars(doctor.rating)}
                      <span className="ml-1 text-gray-600 text-sm">{doctor.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mt-1 text-sm">
                      <FaClock className="mr-1" size={12} />
                      <span>{doctor.schedule}</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-success bg-opacity-20 text-success px-3 py-1 rounded-full text-xs font-medium">
                  Online
                </Badge>
              </div>
              <Button className="w-full customizr-button py-6 rounded-xl transition-all hover:shadow-button-hover">
                Konsultasi Sekarang
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="all">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {doctors.map(doctor => (
            <div 
              key={doctor.id} 
              className="bg-card-gradient rounded-2xl shadow-card p-6 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start">
                  <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                    <Avatar className="w-full h-full border-2 border-primary-light border-opacity-40">
                      <AvatarImage src={doctor.image} alt={doctor.name} className="object-cover" />
                      <AvatarFallback className="bg-primary-light bg-opacity-20 text-primary-coral">{doctor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {doctor.online && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white animate-pulse-gentle"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-accent-black">{doctor.name}</h3>
                    <p className="text-primary-coral font-medium">{doctor.specialty}</p>
                    <div className="flex items-center mt-2">
                      {renderStars(doctor.rating)}
                      <span className="ml-1 text-gray-600 text-sm">{doctor.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mt-1 text-sm">
                      <FaClock className="mr-1" size={12} />
                      <span>{doctor.schedule}</span>
                    </div>
                  </div>
                </div>
                <Badge className={`px-3 py-1 rounded-full text-xs font-medium ${
                  doctor.online 
                    ? 'bg-success bg-opacity-20 text-success' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {doctor.online ? 'Online' : 'Offline'}
                </Badge>
              </div>
              <Button 
                className={`w-full py-6 rounded-xl shadow-sm transition-all ${
                  doctor.online 
                    ? 'customizr-button hover:shadow-button-hover' 
                    : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!doctor.online}
              >
                {doctor.online ? 'Konsultasi Sekarang' : 'Tidak Tersedia'}
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>

    {/* Pagination or View More section */}
    <div className="flex justify-center mt-10">
      <Button variant="outline" className="rounded-full border-primary-coral text-primary-coral hover:bg-primary-light hover:bg-opacity-10 px-8 py-6 flex items-center gap-2 group">
        Lihat Semua Dokter
        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  </div>
</section>


{/* Video Call Demo Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-feature-lightPink paw-bg" data-aos="fade-up">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <Badge className="mb-4 bg-primary-light bg-opacity-20 text-primary-coral font-medium px-3 py-1 rounded-full">
        Demo Interaktif
      </Badge>
      <h2 className="text-3xl font-bold text-accent-black mb-4 relative inline-block">
        Antarmuka Video Call
        <span className="absolute bottom-0 left-0 w-full h-1 bg-coral-gradient rounded-full opacity-70"></span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Platform telemedicine kami menyediakan antarmuka yang intuitif dan lengkap untuk konsultasi dengan dokter hewan secara real-time.
      </p>
    </div>

    <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border border-gray-100">
      <div className="md:flex gap-6">
        <div className="md:w-2/3 relative">
          <div className="bg-black rounded-2xl overflow-hidden aspect-video relative">
            <Image 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerhvUqCg_w86G9yJIDU_aJa0raHtG2Lfu1Mb5rcbiTYf7gQTIvNW3xItB&s=10" 
              alt="Video call interface"
              className="w-full h-auto opacity-70 rounded-lg"
              width={640}
              height={360}
              loading="lazy"
              decoding="async"
              style={{
                maxWidth: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl text-white font-medium text-center px-4">
                Video Call dengan Dr. Sarah berlangsung...
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-accent-black bg-opacity-70 rounded-lg px-3 py-1 text-white text-sm flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              Live
            </div>
          </div>

          <div className="mt-4 bg-accent-black bg-opacity-95 rounded-xl p-4 flex items-center justify-between">
            <div className="flex space-x-3">
              <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-gray-700 border-none text-white hover:bg-primary-coral">
                <FaMicrophone className="text-lg" />
              </Button>
              <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-gray-700 border-none text-white hover:bg-primary-coral">
                <FaVideo className="text-lg" />
              </Button>
              <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-gray-700 border-none text-white hover:bg-primary-coral">
                <FaCommentDots className="text-lg" />
              </Button>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 rounded-full flex items-center text-white px-4 py-2 transition-all duration-300 shadow-sm hover:shadow-md">
              <FaPhone className="mr-2 transform rotate-135" />
              Akhiri Panggilan
            </Button>
          </div>
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0">
          <div className="bg-card-gradient rounded-2xl shadow-card p-5 h-full border border-gray-100">
            <div className="flex items-center mb-6">
              <Avatar className="w-14 h-14 border-2 border-primary-light border-opacity-40">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" 
                  alt="Dr. Sarah Der"
                  className="object-cover"
                />
                <AvatarFallback className="bg-primary-light bg-opacity-20 text-primary-coral font-semibold">
                  SD
                </AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <h3 className="font-medium text-accent-black flex items-center">
                  Dr. Sarah
                  <Badge className="ml-2 bg-success bg-opacity-20 text-success font-medium px-2 py-0.5 rounded-full text-xs">
                    Online
                  </Badge>
                </h3>
                <p className="text-sm text-primary-coral font-medium">Dermatologi Hewan</p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-semibold text-accent-black mb-2">Diagnosis</h4>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-700">
                    Dermatitis alergi pada kulit. Memerlukan perawatan anti-inflamasi dan perubahan diet.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-accent-black mb-2">Rekomendasi</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary-light bg-opacity-20 p-1 rounded-full mr-2 flex-shrink-0">
                      <FaCheckCircle className="text-primary-coral" size={14} />
                    </div>
                    <span className="text-sm text-gray-700">
                      Berikan obat anti-inflamasi selama 7 hari
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-light bg-opacity-20 p-1 rounded-full mr-2 flex-shrink-0">
                      <FaCheckCircle className="text-primary-coral" size={14} />
                    </div>
                    <span className="text-sm text-gray-700">
                      Ganti makanan dengan diet hipoalergenik
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-light bg-opacity-20 p-1 rounded-full mr-2 flex-shrink-0">
                      <FaCheckCircle className="text-primary-coral" size={14} />
                    </div>
                    <span className="text-sm text-gray-700">
                      Kontrol kembali setelah 14 hari
                    </span>
                  </li>
                </ul>
              </div>

              <Button className="w-full customizr-button py-5 rounded-xl mt-4 shadow-button hover:shadow-button-hover transition-all duration-300">
                <FaFilePrescription className="mr-2" />
                Minta Resep Digital
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Call to action */}
    <div className="mt-10 text-center">
      <p className="text-gray-600 mb-6">Rasakan pengalaman konsultasi daring yang nyaman dan efektif</p>
      <Button className="bg-coral-gradient hover:opacity-90 text-white rounded-full px-8 py-6 shadow-button hover:shadow-button-hover transition-all duration-300 flex items-center mx-auto gap-2">
        <FaCalendarCheck className="mr-1" /> 
        Jadwalkan Konsultasi
      </Button>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
<div className="py-16 px-4 sm:px-6 lg:px-8 bg-feature-lightPink dark:bg-gray-800 relative overflow-hidden" data-aos="fade-up">
  {/* Background pattern */}
  <div className="absolute inset-0 paw-bg opacity-30"></div>
  
  {/* Container */}
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 inline-block text-primary-gradient">
        Testimoni Pengguna
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
        Pemilik hewan peliharaan yang puas dengan layanan telemedicine kami
      </p>
    </div>

    {/* Testimonial cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {testimonials.map((testimonial) => (
        <div 
          key={testimonial.id} 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-card hover:shadow-card-hover transform transition-all duration-300 hover:-translate-y-2 testimonial-card"
          data-aos="fade-up"
          data-aos-delay={testimonial.id * 100}
        >
          <div className="p-6">
            {/* Rating stars */}
            <div className="flex items-center mb-4">
              {renderStars(testimonial.rating)}
            </div>
            
            {/* Quote */}
            <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-base">
              &quot;{testimonial.quote}&quot;
            </p>
            
            {/* Profile */}
            <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700">
              <Avatar className="w-10 h-10 mr-3 ring-2 ring-accent-coral/30">
                <AvatarFallback className="bg-accent-coral/10 text-accent-coral">
                  {testimonial.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <i className="fas fa-paw mr-1 text-accent-coral"></i>
                  <span>Pemilik {testimonial.petType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation dots or pagination (optional) */}
    <div className="flex justify-center mt-10">
      <div className="flex space-x-2">
        <span className="w-2 h-2 rounded-full bg-accent-coral"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span>
      </div>
    </div>
    
    {/* CTA button */}
    <div className="text-center mt-12">
      <button className="px-6 py-3 bg-white dark:bg-gray-700 text-accent-coral font-medium rounded-full shadow-button hover:shadow-button-hover transform transition-all duration-300 hover:-translate-y-1 flex items-center mx-auto">
        <span>Lihat semua ulasan</span>
        <i className="fas fa-arrow-right ml-2"></i>
      </button>
    </div>
  </div>
</div>

{/* CTA Section with Card */}
<div className="py-20 px-4 bg-feature-lightPink dark:bg-gray-800 relative overflow-hidden" data-aos="fade-up">
  {/* Background decorative elements */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-coral/5 rounded-full -mr-32 -mt-32"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-coral/5 rounded-full -ml-40 -mb-40"></div>
  
  {/* Main container */}
  <div className="max-w-4xl mx-auto relative z-10">
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
      {/* Gradient top border */}
      <div className="bg-coral-gradient h-2" />
      
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-primary-gradient">
          Mulai Konsultasi Sekarang
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
          Dapatkan diagnosis dan perawatan untuk hewan peliharaan Anda dari rumah. 
          Konsultasikan dengan dokter hewan online kami sekarang.
        </p>
        
        <div className="flex flex-wrap gap-5 justify-center">
          <Button className="bg-accent-coral hover:bg-primary-light text-white px-6 py-3 rounded-full shadow-button hover:shadow-button-hover transform transition-all duration-300 hover:-translate-y-1 font-medium">
            <FaVideo className="mr-2 text-lg" />
            Konsultasi Sekarang
          </Button>
          
          <Button variant="outline" className="border-2 border-accent-coral text-accent-coral hover:bg-accent-coral/5 dark:hover:bg-accent-coral/10 px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 font-medium">
            <FaMobileAlt className="mr-2 text-lg" />
            Download Aplikasi
          </Button>
        </div>
        
        {/* Additional trust elements */}
        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-accent-coral mr-2"></i>
              <span>Dokter Bersertifikat</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-clock text-accent-coral mr-2"></i>
              <span>Layanan 24/7</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-headset text-accent-coral mr-2"></i>
              <span>Dukungan Prioritas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Floating paw icons */}
    <div className="absolute -top-4 -left-4 text-accent-coral/20 text-4xl">
      <i className="fas fa-paw transform rotate-12"></i>
    </div>
    <div className="absolute -bottom-4 -right-10 text-accent-coral/20 text-5xl">
      <i className="fas fa-paw transform -rotate-12"></i>
    </div>
  </div>
</div>
    </div>
  );
}