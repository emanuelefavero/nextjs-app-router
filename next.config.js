// * Bundle Analyzer is a plugin for Next.js that helps you manage the size of your JavaScript modules
// INSTALL: npm i @next/bundle-analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// * MDX is a file format that lets you write JSX in your Markdown documents
const withMDX = require('@next/mdx')()

// Run the following command to analyze your bundles:
// ANALYZE=true npm run build
// The report will create the .next build folder and open three new tabs in your browser, which you can inspect.
// TIP: Delete the .next folder after you are done analyzing, as it can take up a lot of space

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

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

  // Enable Styled Components
  compiler: {
    styledComponents: true,
  },
}

module.exports = withBundleAnalyzer(withMDX(nextConfig))
