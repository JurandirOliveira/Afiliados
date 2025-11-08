// src/app/produtos/components/ProdutoCard.tsx
"use client";

interface ProdutoCardProps {
  produto: {
    id: number;
    nomeProduto: string;
    urlImagem: string;
    urlProduto: string;
    precoSemDesconto?: number;
    precoFinal: number;
    freteGratis: boolean;
  };
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
  if (!produto) return null;

  const precoFinal = Number(produto.precoFinal);
  const precoAntigo = produto.precoSemDesconto
    ? Number(produto.precoSemDesconto)
    : undefined;

  const temDesconto = precoAntigo && precoAntigo > precoFinal;

  // separar reais e centavos
  const [reais, centavos] = precoFinal.toFixed(2).split(".");

  const percentualDesconto =
    temDesconto && precoAntigo
      ? Math.round(((precoAntigo - precoFinal) / precoAntigo) * 100)
      : null;

  return (
    <a
      href={produto.urlProduto}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl border-0 sm:border hover:shadow-lg transition p-4 flex flex-col cursor-pointer"
    >
      {/* IMAGEM */}
      <div className="w-full h-42 sm:h52 bg-white-100 dark:bg-white-100 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={produto.urlImagem} 
          alt={produto.nomeProduto}
          className="w-full h-full object-contain"
        />
      </div>

      {/* NOME DO PRODUTO */}
      <h3 className="mt-0 sm:mt-4 font-medium text-sm text-gray-900 line-clamp-2 min-h-[44px]">
        {produto.nomeProduto}
      </h3>

      {/* ÁREA DE PREÇO - estilo idêntico ao exemplo */}
      <div className="mt-2">

        {/* Preço antigo riscado 
        {temDesconto && (
          <div className="text-[12px] text-gray-400 line-through leading-none mb-[2px]">
            R$ {precoAntigo!.toFixed(2).replace(".", ",")}
          </div>
        )}*/}

        {/* PREÇO PRINCIPAL — NÃO BOLD, PRETO, COM CENTAVOS MENORES */}
        <div className="flex items-start gap-[3px] leading-none">
          
          {/* <span className="text-[22px] font-normal text-black tracking-tight">
            R$ {reais}
          </span>

          
          <span className="text-[14px] font-normal text-black mt-[2px]">
            {centavos}
          </span> */} 
          
          {/* DESCONTO — aparece na mesma linha */}
          {temDesconto && percentualDesconto !== null && (
            <span className="text-[20px] sm:text-[16px] text-green-600 font-semibold ml-1 mt-[2px]">
              {percentualDesconto}% OFF
            </span>
          )}
        </div>
      </div>

      {/* FRETE GRÁTIS */}
      {produto.freteGratis && (
        <div className="mt-2 text-[13px] text-green-600 font-semibold">
          Frete grátis
        </div>
      )}
    </a>
  );
}
