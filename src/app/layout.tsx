import { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSInitializer from '@/lib/AOSInitializer';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Anima Unity | Unified Pet Care Platform',
  description: 'Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.',
  openGraph: {
    title: 'Anima Unity | Unified Pet Care Platform',
    description: 'Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.',
    url: 'https://animaunity.netlify.app/', // Sesuaikan dengan URL kamu
    images: [
      {
        url: '/img/og-image.png', // Sesuaikan gambar Open Graph
        width: 1200,
        height: 630,
        alt: 'Anima Unity Open Graph Image'
      },
    ],
    site_name: 'Anima Unity',
  },
  twitter: {
    card: 'summary_large_image', // Jenis Twitter Card
    title: 'Anima Unity | Unified Pet Care Platform',
    description: 'Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.',
    image: '/img/og-image.png', // Sesuaikan gambar Twitter Card
    creator: '@feelemptyz', // Ganti dengan handle Twitter kamu
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />

        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon_io/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon_io/android-chrome-512x512.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Anima Unity | Unified Pet Care Platform" />
        <meta property="og:description" content="Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience." />
        <meta property="og:image" content="/img/og-image.png" />
        <meta property="og:url" content="https://animaunity.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anima Unity | Unified Pet Care Platform" />
        <meta name="twitter:description" content="Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience." />
        <meta name="twitter:image" content="/img/og-image.png" />
        <meta name="twitter:creator" content="@feelemptyz" />
      </Head>

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