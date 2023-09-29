import React from 'react'
import { Providers } from '@/redux/Provider'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>
}
