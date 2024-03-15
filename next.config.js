/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/redirect-from-config-file',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
