import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* HERO */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20 bg-white">


{/* LOGO JO */}
        <div 
          className="flex flex-col items-center gap-2"

        >
          <div 
            className="relative w-40 h-40  mb-10"

          >
            <Image
              src="/logo-jao.png"
              alt="Logo JO"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* <span 
            className="text-sm font-semibold text-black-900 hidden sm:block"
          >
            Afiliado ML
          </span> */}
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Bem-vindo(a)!
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Aqui você encontra uma seleção exclusiva de produtos com os melhores preços,
          ofertas atualizadas e curadoria especial feita para você.
        </p>

        <Link
          href="/produtos"
          className="bg-gray-900 text-white font-semibold px-10 py-4 rounded-full shadow hover:brightness-95 transition text-lg"
        >
          Ver Produtos
        </Link>
      </section>

      {/* RODAPÉ */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} | Apps Jurandir Oliveira – Afiliado Mercado Livre - versão 1.0
      </footer>

    </div>
  );
}
