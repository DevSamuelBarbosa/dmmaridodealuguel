import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-24 sm:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/10">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-300" />
          Em Marau - RS e região
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          DM Marido de Aluguel
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Todo serviço de manutenção e reparo que você precisa
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#servicos"
            className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Conheça Nossos Serviços
          </a>
          <a
            href={`https://wa.me/55${whatsappNumber}?text=${encodeURIComponent("Olá DM Marido de Aluguel, gostaria de solicitar um orçamento")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-green-600 transition-colors shadow-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> Fale Conosco
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#servicos" aria-label="Rolar para serviços">
          <FontAwesomeIcon icon={faChevronDown} className="text-white/50 text-2xl" />
        </a>
      </div>
    </section>
  );
}
