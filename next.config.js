/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "external-preview.redd.it",
      "preview.redd.it",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
