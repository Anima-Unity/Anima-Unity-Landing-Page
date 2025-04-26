'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ChevronRight, 
  ArrowRight, 
  Book, 
  Video, 
  Archive, 
  Beaker, 
  FileText, 
  ClipboardCheck
} from 'lucide-react';

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

export default function HelpCenterTemplate(): React.ReactElement {
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
      title: " Healthcare",
      icon: "🏥",
      questions: [
        { id: 4, question: "How do I schedule a vet appointment?", link: "/help/schedule-appointment" },
        { id: 5, question: "How do vaccination reminders work?", link: "/help/vaccination-reminders" },
        { id: 6, question: "Can I upload my pet&apos;s medical records?", link: "/help/upload-records" },
      ]
    },
    {
      title: " Tracking",
      icon: "📍",
      questions: [
        { id: 7, question: "How does AniTrack GPS work?", link: "/help/anitrack-info" },
        { id: 8, question: "Is my pet&apos;s location data secure?", link: "/help/location-security" },
        { id: 9, question: "Can I set safe zones for my ?", link: "/help/safe-zones" },
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
      link: "/help-center/contact-support",
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
      description: "Connect with other  owners to share tips and advice.",
      icon: "💬",
      link: "https://t.me/animaunityhub",
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
    <div className="min-h-screen bg-slate-50/50">
      <main className="p-4 sm:p-6 md:p-8 max-w-screen-2xl mx-auto w-full space-y-12 md:space-y-24">
        {/* Hero Section */}
        <section className="pt-16 pb-12 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 tracking-tight">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions or contact our support team for assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full px-6 py-4 rounded-xl shadow-md border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-primary 
                             transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-200">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Questions Section */}
        <section className="py-12 bg-white rounded-2xl shadow-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Common Questions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredFAQs.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md
                            hover:translate-y-[-4px] border border-slate-100"
                >
                  <div className="flex items-center mb-5">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {category.questions.map((item) => (
                      <li key={item.id}>
                        <Link href={item.link} className="group">
                          <div className="text-gray-600 group-hover:text-primary flex items-start transition-colors duration-200">
                            <ChevronRight className="h-5 w-5 mt-0.5 mr-2 text-primary-light group-hover:text-primary" />
                            <span>{item.question}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <Link 
                      href={`/help/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary hover:text-primary-dark font-medium flex items-center transition-colors duration-200"
                    >
                      <span>View all</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Need More Help?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {supportOptions.map((option, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 shadow-sm text-center transition-all duration-300 
                            hover:shadow-md hover:translate-y-[-4px] border border-slate-100 flex flex-col h-full"
                >
                  <div className="bg-primary-light w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl mb-5">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{option.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{option.description}</p>
                  <Link href={option.link} className="block mt-auto">
                    <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg 
                                      transition-colors duration-200 w-full font-medium shadow-sm hover:shadow">
                      {option.buttonText}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*  Care Tips Section */}
        <section className="py-16 bg-white rounded-2xl shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800"> Care Resources</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Explore our library of care resources and expert advice to keep your furry friends happy and healthy.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="bg-primary-light p-3 rounded-lg mr-4 group-hover:bg-primary transition-colors duration-200">
                      <Book className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Educational Articles</h3>
                      <p className="text-gray-600">In-depth guides on nutrition, training, and healthcare.</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="bg-primary-light p-3 rounded-lg mr-4 group-hover:bg-primary transition-colors duration-200">
                      <Video className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Video Library</h3>
                      <p className="text-gray-600">Watch tutorials on care, training techniques, and more.</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="bg-primary-light p-3 rounded-lg mr-4 group-hover:bg-primary transition-colors duration-200">
                      <Archive className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Downloadable Resources</h3>
                      <p className="text-gray-600">Checklists, guides, and templates for parents.</p>
                    </div>
                  </div>
                </div>
                <Link href="/resources">
                  <button className="mt-10 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg 
                                   transition-colors duration-200 flex items-center font-medium shadow-sm hover:shadow">
                    <span>Explore Resources</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                </Link>
              </div>
              <div className="md:w-5/12">
                <div className="bg-slate-50 p-6 rounded-2xl shadow-md overflow-hidden relative border border-slate-100">
                  <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-slate-50">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary-light p-2 rounded-lg mr-3">
                        <Beaker className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold"> Nutrition Guide</h4>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full mb-2"></div>
                    <div className="h-2 bg-slate-100 rounded-full mb-2 w-3/4"></div>
                    <div className="h-2 bg-slate-100 rounded-full mb-2"></div>
                    <div className="h-2 bg-slate-100 rounded-full w-2/3"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col items-center justify-center 
                                 hover:shadow-md transition-all duration-200 border border-slate-50 group">
                      <div className="bg-blue-100 rounded-lg p-3 mb-3 group-hover:bg-blue transition-colors duration-200">
                        <FileText className="h-5 w-5 text-blue group-hover:text-white transition-colors duration-200" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">Training Tips</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col items-center justify-center 
                                 hover:shadow-md transition-all duration-200 border border-slate-50 group">
                      <div className="bg-teal-100 rounded-lg p-3 mb-3 group-hover:bg-teal transition-colors duration-200">
                        <ClipboardCheck className="h-5 w-5 text-teal group-hover:text-white transition-colors duration-200" />
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
        <section className="py-16 bg-slate-50 rounded-2xl shadow-sm">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How do I get started with Anima Unity?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Getting started is easy! Simply sign up for an account, complete your profile and add your pet&apos;s information. 
                  Once set up, you&apos;ll have access to all our features including healthcare tracking, shelter connections, and more.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Is my personal information secure?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we take data security seriously. All your personal and information is encrypted and stored securely. 
                  We never share your information with third parties without your explicit consent.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How does the AniTrack GPS feature work?</h3>
                <p className="text-gray-600 leading-relaxed">
                  AniTrack GPS uses IoT technology to provide real-time location tracking for your pet&apos;s. The small, 
                  lightweight device attaches to your pet&apos;s collar and connects to our app, allowing you to monitor their 
                  location and set up safe zones.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Can I change my subscription plan?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. 
                  Changes will be applied at the start of your next billing cycle.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/faq">
                <button className="bg-white border-2 border-primary text-primary hover:bg-primary-light/20 
                                 px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center
                                 font-medium shadow-sm hover:shadow">
                  <span>View All FAQs</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}