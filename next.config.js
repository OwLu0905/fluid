/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  // assetPrefix: "./",
  // trailingSlash: true,
};

module.exports = nextConfig;

// module.exports = {
//   reactStrictMode: false,
//   async rewrites() {
//     return [
//       {
//         source: `/${encodeURIComponent("議程")}`,
//         destination: "/agenda",
//       },
//     ];
//   },
// };
