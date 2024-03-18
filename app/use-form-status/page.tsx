import SubmitButton from './components/SubmitButton'
import { simulateSlowNetwork } from '@/app/actions'

export default function Page() {
  return (
    <>
      <h1>useFormStatus</h1>

      <p className='mb-2'>
        You can use the React useFormStatus hook to show a pending state while
        the form is being submitted
      </p>
      <p className='mb-2'>
        This form will simulate a slow network {'('}1 second{')'} and disable
        the submit button while the form is being submitted
      </p>
      <form action={simulateSlowNetwork}>
        <SubmitButton />
      </form>
    </>
  )
}
