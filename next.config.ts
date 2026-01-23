import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  
  // Suppress console warnings/errors in production
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'], // Keep errors and warnings for now, but we'll filter them
      },
    },
  }),
};

export default nextConfig;