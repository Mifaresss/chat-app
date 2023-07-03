import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './styles/globals.css'
import './styles/reset.css'

export const metadata: Metadata = {
  title: 'Our Chat',
  description: 'The Our Chat app',
}

const montserrat = Montserrat({
  weight: ['300', '600', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
