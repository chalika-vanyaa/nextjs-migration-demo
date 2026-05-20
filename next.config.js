/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is added to fix a runtime error in Next.js 16 where
  // the 'rewrites' property is expected to be an array but is undefined by default.
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
