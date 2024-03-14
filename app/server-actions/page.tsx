import { redirect } from 'next/navigation'

export default function Page() {
  async function createUser(formData: FormData) {
    'use server'

    console.log(formData.get('name'))

    // HERE: Do something with the form data in the server

    // Redirect user to the home page after creating the user
    redirect('/')
  }

  return (
    <div>
      <h1>Server Actions</h1>

      <h2>Create User</h2>
      <p className='mb-2'>
        Instead of creating an actual user, this form will just log the user
        name to the server console
      </p>

      <form action={createUser}>
        <input type='text' name='name' placeholder='Name' />
        <button type='submit'>Create User</button>
      </form>
    </div>
  )
}
