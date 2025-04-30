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
  Bell,
  User,
  Zap,
  Mail
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


// Redesigned Sidebar Navigation
const SidebarNav = () => (
  <nav className="flex-1 px-3 py-6">
    <div className="mb-6">
      <h2 className="text-sm font-semibold text-muted-foreground px-4 mb-3">MENU</h2>
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link 
              href={item.link}
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive(item.link) 
                  ? "bg-coral-gradient text-white font-medium shadow-button" 
                  : "text-gray-600 hover:bg-feature-lightPink hover:text-primary-coral"
              }`}
            >
              <span className={`mr-3 text-lg ${isActive(item.link) ? "text-white" : "text-gray-500"}`}>
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
              
              {/* Indicator for active state */}
              {isActive(item.link) && (
                <span className="ml-auto">
                  <div className="flex items-center">
                    <span className="text-xs mr-2">Active</span>
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse-gentle"></div>
                  </div>
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
    {/* Categories Section */}
    <div className="mt-8">
      <h2 className="text-sm font-semibold text-muted-foreground px-4 mb-3">CATEGORIES</h2>
      <div className="px-4">
        <div className="bg-feature-lightPink p-4 rounded-2xl">
          <div className="flex flex-wrap gap-2">
            {['Popular', 'Latest', 'Trending'].map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs bg-white rounded-full text-primary-coral shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    {/* Help Center */}
    <div className="mt-auto px-4 pt-6">
      <div className="bg-card-gradient rounded-2xl p-4 shadow-card border border-border">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-accent-coral flex items-center justify-center text-white mr-3">
            <i className="fas fa-headset text-sm"></i>
          </div>
          <h3 className="font-medium">Need Help?</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Contact our support team for assistance
        </p>
        <button className="w-full py-2 rounded-xl bg-white text-sm font-medium text-accent-coral border border-border hover:shadow-button transition-all duration-200">
          Support Center
        </button>
      </div>
    </div>
  </nav>
);

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-50/80">
{/* Mobile Header */}
<header className="md:hidden bg-white border-b border-slate-100 shadow-sm px-4 py-4 sticky top-0 z-20">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <div className="bg-gradient-to-r from-primary-coral to-primary-light rounded-lg p-1">
        <Image 
          src="/img/logo.png" 
          alt="Anima Unity Logo" 
          width={30} 
          height={30} 
          className="animate-pulse-gentle"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-gradient bg-coral-gradient text-lg leading-tight">
          Anima Unity
        </span>
        <span className="text-xs text-accent-gray font-medium">Healthcare</span>
      </div>
    </div>
    
    <div className="flex items-center space-x-3">
      <button 
        className="p-1.5 rounded-full bg-feature-lightPink hover:bg-primary-light/10 transition-all duration-300"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5 text-primary-coral" />
      </button>
      
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-1.5 rounded-full bg-feature-lightPink hover:bg-primary-light/10 transition-all duration-300 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? 
          <X className="w-5 h-5 text-primary-coral" /> : 
          <Menu className="w-5 h-5 text-primary-coral" />
        }
      </button>
    </div>
  </div>
  
  {/* Optional: Animated indicator for mobile menu state */}
  <div className={`w-full flex justify-end pr-4 mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
    <div className="w-8 h-1 rounded-full bg-primary-coral" />
  </div>
</header>

{/* Mobile Sidebar Overlay */}
{isMobileMenuOpen && (
  <div 
    className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-all duration-300 animate-fade-in"
    onClick={() => setIsMobileMenuOpen(false)}
    aria-hidden="true"
  >
    <div className="absolute top-4 right-4">
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(false);
        }}
        className="p-1.5 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300"
        aria-label="Close menu"
      >
        <X className="w-5 h-5 text-white" />
      </button>
    </div>
    
    {/* Optional: add subtle gradient effect to match theme */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-coral/5 to-transparent pointer-events-none" />
  </div>
)}

