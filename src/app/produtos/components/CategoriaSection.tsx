// src/app/produtos/components/CategoriaSection.tsx
"use client";

import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

interface CategoriaSectionProps {
  categoria: string;
  produtos: any[];
  limitar?: boolean;
}

export default function CategoriaSection({
  categoria,
  produtos,
  limitar = false,
}: CategoriaSectionProps) {
  const [expandido, setExpandido] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile de forma simples
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Breakpoint 'md' do Tailwind
    };

    // Verifica inicialmente
    checkScreenSize();

    // Adiciona listener para redimensionamento
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Condicional simples: mobile mostra 2, desktop mostra 5
  const produtosVisiveis =
    limitar && !expandido ? produtos.slice(0, isMobile ? 2 : 5) : produtos;

  return (
    <section className="bg-white rounded-xl shadow-sm p-2 sm:p-6 mb-2 sm:mb-8">
      <div className="flex flex-row items-center justify-between ml-4 mb-6 mt-6 sm:ml-0">
        <h2 className="text-2xl font-medium text-gray-900">
          {categoria.replace("-", " ")}
        </h2>

        <button
          onClick={() => setExpandido(!expandido)}
          className="bg-ml-yellow text-gray-900 px-4 py-2 rounded font-semibold hover:brightness-110 transition flex items-center gap-2"
        >
          {expandido ? (
            <>
              {/* Chevron Up SVG */}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </>
          ) : (
            <>
              {/* Chevron Down SVG */}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0 sm:gap-6">
        {produtosVisiveis.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>

      {limitar && produtos.length > (isMobile ? 2 : 5) && (
        <button
          onClick={() => setExpandido(!expandido)}
          className="mt-6 bg-ml-yellow text-gray-900 px-4 py-2 rounded font-semibold hover:brightness-110 transition"
        >
          {expandido ? "Ver menos" : `Ver mais (+${produtos.length - (isMobile ? 2 : 5)})`}
        </button>
      )}
    </section>
  );
}