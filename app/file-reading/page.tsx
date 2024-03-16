import { promises as fs } from 'fs'
import Link from 'next/link'

export default async function Page() {
  // TIP: The file path is relative to the root of the project
  const file = await fs.readFile(process.cwd() + '/data/user.json', 'utf-8')
  const data = JSON.parse(file)

  return (
    <>
      <h1>File Reading Page</h1>

      <h2>Hello {data.username}</h2>

      <ul>
        <li>
          <Link href='/file-reading/post1'>Post 1</Link>
        </li>
        <li>
          <Link href='/file-reading/post2'>Post 2</Link>
        </li>
      </ul>
    </>
  )
}