{/* Sidebar - both desktop and mobile */}
<div 
  className={`
    fixed md:relative inset-y-0 left-0 z-40 md:z-0
    w-72 bg-white md:bg-gradient-to-b md:from-white md:to-feature-lightPink/30
    border-r border-slate-100 shadow-card md:shadow-none md:translate-x-0
    transition-all duration-300 ease-in-out transform
    ${isMobileMenuOpen ? 'translate-x-0 animate-slide-up' : '-translate-x-full'}
    flex flex-col h-screen overflow-hidden
  `}
>
  {/* Mobile close button */}
  <div className="absolute top-4 right-4 md:hidden">
    <button 
      onClick={() => setIsMobileMenuOpen(false)}
      className="p-1.5 rounded-full bg-feature-lightPink hover:bg-primary-light/10 transition-all"
      aria-label="Close sidebar"
    >
      <X className="w-4 h-4 text-primary-coral" />
    </button>
  </div>

  {/* Sidebar Header - Desktop */}
  <div className="p-5 border-b border-slate-100 hidden md:block">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-xl bg-coral-gradient flex items-center justify-center text-white shadow-button">
        <span className="font-semibold">A</span>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-gradient bg-coral-gradient">Anima Unity</span>
        <span className="text-xs text-accent-gray font-medium">Healthcare Platform</span>
      </div>
    </div>
  </div>
  
  {/* Mobile Header - shows logo and name on mobile */}
  <div className="p-5 border-b border-slate-100 md:hidden">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-xl bg-coral-gradient flex items-center justify-center text-white shadow-button">
        <span className="font-semibold">A</span>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-gradient bg-coral-gradient">Anima Unity</span>
        <span className="text-xs text-accent-gray font-medium">Healthcare Platform</span>
      </div>
    </div>
  </div>
  
  {/* User Profile Section - Optional */}
  <div className="px-4 py-3 border-b border-slate-100">
    <div className="flex items-center space-x-3">
      <div className="w-9 h-9 rounded-full bg-feature-lightPink flex items-center justify-center">
        <User className="w-5 h-5 text-primary-coral" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-accent-black">Dr. Amanda</span>
        <span className="text-xs text-accent-gray">Medical Staff</span>
      </div>
    </div>
  </div>
  
  {/* Navigation Menu */}
  <div className="flex-1 overflow-y-auto py-3 px-2 scrollbar-hide">
    <SidebarNav />
  </div>
</div>

