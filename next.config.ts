import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  // headers: [
  // {
  //   key: "Content-Security-Policy",
  //   value: `
  //     default-src 'none';
  //     script-src 'self';
  //     connect-src 'self';
  //     style-src 'self';
  //     img-src 'self';
  //   `.replace(/\n/g, ""),
  // },
  // ],
  //     },
  //   ];
  // },
};

export default nextConfig;
