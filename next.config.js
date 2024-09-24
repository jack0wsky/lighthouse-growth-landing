/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mapbox.com",
        pathname: "/**",
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
      {
        source: "/lt/industries",
        destination: "/lt/industries/streaming",
        permanent: false,
      },
      {
        source: "/lv/industries",
        destination: "/lv/industries/streaming",
        permanent: false,
      },
      {
        source: "/ee/industries",
        destination: "/ee/industries/streaming",
        permanent: false,
      },
      {
        source: "/fi/industries",
        destination: "/fi/industries/streaming",
        permanent: false,
      },
      {
        source: "/se/industries",
        destination: "/se/industries/streaming",
        permanent: false,
      },
      {
        source: "/no/industries",
        destination: "/no/industries/streaming",
        permanent: false,
      },
      {
        source: "/is/industries",
        destination: "/is/industries/streaming",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
