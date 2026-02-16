import servicos from "@/data/servicos.json";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faWrench, faBolt, faPaintRoller, faBroom, faTools, faSnowflake } from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, any> = {
  "hidráulica": faWrench,
  "elétrica": faBolt,
  "pintura": faPaintRoller,
  "limpeza": faBroom,
  "manutenção geral": faTools,
  "ar condicionado": faSnowflake,
};

function getIcon(tipo: string) {
  const key = tipo.toLowerCase();
  return iconMap[key] || faTools;
}

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "";

export default function Servicos() {
  const whatsappLink = (service: string) => {
    const message = `Olá DM Marido de Aluguel, eu gostaria de solicitar o serviço ${service}`;
    const encoded = encodeURIComponent(message);
    return `https://wa.me/55${whatsappNumber}?text=${encoded}`;
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos uma ampla variedade de serviços gerais para sua casa ou negócio
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {servicos.map((service: any) => (
            <div
              key={service.id}
              className="flex flex-col items-center bg-white rounded-xl shadow-md border border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all duration-200 p-4 group"
            >
              <div className="relative mb-4 w-full">
                <div className="w-full h-44 rounded-md overflow-hidden border-4 border-blue-100 bg-gray-100 flex items-center justify-center">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <FontAwesomeIcon icon={getIcon(service.tipo)} className="text-5xl text-blue-500" />
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full border border-blue-200 p-2 shadow-sm">
                  <FontAwesomeIcon icon={getIcon(service.tipo)} className="text-blue-600 text-lg" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 text-center mb-1 mt-2 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm text-center mb-4">{service.tipo}</p>
              <a
                href={whatsappLink(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-600 transition-colors mt-auto shadow duration-150"
              >
                <FontAwesomeIcon icon={faWhatsapp} /> Solicitar
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <a
            href={`https://wa.me/55${whatsappNumber}?text=Olá%20DM%20Marido%20de%20Aluguel%2C%20gostaria%20de%20solicitar%20um%20orçamento`}
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
