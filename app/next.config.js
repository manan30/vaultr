/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  reactStrictMode: true,
  poweredByHeader: false
};

module.exports = nextConfig;
