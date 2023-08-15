/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_URL: isProduction
      ? "https://gotere.vercel.app"
      : "http://localhost:3000",
    NEXT_PUBLIC_API_URL: isProduction
      ? "https://gotere.vercel.app/api"
      : "http://localhost:3000/api",
  },
};

module.exports = nextConfig;
