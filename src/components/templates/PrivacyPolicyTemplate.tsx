// app/privacy-policy/page.tsx
'use client';

import { Metadata } from "next";
import { FaShieldAlt, FaUserLock, FaClipboardList, FaShareAlt, FaUserCog, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Anima Unity",
  description: "Our commitment to protecting your privacy at Anima Unity.",
};

export default function PrivacyPolicyTemplate() {
  return (
    <div className="relative bg-gradient-to-b from-white to-feature-lightPink min-h-screen pb-12">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 paw-bg opacity-20 pointer-events-none"></div>
      
      {/* Page Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-coral mb-4 shadow-button">
            <FaShieldAlt className="text-white" size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-primary-coral rounded-full"></div>
          </div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            At Anima Unity, we are committed to protecting your privacy. This Privacy Policy
            outlines how your personal information is collected, used, and shared when you use
            our platform.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-10">
          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-2xl bg-feature-lightPink flex items-center justify-center text-primary-coral mr-4 flex-shrink-0">
                <FaUserLock size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We may collect information such as your name, email address, and usage data when
                  you interact with our service. This includes:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Personal identifiers (name, email, phone number)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Account information and pet profiles
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Usage data and interaction metrics
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-2xl bg-feature-lightPink flex items-center justify-center text-primary-coral mr-4 flex-shrink-0">
                <FaClipboardList size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">2. How We Use Information</h2>
                <p className="text-muted-foreground">
                  Your data helps us improve our services, provide support, and communicate updates
                  or offers. We use this information to:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Personalize your experience on our platform
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Process transactions and deliver requested services
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Send service notifications and product updates
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-2xl bg-feature-lightPink flex items-center justify-center text-primary-coral mr-4 flex-shrink-0">
                <FaShareAlt size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">3. Sharing & Disclosure</h2>
                <p className="text-muted-foreground">
                  We do not sell your personal information. We only share data with third-party
                  services necessary to operate our platform (e.g., analytics, hosting). We may share information with:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Service providers who help operate our platform
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Law enforcement when required by law
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Business partners with your explicit consent
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-2xl bg-feature-lightPink flex items-center justify-center text-primary-coral mr-4 flex-shrink-0">
                <FaUserCog size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">4. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, update, or delete your information by contacting us. 
                  These rights include:
                </p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Access to your personal data
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Correction of inaccurate information
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary-coral mt-2 mr-2 flex-shrink-0"></span>
                    Deletion of your data (right to be forgotten)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-2xl bg-feature-lightPink flex items-center justify-center text-primary-coral mr-4 flex-shrink-0">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">5. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this policy, please don&apos;t hesitate to reach out to our privacy team.
                </p>
                <div className="inline-block">
                  <a
                    href="mailto:support@animaunity.com"
                    className="flex items-center bg-coral-gradient text-white px-6 py-3 rounded-full shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-1"
                  >
                    <FaEnvelope className="mr-2" />
                    support@animaunity.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center text-primary-coral hover:text-primary-light transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Last Updated: April 29, 2023</p>
        </div>
      </main>
    </div>
  );
}