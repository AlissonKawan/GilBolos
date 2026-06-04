import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Heart, Sparkles, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-stone-50 py-12 md:py-20 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <ScrollReveal className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <span className="inline-block bg-pink-100 text-brand-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-3">
            Quem Faz Acontecer ✨
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            A Boleira por Trás do Sabor
          </h1>
          <p className="text-stone-500 text-sm">
            Conheça a história de amor, dedicação e açúcar que dá vida à Gil Bolos e Doces.
          </p>
        </ScrollReveal>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo with artistic frames */}
          <div className="lg:col-span-5 relative flex justify-center">
            <ScrollReveal className="relative group">
              {/* Decorative background shapes */}
              <div className="absolute -inset-4 bg-pink-200/50 rounded-3xl blur-xl -z-10 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-pink-100 rounded-full -z-10" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-brand-accent rounded-full -z-10" />
              
              {/* Main Photo */}
              <img
                src="/images/gilvania.png"
                alt="Gilvania - Confeiteira da Gil Bolos e Doces"
                className="w-full max-w-md h-[400px] object-cover rounded-3xl shadow-xl border-4 border-white transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </ScrollReveal>
          </div>

          {/* Right Side: Text Biography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal className="space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="font-serif text-3xl font-bold text-brand-dark">
                  Gilvania
                </h2>
                <span className="bg-brand-accent text-brand-primary text-xs font-bold px-3 py-1 rounded-full border border-pink-100">
                  37 anos
                </span>
              </div>
              <p className="text-brand-gold font-serif italic text-lg font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                <span>Nascida em Minas Gerais</span>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="space-y-4 text-stone-600 text-sm leading-relaxed">
              <p>
                Minha paixão pela culinária começou nas terras mineiras, onde cresci cercada pelo cheiro de café passado na hora, pão de queijo quentinho e doces caseiros borbulhando no tacho. Foi lá que aprendi que a cozinha é o coração da casa e que a comida tem o poder único de reunir pessoas e criar memórias felizes.
              </p>
              <p>
                Há <strong>mais de 10 anos</strong>, decidi transformar essa paixão em profissão. Comecei a me dedicar inteiramente à confeitaria artesanal, especializando-me na produção de bolos caseiros, fatias gourmet e bolos festivos personalizados. 
              </p>
              <p>
                Para mim, fazer um bolo não é apenas misturar ingredientes e seguir receitas: é colocar <strong>muito amor e carinho</strong> em cada etapa do processo. Da escolha das frutas frescas à decoração final do topo, cada detalhe é planejado para que a sua comemoração seja inesquecível e muito doce.
              </p>
            </ScrollReveal>

            {/* Icons highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <ScrollReveal delay={150} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-100/60 shadow-2xs">
                <div className="p-2.5 bg-pink-50 text-brand-primary rounded-xl shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-850 text-sm">Tudo com Carinho</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Produção artesanal e personalizada para cada cliente.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-100/60 shadow-2xs">
                <div className="p-2.5 bg-amber-50 text-brand-gold rounded-xl shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-850 text-sm">Mais de 10 Anos</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Uma década de experiência adoçando festas e lares.</p>
                </div>
              </ScrollReveal>
            </div>

            {/* CTA buttons */}
            <ScrollReveal delay={250} className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/cardapio"
                className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-8 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Sparkles className="w-5 h-5" />
                <span>Ver Nosso Cardápio</span>
              </Link>
              <Link
                to="/contato"
                className="bg-white hover:bg-stone-50 text-stone-700 font-semibold py-3 px-8 rounded-xl border border-stone-200 hover:border-pink-200 text-center transition-all duration-200"
              >
                Fazer uma Encomenda
              </Link>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </div>
  );
};
