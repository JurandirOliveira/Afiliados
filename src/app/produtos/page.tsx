// src/app/produtos/page.tsx

import produtosJSON from "@/data/produtos.json";
import Header from "./components/Header";
import CategoriaSection from "./components/CategoriaSection";

export default async function ProdutosPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const categoriaQuery =
    typeof params.categoria === "string" ? params.categoria : null;

  const produtos = Array.isArray(produtosJSON) ? produtosJSON : [];

  const categorias: Record<string, any[]> = {};

  produtos.forEach((produto) => {
    if (!produto?.categoria) return;
    if (!categorias[produto.categoria]) categorias[produto.categoria] = [];
    categorias[produto.categoria].push(produto);
  });

  const categoriasFiltradas = categoriaQuery
    ? { [categoriaQuery]: categorias[categoriaQuery] || [] }
    : categorias;

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto p-4 md:p-8 bg-gray-100 min-h-screen">
        {Object.entries(categoriasFiltradas).map(([categoria, lista]) => (
          <CategoriaSection
            key={categoria}
            categoria={categoria}
            produtos={lista}
            limitar={!categoriaQuery}
          />
        ))}
      </div>
    </>
  );
}
