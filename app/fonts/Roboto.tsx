import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Component() {
  return <h2 className={roboto.className}>Hello from Roboto Font</h2>
}
