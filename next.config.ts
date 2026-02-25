import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-portfolio', // Keep this to prefix routes and assets
  images: { unoptimized: true },
};

export default nextConfig;