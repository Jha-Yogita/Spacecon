import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        // Force single Three.js instance
        'three': require.resolve('three'),
      };
    }
    return config;
  },
};

export default nextConfig;