'use client'

import { useRef } from 'react'
import { createUser } from '@/app/actions'

// import { redirect } from 'next/navigation'

export default function Page() {
  // async function createUser(formData: FormData) {
  //   'use server'

  //   // Log the user name to the server console
  //   console.log(formData.get('name'))

  //   // Log all form data to the server console
  //   const rawFormData = Object.fromEntries(formData)
  //   console.log(rawFormData)

  //   // HERE: Do something with the form data in the server

  //   // Redirect user to the home page after creating the user
  //   redirect('/server-actions')
  // }

  const ref = useRef<HTMLFormElement>(null)

  return (
    <div>
      <h1>Server Actions</h1>

      <h2>Create User</h2>
      <p className='mb-2'>
        Instead of creating an actual user, this form will just log the user
        name to the server console
      </p>

      <p>Keep form data after submitting form</p>
      <form action={createUser}>
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Create User</button>
      </form>

      <p className='mt-4'>Clear data after submitting form</p>
      <form
        ref={ref}
        action={async (formData) => {
          await createUser(formData)
          ref.current?.reset()
        }}
      >
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Create User</button>
      </form>
    </div>
  )
}

// TIP: You can pass additional data to a server action with the bind method
// @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
// TIP: To use server actions in Client Components, create a separate actions.ts file with the 'use server' at the top and import it in the client component
