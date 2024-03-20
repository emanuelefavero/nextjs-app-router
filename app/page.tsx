import Link from 'next/link'
import categories from '@/data/categories'

export default async function Home() {
  return (
    <>
      <h1>Home</h1>

      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2>{category.title}</h2>
          <ul>
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
