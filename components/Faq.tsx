"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const faqs = [
	{
		question: "Qual é o horário de atendimento?",
		answer:
			"Atendemos de segunda a sábado, das 7:00 às 18:00. Emergências podem ser tratadas mediante agendamento prévio.",
	},
	{
		question: "Como faço para solicitar um orçamento?",
		answer:
			"Você pode solicitar um orçamento através do WhatsApp ou ao clicar no botão 'Solicitar' em qualquer serviço. Responderemos em até 24 horas.",
	},
	{
		question: "Qual é a forma de pagamento?",
		answer:
			"Aceitamos dinheiro, PIX, cartão de crédito e débito. As formas de pagamento podem variar conforme o valor do serviço.",
	},
	{
		question: "Vocês fazem manutenção periódica?",
		answer:
			"Sim! Oferecemos pacotes de manutenção periódica. Entre em contato para conhecer nossas opções.",
	},
	{
		question: "Qual é a garantia dos serviços?",
		answer:
			"Todos os nossos serviços possuem garantia de 30 dias. Se identificar qualquer problema, retornaremos para corrigir sem custo adicional.",
	},
];

export default function Faq() {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	return (
		<section id="faq" className="py-16 sm:py-24 bg-gray-50">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-blue-100">
						<FontAwesomeIcon icon={faCircleQuestion} />
						Tire suas dúvidas
					</div>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Perguntas Frequentes
					</h2>
					<p className="text-gray-600 max-w-xl mx-auto">
						Confira as dúvidas mais comuns sobre nossos serviços
					</p>
				</div>

				<div className="space-y-3">
					{faqs.map((faq, index) => {
						const isOpen = openFaq === index;
						return (
							<div
								key={index}
								className={`bg-white rounded-xl border transition-all duration-200 ${
									isOpen
										? "border-blue-300 shadow-md"
										: "border-gray-200 hover:border-blue-200"
								}`}
							>
								<button
									onClick={() => setOpenFaq(isOpen ? null : index)}
									className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
								>
									<div className="flex items-center gap-3">
										<span
											className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold shrink-0 transition-colors duration-200 ${
												isOpen
													? "bg-blue-600 text-white"
													: "bg-blue-50 text-blue-600"
											}`}
										>
											{index + 1}
										</span>
										<span className="font-semibold text-gray-900">
											{faq.question}
										</span>
									</div>
									<FontAwesomeIcon
										icon={faChevronDown}
										className={`text-blue-600 text-sm shrink-0 transition-transform duration-300 ${
											isOpen ? "rotate-180" : ""
										}`}
									/>
								</button>
								<div
									className={`overflow-hidden transition-all duration-300 ${
										isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
									}`}
								>
									<div className="px-6 pb-5 pl-17 text-gray-600 leading-relaxed">
										{faq.answer}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
