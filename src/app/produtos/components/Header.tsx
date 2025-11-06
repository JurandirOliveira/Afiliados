import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full shadow-md bg-[#ffe700] ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">

        {/* LOGO JO */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-14 h-14 md:w-14 md:h-14">
            <Image
              src="/logo-jo.png"
              alt="Logo JO"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <span className="text-sm font-semibold text-gray-900 hidden sm:block">
            Afiliado ML
          </span>
        </div>

        {/* TÍTULO CENTRAL */}
        <div className="text-center flex-1 px-4">
          <h1 className="text-lg md:text-2xl font-bold text-gray-900 leading-tight">
            Ofertas especiais selecionadas para você!
          </h1>
          <p className="text-xs md:text-sm text-gray-900 mt-1 hidden sm:block">
            Aproveite esta seleção especial de produtos Mercado Livre
          </p>
        </div>

        {/* LOGO MERCADO LIVRE */}
        <div className="relative w-20 h-20 md:w-28 md:h-28">
          <Image
            src="/logo-ML-mobile.png"
            alt="Logo Mercado Livre"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </header>
  );
}
