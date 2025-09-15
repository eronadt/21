import React from 'react';
import { ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-red-500 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* CTA Image */}
        <div className="mb-8">
          <img 
            src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Mãe feliz com celular recebendo conteúdo digital"
            className="w-64 h-64 mx-auto rounded-full object-cover border-8 border-white shadow-2xl"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main CTA Button */}
          <button className="bg-green-500 text-white text-lg md:text-3xl font-bold py-6 px-8 md:py-8 md:px-12 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2 md:space-x-4 mb-8 w-full max-w-md md:max-w-none md:w-auto">
            <span>QUERO ACESSAR O MÉTODO – R$29,90</span>
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
          </button>

          <p className="text-white text-lg mb-8 opacity-90">
            (Entrega imediata por e-mail)
          </p>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <img 
                src="https://i.imgur.com/fsySJjQ.png=400" 
                alt="Selo de garantia e proteção"
                className="w-30 h-30 mx-auto mb-3 rounded-full object-cover"
              />
              <h3 className="text-white font-bold text-lg mb-2">Garantia Incondicional</h3>
              <p className="text-white opacity-90">30 dias para testar. Não gostou? Devolvemos 100%</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <img 
                src="https://i.imgur.com/4X596s6.png" 
                alt="Acesso imediato"
                className="w-30 h-30 mx-auto mb-3 rounded-full object-cover"
              />
              <h3 className="text-white font-bold text-lg mb-2">Acesso Imediato</h3>
              <p className="text-white opacity-90">Receba tudo no seu email em menos de 2 minutos</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
              <img 
                src="https://i.imgur.com/qtTjFya.png" 
                alt="Vagas limitadas"
                className="w-30 h-30 mx-auto mb-3 rounded-full object-cover"
              />
              <h3 className="text-white font-bold text-lg mb-2">Vagas Limitadas</h3>
              <p className="text-white opacity-90">Apenas 300 gestantes terão acesso a esse preço</p>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-yellow-400 text-black p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">⚠️ ATENÇÃO: OFERTA LIMITADA</h3>
            <p className="text-lg font-medium">
              Devido ao valor promocional, essa condição está disponível apenas para as 
              <span className="font-bold"> primeiras 300 gestantes</span> que acessarem o conteúdo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;