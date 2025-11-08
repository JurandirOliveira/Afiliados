import Image from "next/image";

export default function Header() {
  return (
    <header 
      className="w-full shadow-md bg-[#ffe700]"
      style={{ 
        backgroundColor: '#ffe700 !important',
        background: '#ffe700 !important'
      }}
    >
      <div 
        className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4"
        style={{
          backgroundColor: '#ffe700 !important',
          background: '#ffe700 !important'
        }}
      >
        {/* LOGO JO */}
        <div 
          className="flex flex-col items-center gap-2"
          style={{
            backgroundColor: '#ffe700 !important',
            background: '#ffe700 !important'
          }}
        >
          <div 
            className="relative w-14 h-14 md:w-14 md:h-14 hidden sm:block"
            style={{
              backgroundColor: '#ffe700 !important',
              background: '#ffe700 !important'
            }}
          >
            <Image
              src="/logo-jo.png"
              alt="Logo JO"
              fill
              style={{ 
                objectFit: "contain",
                backgroundColor: '#ffe700 !important'
              }}
            />
          </div>

          <span 
            className="text-sm font-semibold text-black-900 hidden sm:block"
            style={{
              backgroundColor: '#ffe700 !important',
              background: '#ffe700 !important'
            }}
          >
            Afiliado ML
          </span>
        </div>

        {/* TÍTULO CENTRAL */}
        <div 
          className="text-center flex-1 px-4"
          style={{
            backgroundColor: '#ffe700 !important',
            background: '#ffe700 !important'
          }}
        >
          <h1 
            className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight"
            style={{
              backgroundColor: '#ffe700 !important',
              background: '#ffe700 !important',
              color: '#000000 !important' 
            }}
          >
            Ofertas exclusivas!
          </h1>
          <p 
            className="text-base md:text-2xl text-gray-900 mt-1"
            style={{
              backgroundColor: '#ffe700 !important',
              background: '#ffe700 !important',
              color: '#000000 !important' 
            }}
          >
            Aproveite esta seleção especial de produtos 
          </p> 
        </div>

        {/* LOGO MERCADO LIVRE */}
        <div 
          className="relative w-20 h-20 md:w-28 md:h-28"
          style={{
            backgroundColor: '#ffe700 !important',
            background: '#ffe700 !important'
          }}
        >
          <Image
            src="/logo-ML-mobile.png"
            alt="Logo Mercado Livre"
            fill
            style={{ 
              objectFit: "contain",
              backgroundColor: '#ffe700 !important'
            }}
          />
        </div>
      </div>
    </header>
  );
}