import { Button } from './Button'

export default function Page() {
  return (
    <>
      <h1>Styled Components</h1>
      <Button>Default Button</Button>
      <Button $variant='primary'>Primary Button</Button>
      <Button $variant='secondary'>Secondary Button</Button>
    </>
  )
}
