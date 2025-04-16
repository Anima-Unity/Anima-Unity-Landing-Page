import { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSInitializer from '@/lib/AOSInitializer';

export const metadata: Metadata = {
  title: 'Anima Unity | Unified Pet Care Platform',
  description: 'Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.',
  openGraph: {
    title: 'Anima Unity | Unified Pet Care Platform',
    description: 'Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.',
    url: 'https://animaunity.netlify.app/', // Sesuaikan dengan URL kamu
    images: [
      {
        url: 'https://animaunity.netlify.app/img/og-image.png', // Sesuaikan gambar Open Graph
        width: 1200,
        height: 630,
        alt: 'Anima Unity Open Graph Image'
      },
    ],
    siteName: 'Anima Unity',
  },
  twitter: {
    card: 'summary_large_image', // Jenis Twitter Card
    title: 'Anima Unity | Unified Pet Care Platform',
    description: 'Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.',
    images: ['https://animaunity.netlify.app/img/og-image.png'], // Sesuaikan gambar Twitter Card
    creator: '@feelemptyz', // Ganti dengan handle Twitter kamu
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-800">
        <div className="overflow-x-hidden relative w-full">
          {/* Navbar */}
          <Navbar />

          {/* Initialize AOS animations */}
          <AOSInitializer />

          {/* Main content */}
          <main className="pt-4">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}