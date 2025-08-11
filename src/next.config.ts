import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/portofolio' : '',
  assetPrefix: isProd ? '/portofolio/' : '',
};

export default nextConfig;
