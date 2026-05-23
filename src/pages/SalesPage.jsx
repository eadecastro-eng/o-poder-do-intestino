import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Heart, Sparkles, BookOpen, Shield } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import BulletList from '@/components/BulletList';
import PricingCard from '@/components/PricingCard';
import FAQItem from '@/components/FAQItem';
import CTAButton from '@/components/CTAButton';
import EbookMockup from '@/components/EbookMockup';
import { useToast } from '@/components/ui/use-toast';
const SalesPage = () => {
  const {
    toast
  } = useToast();
  const [showStickyButton, setShowStickyButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleCTA = () => {
    window.open('https://chk.eduzz.com/3bjf2ukn', '_blank');
  };
  const symptoms = ["Você acorda inchada mesmo sem ter comido nada de 'errado' no dia anterior", "Seu intestino só funciona com laxantes ou café forte pela manhã", "Você vive cansada, mesmo dormindo bem, e ninguém consegue explicar o porquê", "Seu humor oscila sem motivo aparente - irritabilidade, ansiedade, tristeza sem causa", "Você já fez mil exames e todos deram 'normais', mas você SABE que algo não está certo", "Sua barriga vive desconfortável, com gases, queimação ou aquela sensação de peso"];
  const weekPlan = [{
    week: "Semana 1",
    title: "Reduzir os Agressores",
    description: "Identificar e minimizar alimentos e hábitos que causam inflamação intestinal",
    icon: Shield
  }, {
    week: "Semana 2",
    title: "Nutrir a Microbiota",
    description: "Introduzir alimentos e práticas que alimentam as bactérias benéficas do intestino",
    icon: Heart
  }, {
    week: "Semana 3",
    title: "Regular o Eixo Intestino-Cérebro",
    description: "Estabelecer rotinas que harmonizam a comunicação entre intestino e cérebro",
    icon: Sparkles
  }];
  const results = ["Redução visível do inchaço e sensação de leveza abdominal", "Regularização do trânsito intestinal de forma natural", "Aumento de energia e disposição ao longo do dia", "Melhora no humor, menos irritabilidade e ansiedade", "Pele mais saudável e radiante", "Sono mais reparador e despertar mais revigorado"];
  const productItems = ["E-book completo 'De 21 Dias para um Intestino Desinflamado' (PDF)", "Planner dos 21 dias para acompanhamento diário", "Acesso imediato após a compra", "Suporte por e-mail para dúvidas"];
  const faqs = [{
    question: "Em quanto tempo vou ver resultados?",
    answer: "Muitas pessoas relatam sentir diferença já na primeira semana, especialmente na redução do inchaço e melhora no trânsito intestinal. Os resultados mais profundos, como melhora de energia e humor, costumam aparecer após as 3 semanas completas do protocolo."
  }, {
    question: "Preciso seguir alguma dieta específica?",
    answer: "Não! O plano não é uma dieta restritiva. Você vai aprender a identificar o que funciona PARA VOCÊ, respeitando suas preferências e rotina. O foco é em escolhas conscientes e sustentáveis, não em privação."
  }, {
    question: "Posso fazer mesmo tomando remédios?",
    answer: "Sim, o plano é complementar e não substitui tratamentos médicos. Porém, é sempre importante conversar com seu médico sobre mudanças na alimentação, especialmente se você toma medicações regulares."
  }, {
    question: "Tenho pouco tempo, consigo aplicar?",
    answer: "Sim! O plano foi pensado para ser prático e adaptável à rotina corrida. As ações são simples e podem ser incorporadas gradualmente ao seu dia a dia, sem exigir horas de preparo."
  }, {
    question: "Como recebo o e-book e o planner?",
    answer: "Após a confirmação do pagamento, você recebe um e-mail imediato com o link para download do e-book em PDF e do planner. Tudo 100% digital para você começar na mesma hora."
  }];
  return <>
      <Helmet>
        <title>O Poder do Intestino | 21 Dias para Desinflamar</title>
        <meta name="description" content="Descubra como regular seu intestino de forma natural em apenas 21 dias. Diga adeus ao inchaço, cansaço e desconforto intestinal com nosso plano completo." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>




      <div className="min-h-screen bg-[#f5e6d3] font-['Poppins']">
        {/* Sticky CTA Button */}
        <motion.div initial={{
        y: 100,
        opacity: 0
      }} animate={{
        y: showStickyButton ? 0 : 100,
        opacity: showStickyButton ? 1 : 0
      }} transition={{
        duration: 0.3
      }} style={{
        backgroundColor: 'rgba(26, 77, 71, 0.7)'
      }} className="fixed bottom-0 left-0 right-0 z-50 shadow-[0_-18px_30_rgba(0,0,0,0.15)]">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <p className="font-semibold text-[#d4af37]">21 Dias para um Intestino Desinflamado</p>
              <p className="text-sm text-[#f5e6d3]/80">Por apenas R$ 27,90</p>
            </div>
            <CTAButton onClick={handleCTA} className="w-full md:w-auto text-sm md:text-base">
              Começar Agora
            </CTAButton>
          </div>
        </motion.div>




        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a4d3e]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d3e]/95 via-[#1a4d3e]/85 to-[#1a4d3e]/90 mix-blend-multiply"></div>
          </div>




          <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="text-white">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] text-sm font-semibold mb-6 tracking-wide uppercase">
                O Poder do Intestino
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-['Playfair_Display'] text-[#f5e6d3]">
                Você vive inchada, cansada, com intestino preso e ouvindo que <span className="text-[#d4af37] italic">"está tudo normal" </span>?
              </h1>
              <p className="text-xl md:text-2xl mb-10 leading-relaxed text-[#f5e6d3]/90 font-light">
                Descubra como regular seu intestino de forma natural e definitiva em apenas 21 dias
              </p>
              <CTAButton onClick={handleCTA}>
                Quero começar meus 21 dias
              </CTAButton>
            </motion.div>




            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="flex justify-center w-full">
              <EbookMockup />
            </motion.div>
          </div>
        </section>




        {/* Symptoms Section */}
        <section className="py-20 bg-[#f5e6d3]">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeading className="green-title">Isso parece com você?</SectionHeading>
            <div className="bg-white/50 rounded-2xl p-8 shadow-sm border border-[#1a4d3e]/10">
              <BulletList items={symptoms} variant="alert" />
            </div>
          </div>
        </section>




        {/* Truth About Gut Section */}
        <section className="py-20 bg-[#1a4d3e] text-[#f5e6d3]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="relative">
                <div className="absolute -inset-4 border-2 border-[#d4af37]/30 rounded-2xl transform translate-x-4 translate-y-4"></div>
                <img src="https://horizons-cdn.hostinger.com/70b0f650-7121-4c06-bf1e-6ef244d47b29/intestino_silhueta_mulher-LwlDn.png" alt="Saúde intestinal" className="rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-10" />
              </motion.div>




              <div>
                <SectionHeading>O que ninguém te contou sobre o seu intestino</SectionHeading>
                <div className="space-y-6 text-[#f5e6d3]/90 leading-relaxed font-light text-lg">
                  <p>
                    <strong className="text-[#d4af37] font-medium">70% da sua imunidade está no intestino.</strong> Quando ele está inflamado, seu corpo todo sofre - desde gripes frequentes até alergias que nunca teve antes.
                  </p>
                  <p>
                    <strong className="text-[#d4af37] font-medium">O eixo intestino-cérebro é real.</strong> Seu intestino produz 90% da serotonina do corpo. Intestino inflamado = humor instável, ansiedade e até depressão.
                  </p>
                  <p>
                    <strong className="text-[#d4af37] font-medium">A inflamação silenciosa é invisível nos exames.</strong> Você pode ter inflamação crônica de baixo grau que não aparece em exames padrões, mas que está destruindo sua qualidade de vida.
                  </p>
                  <p>
                    <strong className="text-[#d4af37] font-medium">Os sintomas vão muito além da barriga.</strong> Cansaço crônico, pele opaca, queda de cabelo, ganho de peso, insônia - tudo pode estar conectado ao seu intestino.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Why Diets Don't Work Section */}
        <section className="py-20 bg-[#f5e6d3]">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeading className="green-title">Por que mais uma dieta não resolve</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="bg-white p-8 rounded-2xl border-t-4 border-red-500 shadow-md">
                <h3 className="font-bold text-2xl text-[#1a4d3e] mb-6 font-['Playfair_Display']">Dietas Restritivas</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Cortam grupos alimentares inteiros</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Criam relação de culpa com a comida</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Não consideram sua individualidade</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> São insustentáveis a longo prazo</li>
                  <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Ignoram o emocional e o estresse</li>
                </ul>
              </motion.div>




              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2
            }} className="bg-[#1a4d3e] p-8 rounded-2xl border-t-4 border-[#d4af37] shadow-xl">
                <h3 className="font-bold text-2xl text-[#d4af37] mb-6 font-['Playfair_Display']">Nossa Abordagem</h3>
                <ul className="space-y-4 text-[#f5e6d3]">
                  <li className="flex gap-3"><span className="text-[#d4af37] font-bold">✓</span> Foca em reduzir inflamação</li>
                  <li className="flex gap-3"><span className="text-[#d4af37] font-bold">✓</span> Nutre a microbiota intestinal</li>
                  <li className="flex gap-3"><span className="text-[#d4af37] font-bold">✓</span> Respeita suas preferências</li>
                  <li className="flex gap-3"><span className="text-[#d4af37] font-bold">✓</span> Cria hábitos sustentáveis</li>
                  <li className="flex gap-3"><span className="text-[#d4af37] font-bold">✓</span> Integra corpo, mente e emoções</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>




        {/* 21-Day Plan Section */}
        <section className="py-20 bg-[#1a4d3e]">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeading className="text-center">Como funciona o plano de 21 dias</SectionHeading>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {weekPlan.map((week, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: index * 0.2
            }} className="bg-[#133b2f] rounded-2xl p-8 shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-300 border border-[#d4af37]/20">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
                    <week.icon className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#d4af37] mb-2 font-['Playfair_Display']">{week.week}</h3>
                  <h4 className="text-xl font-semibold text-[#f5e6d3] mb-4">{week.title}</h4>
                  <p className="text-[#f5e6d3]/70 leading-relaxed font-light">{week.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>




        {/* Planner Section */}
        <section className="py-20 bg-[#f5e6d3]">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeading className="green-title">Planner dos 21 dias</SectionHeading>
            <p className="text-[#1a4d3e]/80 mb-10 text-lg leading-relaxed max-w-2xl">
              Acompanhe sua jornada dia a dia com nosso planner exclusivo que te ajuda a monitorar:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[{
              icon: "🍽️",
              title: "Alimentação",
              desc: "Refeições e padrões"
            }, {
              icon: "💧",
              title: "Hidratação",
              desc: "Ingestão de água"
            }, {
              icon: "🚽",
              title: "Evacuação",
              desc: "Regularidade"
            }, {
              icon: "📊",
              title: "Sintomas",
              desc: "Inchaço e desconforto"
            }, {
              icon: "⚡",
              title: "Energia",
              desc: "Níveis de disposição"
            }, {
              icon: "🧘",
              title: "Autocuidado",
              desc: "Relaxamento e sono"
            }, {
              icon: "💭",
              title: "Reflexões",
              desc: "Descobertas diárias"
            }, {
              icon: "📅",
              title: "Rotina",
              desc: "Horários regulares"
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.05
            }} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#d4af37]/50 border border-transparent transition-all duration-300 text-center">
                  <span className="text-4xl block mb-3 drop-shadow-sm">{item.icon}</span>
                  <h4 className="font-semibold text-[#1a4d3e] mb-1">{item.title}</h4>
                  <p className="text-[#1a4d3e]/60 text-xs">{item.desc}</p>
                </motion.div>)}
            </div>
          </div>
        </section>




        {/* Results Section */}
        <section className="py-24 bg-[#1a4d3e] border-y border-[#d4af37]/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1628971021877-37187fde57f4" alt="Mulher energética" className="w-full h-full object-cover mix-blend-luminosity" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl md:text-5xl font-bold text-[#f5e6d3] mb-4 font-['Playfair_Display'] text-center drop-shadow-lg">
                Resultados que você pode esperar
              </h2>
              <div className="w-24 h-1 bg-[#d4af37] rounded-full mx-auto mb-16"></div>
            </motion.div>
            <div className="bg-[#133b2f]/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#d4af37]/30 shadow-2xl">
              <BulletList items={results} variant="check" />
            </div>
            <p className="text-[#d4af37]/80 text-center mt-8 text-sm italic font-light">
              *Resultados podem variar de pessoa para pessoa. Este não é um programa médico e não substitui acompanhamento profissional.
            </p>
          </div>
        </section>




        {/* For Whom Section */}
        <section className="py-20 bg-[#f5e6d3]">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeading className="text-center green-title">Para quem é este e-book</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="bg-[#1a4d3e] p-10 rounded-3xl shadow-xl border border-[#d4af37]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] rounded-full filter blur-[80px] opacity-20"></div>
                <h3 className="text-3xl font-bold text-[#d4af37] mb-8 font-['Playfair_Display']">É para você se...</h3>
                <ul className="space-y-5 text-[#f5e6d3]/90">
                  <li className="flex items-start gap-4">
                    <span className="text-[#d4af37] text-xl font-bold mt-1">✓</span>
                    <span className="leading-relaxed">Você está cansada de viver refém do intestino preso</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#d4af37] text-xl font-bold mt-1">✓</span>
                    <span className="leading-relaxed">Quer entender seu corpo ao invés de apenas seguir dietas prontas</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#d4af37] text-xl font-bold mt-1">✓</span>
                    <span className="leading-relaxed">Busca uma abordagem natural e sustentável</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#d4af37] text-xl font-bold mt-1">✓</span>
                    <span className="leading-relaxed">Quer se sentir leve, disposta e com energia de novo</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#d4af37] text-xl font-bold mt-1">✓</span>
                    <span className="leading-relaxed">Está disposta a dedicar 21 dias para transformar sua saúde</span>
                  </li>
                </ul>
              </motion.div>




              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="bg-white p-10 rounded-3xl shadow-lg border border-[#1a4d3e]/10">
                <h3 className="text-3xl font-bold text-[#1a4d3e] mb-8 font-['Playfair_Display']">Não é para você se...</h3>
                <ul className="space-y-5 text-[#1a4d3e]/70">
                  <li className="flex items-start gap-4">
                    <span className="text-[#1a4d3e] text-xl font-bold mt-1">✕</span>
                    <span className="leading-relaxed">Você busca uma solução mágica instantânea</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#1a4d3e] text-xl font-bold mt-1">✕</span>
                    <span className="leading-relaxed">Não está disposta a fazer mudanças no estilo de vida</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#1a4d3e] text-xl font-bold mt-1">✕</span>
                    <span className="leading-relaxed">Prefere apenas tomar remédios sem entender a causa</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#1a4d3e] text-xl font-bold mt-1">✕</span>
                    <span className="leading-relaxed">Quer uma dieta super restritiva para perder peso rápido</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-[#1a4d3e] text-xl font-bold mt-1">✕</span>
                    <span className="leading-relaxed">Não tem interesse em se conectar com seu corpo</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>




        {/* What You Get Section */}
        <section className="py-20 bg-[#1a4d3e]">
          <div className="max-w-4xl mx-auto px-4">
            <SectionHeading className="text-center">O que você recebe ao comprar</SectionHeading>
            <div className="mt-16">
              <PricingCard originalPrice="97,90" currentPrice="27,90" items={productItems} ctaText="Quero começar meus 21 dias" onCtaClick={handleCTA} />
            </div>
          </div>
        </section>




        {/* FAQ Section */}
        <section className="py-20 bg-[#f5e6d3]">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeading className="text-center green-title">Perguntas Frequentes</SectionHeading>
            <div className="space-y-4 mt-12">
              {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} />)}
            </div>
          </div>
        </section>




        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden bg-[#1a4d3e]">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1670710373686-ba00cef32cb8" alt="Bem-estar" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d3e]/80 via-[#1a4d3e]/90 to-[#1a4d3e]"></div>
          </div>




          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d4af37]/10 mb-4 border border-[#d4af37]/30">
                <Heart className="w-10 h-10 text-[#d4af37]" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#f5e6d3] leading-tight font-['Playfair_Display']">
                Seu corpo não está quebrado
              </h2>
              <p className="text-xl md:text-2xl text-[#f5e6d3]/80 leading-relaxed max-w-3xl mx-auto font-light">
                Ele só precisa de orientação, nutrição adequada e tempo para se reequilibrar.
                Você merece se sentir bem, leve e com energia todos os dias.
              </p>
              <p className="text-xl text-[#d4af37] font-medium pt-4">
                Não espere mais 21 dias para começar a viver sem desconforto.
              </p>
              <div className="pt-8">
                <CTAButton onClick={handleCTA} className="text-xl px-12 py-6">
                  Quero começar a regulação intestinal
                </CTAButton>
              </div>
              <p className="text-sm text-[#f5e6d3]/50 pt-6 tracking-wide">
                ACESSO IMEDIATO • 100% DIGITAL • APENAS R$ 27,90
              </p>
            </motion.div>
          </div>
        </section>




        {/* Footer */}
        <footer className="bg-[#0f2e25] text-[#f5e6d3]/70 py-12 border-t border-[#d4af37]/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
           <p className="text-sm mb-4">
              © 2026 O Poder do Intestino. Todos os direitos reservados.
            </p>
            <p className="text-xs opacity-60 max-w-2xl mx-auto leading-relaxed">
              Aviso Legal: Os resultados podem variar. As informações contidas neste e-book não substituem o aconselhamento de um médico ou profissional de saúde. Sempre consulte um profissional antes de iniciar qualquer mudança na sua dieta ou estilo de vida.
            </p>
          </div>
        </footer>
      </div>
    </>;
};
export default SalesPage;