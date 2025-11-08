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
  metadataBase: new URL("https://afiliados-sage.vercel.app"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://afiliados-sage.vercel.app/produtos",
    title: "Ofertas Selecionadas · Apps Jurandir Oliveira",
    description: "Descubra ofertas exclusivas e produtos recomendados do Mercado Livre. Curadoria oficial de Apps Jurandir Oliveira.",
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
    description: "As melhores recomendações e ofertas do Mercado Livre, curadas por Apps Jurandir Oliveira.",
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
        {/* Google Analytics - SUBSTITUA GA_MEASUREMENT_ID pelo seu ID real */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

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
                
                // Função para enviar debug para o servidor
                function sendDebug(data) {
                  try {
                    // Método 1: Enviar para API route
                    fetch('/api/debug', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        type: 'dark_mode_debug',
                        timestamp: new Date().toISOString(),
                        url: window.location.href,
                        userAgent: navigator.userAgent,
                        ...data
                      })
                    }).catch(e => console.log('Failed to send debug to API:', e));
                    
                    // Método 2: Enviar para Google Analytics
                    if (typeof gtag !== 'undefined') {
                      gtag('event', 'dark_mode_debug', {
                        event_category: 'dark_mode',
                        event_label: data.stage,
                        ...data
                      });
                    }
                    
                    // Método 3: Enviar para console (sempre)
                    console.log('🔍 DARK MODE DEBUG:', data);
                    
                  } catch (error) {
                    console.log('Debug send error:', error);
                  }
                }
                
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
                
                // Coleta dados de debug
                function collectDebugData() {
                  const computedBodyStyle = getComputedStyle(document.body);
                  return {
                    html_classes: document.documentElement.className,
                    body_classes: document.body.className,
                    html_style: document.documentElement.getAttribute('style'),
                    body_style: document.body.getAttribute('style'),
                    prefers_dark: window.matchMedia('(prefers-color-scheme: dark)').matches,
                    computed_body_bg: computedBodyStyle.backgroundColor,
                    computed_body_color: computedBodyStyle.color,
                    viewport: {
                      width: window.innerWidth,
                      height: window.innerHeight
                    },
                    in_webview: /WebView|Android|iPhone|iPad/.test(navigator.userAgent),
                    timestamp: new Date().toISOString()
                  };
                }
                
                // Executa AGORA
                nuclearForceLight();
                sendDebug({
                  stage: 'immediate_execution',
                  ...collectDebugData()
                });
                
                // Executa quando DOM estiver pronto
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', function() {
                    nuclearForceLight();
                    sendDebug({
                      stage: 'dom_content_loaded',
                      ...collectDebugData()
                    });
                  });
                } else {
                  // DOM já está pronto
                  nuclearForceLight();
                  sendDebug({
                    stage: 'dom_already_ready',
                    ...collectDebugData()
                  });
                }
                
                // Executa repetidamente para pegar injeções tardias
                let count = 0;
                const interval = setInterval(() => {
                  nuclearForceLight();
                  count++;
                  
                  // Envia debug a cada 5 execuções
                  if (count % 5 === 0) {
                    sendDebug({
                      stage: \`interval_\${count}\`,
                      ...collectDebugData()
                    });
                  }
                  
                  if (count > 50) {
                    clearInterval(interval);
                    sendDebug({
                      stage: 'interval_completed',
                      ...collectDebugData()
                    });
                  }
                }, 100);
                
                // Observa mudanças no DOM
                const observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' || mutation.type === 'childList') {
                      nuclearForceLight();
                      sendDebug({
                        stage: 'mutation_detected',
                        mutation_type: mutation.type,
                        target: mutation.target.nodeName,
                        attribute_name: mutation.attributeName,
                        ...collectDebugData()
                      });
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
                    sendDebug({
                      stage: 'media_query_blocked',
                      query: query
                    });
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
                
                // Envia debug quando a página for fechada/navegada
                window.addEventListener('beforeunload', function() {
                  sendDebug({
                    stage: 'page_unload',
                    ...collectDebugData()
                  });
                });
                
                // Detecta se é um WebView específico
                function detectWebView() {
                  const userAgent = navigator.userAgent.toLowerCase();
                  const webViewData = {
                    is_webview: /webview|wv|; wv|line|twitter|facebook|instagram|whatsapp|telegram|discord/.test(userAgent),
                    user_agent_snippet: userAgent.substring(0, 100),
                    platform: navigator.platform,
                    vendor: navigator.vendor
                  };
                  
                  sendDebug({
                    stage: 'webview_detection',
                    ...webViewData
                  });
                  
                  return webViewData;
                }
                
                // Executa detecção de WebView
                detectWebView();
                
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