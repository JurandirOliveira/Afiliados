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
  description: "As melhores ofertas selecionadas do Mercado Livre, com curadoria de Apps Jurandir Oliveira. Produtos recomendados com desconto e frete grátis.",
  // ... resto do metadata (mantenha igual)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-gray-600`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}