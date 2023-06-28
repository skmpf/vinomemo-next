/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VINOMEMO_API_URL: process.env.VINOMEMO_API_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  reactStrictMode: true,
};
module.exports = nextConfig;