{/* Main Content */}
<div className="flex-1 overflow-y-auto pt-0 md:pt-0 bg-feature-lightGray">
  <div className="max-w-5xl mx-auto px-4 py-6">
    {/* Search bar - Enhanced */}
    <div className="relative flex items-center mb-6">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-primary-coral" />
      </div>
      <input
        type="text"
        placeholder="Search for help topics..."
        className="bg-white w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-coral/30 focus:border-primary-coral shadow-sm transition-all duration-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-500">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
    </div>
    
    {/* Breadcrumb navigation - Enhanced */}
    <div className="flex items-center text-sm text-accent-gray mb-6 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
      <Home className="w-3.5 h-3.5 text-primary-coral mr-2" />
      {currentPath.map((path, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-300" />}
          <span className={index === currentPath.length - 1 
            ? "text-primary-coral font-medium" 
            : "hover:text-primary-coral transition-colors duration-200"}>
            {path}
          </span>
        </React.Fragment>
      ))}
    </div>

    {/* Welcome Banner - Enhanced */}
    <div className="bg-gradient-to-r from-white to-feature-lightPink rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center shadow-card mb-8 border border-slate-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/10 rounded-full -mr-10 -mt-10 paw-bg"/>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-light/5 rounded-full -ml-8 -mb-8"/>
      
      <div className="flex-1 mb-6 md:mb-0 relative z-10">
        <h1 className="text-2xl font-bold text-gradient bg-coral-gradient mb-2">Welcome to Anima Unity</h1>
        <h2 className="text-lg font-medium text-accent-black mb-2">Healthcare Help Center</h2>
        <p className="text-accent-gray mt-1 mb-5 max-w-lg">Find answers to all your questions about our platform and get the support you need to succeed.</p>
        <button className="bg-coral-gradient text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:shadow-button-hover transition-all duration-300 button-shadow flex items-center">
          <Zap className="w-4 h-4 mr-2" />
          Get Started
        </button>
      </div>
      <div className="flex-shrink-0 md:pl-4 w-full md:w-auto relative z-10">
        <Image 
          src="/img/banner.png" 
          alt="Support illustration" 
          width={220} 
          height={110}
          className="object-contain mx-auto md:mx-0 animate-pulse-gentle"
          style={{ 
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>
    </div>

    {/* Need Help Section - Enhanced */}
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-accent-black mb-2">Need help? We&apos;ve got your back</h2>
      <p className="text-accent-gray text-sm mb-6">Select from these popular help categories</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {supportOptions.slice(0, 4).map((option, index) => (
          <Link key={index} href={option.link}>
            <div className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center h-full border border-slate-100 group hover:-translate-y-1">
              <div className={`${option.bgColor} bg-opacity-10 p-3.5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-primary-coral`}>
                  {option.icon}
                </div>
              </div>
              <h3 className="font-medium text-sm text-accent-black mb-2">{option.title}</h3>
              <p className="text-xs text-accent-gray line-clamp-2">
                {option.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {supportOptions.slice(4, 8).map((option, index) => (
          <Link key={index} href={option.link}>
            <div className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center h-full border border-slate-100 group hover:-translate-y-1">
              <div className={`${option.bgColor} bg-opacity-10 p-3.5 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-primary-coral`}>
                  {option.icon}
                </div>
              </div>
              <h3 className="font-medium text-sm text-accent-black mb-2">{option.title}</h3>
              <p className="text-xs text-accent-gray line-clamp-2">
                {option.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* FAQ Section - Enhanced */}
    <div className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-accent-black">Frequently Asked Questions</h2>
          <p className="text-accent-gray text-sm">Quick answers to common questions</p>
        </div>
        <Link href="/faqs">
          <span className="text-primary-coral text-sm font-medium flex items-center hover:underline">
            View all FAQs
            <ChevronRight className="w-4 h-4 ml-1" />
          </span>
        </Link>
      </div>
      
      {filteredFAQs.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="flex items-center text-md font-medium text-accent-black mb-3 bg-feature-lightPink/30 p-2 pl-3 rounded-lg">
            <span className="mr-2 text-primary-coral">{category.icon}</span>
            {category.title}
          </h3>
          <div className="space-y-2.5">
            {category.questions.map((q) => (
              <Link key={q.id} href={q.link}>
                <div className="bg-white p-4 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-slate-100 hover:-translate-y-0.5">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <p className="text-sm text-accent-black font-medium">{q.question}</p>
                    </div>
                    <div className="bg-feature-lightPink/50 p-1.5 rounded-lg group-hover:bg-primary-coral/10 transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary-coral" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Contact Methods - Enhanced */}
    <div className="bg-white rounded-2xl p-5 shadow-card border border-slate-100 mb-6">
      <h3 className="text-md font-medium text-accent-black mb-4">Other ways to find help</h3>
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center px-4 py-2.5 rounded-xl bg-feature-lightPink hover:bg-primary-light/20 transition-colors text-sm text-primary-coral font-medium">
          <MessagesSquare className="w-4 h-4 mr-2" />
          Live Chat
        </button>
        <button className="flex items-center px-4 py-2.5 rounded-xl bg-feature-lightPink hover:bg-primary-light/20 transition-colors text-sm text-primary-coral font-medium">
          <Mail className="w-4 h-4 mr-2" />
          Email Support
        </button>
        <button className="flex items-center px-4 py-2.5 rounded-xl bg-coral-gradient hover:shadow-button-hover transition-all text-sm text-white font-medium button-shadow">
          <Video className="w-4 h-4 mr-2" />
          Video Support
        </button>
      </div>
    </div>
    
    {/* Footer */}
    <div className="flex justify-between items-center py-4 text-xs text-accent-gray border-t border-slate-200">
      <div>© 2025 Anima Unity Healthcare. All rights reserved.</div>
      <div className="flex space-x-4">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}