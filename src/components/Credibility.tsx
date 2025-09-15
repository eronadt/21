import React from 'react';
import { Award, Users, BookOpen, Star } from 'lucide-react';

const Credibility = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quem criou esse método:
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-12">
            <div className="mb-6">
              <img 
                src="https://i.imgur.com/EV7KN5I.png=800" 
                alt="Nutricionista feminina sorrindo com alimentos saudáveis"
                className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg border-4 border-blue-200"
              />
            </div>

            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Equipe de Especialistas</h3>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Desenvolvido por uma equipe de nutricionistas com mais de 
              <span className="font-bold text-blue-600"> 12 anos de atuação clínica</span> 
              com gestantes em sistema público e privado.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-500 mb-2" />
                <p className="font-semibold text-gray-800">Baseado em evidências reais</p>
                <p className="text-gray-600 text-sm">Nada de dieta da moda ou suplemento importado</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <Star className="w-6 h-6 text-yellow-500 mb-2" />
                <p className="font-semibold text-gray-800">Experiência Comprovada</p>
                <p className="text-gray-600 text-sm">Milhares de gestantes atendidas com sucesso</p>
              </div>
            </div>
          </div>

          {/* Final Warning */}
          <div className="bg-gray-800 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">     
            </h3>
            <p className="text-lg mb-4">
              Tem mãe gastando mais de <span className="font-bold text-red-400">R$300 por mês</span> em suplemento 
              e achando que tá segura...
            </p>
            <p className="text-lg mb-4">
              ...mas errando no básico: <span className="font-bold text-green-400">comida de verdade</span>.
            </p>
            <a 
              href="https://kiwify.com.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-green-600 p-4 rounded-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer transform hover:scale-105"
            >
              <p className="text-xl font-bold">
                Por R$29,90 você tem acesso ao que resolve.
              </p>
              <p className="text-lg opacity-90">O resto é ilusão vendida por farmácia.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
