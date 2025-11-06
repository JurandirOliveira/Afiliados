import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ofertas Selecionadas · Apps Jurandir Oliveira",
    template: "%s · Apps Jurandir Oliveira"
  },
  description:
    "As melhores ofertas selecionadas do Mercado Livre, com curadoria de Apps Jurandir Oliveira. Produtos recomendados com desconto e frete grátis.",
  keywords: [
    "mercado livre",
    "ofertas",
    "promoções",
    "produtos recomendados",
    "descontos",
    "afiliado mercado livre",
    "apps jurandir oliveira",
    "ofertas e promoções"
  ],
  authors: [{ name: "Apps Jurandir Oliveira" }],
  creator: "Apps Jurandir Oliveira",
  publisher: "Apps Jurandir Oliveira",

  metadataBase: new URL("https://SEU_DOMINIO.vercel.app"),

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://afiliados-sage.vercel.app/produtos",
    title: "Ofertas Selecionadas · Apps Jurandir Oliveira",
    description:
      "Descubra ofertas exclusivas e produtos recomendados do Mercado Livre. Curadoria oficial de Apps Jurandir Oliveira.",
    siteName: "Apps Jurandir Oliveira",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ofertas Selecionadas · Apps Jurandir Oliveira"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Ofertas Selecionadas · Apps Jurandir Oliveira",
    description:
      "As melhores recomendações e ofertas do Mercado Livre, curadas por Apps Jurandir Oliveira.",
    images: ["/og-image.jpg"]
  },

  alternates: {
    canonical: "https://afiliados-sage.vercel.app/produtos"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
