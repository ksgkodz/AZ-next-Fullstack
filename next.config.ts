import type { NextConfig } from 'next'
import withNextIntl from 'next-intl/plugin'

const nextConfig: NextConfig = withNextIntl()({
  eslint: {
    // ✅ Allow production builds even if ESLint errors are present
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
      },
    ],
  },
})

export default nextConfig
