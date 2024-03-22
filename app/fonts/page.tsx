import { inter, roboto, noto_sans, open_sans, lato } from './fonts'

export default function Page() {
  return (
    <>
      <h1>Fonts</h1>

      <h2 className={inter.className}>Hello from Inter Font</h2>
      <h2 className={roboto.className}>Hello from Roboto Font</h2>
      <h2 className={noto_sans.className}>Hello from Noto Sans Font</h2>
      <h2 className={open_sans.className}>Hello from Open Sans Font</h2>
      <h2 className={lato.className}>Hello from Lato Font</h2>
    </>
  )
}
