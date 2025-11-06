import produtos from "@/data/produtos.json";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://SEU_DOMINIO.vercel.app";

  const categorias = Array.from(
    new Set(produtos.map((p) => p.categoria))
  );

  const categoriaUrls = categorias.map((categoria) => ({
    url: `${baseUrl}/produtos?categoria=${encodeURIComponent(categoria)}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/produtos`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categoriaUrls,
  ];
}
