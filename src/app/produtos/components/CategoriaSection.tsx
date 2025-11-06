// src/app/produtos/components/CategoriaSection.tsx
"use client";

import { useState } from "react";
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

  const produtosVisiveis =
    limitar && !expandido ? produtos.slice(0, 10) : produtos;

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-10">
      <h2 className="text-xl font-semibold mb-6 capitalize text-gray-800">
        {categoria.replace("-", " ")}
      </h2>

      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-5 gap-6">
        {produtosVisiveis.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>

      {limitar && produtos.length > 10 && (
        <button
          onClick={() => setExpandido(!expandido)}
          className="mt-6 bg-ml-yellow text-gray-900 px-4 py-2 rounded font-semibold hover:brightness-110 transition"
        >
          {expandido ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </section>
  );
}
