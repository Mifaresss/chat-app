import { Metadata } from 'next'
import './styles/globals.css'
import './styles/reset.css'

export const metadata: Metadata = {
  title: 'Our Chat',
  description: 'The Our Chat app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body >{children}</body>
    </html>
  )
}
