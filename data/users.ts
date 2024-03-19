export async function getUsers() {
  // Simulating a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

export async function getUser(id: number) {
  // Simulating a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  return response.json()
}
