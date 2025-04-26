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
  FaCommentDots
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
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-50 to-blue-50 pt-16 pb-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-teal-50 to-teal-200 opacity-25"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="md:flex md:items-center md:justify-between md:space-x-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Badge className="mb-4 bg-teal-100 text-teal-600 font-medium px-3 py-1 rounded-full">
                Fitur Kesehatan Hewan
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Telemedicine
                <br />
                <span className="text-teal-600">Konsultasi Dokter Hewan 24/7</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Akses dokter hewan terpercaya kapan saja dan dimana saja untuk konsultasi kesehatan hewan peliharaan Anda melalui video call.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-full shadow-lg shadow-teal-100 transition-all duration-300">
                  Konsultasi Sekarang
                </Button>
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 py-2 px-6 rounded-full transition-all duration-300">
                  <FaMobileAlt className="mr-2" />
                  Download Aplikasi
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-4 transform transition-transform hover:scale-[1.02] duration-300">
                <div className="relative rounded-xl overflow-hidden">
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
                    <div className="bg-teal-600 bg-opacity-80 rounded-full p-4 shadow-lg transform transition-transform hover:scale-110 cursor-pointer">
                      <FaVideo className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="bg-teal-100 p-2 rounded-full mr-3">
                        <FaUserMd className="text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Konsultasi Aktif</p>
                        <p className="text-sm text-gray-500">dengan Dr. Sarah</p>
                      </div>
                    </div>
                    <Badge className="bg-teal-600 text-white px-3 py-1 rounded-full">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Konsultasi Kesehatan Hewan Kapan Saja
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Platform telemedicine kami menghubungkan Anda dengan dokter hewan profesional secara real-time untuk penanganan masalah kesehatan hewan peliharaan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-md rounded-2xl overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
              <CardHeader className="flex flex-col items-center text-center pb-0">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <FaUserMd className="text-teal-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dokter Hewan Berpengalaman</h3>
              </CardHeader>
              <CardContent className="text-center text-gray-600 pt-2">
                <p>Tim dokter hewan kami berpengalaman dalam menangani berbagai kondisi dan jenis hewan peliharaan.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-md rounded-2xl overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
              <CardHeader className="flex flex-col items-center text-center pb-0">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <FaVideo className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Konsultasi Video HD</h3>
              </CardHeader>
              <CardContent className="text-center text-gray-600 pt-2">
                <p>Konsultasi dengan kualitas video HD untuk memudahkan dokter dalam mendiagnosis masalah kesehatan hewan Anda.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-white border-none shadow-md rounded-2xl overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
              <CardHeader className="flex flex-col items-center text-center pb-0">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <FaClock className="text-teal-600 text-2xl" />
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
<section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-600 font-medium px-3 py-1 rounded-full">
              Tim Medis
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Dokter Hewan Profesional
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
                className="w-full py-6 px-4 pl-12 border border-gray-200 rounded-full bg-white text-gray-900 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <Tabs defaultValue="online" className="w-full mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 p-1 bg-gray-100 rounded-full">
              <TabsTrigger value="online" className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white py-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Dokter Online
                </div>
              </TabsTrigger>
              <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-teal-600 data-[state=active]:text-white py-2">
                Semua Dokter
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="online">
              <div className="space-y-4 mt-6">
                {doctors.filter(doc => doc.online).map(doctor => (
                  <div 
                    key={doctor.id} 
                    className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start">
                        <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                          <Avatar className="w-full h-full border-2 border-teal-100">
                            <AvatarImage src={doctor.image} alt={doctor.name} className="object-cover" />
                            <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {doctor.online && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-gray-900">{doctor.name}</h3>
                          <p className="text-gray-500">{doctor.specialty}</p>
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
                      <Badge className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                        Online
                      </Badge>
                    </div>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 rounded-xl shadow-sm transition-all hover:shadow-md">
                      Konsultasi Sekarang
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all">
              <div className="space-y-4 mt-6">
                {doctors.map(doctor => (
                  <div 
                    key={doctor.id} 
                    className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start">
                        <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                          <Avatar className="w-full h-full border-2 border-teal-100">
                            <AvatarImage src={doctor.image} alt={doctor.name} className="object-cover" />
                            <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {doctor.online && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-gray-900">{doctor.name}</h3>
                          <p className="text-gray-500">{doctor.specialty}</p>
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
                      <Badge className={`px-3 py-1 rounded-full text-xs ${doctor.online ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                        {doctor.online ? 'Online' : 'Offline'}
                      </Badge>
                    </div>
                    <Button 
                      className={`w-full py-6 rounded-xl shadow-sm transition-all ${doctor.online 
                        ? 'bg-teal-600 hover:bg-teal-700 text-white hover:shadow-md' 
                        : 'bg-gray-100 text-gray-500 cursor-not-allowed'}`}
                      disabled={!doctor.online}
                    >
                      {doctor.online ? 'Konsultasi Sekarang' : 'Tidak Tersedia'}
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>


      {/* Video Call Demo Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Antarmuka Video Call
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Platform telemedicine kami menyediakan antarmuka yang intuitif dan lengkap untuk konsultasi dengan dokter hewan secara real-time.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg dark:bg-gray-900 p-4">
            <div className="md:flex">
              <div className="md:w-2/3 relative">
                <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
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
                    <div className="text-xl text-white font-medium">
                      Video Call dengan Dr. Sarah berlangsung...
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gray-800 bg-opacity-70 rounded-lg px-3 py-1 text-white text-sm flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                    Live
                  </div>
                </div>

                <div className="mt-4 bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex space-x-3">
                    <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-gray-700 border-none text-white hover:bg-gray-600">
                      <FaMicrophone className="text-lg" />
                    </Button>
                    <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-gray-700 border-none text-white hover:bg-gray-600">
                      <FaVideo className="text-lg" />
                    </Button>
                    <Button variant="outline" className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-gray-700 border-none text-white hover:bg-gray-600">
                      <FaCommentDots className="text-lg" />
                    </Button>
                  </div>
                  <Button className="bg-red-500 hover:bg-red-600 rounded-full flex items-center text-white">
                    <FaPhone className="mr-2 transform rotate-135" />
                    Akhiri Panggilan
                  </Button>
                </div>
              </div>

              <div className="md:w-1/3 md:pl-4 mt-4 md:mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-full">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-14 h-14 border-2 border-blue-100">
  <AvatarImage 
    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" 
    alt="Dr. Sarah Der"
    className="object-cover"
  />
  <AvatarFallback className="bg-blue-50 text-blue-600 font-semibold">
    SD
  </AvatarFallback>
</Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
                        Dr. Sarah
                        <Badge className="ml-2 bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300">
                          Online
                        </Badge>
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Dermatologi Hewan</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Diagnosis</h4>
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Dermatitis alergi pada kulit. Memerlukan perawatan anti-inflamasi dan perubahan diet.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rekomendasi</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FaCheckCircle className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Berikan obat anti-inflamasi selama 7 hari
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Ganti makanan dengan diet hipoalergenik
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Kontrol kembali setelah 14 hari
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Button className="w-full mt-4 bg-primary hover:bg-primary-dark text-white">
                      Minta Resep Digital
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Testimoni Pengguna
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Pemilik hewan peliharaan yang puas dengan layanan telemedicine kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {testimonials.map(testimonial => (
              <Card key={testimonial.id} className="bg-white dark:bg-gray-800 border-none shadow-sm hover:shadow-md transition-shadow duration-300" data-aos="zoom-in">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    {renderStars(testimonial.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <Avatar className="w-8 h-8 mr-2">
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Pemilik {testimonial.petType}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

{/* CTA Section with Card */}
<div className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-4xl mx-auto">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-600 dark:to-blue-700 h-2" />
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Mulai Konsultasi Sekarang
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Dapatkan diagnosis dan perawatan untuk hewan peliharaan Anda dari rumah. Konsultasikan dengan dokter hewan online kami sekarang.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">
            <FaVideo className="mr-2" />
            Konsultasi Sekarang
          </Button>
          <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20">
            <FaMobileAlt className="mr-2" />
            Download Aplikasi
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}