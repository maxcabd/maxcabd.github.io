const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during build
  },
  output: "export",
  images: { unoptimized: true },
  basePath: "/maxcabd.github.io", // Replace with your repository name
  assetPrefix: "/maxcabd.github.io", // Replace with your repository name
};

module.exports = withContentlayer(nextConfig);
