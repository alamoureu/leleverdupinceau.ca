/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leleverdupinceau-file-system.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/legacy', destination: '/', permanent: true },
      { source: '/legacy/:path*', destination: '/', permanent: true },
      { source: '/new-home', destination: '/', permanent: true },
      { source: '/new-home/contact', destination: '/contact', permanent: true },
      { source: '/new-home/a-propos', destination: '/a-propos', permanent: true },
      { source: '/new-contact', destination: '/contact', permanent: true },
      { source: '/peintre-montreal', destination: '/fr/peintre-montreal', permanent: true },
      { source: '/en/painter-montreal', destination: '/en/peintre-montreal', permanent: true },
      { source: '/admin', destination: '/admin/dashboard', permanent: true },
      { source: '/services/new-peinture-interieure', destination: '/services/peinture-interieure', permanent: true },
      { source: '/services/new-peinture-interieure/:path*', destination: '/services/peinture-interieure/:path*', permanent: true },
      { source: '/services/new-peinture-exterieure', destination: '/services/peinture-exterieure', permanent: true },
      { source: '/services/new-peinture-exterieure/:path*', destination: '/services/peinture-exterieure/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
