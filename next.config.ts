import { type NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // basePath and assetPrefix are used for deploying to a sub-path on a domain.
  // This is useful for services like GitHub Pages.
  // The value should be the name of your repository.
  basePath: isProd ? '/portofolio' : '',
  assetPrefix: isProd ? '/portofolio/' : '',
  images: {
    // Disabling image optimization is required for `next export`.
    // If you are not using `next export`, you can remove this.
    unoptimized: true,
  },
};

export default nextConfig;
