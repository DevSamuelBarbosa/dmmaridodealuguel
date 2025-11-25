import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">DM</span>
          <div className="flex flex-col text-sm">
            <span className="font-semibold text-gray-900">Marido de Aluguel</span>
            <span className="text-xs text-gray-600">Serviços Gerais</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#servicos" className="hover:text-blue-600 transition-colors font-medium">Serviços</a>
          <a href="#depoimentos" className="hover:text-blue-600 transition-colors font-medium">Depoimentos</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors font-medium">FAQ</a>
          <a href="#quem-sou" className="hover:text-blue-600 transition-colors font-medium">Quem Sou</a>
          <a href="#contato" className="hover:text-blue-600 transition-colors font-medium">Contato</a>
        </div>
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
  );
}
