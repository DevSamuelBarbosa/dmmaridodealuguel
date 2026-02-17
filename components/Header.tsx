import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/icone_logo.jpg"
            alt="DM Marido de Aluguel"
            width={50}
            height={50}
            className="rounded-full border-2 border-blue-200 shadow-sm"
          />
          <div className="flex flex-col text-sm">
            <span className="font-semibold text-gray-900 leading-tight">DM Marido de Aluguel</span>
            <span className="text-xs text-gray-500 leading-tight">Serviços Gerais</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="hover:text-blue-600 transition-colors font-medium text-gray-700">Serviços</a>
          <a href="#depoimentos" className="hover:text-blue-600 transition-colors font-medium text-gray-700">Depoimentos</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors font-medium text-gray-700">FAQ</a>
          <a href="#quem-sou" className="hover:text-blue-600 transition-colors font-medium text-gray-700">Quem Sou</a>
          <a href="#contato" className="hover:text-blue-600 transition-colors font-medium text-gray-700">Contato</a>
        </div>

        {/* Mobile WhatsApp Button */}
        <div className="md:hidden">
          <a
            href={`https://wa.me/55${whatsappNumber}?text=${encodeURIComponent('Olá DM Marido de Aluguel, gostaria de informações')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors shadow"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> Fale conosco
          </a>
        </div>
      </nav>
    </header>
  );
}
