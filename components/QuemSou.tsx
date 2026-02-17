import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faClock,
  faCheckCircle,
  faShieldAlt,
  faHandshake,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "";

const destaques = [
  { icon: faClock, texto: "+10 anos de experiência" },
  { icon: faShieldAlt, texto: "Garantia em todos os serviços" },
  { icon: faHandshake, texto: "Compromisso e pontualidade" },
  { icon: faStar, texto: "5 estrelas no Google" },
];

export default function QuemSou() {
  return (
    <section id="quem-sou" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            <FontAwesomeIcon icon={faHandshake} />
            Conheça o profissional
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quem Sou Eu</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Foto + Badge */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-72 h-96 bg-linear-to-br from-blue-400 to-blue-700 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                <span className="text-8xl">👨‍🔧</span>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2 shadow-lg border border-gray-100 flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-sm" />
                <span className="text-sm font-semibold text-gray-700">Marau - RS</span>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Douglas Mello</h3>
            <p className="text-blue-600 font-medium mb-6">DM Marido de Aluguel</p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Olá! Meu nome é Douglas Mello, mais conhecido como DM — Marido de Aluguel. Sou um profissional com mais de 10 anos de experiência em serviços gerais, atendendo em Marau/RS e toda a região.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ao longo dos anos, desenvolvi expertise em instalações, reparos elétricos e hidráulicos, pintura, reformas e muito mais. Meu compromisso é sempre oferecer serviços de qualidade, com atenção aos detalhes, limpeza no local e pontualidade.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Acredito que um bom profissional não apenas realiza o trabalho, mas cria um relacionamento de confiança com seus clientes. É isso que busco em cada projeto.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {destaques.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                  <FontAwesomeIcon icon={item.icon} className="text-blue-600 text-lg shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item.texto}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/55${whatsappNumber}?text=${encodeURIComponent('Olá Douglas, gostaria de saber mais sobre seus serviços')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Fale Comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
