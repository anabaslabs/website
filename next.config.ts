import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //  images: {
  //   remotePatterns:[
  //     {
  //       protocol: 'https',
  //       hostname: 'media.licdn.com',
  //     }
  //   ]
  // },

  reactCompiler: true,
  trailingSlash: false,
  skipTrailingSlashRedirect: false,
};

export default nextConfig;
