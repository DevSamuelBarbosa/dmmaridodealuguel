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

export default function Servicos() {
  const whatsappLink = (service: string) => {
    const message = `Olá DM Marido de Aluguel, eu gostaria de solicitar o serviço ${service}`;
    const encoded = encodeURIComponent(message);
    return `https://wa.me/?text=${encoded}`;
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos uma ampla variedade de serviços gerais para sua casa ou negócio
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicos.map((service: any) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative w-full h-40 bg-linear-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                {service.image ? (
                  <Image src={service.image} alt={service.title} fill className="object-cover w-full h-full" />
                ) : (
                  <FontAwesomeIcon icon={getIcon(service.tipo)} className="text-6xl text-white" />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.tipo}</p>
                <a
                  href={whatsappLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition-colors mt-auto"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />Solicitar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
