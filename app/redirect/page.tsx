import { redirect } from 'next/navigation'

export default function Page() {
  redirect('/')
}

// TIP: The redirect function allows you to programmatically redirect to another route in Server Components.
// NOTE: You can't use the redirect function inside jsx
