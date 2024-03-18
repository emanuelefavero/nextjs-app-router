'use server'

import { redirect } from 'next/navigation'

export async function logUsername(formData: FormData) {
  console.log(formData.get('username'))

  redirect('/') // redirects and returns a 307 (temporary redirect) status code

  // permanentRedirect('/')
}

export async function simulateSlowNetwork() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  redirect('/')
}

// TIP: The redirect function allows you to programmatically redirect to another route in Server Components.
// TIP: redirect and permanentRedirect can also be called in client components
// TIP: permanentRedirect function can be used to redirect and return a 308 (permanent redirect) status code
// NOTE: You can't use the redirect function inside jsx.
