import React from "react";

export default function QuemSou() {
  return (
    <section id="quem-sou" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Quem Sou Eu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-72 h-96 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-8xl">👨‍🔧</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Douglas Mello</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Olá! Meu nome é Douglas Mello, mais conhecido como DM - Marido de Aluguel. Sou um profissional com mais de 10 anos de experiência em serviços gerais.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ao longo dos anos, desenvolvi expertise em hidráulica, elétrica, pintura, limpeza, manutenção geral e ar condicionado. Meu compromisso é sempre oferecer serviços de qualidade, com atenção aos detalhes e pontualidade.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Acredito que um bom profissional não apenas realiza o trabalho, mas cria um relacionamento de confiança com seus clientes. É isso que busco em cada projeto que realizo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/?text=Olá%20Douglas%2C%20gostaria%20de%20conhecê-lo%20melhor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
