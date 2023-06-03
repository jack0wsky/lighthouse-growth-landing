/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.mapbox.com"],
  },
  async redirects() {
    return [
      {
        source: "/industries",
        destination: "/industries/streaming",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
