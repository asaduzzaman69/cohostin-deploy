module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'static.ghost.org',
      'cdn.pixabay.com'
  ],
},
eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
},

}
