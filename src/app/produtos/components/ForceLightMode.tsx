'use client';

import { useEffect } from 'react';

export default function ForceLightMode() {
  useEffect(() => {
    // Função para forçar light mode
    const forceLightMode = () => {
      // Remove classes
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      
      // Aplica estilos diretamente
      document.documentElement.style.colorScheme = 'light';
      document.documentElement.style.backgroundColor = 'white';
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'gray';
      
      // Remove qualquer media query de dark mode
      const darkStyles = document.querySelectorAll('style, link[rel="stylesheet"]');
      darkStyles.forEach(style => {
        if (style.textContent?.includes('prefers-color-scheme: dark')) {
          style.remove();
        }
      });
    };

    // Executa imediatamente
    forceLightMode();
    
    // Executa a cada 100ms por 2 segundos para garantir
    const interval = setInterval(forceLightMode, 100);
    setTimeout(() => clearInterval(interval), 2000);
    
    // Observa mudanças no DOM
    const observer = new MutationObserver(forceLightMode);
    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
    
    return () => observer.disconnect();
  }, []);

  return null;
}