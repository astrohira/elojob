import { useState, useEffect } from "react";
import {
  Shield,
  Zap,
  Lock,
  HeadphonesIcon,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageCircle,
  Users,
  Trophy,
} from "lucide-react";

const GGMAX_BASE_URL = "https://ggmax.com.br/anuncio/elojob-valorant-v5mq7xto";
const WHATSAPP_URL = "https://wa.me/5524999381822?text=Quero%20saber%20mais%20sobre%20o%20Elojob";

const ranks = [
  { name: "Ferro", <a href="/src/assets/Iron_3_Rank.png"></a> },
  { name: "Bronze", color: "from-amber-700 to-amber-800", icon: "🥉" },
  { name: "Prata", color: "from-gray-300 to-gray-400", icon: "🥈" },
  { name: "Ouro", color: "from-yellow-400 to-yellow-500", icon: "🥇" },
  { name: "Platina", color: "from-cyan-400 to-cyan-500", icon: "💎" },
  { name: "Diamante", color: "from-purple-400 to-purple-500", icon: "💠" },
  { name: "Ascendente", color: "from-emerald-400 to-emerald-500", icon: "⬆️" },
];

const services = [
  {
    title: "Elojob Completo",
    description: "Subimos seu elo do atual até o desejado. Ideal para quem quer evoluir vários ranks de uma vez.",
    price: "R$ 25",
    icon: Trophy,
  },
  {
    title: "Vitória por Partida",
    description: "Pague por vitórias individuais. Perfeito para garantir aquelas MD10 ou sair de quedas.",
    price: "R$ 5",
    icon: Star,
  },
  {
    title: "Duo Boost",
    description: "Jogue junto com nossos boosters em duo. Aprenda enquanto sobe e mantenha sua conta segura.",
    price: "R$ 15",
    icon: Users,
  },
];

const steps = [
  { step: 1, title: "Escolha o Elo", desc: "Selecione o elo atual e o desejado" },
  { step: 2, title: "Compre na GGMAX", desc: "Finalize sua compra com segurança" },
  { step: 3, title: "Envie os Dados", desc: "Envie os dados ou jogue em duo" },
  { step: 4, title: "Acompanhe", desc: "Veja seu progresso até o elo final" },
];

const advantages = [
  { icon: Trophy, title: "Jogadores Experientes", desc: "Boosters com rank Imortal e Radiante" },
  { icon: Zap, title: "Entrega Rápida", desc: "Começamos em até 30 minutos após a compra" },
  { icon: Lock, title: "Sigilo Total", desc: "Sua conta e dados são 100% protegidos" },
  { icon: HeadphonesIcon, title: "Suporte Rápido", desc: "Atendimento via WhatsApp" },
];

const reviews = [
  { name: "Gabriel S.", rank: "Ferro → Platina", text: "Serviço impecável! Subiu minha conta em 2 dias e o suporte foi excelente.", stars: 5 },
  { name: "Lucas M.", rank: "Bronze → Diamante", text: "Muito profissionais, sempre me mantiveram informado sobre o progresso.", stars: 5 },
  { name: "Ana P.", rank: "Prata → Ascendente", text: "Fiz duo boost e foi incrível! Aprendi muito jogando com o booster.", stars: 5 },
  { name: "Pedro H.", rank: "Ouro → Imortal", text: "Terceira vez que uso, nunca tive problemas. Recomendo demais!", stars: 5 },
];

