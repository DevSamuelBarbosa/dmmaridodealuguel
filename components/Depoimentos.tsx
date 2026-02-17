"use client";

import { useState, useCallback, useMemo } from "react";
import depoimentos from "@/data/depoimentos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faStar, faQuoteLeft, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function shuffleAndPick<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function Depoimentos() {
  const exibidos = useMemo(() => shuffleAndPick(depoimentos, 6), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = exibidos.length;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const getVisible = (count: number) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(exibidos[(currentIndex + i) % total]);
    }
    return items;
  };

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            <FontAwesomeIcon icon={faGoogle} />
            Avaliações do Google
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Depoimentos de Clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre nossos serviços — todas as avaliações são reais do Google Meu Negócio
          </p>
        </div>

        <div className="relative">
          {/* Botão Anterior */}
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Desktop: 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 px-8">
            {getVisible(3).map((dep, index) => (
              <div
                key={`${dep.name}-${index}`}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col min-h-[260px]"
              >
                <FontAwesomeIcon icon={faQuoteLeft} className="text-blue-200 text-2xl mb-3" />
                <p className="text-gray-700 mb-5 leading-relaxed flex-1">{dep.text}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {dep.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{dep.name}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(dep.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile / Tablet: 1 card */}
          <div className="lg:hidden px-8">
            {getVisible(1).map((dep, index) => (
              <div
                key={`${dep.name}-${index}`}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col min-h-[220px]"
              >
                <FontAwesomeIcon icon={faQuoteLeft} className="text-blue-200 text-2xl mb-3" />
                <p className="text-gray-700 mb-5 leading-relaxed flex-1">{dep.text}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {dep.name.charAt(0)}
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">{dep.name}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(dep.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Próximo */}
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {exibidos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                i === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
