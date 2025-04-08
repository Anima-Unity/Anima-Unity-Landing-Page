'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  // HIDDEN ROUTES
  const hiddenRoutes = ['/privacy-policy', '/terms', '/some-other-static-page']
  if (hiddenRoutes.includes(pathname)) return null

  // Auto highlight section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'about', 'pricing', 'testimonials']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Image
              src="/img/logo.png"
              alt="Anima Unity Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold text-gray-800">Anima Unity</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['home', 'features', 'about', 'pricing', 'testimonials'].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`text-sm font-medium px-3 py-2 rounded-md ${
                  activeSection === item ? 'text-orange-500 font-semibold' : 'text-gray-700 hover:text-orange-400'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <Link
              href="#cta"
              className="ml-4 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-orange-500 transition">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm px-4 pb-6 pt-2 space-y-4">
          {['home', 'features', 'about', 'pricing', 'testimonials'].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium ${
                activeSection === item ? 'text-orange-500 font-semibold' : 'text-gray-700 hover:text-orange-400'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <Link
            href="#cta"
            onClick={() => setIsOpen(false)}
            className="inline-block w-full text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition"
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar