import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Crypto Wallets for Canadians 2026",
  description: "Compare hardware and software crypto wallets available in Canada. Ledger, Trezor, MetaMask and more with security tips and Canadian tax implications.",
  openGraph: {
    title: "Best Crypto Wallets for Canadians 2026",
    description: "Compare hardware and software crypto wallets available in Canada. Ledger, Trezor, MetaMask and more with security tips and Canadian tax implications.",
    url: "https://www.cryptonorth.ca/wallets",
    siteName: "CryptoNorth",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Wallets for Canadians 2026",
    description: "Compare hardware and software crypto wallets available in Canada. Ledger, Trezor, MetaMask and more with security tips and Canadian tax implications.",
  },
  alternates: {
    canonical: "https://www.cryptonorth.ca/wallets",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
