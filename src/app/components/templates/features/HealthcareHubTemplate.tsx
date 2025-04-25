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
  FaClock,
} from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Image from 'next/image'

export default function HealthcareHubTemplate() {
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
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-2">
            <span className="inline-block bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
              Healthcare Solution
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Healthcare Hub
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
            Centralized Pet Health Management
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Manage all aspects of your pet&apos;s health in one place. Keep track of medical records, 
            vaccination schedules, and vet appointments with our comprehensive healthcare tools.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-10">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors">
              Book Appointment
            </Button>
            <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50 rounded-full">
              Add Medical Record
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Medical Records */}
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden">
            <CardHeader className="bg-teal-50 pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <FaClipboardList className="w-6 h-6 text-teal-500" />
                </div>
                <CardTitle className="text-gray-900">Medical Records</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-5 pb-6">
              <p className="text-gray-600">
                Centralized medical records and history for your pet. Track visits, procedures, and medications.
              </p>
            </CardContent>
          </Card>

          {/* Vaccination Tracker */}
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden">
            <CardHeader className="bg-blue-50 pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <FaSyringe className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="text-gray-900">Vaccination Tracker</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-5 pb-6">
              <p className="text-gray-600">
                Never miss a vaccination with our reminder system. Keep your pet protected with up-to-date immunizations.
              </p>
            </CardContent>
          </Card>

          {/* Vet Scheduling */}
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden">
            <CardHeader className="bg-purple-50 pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <FaCalendarAlt className="w-6 h-6 text-purple-500" />
                </div>
                <CardTitle className="text-gray-900">Vet Scheduling</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-5 pb-6">
              <p className="text-gray-600">
                Easily schedule appointments with nearby veterinarians. Manage bookings and get reminders.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Medical Records Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <div className="bg-teal-100 p-2 rounded-lg">
                <FaClipboardList className="w-5 h-5 text-teal-600" />
              </div>
              Medical Records
            </h2>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full">
              <FaPlus className="mr-2 w-4 h-4" /> Add Record
            </Button>
          </div>

          <Card className="border border-gray-100 shadow-sm rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="text-gray-600 font-medium">Date</TableHead>
                    <TableHead className="text-gray-600 font-medium">Procedure</TableHead>
                    <TableHead className="text-gray-600 font-medium">Veterinarian</TableHead>
                    <TableHead className="text-gray-600 font-medium">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {medicalRecords.map((record) => (
                    <TableRow key={record.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{record.date}</TableCell>
                      <TableCell>{record.procedure}</TableCell>
                      <TableCell>{record.vet}</TableCell>
                      <TableCell className="text-gray-600 max-w-xs truncate">
                        {record.notes}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <CardFooter className="flex justify-center border-t border-gray-100 p-4 bg-white">
              <Button variant="outline" className="text-teal-600 border-teal-500 hover:bg-teal-50 rounded-full">
                View Complete History
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Vaccination Tracker */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FaSyringe className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Vaccination Tracker
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Progress Card */}
            <Card className="border border-gray-100 shadow-sm rounded-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-gray-900">Vaccination Progress</CardTitle>
                <CardDescription className="text-gray-600">
                  Keep your pet fully protected
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">
                      {vaccinationProgress}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-teal-500 rounded-full"
                      style={{ width: `${vaccinationProgress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Next vaccination due:{" "}
                  <span className="font-medium text-teal-600">
                    May 15, 2025
                  </span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800">
                    <FaCheckCircle className="mr-1" /> 2 Completed
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-800">
                    <FaClock className="mr-1" /> 2 Pending
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="border-teal-500 text-teal-600 hover:bg-teal-50 w-full rounded-full"
                >
                  <FaBell className="mr-2" /> Set Vaccination Reminders
                </Button>
              </CardFooter>
            </Card>

            {/* Schedule Card */}
            <Card className="border border-gray-100 shadow-sm rounded-xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-gray-900">Vaccination Schedule</CardTitle>
                <CardDescription className="text-gray-600">
                  Track your pet&apos;s immunization status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {vaccines.map((vaccine) => (
                  <div
                    key={vaccine.name}
                    className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{vaccine.name}</p>
                      <p className="text-sm text-gray-600">
                        Due: {vaccine.dueDate}
                      </p>
                    </div>
                    <Badge
                      className={
                        vaccine.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : vaccine.status === "pending"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-800"
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
              <CardFooter className="bg-gray-50 flex justify-center">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full">
                  Update Vaccination Records
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Vet Scheduling */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <div className="bg-purple-100 p-2 rounded-lg">
              <FaCalendarAlt className="w-5 h-5 text-purple-600" />
            </div>
            Vet Appointment Scheduling
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <Card className="border border-gray-100 shadow-sm rounded-xl overflow-hidden">
              <CardHeader>
                <CardTitle>Select Appointment Date</CardTitle>
                <CardDescription>Choose a date for your next vet visit</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar 
                  mode="single" 
                  selected={date} 
                  onSelect={setDate} 
                  className="rounded-md border border-gray-200" 
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
                  <span>Available slots</span>
                </div>
                <Button className="bg-teal-500 hover:bg-teal-600 w-full text-white rounded-full">
                  See Available Times
                </Button>
              </CardFooter>
            </Card>

            {/* Available Vets */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt className="text-teal-500" /> Nearby Veterinarians
                </h3>
                <Badge variant="outline" className="gap-1 border-gray-200">
                  <FaMapMarkerAlt /> 10km Radius
                </Badge>
              </div>
              <div className="space-y-4">
                {vets.map((vet) => (
                  <Card key={vet.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between">
                        <CardTitle>{vet.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-amber-500 w-4 h-4" />
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
                    <CardFooter className="border-t border-gray-100 pt-4">
                      <Button 
                        className={`w-full rounded-full ${vet.available ? 'bg-teal-500 hover:bg-teal-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
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

      {/* Why Use Healthcare Hub */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Use Healthcare Hub?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-teal-100 p-2 rounded-lg h-fit">
                    <FaCheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Complete Health Overview</h3>
                    <p className="text-gray-600">
                      All your pet&apos;s health information centralized in one secure location for easy access.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-teal-100 p-2 rounded-lg h-fit">
                    <FaCheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Timely Reminders</h3>
                    <p className="text-gray-600">
                      Get notifications for upcoming vaccinations and appointments so you never miss important care.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-teal-100 p-2 rounded-lg h-fit">
                    <FaCheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Vet-Verified Network</h3>
                    <p className="text-gray-600">
                      Connect with our network of 1,200+ verified veterinarians who use our platform.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white mt-8 rounded-full">
                Connect Your Veterinarian
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-200/30 rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100/50 rounded-full -z-10"></div>
                

<Image 
  src="https://plus.unsplash.com/premium_photo-1663039950073-187c977da2e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  alt="Veterinarian checking a dog" 
  width={1170}  // Set the reference width
  height={780}  // Set the reference height
  layout="responsive" // This makes the image responsive to its container's width
  className="rounded-xl shadow-lg w-full object-cover border border-gray-100" 
/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-500 py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to manage your pet&apos;s health better?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of pet parents who trust Anima Unity for their pet healthcare management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8 py-6">
              Join Now
            </Button>
            <Button className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}