import UserProvider from '@/context/UserProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <UserProvider>{children}</UserProvider>
    </>
  )
}

// TIP: It is good practice to import the context provider in the layout file
// TIP: You should render providers as deep as possible in the tree
