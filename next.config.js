/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? "/RSM_Web" : "",
  assetPrefix: isProd ? "/RSM_Web/" : ""
};

module.exports = nextConfig;
