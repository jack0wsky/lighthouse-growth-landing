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
        source: "/en/industries",
        destination: "/en/industries/streaming",
        permanent: false,
      },
      {
        source: "/de/industries",
        destination: "/de/industries/streaming",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
