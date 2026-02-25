import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-portfolio', // Replace with your repo name
  assetPrefix: '/my-portfolio/', // Same as above
  images: { unoptimized: true },
};

export default nextConfig;