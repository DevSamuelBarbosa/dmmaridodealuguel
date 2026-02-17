"use client";

import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faScrewdriverWrench,
  faBolt,
  faPaintRoller,
  faFaucetDrip,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "";

const categorias = [
  {
    titulo: "Serviços de Instalação",
    icon: faScrewdriverWrench,
    cor: "blue",
    itens: [
      "Instalação de Máquina de Lavar",
      "Instalação de Lava Louças",
      "Coifa e Exaustores",
      "Telas de Proteção",
      "Cortinas e Persianas",
      "Varal Interno e Externo",
      "Painel ou Suporte de TV",
      "Instalação de Quadros",
      "Ventiladores de Teto",
      "Luminárias e Lustres",
      "Câmeras de Segurança",
      "Instalação de Toldos",
      "Instalação de Espelhos",
      "Vaso Sanitário",
      "Instalação de Olho Mágico",
      "Instalação de Armários",
      "Instalação de Filtros",
      "Instalação de Fogão Cooktop",
      "Instalação de Forro",
      "Instalação de Piso Vinílico",
    ],
  },
  {
    titulo: "Reparos e Reformas",
    icon: faHammer,
    cor: "amber",
    itens: [
      "Reparos em Azulejos",
      "Reparos em Portas e Janelas",
      "Reparos em Pisos",
      "Reparos em Alvenaria",
      "Reparos em Apartamento Alugado",
      "Reparos em Armários",
      "Reforma em Assoalho",
      "Reparos de Impermeabilização",
      "Reparos em Revestimentos",
      "Reforma de Banheiro e Cozinha",
      "Reforma de Quarto e Salas",
      "Reforma da Área de Lazer",
      "Limpeza de Painel Solar",
    ],
  },
  {
    titulo: "Reparos Elétricos",
    icon: faBolt,
    cor: "yellow",
    itens: [
      "Eletricista Residencial",
      "Reparos Elétricos",
      "Troca de Disjuntores",
      "Troca de Fiação",
      "Iluminações",
      "Troca de Tomadas e Lâmpadas",
      "Troca de Chuveiros",
      "Instalação de Fio Terra",
      "Canaletas e Conduítes",
    ],
  },
  {
    titulo: "Serviços de Pintura",
    icon: faPaintRoller,
    cor: "green",
    itens: [
      "Pintor Residencial e Predial",
      "Pinturas Internas e Externas",
      "Casas, Lojas e Aptos",
      "Texturas e Grafiatos",
      "Paredes e Pisos",
      "Portas e Janelas",
      "Fachadas",
      "Pintura de Muros",
      "Impermeabilização e Acabamentos",
      "Pintura de Gesso",
      "Tratamento Contra Mofos",
      "Aplicação de Vernizes",
    ],
  },
  {
    titulo: "Serviços Hidráulicos",
    icon: faFaucetDrip,
    cor: "cyan",
    itens: [
      "Encanador",
      "Desentupimento de Pias e Ralos",
      "Limpeza de Caixa de Gordura",
      "Reparos Hidráulicos",
      "Instalação de Pias e Tanques",
      "Instalação de Tubulações",
      "Reparos em Torneiras",
      "Reparos em Banheiras e Saunas",
    ],
  },
];

const corMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-200", icon: "text-blue-600",   badge: "bg-blue-100 text-blue-700" },
  amber:  { bg: "bg-amber-50",  border: "border-amber-200", icon: "text-amber-600",  badge: "bg-amber-100 text-amber-700" },
  yellow: { bg: "bg-yellow-50", border: "border-yellow-200", icon: "text-yellow-600", badge: "bg-yellow-100 text-yellow-700" },
  green:  { bg: "bg-green-50",  border: "border-green-200", icon: "text-green-600",  badge: "bg-green-100 text-green-700" },
  cyan:   { bg: "bg-cyan-50",   border: "border-cyan-200", icon: "text-cyan-600",   badge: "bg-cyan-100 text-cyan-700" },
};

function shuffleAndPick<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function Servicos() {
  const categoriasRandom = useMemo(
    () =>
      categorias.map((cat) => ({
        ...cat,
        itensExibidos: shuffleAndPick(cat.itens, 4),
      })),
    []
  );

  const whatsappLink = (service: string) => {
    const message = `Olá DM Marido de Aluguel, eu gostaria de solicitar o serviço ${service}`;
    return `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos uma ampla variedade de serviços gerais para sua casa ou negócio
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categoriasRandom.map((cat) => {
            const cores = corMap[cat.cor] || corMap.blue;
            return (
              <div
                key={cat.titulo}
                className={`flex flex-col rounded-2xl border ${cores.border} ${cores.bg} p-6 shadow-sm hover:shadow-md transition-all duration-200`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${cores.badge}`}>
                    <FontAwesomeIcon icon={cat.icon} className="text-lg" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight">{cat.titulo}</h3>
                </div>

                <ul className="space-y-2 mb-5 flex-1">
                  {cat.itensExibidos.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${cores.icon} bg-current shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-400 mb-3">
                  e mais {cat.itens.length - 4} serviços...
                </p>

                <a
                  href={whatsappLink(cat.titulo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg font-semibold text-sm hover:bg-green-600 transition-colors shadow"
                >
                  <FontAwesomeIcon icon={faWhatsapp} /> Solicitar
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <a
          href={`https://wa.me/55${whatsappNumber}?text=${encodeURIComponent('Olá DM Marido de Aluguel, gostaria de solicitar um orçamento')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="mr-2" /> Solicitar outro serviço
        </a>
      </div>
    </section>
  );
}
