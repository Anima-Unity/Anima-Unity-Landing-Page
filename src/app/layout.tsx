import { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSInitializer from '@/lib/AOSInitializer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Anima Unity | Unified Pet Care Platform',
  description: 'Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
     <body className="bg-white text-gray-800">
  <div className="overflow-x-hidden relative w-full">
    <Navbar />
    <AOSInitializer />
    <main className="pt-4"> {/* Tambah spacing di atas konten */}
      {children}
    </main>
    <Footer />
  </div>
</body>
    </html>
  )
}