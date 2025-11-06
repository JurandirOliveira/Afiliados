// src/app/produtos/components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full shadow-md">
      <div className="flex w-full">

        {/* LADO ESQUERDO - FUNDO PRETO */}
<div className="hidden sm:flex bg-black text-white flex-col items-center gap-1 px-4 py-3 min-w-[130px] sm:w-[250px]">
          <div className="w-12 h-18 relative">
            <Image
              src="/logo-jo.png"
              alt="Logo JO"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Afiliado ML</span>
            {/* <span className="text-sm font-semibold">recomendados</span> */}
          </div>
        </div>

        {/* CENTRO - FUNDO AMARELO */}
        <div className="flex-1 bg-[#ffe700]  flex items-center justify-center px-4 py-3">
          <h1 className="text-lg md:text-2xl font-semibold text-gray-900 text-center">
            Aproveite Ofertas Exclusivas!
          </h1>

           {/* <h3 className="text-lg md:text-2xl font-semibold text-gray-900 text-center">
            Aproveite Ofertas Exclusivas!
          </h3> */}
          
        </div>

        {/* DIREITA - FUNDO AMARELO */}
        <div className="bg-[#ffe700]  flex items-center px-4 py-3 min-w-[140px] justify-end">
          <div className="relative w-28 h-28">
            <Image
              src="/logo-ML-mobile.png"
              alt="Logo Mercado Livre"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

      </div>
    </header>
  );
}
