import React from "react";

const testimonials = [
  {
    name: 'João Silva',
    rating: 5,
    text: 'Excelente trabalho! Muito atencioso e prestativo. Recomendo!',
  },
  {
    name: 'Maria Santos',
    rating: 5,
    text: 'Serviço de qualidade e rápido. DM é profissional e confiável.',
  },
  {
    name: 'Carlos Oliveira',
    rating: 5,
    text: 'Sou cliente há mais de um ano. Sempre volta para resolver bem feito!',
  },
  {
    name: 'Ana Costa',
    rating: 5,
    text: 'Muito bom! Preço justo e resultado excelente. Super recomendo!',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Depoimentos de Clientes</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Veja o que nossos clientes dizem sobre nossos serviços
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
