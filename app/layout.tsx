import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ytzhak Carvajal | Portfolio',
  description: 'Created by: Ytzhak Carvajal',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
