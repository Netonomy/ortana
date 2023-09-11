/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
 webpack: (config, { isServer }) => {
  if (isServer) {
    config.externals = [...config.externals, "canvas", "jsdom"];
  }
  return config;
},
};

module.exports = withPWA(nextConfig);
