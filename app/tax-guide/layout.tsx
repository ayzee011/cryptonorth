import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Canadian Crypto Tax Guide 2026 - CRA Rules and Rates",
  description: "Everything Canadians need to report crypto to the CRA. 50% inclusion rate, ACB method, T1 deadline April 30 2026, CARF rules and tax software picks.",
  openGraph: {
    title: "Canadian Crypto Tax Guide 2026 - CRA Rules and Rates",
    description: "Everything Canadians need to report crypto to the CRA. 50% inclusion rate, ACB method, T1 deadline April 30 2026, CARF rules and tax software picks.",
    url: "https://www.cryptonorth.ca/tax-guide",
    siteName: "CryptoNorth",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Crypto Tax Guide 2026 - CRA Rules and Rates",
    description: "Everything Canadians need to report crypto to the CRA. 50% inclusion rate, ACB method, T1 deadline April 30 2026, CARF rules and tax software picks.",
  },
  alternates: {
    canonical: "https://www.cryptonorth.ca/tax-guide",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
