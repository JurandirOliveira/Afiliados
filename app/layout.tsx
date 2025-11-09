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
  // ✅ metas devem ficar aqui!
  other: {
    "color-scheme": "light",
    "supported-color-schemes": "light",
    "theme-color": "#ffffff",
    "force-dark": "off",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-600`}
      >
        {children}

        {/* ✅ arquivo JS externo agora vai aparecer no build de produção */}
        <Script src="/forced-dark.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