const faqs = [
  {
    question: "É seguro comprar?",
    answer: "Sim! Trabalhamos com VPN para proteção da sua conta e usamos apenas métodos seguros. Além disso, utilizamos a plataforma GGMAX que oferece garantia de compra.",
  },
  {
    question: "Quanto tempo demora para subir?",
    answer: "O tempo varia de acordo com o elo desejado. Em média, conseguimos subir 1 rank completo em 24-48 horas. Para elos mais altos, pode levar um pouco mais.",
  },
  {
    question: "Posso acompanhar o progresso?",
    answer: "Com certeza! Enviamos atualizações constantes via WhatsApp sobre cada partida jogada e vitórias conquistadas.",
  },
  {
    question: "Posso jogar enquanto o serviço está sendo feito?",
    answer: "Para o serviço de Elojob completo, recomendamos não jogar para evitar conflitos. Já no Duo Boost, você joga junto com nosso booster!",
  },
];

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-purple-500/30">
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-400 transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-purple-500" /> : <ChevronDown className="w-5 h-5 text-purple-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white dark">
      {/* Background Pattern */}
      <div className="fixed inset-0 diagonal-lines pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-purple-950/20 pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center font-display text-2xl font-bold">
              L
            </div>
            <span className="font-display text-2xl font-bold tracking-wide">LIL<span className="text-yellow-400">BOOST</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#ranks" className="hover:text-purple-400 transition-colors font-medium">Ranks</a>
            <a href="#servicos" className="hover:text-purple-400 transition-colors font-medium">Serviços</a>
            <a href="#como-funciona" className="hover:text-purple-400 transition-colors font-medium">Como Funciona</a>
            <a href="#faq" className="hover:text-purple-400 transition-colors font-medium">FAQ</a>
          </nav>
          <a
            href={GGMAX_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-6 py-2.5 rounded font-bold text-sm flex items-center gap-2 transition-all hover:scale-105 glow-purple-subtle"
          >
            <ExternalLink className="w-4 h-4" />
            GGMAX
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[150px] animate-pulse-slow" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <ProgressBar />
            <p className="text-sm text-gray-400 mt-2 font-medium">Subindo de elo em tempo real...</p>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-wide">
            SUBA DE ELO NO <br />
            <span className="text-gradient">VALORANT</span> COM<br />
            JOGADORES DE <span className="text-yellow-400">ALTO NÍVEL</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
            Serviço profissional de Elojob com jogadores Imortais e Radiantes. 
            Segurança, rapidez e sigilo total garantidos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={GGMAX_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-10 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-all hover:scale-105 glow-purple"
            >
              COMPRAR NA GGMAX
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#como-funciona"
              className="border-2 border-white/20 hover:border-purple-500/50 px-10 py-4 rounded-lg font-bold text-lg transition-all hover:bg-white/5"
            >
              Como Funciona
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-500" />
              <span className="font-medium">100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Sigilo Total</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-500/50" />
        </div>
      </section>

      {/* Ranks Section */}
      <section id="ranks" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-wide">
              ELOS <span className="text-yellow-400">DISPONÍVEIS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Escolha seu elo atual e deixe nossos boosters fazerem a mágica acontecer
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {ranks.map((rank) => (
              <div
                key={rank.name}
                className="group relative bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover-lift text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${rank.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {rank.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{rank.name}</h3>
                <a
                  href={GGMAX_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-purple-600 hover:bg-purple-500 py-2 rounded text-sm font-bold transition-colors"
                >
                  Comprar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-wide">
              TIPOS DE <span className="text-yellow-400">SERVIÇO</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Escolha a melhor opção para suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover-lift"
                >
                  <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors" />
                  
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="font-bold text-2xl mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">a partir de</span>
                      <p className="text-2xl font-bold text-yellow-400">{service.price}</p>
                    </div>
                    <a
                      href={GGMAX_BASE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-purple-600 px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2"
                    >
                      Comprar
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-wide">
              COMO <span className="text-yellow-400">FUNCIONA</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Processo simples e rápido em 4 passos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent" />
                )}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center font-display text-3xl font-bold glow-purple-subtle">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-wide">
              NOSSAS <span className="text-yellow-400">VANTAGENS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Por que escolher a LilBoost?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover-lift text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-500/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-purple-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
                  <p className="text-gray-400 text-sm">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-wide">
              AVALIAÇÕES DOS <span className="text-yellow-400">CLIENTES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre nós
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-purple-500">{review.rank}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-wide">
              PERGUNTAS <span className="text-yellow-400">FREQUENTES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/50 via-purple-900/30 to-purple-950/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            PRONTO PARA <span className="text-yellow-400">SUBIR DE ELO?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Não perca mais tempo em elos abaixo do seu potencial. Comece agora!
          </p>
          <a
            href={GGMAX_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-105 glow-purple"
          >
            COMPRAR NA GGMAX
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center font-display text-2xl font-bold">
                L
              </div>
              <span className="font-display text-xl font-bold tracking-wide">LIL<span className="text-yellow-400">BOOST</span></span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] px-5 py-2.5 rounded-lg font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2024 LilBoost. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
