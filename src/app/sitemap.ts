import { MetadataRoute } from "next";
import produtos from "@/data/produtos.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://apps-jo.vercel.app"; // ALTERE PARA SEU DOMÍNIO REAL

  // ✅ extrai categorias únicas do JSON
  const categorias = Array.from(
    new Set(produtos.map((p) => p.categoria))
  );

  // ✅ monta URLs individuais de categoria
  const categoriasUrls: MetadataRoute.Sitemap = categorias.map((categoria) => ({
    url: `${baseUrl}/produtos?categoria=${encodeURIComponent(categoria)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // ✅ retorna estrutura final do sitemap
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/produtos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...categoriasUrls,
  ];
}
