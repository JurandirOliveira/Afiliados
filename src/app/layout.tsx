import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ofertas Selecionadas · Apps Jurandir Oliveira",
    template: "%s · Apps Jurandir Oliveira",
  },
  description:
    "As melhores ofertas selecionadas do Mercado Livre, com curadoria de Apps Jurandir Oliveira. Produtos recomendados com desconto e frete grátis.",
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
  <meta name="theme-color" content="#ffffff" />
  <meta name="force-dark" content="off" />
</head>
      <body
        className={
          "${geistSans.variable} ${geistMono.variable} antialiased text-gray-600"
        }
        suppressHydrationWarning
      >
        {children}

      <script
  dangerouslySetInnerHTML={{
    __html: `
      function detectForcedDark() {
        try {
          const el = document.createElement('div');
          el.style.cssText='position:fixed;left:-9999px;background:#ffffff;color:#000000';
          document.documentElement.appendChild(el);
          const cs = getComputedStyle(el);
          const bg = cs.backgroundColor;
          const color = cs.color;
          document.documentElement.removeChild(el);
          const isWhiteBg = /rgb\\(255, 255, 255\\)/.test(bg);
          const isBlackText = /rgb\\(0, 0, 0\\)/.test(color);
          return !(isWhiteBg && isBlackText);
        } catch (e) {
          return false;
        }
      }

      function openExtern(url) {
        const intent = \`intent://\${location.host + location.pathname + location.search}#Intent;scheme=https;package=com.android.chrome;end\`;
        window.location.href = intent;
        setTimeout(() => { window.open(url, '_blank'); }, 600);
      }

      function showBanner(url) {
        if (document.getElementById('__open_extern_banner')) return;
        const bar = document.createElement('div');
        bar.id='__open_extern_banner';
        bar.style.cssText='position:fixed;left:8px;right:8px;top:12px;z-index:99999;background:#fff;border:1px solid #ddd;padding:10px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.12);font-family:Arial,Helvetica,sans-serif;';
        bar.innerHTML=\`
          <div style="display:flex;gap:10px;align-items:center;justify-content:space-between">
            <div style="font-size:14px;color:#111">O modo escuro do sistema alterou as cores. Abrir no navegador?</div>
            <button id="__open_extern_btn" style="padding:8px 10px;border-radius:6px;border:0;background:#0066ff;color:#fff;cursor:pointer">Abrir</button>
          </div>\`;
        document.body.appendChild(bar);
        document.getElementById('__open_extern_btn').onclick=()=>openExtern(url);
      }

      document.addEventListener('DOMContentLoaded', () => {
        if (detectForcedDark()) showBanner(location.href);
      });
    `,
  }}
/>
  
      </body>
    </html>
  );
}
