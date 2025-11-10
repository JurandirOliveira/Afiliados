import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full shadow-md bg-[#ffe700] relative md:p-5">
      <div className="w-full mx-auto flex items-center justify-between px-4 py-3 md:py-4 relative">
        
        {/* LOGO MERCADO LIVRE - Colada na borda esquerda da tela */}
        <div className="relative w-20 h-20 md:w-32 md:h-32 md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2">
          <Image 
            src="/logo-ML-mobile.png" 
            alt="Logo Mercado Livre" 
            fill 
            className="object-contain"
          />
        </div>

        {/* TÍTULO CENTRAL - Ocupa toda a largura */}
        <div className="text-center flex-1 w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ofertas exclusivas!
          </h1>
          <p className="text-base md:text-2xl text-gray-900 mt-1">
            Aproveite esta seleção especial de produtos
          </p>
        </div>

      </div>
    </header>
  );
}