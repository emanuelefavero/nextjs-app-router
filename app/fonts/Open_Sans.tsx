import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({
  subsets: ['latin'],
  // weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Component() {
  return <h2 className={open_sans.className}>Hello from Open Sans Font</h2>
}
