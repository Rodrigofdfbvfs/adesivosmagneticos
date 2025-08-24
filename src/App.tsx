import React, { useState } from 'react';
import { 
  Instagram, 
  Star, 
  Zap, 
  Users, 
  Heart, 
  TrendingUp, 
  Clock, 
  Shield, 
  Download, 
  Smartphone,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentProof, setCurrentProof] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits');
    benefitsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialProofs = [
    {
      image: "https://digitalvante.com/wp-content/uploads/2025/08/Design-sem-nome-2025-08-17T004911.666.webp",
      alt: "Prova social 1 - Depoimento de cliente satisfeito"
    },
    {
      image: "https://digitalvante.com/wp-content/uploads/2025/08/Design-sem-nome-2025-08-17T004917.517.webp", 
      alt: "Prova social 2 - Resultado de engajamento"
    },
    {
      image: "https://digitalvante.com/wp-content/uploads/2025/08/Design-sem-nome-_46_-1.webp",
      alt: "Prova social 3 - Feedback positivo"
    }
  ];

  const nextProof = () => {
    setCurrentProof((prev) => (prev + 1) % socialProofs.length);
  };

  const prevProof = () => {
    setCurrentProof((prev) => (prev - 1 + socialProofs.length) % socialProofs.length);
  };

  const faqs = [
    {
      question: "Como funciona o download dos adesivos?",
      answer: "Após a compra, você recebe instantaneamente um link para download com todos os adesivos em alta qualidade. É só baixar e começar a usar!"
    },
    {
      question: "Os adesivos funcionam em qualquer celular?",
      answer: "Sim! Nossos adesivos são compatíveis com iOS e Android. Funcionam perfeitamente no Instagram Stories, WhatsApp Status e outras redes sociais."
    },
    {
      question: "Posso usar os adesivos comercialmente?",
      answer: "Absolutamente! Você pode usar tanto para seu Instagram pessoal quanto para seu negócio. Perfeito para aumentar o engajamento e profissionalizar seus stories."
    },
    {
      question: "Quantos adesivos vem no pacote?",
      answer: "O pacote básico (R$ 10) tem 50+ adesivos essenciais. O pacote premium (R$ 25) tem 200+ adesivos + templates exclusivos + atualizações gratuitas."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Garantia de 7 dias. Se não gostar, devolvemos seu dinheiro sem perguntas. Mas temos certeza que você vai amar!"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.6),transparent_70%)] animate-pulse"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-3">
            <img 
              src="https://digitalvante.com/wp-content/uploads/2025/08/width_800-12.webp"
              alt="Logo DigitalVante"
              className="max-w-[240px] sm:max-w-[280px] md:max-w-[320px] h-auto mx-auto animate-fadeIn"
              loading="lazy"
            />
          </div>
          
          <div className="mb-8 mt-6 inline-block">
            <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-500 px-6 py-2 rounded-full text-sm font-bold">
              <Zap className="w-4 h-4" />
              <span>EXCLUSIVO - ÚLTIMAS VAGAS</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            PARE DE SER
            <br />
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              INVISÍVEL
            </span>
            <br />
            NO INSTAGRAM!
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            <strong>PARE DE POSTAR STORIES AMADORES!</strong> Tenha adesivos que fazem seus seguidores 
            <span className="text-cyan-400"> desça a tela do seu celular</span> e aumentem seu engajamento em 
            <span className="text-green-400"> +300%</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToBenefits}
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              VER BENEFÍCIOS AGORA
            </button>
          </div>
          
          <div className="mt-8 text-center" aria-label="Preço promocional: de 90 reais por apenas 10 reais">
            <div className="flex items-center justify-center gap-2 text-sm mb-0">
              <span className="line-through text-gray-400">DE R$ 90,00</span>
              <span className="text-white font-semibold uppercase">POR APENAS</span>
            </div>
            <div className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight drop-shadow-lg mt-1">
              R$ 10,00
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              VEJA OS
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ADESIVOS INCRÍVEIS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estes são apenas alguns exemplos dos <strong>200+ adesivos</strong> que você vai receber
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative bg-black rounded-xl overflow-hidden aspect-[9/16]">
                <img 
                  src="https://digitalvante.com/wp-content/uploads/2025/07/IMG_4491.jpg" 
                  alt="Adesivos de Stories - Exemplo 1"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/20 to-green-900/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative bg-black rounded-xl overflow-hidden aspect-[9/16]">
                <img 
                  src="https://digitalvante.com/wp-content/uploads/2025/07/IMG_4536.jpg" 
                  alt="Adesivos de Stories - Exemplo 2"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/20 to-yellow-900/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative bg-black rounded-xl overflow-hidden aspect-[9/16]">
                <img 
                  src="https://digitalvante.com/wp-content/uploads/2025/07/IMG_4505.jpg" 
                  alt="Adesivos de Stories - Exemplo 3"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-900/20 to-red-900/20 p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative bg-black rounded-xl overflow-hidden aspect-[9/16]">
                <img 
                  src="https://digitalvante.com/wp-content/uploads/2025/07/IMG_4525.jpg" 
                  alt="Adesivos de Stories - Exemplo 4"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-300 mb-4">
              E isso é só o <span className="text-cyan-400">COMEÇO!</span>
            </p>
            <p className="text-lg text-gray-400">
              No pacote completo você recebe centenas de adesivos únicos como estes
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              POR QUE VOCÊ PRECISA
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                DESTES ADESIVOS?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chega de stories que passam despercebidos! Seus seguidores vão <strong>AMAR</strong> seu conteúdo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">ENGAJAMENTO EXPLOSIVO</h3>
              <p className="text-gray-300">
                Aumente suas visualizações, curtidas e comentários em até <span className="text-cyan-400 font-bold">300%</span>. 
                Seus stories vão bombar!
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="bg-gradient-to-r from-green-600 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">MAIS SEGUIDORES</h3>
              <p className="text-gray-300">
                Stories incríveis = mais pessoas te seguindo! Ganhe <span className="text-yellow-400 font-bold">milhares</span> 
                de seguidores genuínos.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="bg-gradient-to-r from-yellow-600 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">DESTAQUE TOTAL</h3>
              <p className="text-gray-300">
                Seja <span className="text-red-400 font-bold">ÚNICO</span> no feed! Seus amigos vão perguntar 
                onde você conseguiu adesivos tão incríveis.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="bg-gradient-to-r from-red-600 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">PERSONALIDADE ÚNICA</h3>
              <p className="text-gray-300">
                Mostre quem você é! Adesivos para <span className="text-purple-400 font-bold">todo mood</span> 
                e momento da sua vida.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">PARA SEMPRE SEU</h3>
              <p className="text-gray-300">
                Comprou uma vez, usa para sempre! Sem mensalidade, sem pegadinha. 
                <span className="text-cyan-400 font-bold"> É seu!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              É MAIS FÁCIL
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                DO QUE VOCÊ IMAGINA!
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Em <strong>3 passos simples</strong> você já está usando os adesivos mais incríveis do Instagram
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-black px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                PASSO 1
              </div>
              <h3 className="text-2xl font-bold mb-4">BAIXE INSTANTÂNEO</h3>
              <p className="text-gray-300">
                Após a compra, receba o link de download na hora. Salve os adesivos no seu celular em segundos!
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-cyan-600 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-r from-cyan-600 to-green-500 text-black px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                PASSO 2
              </div>
              <h3 className="text-2xl font-bold mb-4">ABRA O INSTAGRAM</h3>
              <p className="text-gray-300">
                Vá no Instagram Stories, toque no ícone de adesivos e escolha "Galeria" para acessar seus novos adesivos.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-600 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="bg-gradient-to-r from-green-600 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                PASSO 3
              </div>
              <h3 className="text-2xl font-bold mb-4">ARRASE NOS STORIES</h3>
              <p className="text-gray-300">
                Coloque os adesivos nos seus stories e veja o engajamento explodir! Seus seguidores vão amar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-b from-black via-green-900/10 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              VEJA O QUE NOSSOS
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                CLIENTES DIZEM
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              <strong>Resultados reais</strong> de pessoas que já transformaram seus stories com nossos adesivos
            </p>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-lg border border-green-500/20">
              <div className="aspect-[1080/1350] relative">
                <img 
                  src={socialProofs[currentProof].image}
                  alt={socialProofs[currentProof].alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevProof}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextProof}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {socialProofs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProof(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProof
                      ? 'bg-gradient-to-r from-green-400 to-cyan-400'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-300 mb-4">
              Mais de <span className="text-green-400">200 clientes</span> satisfeitos!
            </p>
            <p className="text-lg text-gray-400">
              Junte-se a milhares de pessoas que já transformaram seus stories
            </p>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ESCOLHA SEU
              <br />
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                PACOTE PERFEITO
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              <strong>ATENÇÃO:</strong> Promoção por tempo limitado! Não perca essa oportunidade única.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Package */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/30 relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">PACOTE ESSENCIAL</h3>
                  <p className="text-gray-400">Perfeito para começar</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-5xl font-black mb-2">
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      R$ 9,99
                    </span>
                  </div>
                  <p className="text-gray-400">Pagamento único</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Mais de 150+ adesivos incríveis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Alta qualidade (HD)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Download instantâneo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Uso pessoal e comercial</span>
                  </div>
                </div>
                
                <a 
                  href="https://pay.adesivosmagneticos.shop/checkout-white-7080/?add-to-cart=7080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  COMPRAR AGORA
                </a>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border-2 border-yellow-400 relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold transform rotate-12 z-20">
                PREMIUM
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-black bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent mb-3">
                    PACOTE PREMIUM
                  </h3>
                  <p className="text-amber-200 font-semibold">Para quem quer ser ÚNICO</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-lg text-amber-300 font-bold mb-2 line-through opacity-75">
                    De R$ 50
                  </div>
                  <div className="text-5xl font-black mb-2">
                    <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
                      R$ 24,99
                    </span>
                  </div>
                  <p className="text-amber-200 font-semibold">Pagamento único - Acesso vitalício</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">1000+ adesivos EXCLUSIVOS de alta qualidade</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">100 figurinhas minimalistas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">100 sombras sofisticadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">Templates de frases para instagram</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">Acesso imediato</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">Acesso vitalício</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">Atualizações GRATUITAS para sempre</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">Suporte VIP prioritário</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">Garantia TOTAL de 7 dias</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-amber-100 font-semibold">Canal completo de adesivos no telegram</span>
                  </div>
                </div>
                
                <a 
                  href="https://pay.adesivosmagneticos.shop/checkout-white-7085/?add-to-cart=7085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 py-5 rounded-xl text-xl font-black text-black transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/70 border-2 border-yellow-300/50 text-center"
                >
                  QUERO SER PREMIUM AGORA
                </a>
                
                <div className="text-center mt-4">
                  <p className="text-amber-300 text-sm font-semibold animate-pulse">
                    Apenas 47 vagas restantes!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              PERGUNTAS
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                FREQUENTES
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas antes de turbinar seus stories!
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-purple-500/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-500/10 transition-colors duration-300"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-300 border-t border-purple-500/20">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Instagram className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold">Stories Magnéticos</span>
          </div>
          <p className="text-gray-400">
            Transforme seus stories em sucessos. © 2025 - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;