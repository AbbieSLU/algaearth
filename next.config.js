/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
};

module.exports = nextConfig; 