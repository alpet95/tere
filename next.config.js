/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  env: {
    web_endpoint:
      process.env.NODE_ENV === "development" && "http://localhost:3000",
    api_endpoint:
      process.env.NODE_ENV === "development" && "http://localhost:3000/api",
  },
};
