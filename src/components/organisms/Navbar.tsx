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
  const [scrolled, setScrolled] = useState(false)

  const hiddenNavbarPaths = ['/help-center']; // daftar path yang mau hide Navbar
  const isHidden = hiddenNavbarPaths.some(path => pathname.startsWith(path));
  const isMinimal = pathname !== '/'

  useEffect(() => {
    if (isMinimal) return

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)
      setPrevScrollPos(currentScrollPos)
      setScrolled(currentScrollPos > 20)

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

  if (isHidden) {
    return null
  }

  if (isMinimal) {
    return (
      <nav className="w-full py-4 px-6 shadow-card bg-background">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative overflow-hidden rounded-lg">
            <Image 
              src="/img/logo.png" 
              alt="Anima Unity Logo" 
              width={36} 
              height={36} 
              className="transition-transform duration-300 group-hover:scale-110" 
            />
          </div>
          <span className="text-xl font-bold">Anima Unity</span>
        </Link>
      </nav>
    )
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-background/70 dark:bg-secondary/80 shadow-card py-3' 
          : 'bg-transparent py-5'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-lg">
              <div className={`absolute inset-0 bg-coral-gradient rounded-lg -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <Image 
                src="/img/logo.png" 
                alt="Anima Unity Logo" 
                width={40} 
                height={40} 
                className="transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <span className="text-xl font-bold">Anima Unity</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/#${item}`}
                className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 overflow-hidden ${
                  activeSection === item
                    ? 'text-primary-coral font-semibold'
                    : 'text-muted-foreground hover:text-primary-coral'
                }`}
              >
                {activeSection === item && (
                  <span className="absolute inset-0 bg-primary-coral/10 rounded-full -z-10"></span>
                )}
                <span className="relative z-10">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </Link>
            ))}
            <Link
              href="#cta"
              className="ml-4 px-6 py-2.5 bg-coral-gradient text-white rounded-full text-sm font-medium transition-all duration-300 shadow-button hover:shadow-button-hover hover:-translate-y-0.5"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary-coral p-2 rounded-full hover:bg-primary-coral/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/30 shadow-card px-4 pb-6 pt-2 space-y-4 animate-slide-up">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-base font-medium transition-colors ${
                activeSection === item
                  ? 'text-primary-coral font-semibold'
                  : 'text-muted-foreground hover:text-primary-coral'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                {activeSection === item && (
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-coral"></div>
                )}
              </div>
            </Link>
          ))}
          <div className="pt-4 mt-2">
            <Link
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full text-center px-5 py-3 bg-coral-gradient text-white rounded-xl text-base font-medium transition-all duration-300 shadow-button hover:shadow-button-hover"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}