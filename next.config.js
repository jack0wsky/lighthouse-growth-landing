/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mapbox.com",
        pathname: "/**",
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
      {
        source: "/en/solutions",
        destination: "/en/solutions/digital-transformation",
        permanent: false,
      },
      {
        source: "/de/solutions",
        destination: "/de/solutions/digital-transformation",
        permanent: false,
      },
      {
        source: "/lt/solutions",
        destination: "/lt/solutions/digital-transformation",
        permanent: false,
      },
      {
        source: "/lv/solutions",
        destination: "/lv/solutions/digital-transformation",
        permanent: false,
      },
      {
        source: "/ee/solutions",
        destination: "/ee/solutions/digital-transformation",
        permanent: false,
      },
      {
        source: "/fi/solutions",
        destination: "/fi/solutions/digital-transformation",
        permanent: false,
      },
      {
        source: "/se/solutions",
        destination: "/se/solutions/digital-transformation",
        permanent: false,
      },
      {
        source: "/no/solutions",
        destination: "/no/solutions/digital-transformation",
        permanent: false,
      },
      {
        source: "/is/solutions",
        destination: "/is/solutions/digital-transformation",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
