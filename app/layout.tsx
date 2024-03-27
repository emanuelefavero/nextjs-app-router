import './globals.css'
import HomeLink from '@/components/HomeLink'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Metadata
export const metadata = {
  title: 'Next.js App Router',
  applicationName: 'Next.js App Router',
  description: 'An example app for Next.js App Router features',
  keywords: ['Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Emanuele Favero', url: 'https://emanuelefavero.com' }],
  creator: 'Emanuele',
  publisher: 'Emanuele',
  robots: {
    index: true, // make the page indexable
    follow: true, // make the links on the page followable
  },

  // TIP: Also add metadata for Open Graph, Icons, and others...
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <HomeLink />
        </header>
        {children}
      </body>
    </html>
  )
}

// TIP: Layout components can fetch data
// TIP: You can't pass data between layout and its children, but if you fetch the same data in the layout and its children (on the same route), React will automatically memoize the requests without affecting performance
