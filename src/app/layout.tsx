import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";
import { siteConfig } from "@/data/site-config";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mimosecaprichos.com.br"),
  title: `${siteConfig.name} — Presentes Personalizados em Valinhos-SP`,
  description:
    "Loja de presentes personalizados e cestas afetivas em Valinhos-SP. Cestas especiais, balões personalizados, lembranças criativas e presentes corporativos feitos com carinho.",
  keywords: [
    "Mimos e Caprichos",
    "Presentes personalizados Valinhos",
    "Cestas de café da manhã Valinhos",
    "Balões personalizados Valinhos",
    "Presentes afetivos",
    "Brindes corporativos Valinhos",
    "Loja de presentes Valinhos",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} — Pequenos gestos. Grandes emoções.`,
    description:
      "Presentes e personalizados feitos com carinho para tornar cada momento inesquecível em Valinhos e região.",
    url: "https://mimosecaprichos.com.br",
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-desktop.png",
        width: 1200,
        height: 630,
        alt: "Mimos e Caprichos Valinhos",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSerifDisplay.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans selection:bg-brand-pink-light selection:text-brand-pink">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}

