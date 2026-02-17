import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "";
const email = process.env.NEXT_PUBLIC_EMAIL || "";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo e descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-extrabold text-blue-400">DM</span>
              <div className="flex flex-col text-sm">
                <span className="font-bold text-white leading-tight">Marido de Aluguel</span>
                <span className="text-xs text-gray-400 leading-tight">Serviços Gerais</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Serviços de manutenção, reparos e reformas com qualidade e confiança.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-400" />
              <span>Marau - RS e região</span>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" className="hover:text-blue-400 transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#quem-sou" className="hover:text-blue-400 transition-colors">Quem Sou</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">Instalações em geral</li>
              <li className="text-gray-400">Reparos e Reformas</li>
              <li className="text-gray-400">Serviços Elétricos</li>
              <li className="text-gray-400">Pintura Residencial</li>
              <li className="text-gray-400">Serviços Hidráulicos</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold mb-5 text-white text-sm uppercase tracking-wider">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`https://wa.me/55${whatsappNumber}?text=${encodeURIComponent('Olá DM')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-3"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-400 text-lg" />
                  <span>(54) 99339-7936</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-blue-400 transition-colors flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 text-lg" />
                  <span>{email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DM Marido de Aluguel. Todos os direitos reservados.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowUp} />
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
