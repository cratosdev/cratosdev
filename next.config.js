/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    images: true,
  },
  output: 'export',
};

module.exports = nextConfig;
