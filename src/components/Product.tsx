import React from 'react';
import { Package, CheckCircle, Gift, Clock } from 'lucide-react';

const Product = () => {
  const includes = [
    'Lista dos 21 nutrientes essenciais (sem enrolação)',
    'Cardápio semanal com substituições acessíveis',
    'Lista de mercado por trimestre gestacional',
    'Opções pra quem tem restrições alimentares',
    'Checklist imprimível de evolução nutricional',
    'BÔNUS: Guia de preparo de refeições rápidas e nutritivas',
    'BÔNUS: Lista pronta de compras para cada trimestre da gestação já filtrada para caber no seu bolso',
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        {/* Product Image */}
        <div className="text-center mb-8">
          <img 
            src="https://i.imgur.com/uo1f0JS.jpeg=800" 
            alt="Flat lay com caderno, celular, checklist e alimentos saudáveis"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="text-center mb-12">
          <Package className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O QUE VOCÊ RECEBE COM O MÉTODO DOS 21 NUTRIENTES
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid gap-4 mb-8">
            {includes.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-100">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <Package className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Formato Digital</h3>
                <p className="text-gray-600">Tudo digital. Receba acesso imediato por e-mail.</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Acesso Imediato</h3>
                <p className="text-gray-600">Sem mensalidade, sem pegadinha. Acesso vitalício.</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-xl">
              <div className="mb-4">
                <p className="text-lg line-through opacity-75">De R$ 97,00</p>
                <p className="text-4xl md:text-5xl font-bold">APENAS R$ 29,90</p>
                <p className="text-lg mt-2">Pagamento único • Sem mensalidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;