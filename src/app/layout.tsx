import type { Metadata } from 'next'

import { Suspense } from 'react'
import Header from '../components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mencintai Diri Sendiri',
  description: 'Mencintai Diri Sendiri',
  icons: {
    icon: '/assets/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<div>Loading...</div>}>
        <body className="">
          <Header />
          <main className="">{children}</main>
          {/* <Footer /> */}
        </body>
      </Suspense>
    </html>
  )
}
