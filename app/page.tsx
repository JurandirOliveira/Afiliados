import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* HERO */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20 bg-white">

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Bem-vindo(a)!
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Aqui você encontra uma seleção exclusiva de produtos com os melhores preços,
          ofertas atualizadas e curadoria especial feita para você.
        </p>

        <Link
          href="/produtos"
          className="bg-ml-yellow text-gray-900 font-semibold px-10 py-4 rounded-full shadow hover:brightness-95 transition text-lg"
        >
          Ver Produtos
        </Link>
      </section>

      {/* RODAPÉ */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} | Apps Jurandir Oliveira – Afiliado Mercado Livre
      </footer>

    </div>
  );
}
