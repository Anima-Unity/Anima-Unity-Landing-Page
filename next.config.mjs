/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '**',
      },
    ],
    domains: ['source.unsplash.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
