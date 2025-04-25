"use client";

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
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image'

// Import AOS if not already done at app level
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah",
    specialty: "Dermatologi Hewan",
    rating: 4.9,
    online: true,
    image: "/api/placeholder/200/200",
    schedule: "Tersedia 24/7"
  },
  {
    id: 2,
    name: "Dr. Ahmad",
    specialty: "Bedah Hewan",
    rating: 4.8,
    online: true,
    image: "/api/placeholder/200/200",
    schedule: "9:00 - 18:00"
  },
  {
    id: 3,
    name: "Dr. Rini",
    specialty: "Nutrisi Hewan",
    rating: 4.7,
    online: false,
    image: "/api/placeholder/200/200",
    schedule: "10:00 - 17:00"
  },
  {
    id: 4,
    name: "Dr. Budi",
    specialty: "Penyakit Dalam",
    rating: 4.9,
    online: true,
    image: "/api/placeholder/200/200",
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
      <div 
        className="relative bg-gradient-to-r from-orange-100 to-orange-50 dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Badge className="mb-4 bg-orange-100 text-orange-600 dark:bg-gray-700 dark:text-orange-400 font-normal">
                Fitur Kesehatan Hewan
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                Telemedicine
                <br />
                <span className="text-orange-500">Konsultasi Dokter Hewan 24/7</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Akses dokter hewan terpercaya kapan saja dan dimana saja untuk konsultasi kesehatan hewan peliharaan Anda melalui video call.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6">
                  Konsultasi Sekarang
                </Button>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-gray-800">
                  <FaMobileAlt className="mr-2" />
                  Download Aplikasi
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800 p-4">
                <div className="relative">
                  <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQWDolFUO0W_iqcSVBn8aTgbHWuct1U-cBP9fVWLBCgkr7P_WhwJ6C30&s=10" 
                    alt="Konsultasi dokter hewan via video call" 
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-orange-500 bg-opacity-80 rounded-full p-4">
                      <FaVideo className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
                        <FaUserMd className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium dark:text-white">Konsultasi Aktif</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">dengan Dr. Sarah</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                      19:45
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Konsultasi Kesehatan Hewan Kapan Saja
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Platform telemedicine kami menghubungkan Anda dengan dokter hewan profesional secara real-time untuk penanganan masalah kesehatan hewan peliharaan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-orange-50 dark:bg-gray-900 border-none shadow-sm" data-aos="fade-up" data-aos-delay="100">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <FaUserMd className="text-orange-500 dark:text-orange-300 text-xl" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Dokter Hewan Berpengalaman</h3>
              </CardHeader>
              <CardContent className="text-center text-gray-600 dark:text-gray-300">
                <p>Tim dokter hewan kami berpengalaman dalam menangani berbagai kondisi dan jenis hewan peliharaan.</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-gray-900 border-none shadow-sm" data-aos="fade-up" data-aos-delay="200">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <FaVideo className="text-orange-500 dark:text-orange-300 text-xl" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Konsultasi Video HD</h3>
              </CardHeader>
              <CardContent className="text-center text-gray-600 dark:text-gray-300">
                <p>Konsultasi dengan kualitas video HD untuk memudahkan dokter dalam mendiagnosis masalah kesehatan hewan Anda.</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-gray-900 border-none shadow-sm" data-aos="fade-up" data-aos-delay="300">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                  <FaClock className="text-orange-500 dark:text-orange-300 text-xl" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Layanan 24/7</h3>
              </CardHeader>
              <CardContent className="text-center text-gray-600 dark:text-gray-300">
                <p>Akses dokter hewan kapan saja, termasuk malam hari dan akhir pekan untuk penanganan darurat.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Dokter Hewan Profesional
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Konsultasikan masalah kesehatan hewan peliharaan Anda dengan dokter hewan terpercaya dan berpengalaman.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative max-w-md w-full">
              <input 
                type="text" 
                placeholder="Cari dokter atau spesialisasi..." 
                className="w-full py-2 px-4 pl-10 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          <Tabs defaultValue="online" className="w-full mb-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="online" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Dokter Online
                </div>
              </TabsTrigger>
              <TabsTrigger value="all" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                Semua Dokter
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="online">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {doctors.filter(doc => doc.online).map(doctor => (
                  <Card key={doctor.id} className="border-none shadow-sm overflow-hidden" data-aos="fade-up">
                    <CardHeader className="pb-0">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <Avatar className="w-12 h-12 mr-3">
                            <AvatarImage src={doctor.image} alt={doctor.name} />
                            <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
                              {doctor.name}
                              {doctor.online && (
                                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
                              )}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.specialty}</p>
                          </div>
                        </div>
                        <Badge className={`${doctor.online ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
                          {doctor.online ? 'Online' : 'Offline'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm mt-2">
                        <div className="mr-4">
                          <div className="flex items-center">
                            {renderStars(doctor.rating)}
                            <span className="ml-1 text-gray-600 dark:text-gray-300">{doctor.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <FaClock className="mr-1" />
                          <span>{doctor.schedule}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        Konsultasi Sekarang
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {doctors.map(doctor => (
                  <Card key={doctor.id} className="border-none shadow-sm overflow-hidden" data-aos="fade-up">
                    <CardHeader className="pb-0">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <Avatar className="w-12 h-12 mr-3">
                            <AvatarImage src={doctor.image} alt={doctor.name} />
                            <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
                              {doctor.name}
                              {doctor.online && (
                                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
                              )}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{doctor.specialty}</p>
                          </div>
                        </div>
                        <Badge className={`${doctor.online ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}>
                          {doctor.online ? 'Online' : 'Offline'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm mt-2">
                        <div className="mr-4">
                          <div className="flex items-center">
                            {renderStars(doctor.rating)}
                            <span className="ml-1 text-gray-600 dark:text-gray-300">{doctor.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <FaClock className="mr-1" />
                          <span>{doctor.schedule}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className={`w-full ${doctor.online 
                          ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                          : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed'}`}
                        disabled={!doctor.online}
                      >
                        {doctor.online ? 'Konsultasi Sekarang' : 'Tidak Tersedia'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

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
                    src="/api/placeholder/640/360" 
                    alt="Video call interface" 
                    className="w-full opacity-70"
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
                  <Button className="bg-red-500 hover:bg-red-600 rounded-full flex items-center">
                    <FaPhone className="mr-2 transform rotate-135" />
                    Akhiri Panggilan
                  </Button>
                </div>
              </div>

              <div className="md:w-1/3 md:pl-4 mt-4 md:mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-full">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-12 h-12 mr-3">
                      <AvatarImage src="/api/placeholder/200/200" alt="Dr. Sarah" />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
                        Dr. Sarah
                        <Badge className="ml-2 bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
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
                          <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Berikan obat anti-inflamasi selama 7 hari
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Ganti makanan dengan diet hipoalergenik
                          </span>
                        </li>
                        <li className="flex items-start">
                          <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Kontrol kembali setelah 14 hari
                          </span>
                        </li>
                      </ul>
                    </div>

                    <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
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
              <Card key={testimonial.id} className="border-none shadow-sm" data-aos="zoom-in">
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

      {/* CTA Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700" data-aos="slide-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Mulai Konsultasi Sekarang
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Dapatkan diagnosis dan perawatan untuk hewan peliharaan Anda dari rumah. Konsultasikan dengan dokter hewan online kami sekarang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-500 hover:bg-gray-100">
              <FaVideo className="mr-2" />
              Konsultasi Sekarang
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-orange-600">
              <FaMobileAlt className="mr-2" />
              Download Aplikasi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}