'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaw,
  FaHeart,
} from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#about", label: "About" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#testimonials", label: "Testimonials" },
  ];
  
  const resources = [
    { href: '/blog', label: 'Blog' },
    { href: '/help-center', label: 'Help Center' },
    { href: '/pet-care-guides', label: 'Pet Care Guides' },
    { href: '/vet-directory', label: 'Vet Directory' },
    { href: '/shelter-network', label: 'Shelter Network' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-feature-lightPink border-t border-border">
      {/* Paw Print Patterns - Decorative Elements */}
      <div className="absolute inset-0 paw-bg opacity-30 pointer-events-none"></div>
      
      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 0L48 11.1C96 22.2 192 44.4 288 53.3C384 62.2 480 57.8 576 53.3C672 48.9 768 44.4 864 35.6C960 26.7 1056 13.3 1152 24.4C1248 35.6 1344 71.1 1392 88.9L1440 106.7V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" 
                fill="#ffffff"/>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Social */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-coral flex items-center justify-center text-white mr-3">
                <FaPaw size={20} />
              </div>
              <span className="text-xl font-semibold text-foreground">
                Anima <span className="text-primary-gradient">Unity</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 pr-4">
              Unite pet lovers, veterinarians, and shelters through a seamless digital experience that puts animal welfare first.
            </p>
            <div className="flex space-x-3">
              <Link href="https://www.facebook.com/share/18gonJgN8b/" prefetch={true} 
                className="w-9 h-9 rounded-full bg-white shadow-card flex items-center justify-center text-primary-coral hover:bg-primary-coral hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                <FaFacebookF size={16} />
              </Link>
              <Link href="https://x.com/animaunity?t=XhOboKYyqxiAUNHKupDPrg&s=09" prefetch={true} 
                className="w-9 h-9 rounded-full bg-white shadow-card flex items-center justify-center text-primary-coral hover:bg-primary-coral hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                <FaTwitter size={16} />
              </Link>
              <a href="#" 
                className="w-9 h-9 rounded-full bg-white shadow-card flex items-center justify-center text-primary-coral hover:bg-primary-coral hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                <FaInstagram size={16} />
              </a>
              <a href="#" 
                className="w-9 h-9 rounded-full bg-white shadow-card flex items-center justify-center text-primary-coral hover:bg-primary-coral hover:text-white transform hover:-translate-y-1 transition-all duration-300">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary-coral rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href} className="group">
                  <Link href={link.href} className="text-muted-foreground group-hover:text-primary-coral flex items-center transition-colors">
                    <span className="w-0 group-hover:w-2 h-1 bg-primary-coral rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary-coral rounded-full mr-2"></span>
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.label} className="group">
                  <Link
                    href={item.href}
                    className="text-muted-foreground group-hover:text-primary-coral flex items-center transition-colors"
                  >
                    <span className="w-0 group-hover:w-2 h-1 bg-primary-coral rounded-full mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
              <span className="w-8 h-1 bg-primary-coral rounded-full mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-lg bg-white shadow-card flex items-center justify-center text-primary-coral group-hover:bg-primary-coral group-hover:text-white transition-colors mr-3 flex-shrink-0">
                  <FaMapMarkerAlt size={14} />
                </div>
                <span className="text-muted-foreground pt-1">Bekasi, Jawabarat, Indonesia 17145</span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-white shadow-card flex items-center justify-center text-primary-coral group-hover:bg-primary-coral group-hover:text-white transition-colors mr-3 flex-shrink-0">
                  <FaPhoneAlt size={14} />
                </div>
                <span className="text-muted-foreground">(021) 555-1234</span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-lg bg-white shadow-card flex items-center justify-center text-primary-coral group-hover:bg-primary-coral group-hover:text-white transition-colors mr-3 flex-shrink-0">
                  <FaEnvelope size={14} />
                </div>
                <span className="text-muted-foreground">hello@animaunity.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="bg-white rounded-3xl shadow-card p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <FaHeart className="text-primary-coral mr-2" />
                  Stay Updated
                </h4>
                <p className="text-muted-foreground">
                  Subscribe to our newsletter for pet care tips and product updates.
                </p>
              </div>
              <div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-full border border-input focus:outline-none focus:ring-2 focus:ring-primary-coral transition-all"
                  />
                  <button 
                    type="submit"
                    className="bg-coral-gradient hover:bg-primary-light text-white px-6 py-3 rounded-full font-medium transition-all shadow-button hover:shadow-button-hover transform hover:-translate-y-1"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2023 Anima Unity. All rights reserved.
            <span className="inline-flex items-center ml-2">
              Made with <FaHeart className="text-primary-coral mx-1" size={12} /> for pets
            </span>
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary-coral text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary-coral text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary-coral text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}