'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import Depoimentos from '@/components/Depoimentos';
import Faq from '@/components/Faq';
import QuemSou from '@/components/QuemSou';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full bg-white text-gray-900">
      <Header />
      <Hero />
      <Servicos />
      <Depoimentos />
      <Faq />
      <QuemSou />
      <Contato />
      <Footer />
    </div>
  );
}
