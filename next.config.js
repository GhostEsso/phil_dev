/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/phil_dev',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/phil_dev/',
  trailingSlash: true,
}

module.exports = nextConfig 