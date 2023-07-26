/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    images: false,
  },
  output: 'export',
};

module.exports = nextConfig;
