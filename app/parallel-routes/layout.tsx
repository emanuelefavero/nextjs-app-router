interface Props {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}

export default function Layout({ children, team, analytics }: Props) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}

// TIP: Only the root layout can contain the html and body tags
