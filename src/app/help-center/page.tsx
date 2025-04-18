'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  link: string;
}

interface FAQCategory {
  title: string;
  icon: string;
  questions: Question[];
}

interface SupportOption {
  title: string;
  description: string;
  icon: string;
  link: string;
  buttonText: string;
}

export default function HelpCenter(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Common questions data
  const faqCategories: FAQCategory[] = [
    {
      title: "Getting Started",
      icon: "🚀",
      questions: [
        { id: 1, question: "How do I create an account?", link: "/help/create-account" },
        { id: 2, question: "What information do I need to register?", link: "/help/registration-info" },
        { id: 3, question: "How do I connect with a shelter?", link: "/help/connect-shelter" },
      ]
    },
    {
      title: "Pet Healthcare",
      icon: "🏥",
      questions: [
        { id: 4, question: "How do I schedule a vet appointment?", link: "/help/schedule-appointment" },
        { id: 5, question: "How do vaccination reminders work?", link: "/help/vaccination-reminders" },
        { id: 6, question: "Can I upload my pet's medical records?", link: "/help/upload-records" },
      ]
    },
    {
      title: "Pet Tracking",
      icon: "📍",
      questions: [
        { id: 7, question: "How does AniTrack GPS work?", link: "/help/anitrack-info" },
        { id: 8, question: "Is my pet's location data secure?", link: "/help/location-security" },
        { id: 9, question: "Can I set safe zones for my pet?", link: "/help/safe-zones" },
      ]
    },
    {
      title: "Adoption Process",
      icon: "🏠",
      questions: [
        { id: 10, question: "How does the matching process work?", link: "/help/matching-process" },
        { id: 11, question: "What are the adoption requirements?", link: "/help/adoption-requirements" },
        { id: 12, question: "How can I support local shelters?", link: "/help/support-shelters" },
      ]
    },
  ];
  const supportOptions: SupportOption[] = [
    {
      title: "Contact Support",
      description: "Our team is available 24/7 to help with any questions or issues.",
      icon: "📞",
      link: "/contact",
      buttonText: "Get Help"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides on how to use all our features.",
      icon: "🎥",
      link: "/tutorials",
      buttonText: "Watch Now"
    },
    {
      title: "Community Forum",
      description: "Connect with other pet owners to share tips and advice.",
      icon: "💬",
      link: "/forum",
      buttonText: "Join Discussion"
    }
  ];
  
  const filteredFAQs = searchQuery 
    ? faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;


  return (
    <div>
      <main className="p-4 sm:p-6 md:p-8 max-w-screen-2xl mx-auto w-full space-y-6">
        {/* Hero Section */}
        <section className="pt-16 pb-12 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">How Can We Help?</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find answers to common questions or contact our support team for assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 rounded-xl shadow-md border-0 focus:ring-2 focus:ring-orange-500 transition-all"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-4 top-4 text-gray-400 hover:text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Common Questions Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Common Questions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredFAQs.map((category, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.questions.map((item) => (
                      <li key={item.id}>
                        <Link href={item.link}>
                          <div className="text-gray-600 hover:text-orange-500 flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 mr-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item.question}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link href={`/help/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
                        <span>View all</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Need More Help?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center transition-all hover:shadow-md">
                  <div className="bg-orange-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <Link href={option.link}>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors w-full">
                      {option.buttonText}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pet Care Tips Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Pet Care Resources</h2>
                <p className="text-gray-600 mb-6">
                  Explore our library of pet care resources and expert advice to keep your furry friends happy and healthy.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Educational Articles</h3>
                      <p className="text-gray-600">In-depth guides on pet nutrition, training, and healthcare.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Video Library</h3>
                      <p className="text-gray-600">Watch tutorials on pet care, training techniques, and more.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Downloadable Resources</h3>
                      <p className="text-gray-600">Checklists, guides, and templates for pet parents.</p>
                    </div>
                  </div>
                </div>
                <Link href="/resources">
                  <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center">
                    <span>Explore Resources</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="md:w-5/12">
                <div className="bg-slate-50 p-4 rounded-2xl shadow-lg overflow-hidden relative">
                  <div className="bg-white rounded-xl p-6 mb-4">
                    <div className="flex items-center mb-3">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold">Pet Nutrition Guide</h4>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full mb-2"></div>
                    <div className="h-2 bg-slate-100 rounded-full mb-2 w-3/4"></div>
                    <div className="h-2 bg-slate-100 rounded-full mb-2"></div>
                    <div className="h-2 bg-slate-100 rounded-full w-2/3"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center">
                      <div className="bg-blue-100 rounded-full p-3 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Training Tips</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center">
                      <div className="bg-green-100 rounded-full p-3 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Health Checklists</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How do I get started with Anima Unity?</h3>
                <p className="text-gray-600">
                  Getting started is easy! Simply sign up for an account, complete your profile and add your pet's information. 
                  Once set up, you'll have access to all our features including healthcare tracking, shelter connections, and more.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Is my personal information secure?</h3>
                <p className="text-gray-600">
                  Yes, we take data security seriously. All your personal and pet information is encrypted and stored securely. 
                  We never share your information with third parties without your explicit consent.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How does the AniTrack GPS feature work?</h3>
                <p className="text-gray-600">
                  AniTrack GPS uses IoT technology to provide real-time location tracking for your pets. The small, 
                  lightweight device attaches to your pet's collar and connects to our app, allowing you to monitor their 
                  location and set up safe zones.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Can I change my subscription plan?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. 
                  Changes will be applied at the start of your next billing cycle.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link href="/faq">
                <button className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg transition-colors inline-flex items-center">
                  <span>View All FAQs</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

