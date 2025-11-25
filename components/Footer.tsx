import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-blue-400">DM</span>
              <div className="flex flex-col text-sm">
                <span className="font-semibold">Marido de Aluguel</span>
                <span className="text-xs">Serviços Gerais</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Oferecendo serviços profissionais de qualidade há mais de 10 anos.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" className="hover:text-blue-400 transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#quem-sou" className="hover:text-blue-400 transition-colors">Quem Sou</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/?text=Olá%20DM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-1" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:contato@dmmaridodealuguel.com" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 DM Marido de Aluguel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
