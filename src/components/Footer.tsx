'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaw,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import Link from 'next/link';

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
  { href: '#', label: 'Pet Care Guides' },
  { href: '#', label: 'Vet Directory' },
  { href: '/shelter-network', label: 'Shelter Network' },
]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand & Social */}
          <div>
            <div className="flex items-center mb-6">
              <FaPaw className="text-3xl text-orange-400 mr-2" />
              <span className="text-xl font-bold">Anima Unity</span>
            </div>
            <p className="text-gray-400 mb-6">
              Uniting pet care through technology for a better future.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/18gonJgN8b/" prefetch={true} className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </Link>
              <Link href="https://x.com/animaunity?t=XhOboKYyqxiAUNHKupDPrg&s=09" prefetch={true} className="text-gray-400 hover:text-white">
                <FaTwitter />
              </Link>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
  <h3 className="text-lg font-bold mb-6">Quick Links</h3>
  <ul className="space-y-3">
    {quickLinks.map((link) => (
      <li key={link.href}>
        <Link href={link.href} className="text-gray-400 hover:text-white">
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Resources */}
          <div>
      <h3 className="text-lg font-bold mb-6">Resources</h3>
      <ul className="space-y-3">
        {resources.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-orange-400 mt-1 mr-3" />
                <span>123 Pet Avenue, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-orange-400 mr-3" />
                <span>(415) 555-1234</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-orange-400 mr-3" />
                <span>hello@animaunity.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
  <p className="text-gray-400 mb-4 md:mb-0">© 2023 Anima Unity. All rights reserved.</p>
  <div className="flex space-x-6">
    <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
      Privacy Policy
    </Link>
    <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
      Terms of Service
    </Link>
    <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm">
      Cookie Policy
    </Link>
  </div>
</div>

      </div>
    </footer>
  );
}