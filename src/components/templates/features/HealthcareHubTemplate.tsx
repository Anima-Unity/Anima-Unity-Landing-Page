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
  FaHeart,
  FaShieldAlt
} from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Image from 'next/image';

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-hero-pattern py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-2">
            <span className="inline-block bg-feature-lightPink text-primary-coral px-3 py-1 rounded-full text-sm font-medium">
              Healthcare Solution
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Healthcare Hub
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-coral mb-6">
            Centralized Pet Health Management
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Manage all aspects of your pet&apos;s health in one place. Keep track of medical records, 
            vaccination schedules, and vet appointments with our comprehensive healthcare tools.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-10">
            <Button className="btn-primary rounded-full px-6 py-2 font-medium">
              Book Appointment
            </Button>
            <Button variant="outline" className="border-primary-coral text-primary-coral hover:bg-feature-lightPink rounded-full px-6 py-2 font-medium">
              Add Medical Record
            </Button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Medical Records */}
          <Card className="border border-border shadow-card hover:shadow-card-hover transition-shadow rounded-2xl overflow-hidden feature-card">
            <CardHeader className="bg-feature-lightPink pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <FaClipboardList className="w-6 h-6 text-primary-coral" />
                </div>
                <CardTitle className="text-foreground">Medical Records</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-5 pb-6">
              <p className="text-muted-foreground">
                Centralized medical records and history for your pet. Track visits, procedures, and medications.
              </p>
            </CardContent>
          </Card>

          {/* Vaccination Tracker */}
          <Card className="border border-border shadow-card hover:shadow-card-hover transition-shadow rounded-2xl overflow-hidden feature-card">
            <CardHeader className="bg-feature-lightPink pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <FaSyringe className="w-6 h-6 text-primary-coral" />
                </div>
                <CardTitle className="text-foreground">Vaccination Tracker</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-5 pb-6">
              <p className="text-muted-foreground">
                Never miss a vaccination with our reminder system. Keep your pet protected with up-to-date immunizations.
              </p>
            </CardContent>
          </Card>

          {/* Vet Scheduling */}
          <Card className="border border-border shadow-card hover:shadow-card-hover transition-shadow rounded-2xl overflow-hidden feature-card">
            <CardHeader className="bg-feature-lightPink pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <FaCalendarAlt className="w-6 h-6 text-primary-coral" />
                </div>
                <CardTitle className="text-foreground">Vet Scheduling</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-5 pb-6">
              <p className="text-muted-foreground">
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <div className="bg-feature-lightPink p-2 rounded-lg">
                <FaClipboardList className="w-5 h-5 text-primary-coral" />
              </div>
              Medical Records
            </h2>
            <Button className="btn-primary rounded-full">
              <FaPlus className="mr-2 w-4 h-4" /> Add Record
            </Button>
          </div>

          <Card className="border border-border shadow-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-secondary">
                  <TableRow>
                    <TableHead className="text-muted-foreground font-medium">Date</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Procedure</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Veterinarian</TableHead>
                    <TableHead className="text-muted-foreground font-medium">Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {medicalRecords.map((record) => (
                    <TableRow key={record.id} className="hover:bg-secondary">
                      <TableCell className="font-medium">{record.date}</TableCell>
                      <TableCell>{record.procedure}</TableCell>
                      <TableCell>{record.vet}</TableCell>
                      <TableCell className="text-muted-foreground max-w-xs truncate">
                        {record.notes}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <CardFooter className="flex justify-center border-t border-border p-4 bg-white">
              <Button variant="outline" className="text-primary-coral border-primary-coral hover:bg-feature-lightPink rounded-full">
                View Complete History
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Vaccination Tracker */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-feature-lightPink p-2 rounded-lg">
              <FaSyringe className="w-5 h-5 text-primary-coral" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Vaccination Tracker
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Progress Card */}
            <Card className="border border-border shadow-card rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-foreground">Vaccination Progress</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Keep your pet fully protected
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm font-medium text-foreground">
                      {vaccinationProgress}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div
                      className="h-full bg-primary-coral rounded-full"
                      style={{ width: `${vaccinationProgress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Next vaccination due:{" "}
                  <span className="font-medium text-primary-coral">
                    May 15, 2025
                  </span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-success/20 text-success">
                    <FaCheckCircle className="mr-1" /> 2 Completed
                  </Badge>
                  <Badge className="bg-warning/20 text-warning">
                    <FaClock className="mr-1" /> 2 Pending
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="border-primary-coral text-primary-coral hover:bg-feature-lightPink w-full rounded-full"
                >
                  <FaBell className="mr-2" /> Set Vaccination Reminders
                </Button>
              </CardFooter>
            </Card>

            {/* Schedule Card */}
            <Card className="border border-border shadow-card rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-foreground">Vaccination Schedule</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Track your pet&apos;s immunization status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {vaccines.map((vaccine) => (
                  <div
                    key={vaccine.name}
                    className="flex items-center justify-between p-3 border-b border-border last:border-b-0 hover:bg-secondary"
                  >
                    <div>
                      <p className="font-medium text-foreground">{vaccine.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Due: {vaccine.dueDate}
                      </p>
                    </div>
                    <Badge
                      className={
                        vaccine.status === "completed"
                          ? "bg-success/20 text-success"
                          : vaccine.status === "pending"
                          ? "bg-warning/20 text-warning"
                          : "bg-muted text-muted-foreground"
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
              <CardFooter className="bg-secondary flex justify-center">
                <Button className="btn-primary rounded-full">
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
            <div className="bg-feature-lightPink p-2 rounded-lg">
              <FaCalendarAlt className="w-5 h-5 text-primary-coral" />
            </div>
            Vet Appointment Scheduling
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <Card className="border border-border shadow-card rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle>Select Appointment Date</CardTitle>
                <CardDescription>Choose a date for your next vet visit</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar 
                  mode="single" 
                  selected={date} 
                  onSelect={setDate} 
                  className="rounded-md border border-border" 
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <div className="w-3 h-3 rounded-full bg-primary-coral mr-2"></div>
                  <span>Available slots</span>
                </div>
                <Button className="btn-primary w-full rounded-full">
                  See Available Times
                </Button>
              </CardFooter>
            </Card>

            {/* Available Vets */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary-coral" /> Nearby Veterinarians
                </h3>
                <Badge variant="outline" className="gap-1 border-border">
                  <FaMapMarkerAlt /> 10km Radius
                </Badge>
              </div>
              <div className="space-y-4">
                {vets.map((vet) => (
                  <Card key={vet.id} className="border border-border shadow-card hover:shadow-card-hover transition-shadow rounded-2xl overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between">
                        <CardTitle>{vet.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-warning w-4 h-4" />
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
                    <CardFooter className="border-t border-border pt-4">
                      <Button 
                        className={`w-full rounded-full ${vet.available ? 'btn-primary' : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
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
      <section className="bg-secondary py-16 px-6 paw-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Use Healthcare Hub?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-feature-lightPink p-2 rounded-lg h-fit">
                    <FaHeart className="w-5 h-5 text-primary-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Complete Health Overview</h3>
                    <p className="text-muted-foreground">
                      All your pet&apos;s health information centralized in one secure location for easy access.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-feature-lightPink p-2 rounded-lg h-fit">
                    <FaBell className="w-5 h-5 text-primary-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Timely Reminders</h3>
                    <p className="text-muted-foreground">
                      Get notifications for upcoming vaccinations and appointments so you never miss important care.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-feature-lightPink p-2 rounded-lg h-fit">
                    <FaShieldAlt className="w-5 h-5 text-primary-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Vet-Verified Network</h3>
                    <p className="text-muted-foreground">
                      Connect with our network of 1,200+ verified veterinarians who use our platform.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="btn-primary mt-8 rounded-full">
                Connect Your Veterinarian
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-feature-lightPink rounded-full -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-feature-lightPink rounded-full -z-10"></div>
                <Image 
                  src="https://plus.unsplash.com/premium_photo-1663039950073-187c977da2e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Veterinarian checking a dog" 
                  width={1170}
                  height={780}
                  layout="responsive"
                  className="rounded-2xl shadow-app w-full object-cover border border-border" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-coral-gradient py-16 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to manage your pet&apos;s health better?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of pet parents who trust Anima Unity for their pet healthcare management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-primary-coral hover:bg-gray-100 rounded-full px-8 py-6 button-shadow hover:shadow-button-hover">
              Join Now
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}