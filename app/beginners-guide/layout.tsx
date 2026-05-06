import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Buy Crypto in Canada 2026 - Beginners Guide | CryptoNorth",
  description: "Step-by-step guide to buying cryptocurrency in Canada. FINTRAC-registered exchanges, Interac e-Transfer deposits, and CRA tax obligations explained simply.",
  openGraph: {
    title: "How to Buy Crypto in Canada 2026 - Beginners Guide | CryptoNorth",
    description: "Step-by-step guide to buying cryptocurrency in Canada. FINTRAC-registered exchanges, Interac e-Transfer deposits, and CRA tax obligations explained simply.",
    url: "https://www.cryptonorth.ca/beginners-guide",
    siteName: "CryptoNorth",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Buy Crypto in Canada 2026 - Beginners Guide | CryptoNorth",
    description: "Step-by-step guide to buying cryptocurrency in Canada. FINTRAC-registered exchanges, Interac e-Transfer deposits, and CRA tax obligations explained simply.",
  },
  alternates: {
    canonical: "https://www.cryptonorth.ca/beginners-guide",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
