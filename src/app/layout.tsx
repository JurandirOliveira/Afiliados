import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ForceLightMode from "./produtos/components/ForceLightMode";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* CSS crítico inline para prevenir flash */
            :root, html, body {
              color-scheme: light !important;
              background: white !important;
              color: gray !important;
            }
            html {
              background: white !important;
            }
            body {
              background: white !important;
              color: gray !important;
            }
            /* Remove qualquer estilo de dark mode do browser */
            @media (prefers-color-scheme: dark) {
              :root, html, body {
                color-scheme: light !important;
                background: white !important;
                color: gray !important;
              }
            }
          `
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Script executado imediatamente
              (function() {
                try {
                  // Remove classes de dark mode
                  document.documentElement.classList.remove('dark');
                  document.body.classList.remove('dark');
                  
                  // Force light scheme
                  document.documentElement.style.colorScheme = 'light';
                  document.documentElement.style.backgroundColor = 'white';
                  document.body.style.backgroundColor = 'white';
                  document.body.style.color = 'gray';
                  
                  // Monitora mudanças de scheme
                  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  const listener = function(e) {
                    document.documentElement.style.colorScheme = 'light';
                    document.documentElement.style.backgroundColor = 'white';
                    document.body.style.backgroundColor = 'white';
                    document.body.style.color = 'gray';
                  };
                  mediaQuery.addListener(listener);
                  
                  // Aplica imediatamente
                  document.documentElement.setAttribute('data-force-light', 'true');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: 'white',
          color: 'gray',
          colorScheme: 'light'
        }}
        suppressHydrationWarning
      >
        <ForceLightMode />
        {children}
      </body>
    </html>
  );
}