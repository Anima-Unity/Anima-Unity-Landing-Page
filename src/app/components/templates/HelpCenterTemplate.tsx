'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  ChevronRight, 
  ArrowRight, 
  Video, 
  Heart,
  MapPin,
  Video as VideoIcon,
  Home,
  LayoutDashboard,
  BookOpen,
  MessageSquare,
  Settings,
  MessagesSquare,
  Menu,
  X,
  HelpCircle,
  Headphones
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
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  link: string;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  link: string;
}

export default function HelpCenterTemplate(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  
  // Set current path for breadcrumbs
  useEffect(() => {
    if (pathname) {
      const pathSegments = pathname.split('/').filter(segment => segment);
      setCurrentPath(['Help Center', ...pathSegments.map(segment => 
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
      )]);
    }
  }, [pathname]);
  
  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
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
        { id: 6, question: "Can I upload my pets medical records?", link: "/help/upload-records" },
      ]
    },
    {
      title: "Track Your Pet",
      icon: "📍",
      questions: [
        { id: 7, question: "How does AniTrack GPS work?", link: "/help/anitrack-info" },
        { id: 8, question: "Is my pet's location data secure?", link: "/help/location-security" },
        { id: 9, question: "Can I set safe zones for my pet?", link: "/help/safe-zones" },
      ]
    },
    {
      title: "Shelter Support",
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
      title: "Getting Started",
      description: "Find all the basic info you need to get started with the platform.",
      icon: <BookOpen className="h-5 w-5" />,
      color: "text-accent-orange",
      bgColor: "bg-feature-healthcare",
      link: "/help-center/getting-started"
    },
    {
      title: "Account Settings",
      description: "Manage your profile, notifications and account preferences.",
      icon: <Settings className="h-5 w-5" />,
      color: "text-accent-blue",
      bgColor: "bg-feature-shelter",
      link: "/help-center/account"
    },
    {
      title: "Track Your Pet",
      description: "Learn how to use our GPS tracking system for your pets.",
      icon: <MapPin className="h-5 w-5" />,
      color: "text-accent-green",
      bgColor: "bg-feature-tracking",
      link: "/help-center/tracking"
    },
    {
      title: "Virtual Consultation",
      description: "Connect with vets remotely for pet health consultations.",
      icon: <VideoIcon className="h-5 w-5" />,
      color: "text-accent-teal",
      bgColor: "bg-feature-telemedicine",
      link: "/help-center/virtual-consultations"
    },
    {
      title: "Pet Healthcare",
      description: "All about pet health records, vaccines, and reminders.",
      icon: <Heart className="h-5 w-5" />,
      color: "text-icon-healthcare",
      bgColor: "bg-feature-healthcare",
      link: "/help-center/healthcare"
    },
    {
      title: "Community Forum",
      description: "Connect with other animal lovers in our community.",
      icon: <MessagesSquare className="h-5 w-5" />,
      color: "text-accent-blue",
      bgColor: "bg-feature-digital",
      link: "/help-center/community"
    },
    {
      title: "Shelter Support",
      description: "How to find and connect with shelters near you.",
      icon: <Home className="h-5 w-5" />,
      color: "text-icon-shelter",
      bgColor: "bg-feature-shelter",
      link: "/help-center/shelters"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides on using all our features.",
      icon: <Video className="h-5 w-5" />,
      color: "text-accent-teal",
      bgColor: "bg-feature-telemedicine",
      link: "/help-center/tutorials"
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

  // Navigation menu items - Updated based on provided requirements
  const navItems: NavItem[] = [
    { icon: <Home className="w-5 h-5" />, label: "Home", link: "/help-center" },
    { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", link: "/dashboard" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Getting Started", link: "/help-center/getting-started" },
    { icon: <Settings className="w-5 h-5" />, label: "Account Settings", link: "/help-center/account-settings" },
    { icon: <MapPin className="w-5 h-5" />, label: "Track Your Pet", link: "/help-center/track-your-pet" },
    { icon: <VideoIcon className="w-5 h-5" />, label: "Virtual Consultation", link: "/help-center/virtual-consultation" },
    { icon: <Heart className="w-5 h-5" />, label: "Pet Healthcare", link: "/help-center/pet-healthcare" },
    { icon: <Home className="w-5 h-5" />, label: "Shelter Support", link: "/help-center/shelter-support" },
    { icon: <MessagesSquare className="w-5 h-5" />, label: "Community Forum", link: "/help-center/community-forum" },
    { icon: <Video className="w-5 h-5" />, label: "Video Tutorials", link: "/help-center/video-tutorials" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "Contact Us", link: "/help-center/contact-us" },
    { icon: <HelpCircle className="w-5 h-5" />, label: "FAQ", link: "/help-center/faq" },
  ];

  // Check if a nav item is active (simplified logic - would need adjustment for nested routes)
  const isActive = (path: string): boolean => {
    if (!pathname) return false;
    return pathname === path || 
           (path !== '/' && pathname.startsWith(path)) || 
           (path === '/messages' && pathname.includes('help-center'));
  };

  // Support agent component
  const SupportAgent = () => {
  return (
    <div className="mt-auto p-4 border-t border-border">
      <div className="relative overflow-hidden rounded-2xl bg-feature-tracking p-6">
        {/* Icon Container */}
        <div className="absolute left-6 top-6">
          <Headphones className="h-10 w-10 text-primary" />
        </div>
        
        {/* Content Container */}
        <div className="ml-16">
          <div className="inline-block rounded-lg rounded-bl-none bg-card p-3 shadow-card">
            <p className="text-sm text-muted-foreground">Need help?</p>
          </div>
          
          <button 
            className="mt-3 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-button hover:bg-primary/90 transition-colors"
            aria-label="Contact Support"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

  // Sidebar navigation
  const SidebarNav = () => (
    <nav className="flex-1 px-2 py-4">
      <ul className="space-y-1">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link 
              href={item.link}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive(item.link) 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-gray-600 hover:bg-slate-50"
              }`}
            >
              <span className={`mr-3 ${isActive(item.link) ? "text-primary" : ""}`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
              {isActive(item.link) && (
                <span className="ml-auto">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-50/80">
      {/* Mobile Header */}
      <header className="md:hidden bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/img/logo.png" alt="Anima Unity Logo" width={32} height={32} />
            <span className="font-semibold text-gray-800">Anima Unity HC</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-gray-800/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar - both desktop and mobile */}
      <div 
        className={`
          fixed md:relative inset-y-0 left-0 z-40 md:z-0
          w-64 bg-white border-r border-slate-200 md:translate-x-0
          transition-transform duration-300 ease-in-out transform
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col max-h-screen overflow-hidden
        `}
      >
        <div className="p-4 border-b border-slate-200 hidden md:block">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white mr-2">
              A
            </div>
            <span className="font-semibold text-gray-800">Anima Unity HC</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <SidebarNav />
        </div>
        
        <SupportAgent />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pt-0 md:pt-0">
        <div className="max-w-5xl mx-auto px-4 py-6">
          {/* Search bar - Added as requested */}
          <div className="relative flex items-center mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for help topics..."
              className="bg-white w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Breadcrumb navigation - Added as requested */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            {currentPath.map((path, index) => (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />}
                <span className={index === currentPath.length - 1 ? "text-primary font-medium" : ""}>
                  {path}
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Welcome Banner */}
          <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-start shadow-sm mb-8 border border-slate-100">
            <div className="flex-1 mb-4 md:mb-0">
              <h1 className="text-xl font-semibold text-gray-800">Welcome to Anima Unity Help Center</h1>
              <p className="text-gray-600 mt-1 mb-4">Find answers to all your questions about our platform.</p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
            <div className="flex-shrink-0 md:pl-4 w-full md:w-auto">
              <Image 
                src="/img/banner.png" 
                alt="Support illustration" 
                width={180} 
                height={90}
                className="object-contain mx-auto md:mx-0"
                style={{ 
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>

          {/* Need Help Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Need help? We&apos;ve got your back</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {supportOptions.slice(0, 4).map((option, index) => (
                <Link key={index} href={option.link}>
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center h-full border border-slate-100">
                    <div className={`${option.bgColor} p-3 rounded-lg mb-3`}>
                      <div className={`${option.color}`}>
                        {option.icon}
                      </div>
                    </div>
                    <h3 className="font-medium text-sm text-gray-800 mb-1">{option.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {option.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {supportOptions.slice(4, 8).map((option, index) => (
                <Link key={index} href={option.link}>
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center h-full border border-slate-100">
                    <div className={`${option.bgColor} p-3 rounded-lg mb-3`}>
                      <div className={`${option.color}`}>
                        {option.icon}
                      </div>
                    </div>
                    <h3 className="font-medium text-sm text-gray-800 mb-1">{option.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {option.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            
            {filteredFAQs.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="flex items-center text-md font-medium text-gray-700 mb-3">
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.questions.map((q) => (
                    <Link key={q.id} href={q.link}>
                      <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all border border-slate-100">
                        <div className="flex items-center">
                          <div className="flex-1">
                            <p className="text-sm text-gray-800">{q.question}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Other ways to reach us */}
          <div className="flex justify-end mb-4">
            <div className="text-xs text-gray-500">Other ways to find help:</div>
            <div className="flex ml-2">
              <button className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center mr-1 transition-colors">
                <MessagesSquare className="w-3 h-3 text-gray-600" />
              </button>
              <button className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center mr-1 transition-colors">
                <MessageSquare className="w-3 h-3 text-gray-600" />
              </button>
              <button className="w-6 h-6 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Video className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}