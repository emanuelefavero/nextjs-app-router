import CSSModules from './CSSModules'
import TailwindCSS from './TailwindCSS'
import Sass from './Sass'

export default function Page() {
  return (
    <>
      <h1>Styling</h1>
      <p>CSS modules and TailwindCSS work out of the box</p>

      <h2>CSS Modules</h2>
      <CSSModules />

      <h2>TailwindCSS</h2>
      <TailwindCSS />

      <h2>Sass</h2>
      <p>
        Before using sass you need to install it with{' '}
        <span className='text-yellow-500'>npm i -D sass</span>
      </p>
      <Sass />

      <h2>Styled Components</h2>
      <p>
        CSS-in-JS libraries such as Styled Components can only be used in client
        components at the moment (mar 2024) and need configuration to work with
        Next.js
      </p>
    </>
  )
}
