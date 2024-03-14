// Log search parameters to the console
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name')
  const age = searchParams.get('age')

  console.log('name:', name)
  console.log('age:', age)

  return Response.json({ name, age })
}
