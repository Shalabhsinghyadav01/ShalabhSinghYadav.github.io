/** @type {import('next').NextConfig} */
// Use basePath for GitHub Pages deployment
const basePath = process.env.GITHUB_ACTIONS === 'true' || process.env.NODE_ENV === 'production' 
  ? '/ShalabhSinghYadav.github.io' 
  : '';

const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
