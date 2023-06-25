/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.mapbox.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
      {
        source: "/industries",
        destination: "/industries/streaming",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
