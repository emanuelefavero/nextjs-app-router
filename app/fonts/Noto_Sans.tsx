import { Noto_Sans } from 'next/font/google'

const noto_sans = Noto_Sans({ subsets: ['latin'] })

export default function Component() {
  return <h2 className={noto_sans.className}>Hello from Noto Sans Font</h2>
}
