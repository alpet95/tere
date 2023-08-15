/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
    NEXT_PUBLIC_API_URL: "http://localhost:3000/api",
  },
};

module.exports = nextConfig;
