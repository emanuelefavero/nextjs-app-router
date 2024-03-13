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
