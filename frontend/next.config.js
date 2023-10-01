/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/steven-develops",
  trailingSlash: true,
  output: "export",
  images: { unoptimized: true },
  distDir: "dist",
};

module.exports = nextConfig;
