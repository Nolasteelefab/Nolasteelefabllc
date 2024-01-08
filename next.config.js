/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'nolasteelefab.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
};

module.exports = nextConfig;
