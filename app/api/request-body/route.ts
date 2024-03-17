// You can read the FormData using the request.formData() function
export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')

  return Response.json({ name })
}
