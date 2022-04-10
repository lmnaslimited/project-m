/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
*/

const prod = process.env.NODE_ENV === 'production'

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  module.exports = {
    'process.env.NEXT_PUBLIC_GH_PAGES_URL': '',
    'process.env.BACKEND_URL': '',
    images: {
      domains: ["localhost", "res.cloudinary.com", "github.com"],
    },
  };
} else if (process.env.NODE_ENV === "production") {
  module.exports = {
    'process.env.NEXT_PUBLIC_GH_PAGES_URL': 'https://github.com/lmnaslimited/project-m/blob/gh-pages',
    'process.env.BACKEND_URL': '/project-m',
    images: {
      loader: 'cloudinary',
      path: 'https://res.cloudinary.com/lmnas/image/fetch/',
      domains: ["res.cloudinary.com"],
    },
    assetPrefix: '/project-m/'
  };
}
