'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import fs from 'fs'

// * Create a user
export async function createUser(formData: FormData) {
  // Log the user name to the server console
  console.log(formData.get('name'))

  // Log all form data to the server console
  const rawFormData = Object.fromEntries(formData)
  console.log(rawFormData)

  // HERE: Do something with the form data in the server
  // For example, save username to a JSON file (you would probably use a database in a real app)
  const username = formData.get('name')
  fs.writeFileSync('./data/user.json', JSON.stringify({ username }))

  // Refresh the page after creating the user
  revalidatePath('/server-actions')

  // or use redirect
  // redirect('/server-actions')

  // TIP: revalidatePath allows you to purge cached data on-demand for a specific path
}

// * Log a username
export async function logUsername(formData: FormData) {
  console.log(formData.get('username'))

  redirect('/') // redirects and returns a 307 (temporary redirect) status code

  // permanentRedirect('/')
}

// * Simulate a slow network
export async function simulateSlowNetwork() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  redirect('/')
}

// * Likes
export async function incrementLike(likes: number) {
  return likes + 1
}

// TIP: The redirect function allows you to programmatically redirect to another route in Server Components.
// TIP: redirect and permanentRedirect can also be called in client components
// TIP: permanentRedirect function can be used to redirect and return a 308 (permanent redirect) status code
// NOTE: You can't use the redirect function inside jsx.
