'use client'

import { useRouter } from 'next/navigation'

interface BackButtonProps {
  className?: string
}

export default function BackButton({
  className,
  children,
}: React.PropsWithChildren<BackButtonProps>) {
  const router = useRouter()

  return (
    <button className={className} onClick={() => router.back()}>
      {children}
    </button>
  )
}
