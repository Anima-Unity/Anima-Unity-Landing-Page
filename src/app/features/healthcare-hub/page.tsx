"use client";

import { useState } from "react";
import {
  FaSyringe,
  FaCalendarAlt,
  FaClipboardList,
  FaPlus,
  FaMapMarkerAlt,
  FaBell,
  FaStar,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock
} from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function HealthcareHubPage() {

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [vaccinationProgress] = useState(65);

  // Medical records data
  const medicalRecords = [
    { id: 1, date: "Apr 15, 2025", procedure: "Annual Checkup", vet: "Dr. Smith", notes: "Healthy weight, all vitals normal" },
    { id: 2, date: "Feb 22, 2025", procedure: "Rabies Vaccine", vet: "Dr. Lee", notes: "Next dose due in 1 year" },
    { id: 3, date: "Jan 10, 2025", procedure: "Dental Cleaning", vet: "Dr. Patel", notes: "Mild gingivitis, follow-up in 6 months" },
  ];

  // Vaccination data
  const vaccines = [
    { name: "Rabies", dueDate: "Feb 22, 2026", status: "completed" },
    { name: "Distemper", dueDate: "May 15, 2025", status: "pending" },
    { name: "Bordetella", dueDate: "Jun 30, 2025", status: "pending" },
    { name: "Leptospirosis", dueDate: "Aug 10, 2025", status: "not-started" },
  ];

  // Nearby vets
  const vets = [
    { id: 1, name: "Paws & Claws Clinic", location: "1.2 km away", rating: 4.8, available: true },
    { id: 2, name: "Urban Vet Hospital", location: "3.5 km away", rating: 4.9, available: true },
    { id: 3, name: "Animal Wellness Center", location: "5.0 km away", rating: 4.5, available: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with page identifier */}
      <div className="bg-amber-50 dark:bg-gray-800 py-3 px-6">
        <span className="text-amber-600 dark:text-amber-400 text-sm font-medium">Anima Unity Feature</span>
      </div>

      {/* Hero Section */}
      <section data-aos="fade-up" className="bg-white dark:bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Healthcare Hub
          </h1>
          <h2 className="text-xl md:text-3xl font-medium text-orange-500 mb-6">
            Centralized Pet Health Management
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl">
            Manage all aspects of your pet&apos;s health in one place. Keep track of medical records, 
            vaccination schedules, and vet appointments with our comprehensive healthcare tools.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Book Appointment
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800">
              Add Medical Record
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Medical Records */}
          <Card data-aos="fade-up" data-aos-delay="100" className="border-none shadow-md">
            <CardHeader className="bg-rose-50 dark:bg-gray-800 rounded-t-lg pb-3">
              <div className="flex items-center gap-3">
                <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded-lg">
                  <FaClipboardList className="w-6 h-6 text-rose-500 dark:text-rose-400" />
                </div>
                <CardTitle>Medical Records</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-300">
                Centralized medical records and history for your pet. Track visits, procedures, and medications.
              </p>
            </CardContent>
          </Card>

          {/* Vaccination Tracker */}
          <Card data-aos="fade-up" data-aos-delay="200" className="border-none shadow-md">
            <CardHeader className="bg-blue-50 dark:bg-gray-800 rounded-t-lg pb-3">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <FaSyringe className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                </div>
                <CardTitle>Vaccination Tracker</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-300">
                Never miss a vaccination with our reminder system. Keep your pet protected with up-to-date immunizations.
              </p>
            </CardContent>
          </Card>

          {/* Vet Scheduling */}
          <Card data-aos="fade-up" data-aos-delay="300" className="border-none shadow-md">
            <CardHeader className="bg-green-50 dark:bg-gray-800 rounded-t-lg pb-3">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <FaCalendarAlt className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>
                <CardTitle>Vet Scheduling</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-300">
                Easily schedule appointments with nearby veterinarians. Manage bookings and get reminders.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Medical Records Section */}
      <section data-aos="fade-right" className="bg-white dark:bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <FaClipboardList className="text-rose-500" /> Medical Records
            </h2>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <FaPlus className="mr-2" /> Add Record
            </Button>
          </div>
          <Card className="border-none shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Procedure</TableHead>
                    <TableHead>Veterinarian</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {medicalRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.date}</TableCell>
                      <TableCell>{record.procedure}</TableCell>
                      <TableCell>{record.vet}</TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">{record.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <CardFooter className="flex justify-center border-t p-4 bg-gray-50 dark:bg-gray-800">
              <Button variant="outline" className="text-gray-600 dark:text-gray-300">
                View Complete History
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Vaccination Tracker */}
      <section data-aos="fade-left" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <FaSyringe className="text-blue-500" /> Vaccination Tracker
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Progress */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Vaccination Progress</CardTitle>
                <CardDescription>Keep your pet fully protected</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-sm font-medium">{vaccinationProgress}%</span>
                  </div>
                  <Progress value={vaccinationProgress} className="h-2" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Next vaccination due: <span className="font-medium text-blue-600 dark:text-blue-400">May 15, 2025</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    <FaCheckCircle className="mr-1" /> 2 Completed
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                    <FaClock className="mr-1" /> 2 Pending
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 w-full">
                  <FaBell className="mr-2" /> Set Vaccination Reminders
                </Button>
              </CardFooter>
            </Card>

            {/* Vaccine List */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Vaccination Schedule</CardTitle>
                <CardDescription>Track your pet&apos;s immunization status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {vaccines.map((vaccine) => (
                  <div key={vaccine.name} className="flex items-center justify-between p-3 border-b last:border-b-0">
                    <div>
                      <p className="font-medium">{vaccine.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Due: {vaccine.dueDate}
                      </p>
                    </div>
                    <Badge
                      className={
                        vaccine.status === "completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : vaccine.status === "pending"
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                      }
                    >
                      {vaccine.status === "completed" && <FaCheckCircle className="mr-1" />}
                      {vaccine.status === "pending" && <FaClock className="mr-1" />}
                      {vaccine.status === "not-started" && <FaExclamationTriangle className="mr-1" />}
                      {vaccine.status.charAt(0).toUpperCase() + vaccine.status.slice(1).replace("-", " ")}
                    </Badge>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="bg-gray-50 dark:bg-gray-800 flex justify-center">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Update Vaccination Records
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Vet Scheduling */}
      <section data-aos="zoom-in" className="bg-white dark:bg-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <FaCalendarAlt className="text-green-500" /> Vet Appointment Scheduling
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Select Appointment Date</CardTitle>
                <CardDescription>Choose a date for your next vet visit</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar 
                  mode="single" 
                  selected={date} 
                  onSelect={setDate} 
                  className="rounded-md border" 
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Available slots</span>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 w-full">
                  See Available Times
                </Button>
              </CardFooter>
            </Card>

            {/* Available Vets */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt className="text-green-500" /> Nearby Veterinarians
                </h3>
                <Badge variant="outline" className="gap-1">
                  <FaMapMarkerAlt /> 10km Radius
                </Badge>
              </div>
              <div className="space-y-4">
                {vets.map((vet) => (
                  <Card key={vet.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between">
                        <CardTitle>{vet.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-amber-400 w-4 h-4" />
                          <span>{vet.rating}</span>
                        </div>
                      </div>
                      <CardDescription>{vet.location}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">General Care</Badge>
                        <Badge variant="secondary">Emergency</Badge>
                        <Badge variant="secondary">Dental</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <Button 
                        className={`w-full ${vet.available ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'}`}
                        disabled={!vet.available}
                      >
                        {vet.available ? 'Book Appointment' : 'No Availability'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informative Section with Image */}
      <section data-aos="fade-up" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Why Use Healthcare Hub?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg h-fit">
                    <FaCheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Complete Health Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      All your pet&apos;s health information centralized in one secure location for easy access.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg h-fit">
                    <FaCheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Timely Reminders</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Get notifications for upcoming vaccinations and appointments so you never miss important care.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg h-fit">
                    <FaCheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Vet-Verified Network</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Connect with our network of 1,200+ verified veterinarians who use our platform.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 mt-6">
                Connect Your Veterinarian
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-100 dark:bg-orange-900/20 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/20 rounded-full -z-10"></div>
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Veterinarian checking a dog" 
                  className="rounded-lg shadow-lg w-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-aos="fade-up" className="bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-900 dark:to-amber-800 py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to manage your pet&apos;s health better?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of pet parents who trust Anima Unity for their pet healthcare management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
              Get Started Now
            </Button>
            <Button variant="outline" className="border-white text-orange-600 hover:bg-white/10 text-lg px-8 py-6">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}