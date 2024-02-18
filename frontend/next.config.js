/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/steven-develops",
  // trailingSlash: true,
  //  output: "export",
  // images: { unoptimized: true },
  // distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
    ],
  }
};

module.exports = nextConfig;
