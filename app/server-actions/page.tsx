'use client'

import { useRef } from 'react'
import { createUser } from '@/app/actions'

// GET data from JSON file on the server
import user from '@/data/user.json'
const username = user.username

export default function Page() {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <div>
      <h1>Server Actions</h1>

      <h2>Create User</h2>
      <p className='mb-2'>
        This form will log the user name to the server console and also save it
        to a JSON file
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

      {/* SHOW USERNAME */}
      {username && (
        <p className='mt-2 text-xl'>
          User: <strong>{username}</strong>
        </p>
      )}
    </div>
  )
}

// TIP: You can pass additional data to a server action with the bind method
// @see https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
// TIP: To use server actions in Client Components, create a separate actions.ts file with the 'use server' at the top and import it in the client component
