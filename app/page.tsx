'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { id: 1, name: 'Hidráulica', icon: '🔧' },
    { id: 2, name: 'Elétrica', icon: '⚡' },
    { id: 3, name: 'Pintura', icon: '🎨' },
    { id: 4, name: 'Limpeza', icon: '🧹' },
    { id: 5, name: 'Manutenção Geral', icon: '🛠️' },
    { id: 6, name: 'Ar Condicionado', icon: '❄️' },
  ];

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

  const whatsappLink = (service: string) => {
    const message = `Olá DM Marido de Aluguel, eu gostaria de solicitar o serviço ${service}`;
    const encoded = encodeURIComponent(message);
    return `https://wa.me/?text=${encoded}`;
  };

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">DM</span>
            <div className="flex flex-col text-sm">
              <span className="font-semibold text-gray-900">Marido de Aluguel</span>
              <span className="text-xs text-gray-600">Serviços Gerais</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#servicos" className="hover:text-blue-600 transition-colors font-medium">
              Serviços
            </a>
            <a href="#depoimentos" className="hover:text-blue-600 transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-blue-600 transition-colors font-medium">
              FAQ
            </a>
            <a href="#quem-sou" className="hover:text-blue-600 transition-colors font-medium">
              Quem Sou
            </a>
            <a href="#contato" className="hover:text-blue-600 transition-colors font-medium">
              Contato
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <a
              href="https://wa.me/?text=Olá%20DM%20Marido%20de%20Aluguel%2C%20gostaria%20de%20informações"
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">DM Marido de Aluguel</h1>
          <p className="text-xl text-blue-100 mb-8">Todos os serviços de manutenção e reparo que você precisa</p>
          <a
            href="#servicos"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Conheça Nossos Serviços
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Oferecemos uma ampla variedade de serviços gerais para sua casa ou negócio
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-linear-to-r from-blue-500 to-blue-600 h-40 flex items-center justify-center">
                  <span className="text-6xl">{service.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.name}</h3>
                  <a
                    href={whatsappLink(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    Solicitar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                  <span className={`text-blue-600 text-xl transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
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

      {/* About Section */}
      <section id="quem-sou" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Quem Sou Eu</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Placeholder */}
            <div className="flex justify-center">
              <div className="w-72 h-96 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-8xl">👨‍🔧</span>
              </div>
            </div>

            {/* About Content */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Douglas Mello</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Olá! Meu nome é Douglas Mello, mais conhecido como DM - Marido de Aluguel. Sou um profissional com mais de 10 anos de experiência em serviços gerais.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ao longo dos anos, desenvolvi expertise em hidráulica, elétrica, pintura, limpeza, manutenção geral e ar condicionado. Meu compromisso é sempre oferecer serviços de qualidade, com atenção aos detalhes e pontualidade.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Acredito que um bom profissional não apenas realiza o trabalho, mas cria um relacionamento de confiança com seus clientes. É isso que busco em cada projeto que realizo.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/?text=Olá%20Diego%2C%20gostaria%20de%20conhecê-lo%20melhor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              <span>💬</span> WhatsApp
            </a>
            <a
              href="mailto:contato@dmmaridodealuguel.com"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              <span>✉️</span> E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li>
                  <a href="#servicos" className="hover:text-blue-400 transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="hover:text-blue-400 transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-blue-400 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#quem-sou" className="hover:text-blue-400 transition-colors">
                    Quem Sou
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-blue-400 transition-colors">
                    Contato
                  </a>
                </li>
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
                    className="hover:text-blue-400 transition-colors"
                  >
                    📞 WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@dmmaridodealuguel.com" className="hover:text-blue-400 transition-colors">
                    ✉️ E-mail
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
    </div>
  );
}
