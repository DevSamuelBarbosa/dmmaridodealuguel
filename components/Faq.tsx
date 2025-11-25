import React, { useState } from "react";

const faqs = [
  {
    question: 'Qual é o horário de atendimento?',
    answer: 'Atendemos de segunda a sábado, das 7:00 às 18:00. Emergências podem ser tratadas mediante agendamento prévio.',
  },
  {
    question: 'Como faço para solicitar um orçamento?',
    answer: 'Você pode solicitar um orçamento através do WhatsApp ou ao clicar no botão "Solicitar" em qualquer serviço. Responderemos em até 24 horas.',
  },
  {
    question: 'Qual é a forma de pagamento?',
    answer: 'Aceitamos dinheiro, PIX, cartão de crédito e débito. As formas de pagamento podem variar conforme o valor do serviço.',
  },
  {
    question: 'Vocês fazem manutenção periódica?',
    answer: 'Sim! Oferecemos pacotes de manutenção periódica. Entre em contato para conhecer nossas opções.',
  },
  {
    question: 'Qual é a garantia dos serviços?',
    answer: 'Todos os nossos serviços possuem garantia de 30 dias. Se identificar qualquer problema, retornaremos para corrigir sem custo adicional.',
  },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Perguntas Frequentes</h2>
        <p className="text-center text-gray-600 mb-12">
          Dúvidas comuns sobre nossos serviços
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className={`text-blue-600 text-xl transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
