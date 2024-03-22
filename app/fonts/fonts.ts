// IMPORT
import {
  Inter,
  Roboto,
  Noto_Sans,
  Open_Sans,
  Lato,
  Poppins,
  Montserrat,
} from 'next/font/google'

// --------------------------------------------------------

// EXPORT
// Variable Fonts
export const inter = Inter({ subsets: ['latin'] })
export const noto_sans = Noto_Sans({ subsets: ['latin'] })
export const open_sans = Open_Sans({ subsets: ['latin'] })
export const montserrat = Montserrat({ subsets: ['latin'] })

// Fixed Fonts
// Fixed Fonts need to specify the weights
export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})
export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
})

// --------------------------------------------------------

// TIPS
// TIP: If you want to use a font in multiple components, you can export it from this file
// TIP: Only import the weight you need to reduce the size of the bundle
