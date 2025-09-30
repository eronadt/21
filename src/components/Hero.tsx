import React, { useState } from 'react';
import { AlertTriangle, Baby, ArrowDown, Play } from 'lucide-react';

const Hero = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4 text-center">

        {/* Hero Video (com thumbnail e botão de play animado) */}
        <div className="mb-8">
          <div className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg overflow-hidden relative">
            {!playVideo ? (
              <div className="relative cursor-pointer" onClick={() => setPlayVideo(true)}>
                {/* Thumbnail personalizada (você pode trocar por uma imagem do vídeo do Vimeo) */}
                <img
                  src="https://i.imgur.com/hzYdTca.jpg"
                  alt="Video Thumbnail"
                  className="w-full h-auto"
                />
                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center space-y-4">
                  {/* Animação do Play */}
                  <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-20 w-20 rounded-full bg-red-500 opacity-75 animate-ping"></span>
                    <button className="relative bg-white rounded-full p-5 shadow-lg hover:scale-110 transition">
                      <Play className="w-10 h-10 text-red-600" />
                    </button>
                  </div>
                  <p className="text-white text-lg font-semibold animate-pulse">
                    👉 Clique aqui no vídeo
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1118125409?badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479"
                  title="Para Você"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Alert Banner */}
        <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full mb-8 border border-red-200">
          <AlertTriangle className="w-5 h-5 mr-2" />
          <span className="font-semibold">ATENÇÃO: Informação Crítica Para Gestantes</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Seu bebê pode estar se desenvolvendo com
          <span className="text-red-600 block mt-2">deficiência nutricional invisível</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
          e a culpa pode não ser sua. Mas a consequência será.
        </p>

        {/* Subheadline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-12 border border-gray-100">
          <div className="flex items-center justify-center mb-4">
            <Baby className="w-8 h-8 text-pink-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Descubra o Segredo de Centenas de Gestantes
            </h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Como nutrir seus bebês com o que realmente importa mesmo sem conseguir
            comprar salmão, chia ou castanhas caras.
          </p>
        </div>

        {/* CTA Principal */}
        <div className="space-y-4">
          <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-bold py-6 px-12 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3">
            <span>QUERO PROTEGER MEU BEBÊ AGORA</span>
            <ArrowDown className="w-6 h-6" />
          </button>
          <p className="text-sm text-gray-500">✅ Acesso imediato • ✅ Acesso Vitalício</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
