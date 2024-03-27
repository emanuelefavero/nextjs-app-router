// * Bundle Analyzer is a plugin for Next.js that helps you manage the size of your JavaScript modules
// INSTALL: npm i @next/bundle-analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// Run the following command to analyze your bundles:
// ANALYZE=true npm run build
// The report will create the .next build folder and open three new tabs in your browser, which you can inspect.
// TIP: Delete the .next folder after you are done analyzing, as it can take up a lot of space

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

  // Enable experimental OpenTelemetry instrumentation
  experimental: {
    instrumentationHook: true,
  },
}

module.exports = withBundleAnalyzer(nextConfig)
