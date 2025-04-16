import { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSInitializer from '@/lib/AOSInitializer';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Anima Unity | Unified Pet Care Platform',
  description: 'Anima Unity connects shelters, vets, and pet lovers through a seamless digital experience.',
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