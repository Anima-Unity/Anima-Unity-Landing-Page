'use client'
import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function TermsOfServiceTemplate() {
  const [expandedSection, setExpandedSection] = useState<number | null>(1);
  
  const toggleSection = (sectionId: number): void => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };
  
  const sections = [
    {
      id: 1,
      title: "Use of Our Services",
      content: "You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our platform in a way that could harm us or any third party."
    },
    {
      id: 2,
      title: "Account and Security",
      content: "Some features may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
    },
    {
      id: 3,
      title: "Intellectual Property",
      content: "All content, trademarks, and data on this site are the property of Anima Unity or its licensors. You may not copy, reproduce, distribute, or create derivative works without permission."
    },
    {
      id: 4,
      title: "Termination",
      content: "We reserve the right to suspend or terminate your access to our services if you violate these Terms or use our services in a harmful way."
    },
    {
      id: 5,
      title: "Changes to These Terms",
      content: "We may update these Terms from time to time. If we make material changes, we will notify you via our platform or other means. Continued use of our services means you accept the new Terms."
    },
    {
      id: 6,
      title: "Contact",
      content: "If you have any questions about these Terms, please contact us at hello@animaunity.com."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-feature-lightPink">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header section with decorative elements */}
        <div className="relative mb-12 text-center">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-accent-coral/10 rounded-full blur-xl"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10 text-primary-gradient">Terms of Service</h1>
          <div className="w-24 h-1 bg-coral-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center">
            Please read these terms carefully before using our platform and services.
          </p>
        </div>

        {/* Introduction card */}
        <div className="bg-card rounded-2xl p-6 shadow-card mb-10 border border-border/50 hover:shadow-card-hover transition-shadow duration-300">
          <p className="text-foreground">
            Welcome to Anima Unity. These Terms of Service govern your access to and use of our website, products, and services.
            By using our platform, you agree to be bound by these Terms. Please read them carefully.
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
                expandedSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-5 pt-0 border-t border-border/50">
                  <p className="text-foreground">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-primary-gradient rounded-2xl p-8 shadow-button-hover text-white mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Have questions?</h3>
              <p className="text-white/90">We&apos;re here to help with any concerns about our terms.</p>
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