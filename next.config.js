/** @type {import('next').NextConfig} */
const nextConfig = {
  // Headers : empêche l'indexation Google sur TOUT le site
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      // Au cas où tu veux héberger tes images ailleurs (Cloudinary, etc.)
      { protocol: 'https', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
