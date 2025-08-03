import path from "path";

import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    SESSION_PASSWORD: process.env.SESSION_PASSWORD,
  },
  webpack: (config) => {
    // Add path aliases to webpack
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
      src: path.resolve(__dirname, "./src"),
    };
    return config;
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
