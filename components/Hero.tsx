import React from "react";

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">DM Marido de Aluguel</h1>
        <p className="text-xl text-blue-100 mb-8">Todos os serviços de manutenção e reparo que você precisa</p>
        <a
          href="#servicos"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Conheça Nossos Serviços
        </a>
      </div>
    </section>
  );
}
