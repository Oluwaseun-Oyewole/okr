/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
