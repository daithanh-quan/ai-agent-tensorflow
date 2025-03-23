import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    SESSION_PASSWORD: process.env.SESSION_PASSWORD,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
