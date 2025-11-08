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
        
        <style dangerouslySetInnerHTML={{
          __html: `
            /* RESET NUCLEAR - Remove qualquer possibilidade de dark mode */
            :root {
              color-scheme: light !important;
              --background: #ffffff !important;
              --foreground: gray !important;
            }
            
            html {
              color-scheme: light !important;
              background: white !important;
              filter: none !important;
            }
            
            body {
              color-scheme: light !important;
              background: white !important;
              color: gray !important;
              font-family: Arial, Helvetica, sans-serif !important;
            }
            
            /* Mata qualquer dark mode em qualquer circunstância */
            @media (prefers-color-scheme: dark) {
              :root {
                color-scheme: light !important;
                --background: #ffffff !important;
                --foreground: gray !important;
              }
              
              html, body, :host, * {
                color-scheme: light !important;
                background: white !important;
                background-color: white !important;
                color: gray !important;
                border-color: initial !important;
              }
            }
            
            /* Previne injeção de styles do WebView */
            [style*="dark"], [class*="dark"], [data-theme*="dark"] {
              background: white !important;
              color: gray !important;
            }
          `
        }} />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // BLOQUEADOR DE DARK MODE - Executa antes de QUALQUER coisa
              (function() {
                'use strict';
                
                // Bloqueia imediatamente
                function nuclearForceLight() {
                  // Remove atributos
                  document.documentElement.removeAttribute('data-theme');
                  document.documentElement.removeAttribute('data-mode');
                  document.documentElement.removeAttribute('style');
                  
                  // Remove classes
                  document.documentElement.className = document.documentElement.className.replace(/dark|mode-dark|theme-dark/gi, '');
                  document.body.className = document.body.className.replace(/dark|mode-dark|theme-dark/gi, '');
                  
                  // Aplica estilos nucleares
                  const nuclearStyles = \`
                    :root, html, body {
                      color-scheme: light !important;
                      background: white !important;
                      color: gray !important;
                    }
                    * {
                      background-color: white !important;
                      color: gray !important;
                      border-color: #e5e7eb !important;
                    }
                  \`;
                  
                  // Injeta style nuclear
                  let style = document.getElementById('nuclear-light-mode');
                  if (!style) {
                    style = document.createElement('style');
                    style.id = 'nuclear-light-mode';
                    style.textContent = nuclearStyles;
                    document.head.appendChild(style);
                  }
                  
                  // Force light scheme no nível do sistema
                  document.documentElement.style.setProperty('color-scheme', 'light', 'important');
                  document.documentElement.style.setProperty('background', 'white', 'important');
                  document.body.style.setProperty('background', 'white', 'important');
                  document.body.style.setProperty('color', 'gray', 'important');
                  
                  console.log('🚫 DARK MODE BLOQUEADO - Modo light forçado');
                }
                
                // Executa AGORA
                nuclearForceLight();
                
                // Executa quando DOM estiver pronto
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', nuclearForceLight);
                }
                
                // Executa repetidamente para pegar injeções tardias
                let count = 0;
                const interval = setInterval(() => {
                  nuclearForceLight();
                  count++;
                  if (count > 50) clearInterval(interval); // Para após 5 segundos
                }, 100);
                
                // Observa mudanças no DOM
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' || mutation.type === 'childList') {
                      nuclearForceLight();
                    }
                  });
                });
                
                observer.observe(document.documentElement, {
                  attributes: true,
                  attributeFilter: ['class', 'style', 'data-theme', 'data-mode'],
                  childList: true,
                  subtree: true
                });
                
                // Bloqueia media queries
                const originalMatchMedia = window.matchMedia;
                window.matchMedia = function(query) {
                  if (query.includes('prefers-color-scheme') && query.includes('dark')) {
                    return {
                      matches: false,
                      media: query,
                      addListener: function() {},
                      removeListener: function() {},
                      addEventListener: function() {},
                      removeEventListener: function() {},
                      dispatchEvent: function() { return false; }
                    };
                  }
                  return originalMatchMedia.call(this, query);
                };
                
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-600`}
        style={{
          backgroundColor: 'white',
          color: 'gray',
          colorScheme: 'light'
        }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}