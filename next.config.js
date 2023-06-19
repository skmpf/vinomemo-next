/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VINOMEMO_API_URL: process.env.VINOMEMO_API_URL,
  },
  reactStrictMode: true,
};
module.exports = nextConfig;
