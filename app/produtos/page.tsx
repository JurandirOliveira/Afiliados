// src/app/produtos/page.tsx

import type { Metadata } from "next";
import produtosJSON from "../../data/produtos.json";
import Header from "./components/Header";
import CategoriaSection from "./components/CategoriaSection";

// ✅ SEO por rota
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const categoria = typeof params.categoria === "string" ? params.categoria : null;

  const title = categoria
    ? `${categoria} · Produtos Recomendados`
    : "Produtos Recomendados · Ofertas Selecionadas";

  const description = categoria
    ? `Veja ofertas selecionadas na categoria ${categoria} com descontos exclusivos.`
    : "Confira produtos recomendados de diversas categorias com os melhores preços.";

  return {
    title,
    description,
    alternates: {
      canonical: categoria
        ? `https://https://afiliados-sage.vercel.app//produtos?categoria=${encodeURIComponent(
            categoria
          )}`
        : "https://https://afiliados-sage.vercel.app//produtos",
    },
    openGraph: {
      title,
      description,
      url: "https://https://afiliados-sage.vercel.app//produtos",
      siteName: "Apps Jurandir Oliveira",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Ofertas Selecionadas",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

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
      <div></div>

      <div className="max-w-7xl mx-auto  p-1 md:py-10 min-h-screen">
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
