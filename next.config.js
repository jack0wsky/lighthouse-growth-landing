/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mapbox.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
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
