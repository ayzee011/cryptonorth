
  import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CryptoNorth — Crypto, simplified for Canadians',
  description: 'Unbiased reviews of Canadian crypto exchanges, CRA tax guides, and live CAD prices. No U.S. bias. No fluff.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
