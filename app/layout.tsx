// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ofertas Selecionadas · Apps Jurandir Oliveira",
    template: "%s · Apps Jurandir Oliveira",
  },
  description: "As melhores ofertas selecionadas do Mercado Livre...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="force-dark" content="off" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-600`}
        suppressHydrationWarning
      >
        {children}

        {/* ✅ Arquivo externo sem inlineScript */}
        <Script src="/forced-dark.js" strategy="afterInteractive" />
      </body>
      
    </html>
  );
}
