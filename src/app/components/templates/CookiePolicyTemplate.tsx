'use client'
import { useState } from 'react';
import { ArrowRight, Cookie, ChevronDown, ChevronUp, Shield, BarChart4, Settings, Bell, Check } from 'lucide-react';

export default function CookiePolicyTemplate() {
  const [expandedSection, setExpandedSection] = useState<number | null>(1);
  
  const toggleSection = (sectionId: number): void => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const cookieTypes = [
    {
      icon: <Shield className="text-accent-blue w-6 h-6" />,
      title: "Essential cookies",
      description: "Required for core functionality like security and access control."
    },
    {
      icon: <BarChart4 className="text-accent-green w-6 h-6" />,
      title: "Analytics cookies",
      description: "Help us understand how visitors interact with the site."
    },
    {
      icon: <Settings className="text-accent-coral w-6 h-6" />,
      title: "Functional cookies",
      description: "Remember preferences and improve user experience."
    },
    {
      icon: <Bell className="text-accent-gray w-6 h-6" />,
      title: "Advertising cookies",
      description: "Used to deliver relevant advertisements and track campaign performance."
    }
  ];
  
  const sections = [
    {
      id: 1,
      title: "What are cookies?",
      content: "Cookies are small data files that are placed on your device when you visit a website. Cookies are widely used to make websites work, or to work more efficiently, as well as to provide reporting information."
    },
    {
      id: 2,
      title: "Why we use cookies",
      content: <>
        <p className="mb-3">We use cookies to:</p>
        <ul className="space-y-2 pl-2">
          <li className="flex items-start">
            <span className="inline-flex mr-2 mt-1"><Check size={16} className="text-accent-coral" /></span>
            Enable essential functions on our website
          </li>
          <li className="flex items-start">
            <span className="inline-flex mr-2 mt-1"><Check size={16} className="text-accent-coral" /></span>
            Understand how users interact with our site
          </li>
          <li className="flex items-start">
            <span className="inline-flex mr-2 mt-1"><Check size={16} className="text-accent-coral" /></span>
            Improve your user experience
          </li>
          <li className="flex items-start">
            <span className="inline-flex mr-2 mt-1"><Check size={16} className="text-accent-coral" /></span>
            Provide personalized content and ads
          </li>
        </ul>
      </>
    },
    {
      id: 3,
      title: "Types of cookies we use",
      content: null, // We'll handle this section separately with icons
      customContent: true
    },
    {
      id: 4,
      title: "How to control cookies",
      content: "You have the right to accept or reject cookies. Most browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may limit your use of certain features on our site."
    },
    {
      id: 5,
      title: "Updates to this policy",
      content: "We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We encourage you to review this page periodically for the latest information."
    },
    {
      id: 6,
      title: "Contact us",
      content: "If you have any questions about our use of cookies or this policy, contact us at hello@animaunity.com."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-feature-lightPink">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header section with decorative elements */}
        <div className="relative mb-12 text-center">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-accent-coral/10 rounded-full blur-xl"></div>
          <div className="flex justify-center mb-4">
            <div className="bg-accent-coral/10 p-4 rounded-full">
              <Cookie className="w-10 h-10 text-accent-coral" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-primary-gradient">Cookie Policy</h1>
          <div className="w-24 h-1 bg-coral-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center">
            Learn how we use cookies and similar technologies on our website.
          </p>
        </div>

        {/* Introduction card */}
        <div className="bg-card rounded-2xl p-6 shadow-card mb-10 border border-border/50 hover:shadow-card-hover transition-shadow duration-300">
          <p className="text-foreground">
            This Cookie Policy explains how Anima Unity uses cookies and similar technologies to recognize you when you visit our website.
            It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </div>

        {/* Accordion sections */}
        <div className="space-y-4 mb-12">
          {sections.map((section) => (
            <div 
              key={section.id} 
              className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <h2 className="text-xl font-semibold flex items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-coral/10 text-accent-coral mr-3 text-sm">
                    {section.id}
                  </span>
                  {section.title}
                </h2>
                {expandedSection === section.id ? 
                  <ChevronUp className="text-accent-coral w-5 h-5" /> : 
                  <ChevronDown className="text-muted-foreground w-5 h-5" />
                }
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedSection === section.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-5 pt-0 border-t border-border/50">
                  {section.customContent ? (
                    section.id === 3 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cookieTypes.map((type, index) => (
                          <div key={index} className="bg-card p-4 rounded-xl border border-border/50 flex items-start">
                            <div className="shrink-0 mr-3 mt-1">{type.icon}</div>
                            <div>
                              <h3 className="font-medium mb-1">{type.title}</h3>
                              <p className="text-sm text-muted-foreground">{type.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    <div className="text-foreground">{section.content}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cookie control CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-card border border-accent-coral/20 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-semibold mb-2">Manage your preferences</h3>
              <p className="text-muted-foreground">You can customize your cookie preferences at any time.</p>
            </div>
            <button className="bg-primary-gradient text-white rounded-full py-3 px-6 shadow-button hover:shadow-button-hover transition-all duration-300 hover:-translate-y-1 flex items-center">
              Cookie Settings
              <Settings className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-gradient rounded-2xl p-8 shadow-button-hover text-white mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Have questions?</h3>
              <p className="text-white/90">We&apos;re here to help with any concerns about our cookie policy.</p>
            </div>
            <a href="mailto:hello@animaunity.com" className="bg-white text-accent-coral rounded-full py-3 px-6 flex items-center font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Last updated info */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Last updated: April 8, 2025</p>
        </div>
      </div>
    </div>
  );
}