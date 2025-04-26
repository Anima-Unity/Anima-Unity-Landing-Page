'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = ['home', 'features', 'about', /*'pricing',*/ 'testimonials']

export default function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const isMinimal = pathname !== '/'

  useEffect(() => {
    if (isMinimal) return

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)

      for (const section of navItems) {
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
  }, [prevScrollPos, isMinimal])

  if (isMinimal) {
    return (
      <nav className="w-full py-4 px-6 shadow-sm bg-white">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/img/logo.png" alt="Anima Unity Logo" width={32} height={32} />
          <span className="text-xl font-bold text-gray-800">Anima Unity</span>
        </Link>
      </nav>
    )
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-2xl bg-white/30 dark:bg-gray-900/30 border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg transition-all duration-500 ease-out ${
    isVisible ? 'translate-y-0' : '-translate-y-full'
}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/img/logo.png" alt="Anima Unity Logo" width={32} height={32} />
            <span className="text-xl font-bold text-gray-800">Anima Unity</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/#${item}`}
                className={`text-sm font-medium px-3 py-2 rounded-md transition ${
                  activeSection === item
                    ? 'text-[#4FD1C5] font-semibold'
                    : 'text-gray-700 hover:text-[#4FD1C5]'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <Link
              href="#cta"
              className="ml-4 px-5 py-2 bg-[#4FD1C5] hover:bg-[#38B2AC] text-white rounded-full text-sm font-medium transition shadow-md hover:shadow-lg"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#4FD1C5] transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-t border-gray-200 shadow-sm px-4 pb-6 pt-2 space-y-4 transition">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium ${
                activeSection === item
                  ? 'text-[#4FD1C5] font-semibold'
                  : 'text-gray-700 hover:text-[#4FD1C5]'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <Link
            href="#cta"
            onClick={() => setIsOpen(false)}
            className="inline-block w-full text-center px-4 py-2 bg-[#4FD1C5] hover:bg-[#38B2AC] text-white rounded-full text-sm font-medium transition shadow-md hover:shadow-lg"
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  )
}