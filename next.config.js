/** @type {import('next').NextConfig} */
const nextConfig = {
  // Headers: prevents Google indexing on the entire site
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
      // In case you want to host images elsewhere (Cloudinary, etc.)
      { protocol: 'https', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;
