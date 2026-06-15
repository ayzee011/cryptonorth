import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Canadian Crypto Exchanges Compared 2026",
  description: "Side-by-side comparison of Canada's top FINTRAC and CSA-registered crypto exchanges. Compare Bitbuy, Newton, NDAX, Shakepay, Wealthsimple and Kraken.",
  openGraph: {
    title: "Best Canadian Crypto Exchanges Compared 2026",
    description: "Side-by-side comparison of Canada's top FINTRAC and CSA-registered crypto exchanges. Compare Bitbuy, Newton, NDAX, Shakepay, Wealthsimple and Kraken.",
    url: "https://www.cryptonorth.ca/exchanges",
    siteName: "CryptoNorth",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Canadian Crypto Exchanges Compared 2026",
    description: "Side-by-side comparison of Canada's top FINTRAC and CSA-registered crypto exchanges. Compare Bitbuy, Newton, NDAX, Shakepay, Wealthsimple and Kraken.",
  },
  alternates: {
    canonical: "https://www.cryptonorth.ca/exchanges",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
