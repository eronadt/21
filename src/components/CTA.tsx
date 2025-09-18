import React from 'react';

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-red-500 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* CTA Image */}
        <div className="mb-8">
          <img
            src="https://i.imgur.com/5H6yvst.png=400"
            alt="Mãe feliz com celular recebendo conteúdo digital"
            className="w-30 h-30 mx-auto rounded-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto">
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
              <p className="text-white opacity-90">Apenas 10 gestantes terão acesso a esse preço</p>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-yellow-400 text-black p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">⚠️ ATENÇÃO: OFERTA LIMITADA</h3>
            <p className="text-lg font-medium">
              Devido ao valor promocional, essa condição está disponível apenas para as
              <span className="font-bold"> primeiras 10 gestantes</span> que acessarem o conteúdo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
