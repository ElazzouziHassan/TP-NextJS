/** @type {import('next').NextConfig} */
const nextConfig = {};
// next.config.js
module.exports = {
  eslint: {
    // Optionally ignore ESLint errors during build (useful for production)
    ignoreDuringBuilds: true,

    // Disable specific ESLint rules
    rules: {
      'no-unused-vars': 'off', // Disables the 'no-unused-vars' rule
      'react/prop-types': 'off', // Disables the 'react/prop-types' rule
      'no-console': 'off', // Disables the 'no-console' rule
    },
  },
};

export default nextConfig;
