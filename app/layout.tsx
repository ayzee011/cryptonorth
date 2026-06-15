
  import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Best Canadian Crypto Exchanges 2026 | CryptoNorth',
    template: '%s | CryptoNorth',
  },
  description: 'Compare the best FINTRAC-registered crypto exchanges in Canada. Honest fees, real pros and cons, live CAD prices, and CRA tax guidance. No U.S. bias.',
  metadataBase: new URL('https://www.cryptonorth.ca'),
  openGraph: {
    siteName: 'CryptoNorth',
    locale: 'en_CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-TEW3DZK54F"></script>
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TEW3DZK54F');
      `}} />
    </head>
      <body>{children}</body>
    </html>
  )
}
