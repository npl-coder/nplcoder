import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/Hu8Jf4Bxee",
        permanent: true,
      },
    ];
  },
};

 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
