import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
async redirects() {
  return [
    {
      source: '/discord',
      destination: 'https://discord.gg/Hu8Jf4Bxee',
      permanent: true,
    },
  ];
},
};

export default nextConfig;
