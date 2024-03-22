import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Component() {
  return <h2 className={inter.className}>Hello from Inter Font</h2>
}
