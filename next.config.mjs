/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '**',
      },
      // Add any other image domains you might be using
    ],
    unoptimized: true, // Try setting this to true for both dev and prod
  },
};

export default nextConfig;