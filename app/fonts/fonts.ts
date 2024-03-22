import { Inter, Roboto, Noto_Sans, Open_Sans, Lato } from 'next/font/google'

// TIP: If you want to use a font in multiple components, you can export it from this file

export const inter = Inter({ subsets: ['latin'] })
export const roboto = Roboto({
  subsets: ['latin'],

  // TIP: Roboto is not a variable font, so you need to specify the weights you want to use
  weight: ['100', '300', '400', '500', '700', '900'],
})
export const noto_sans = Noto_Sans({ subsets: ['latin'] })
export const open_sans = Open_Sans({ subsets: ['latin'] })
export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})
