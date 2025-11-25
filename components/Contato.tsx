import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contato() {
  return (
    <section id="contato" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-gray-600 text-lg mb-12">
          Entre em contato para solicitar um orçamento e conhecer como posso ajudar você
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://wa.me/?text=Olá%20DM%20Marido%20de%20Aluguel%2C%20gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> WhatsApp
          </a>
          <a
            href="mailto:contato@dmmaridodealuguel.com"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
