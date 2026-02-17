import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faPhone,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "";
const email = process.env.NEXT_PUBLIC_EMAIL || "";

export default function Contato() {
  return (
    <section id="contato" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            <FontAwesomeIcon icon={faCommentDots} />
            Fale conosco
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso — respondemos rapidamente!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/55${whatsappNumber}?text=${encodeURIComponent('Olá DM Marido de Aluguel, gostaria de solicitar um orçamento')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 bg-white rounded-xl border border-gray-200 p-8 hover:border-green-400 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-200">
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-600 text-2xl group-hover:text-white transition-colors duration-200" />
            </div>
            <h3 className="font-bold text-gray-900">WhatsApp</h3>
            <p className="text-gray-500 text-sm text-center">Atendimento rápido e direto pelo celular</p>
            <span className="text-green-600 font-medium text-sm">Enviar mensagem →</span>
          </a>

          {/* E-mail */}
          <a
            href={`mailto:${email}`}
            className="flex flex-col items-center gap-4 bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-400 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-2xl group-hover:text-white transition-colors duration-200" />
            </div>
            <h3 className="font-bold text-gray-900">E-mail</h3>
            <p className="text-gray-500 text-sm text-center">Envie detalhes do serviço por e-mail</p>
            <span className="text-blue-600 font-medium text-sm">Enviar e-mail →</span>
          </a>

          {/* Localização */}
          <div className="flex flex-col items-center gap-4 bg-white rounded-xl border border-gray-200 p-8">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-600 text-2xl" />
            </div>
            <h3 className="font-bold text-gray-900">Localização</h3>
            <p className="text-gray-500 text-sm text-center">Atendemos em Marau/RS e toda a região</p>
            <span className="text-amber-600 font-medium text-sm">Região Norte do RS</span>
          </div>
        </div>

        {/* Info extra */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} className="text-blue-500" />
            <span>Segunda a Sábado, 7h às 18h</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
            <span>Orçamento sem compromisso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
