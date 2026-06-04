import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Heart, Sparkles, Award, MapPin, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-stone-50 py-12 md:py-20 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <ScrollReveal className="text-center max-w-xl mx-auto mb-10">
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

        {/* Full Horizontal Image with Gradient Border */}
        <ScrollReveal className="relative p-1 bg-gradient-to-tr from-brand-primary via-brand-gold to-brand-secondary rounded-[32px] shadow-xl mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
          <img
            src="/images/gilvania.png"
            alt="Gilvania na cozinha com bolo de chocolate e batedeira"
            className="w-full h-auto object-cover rounded-[28px] bg-white block"
          />
        </ScrollReveal>

        {/* Content Section below the image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Quick Info Sidebar - Gradient Card */}
          <div className="md:col-span-4">
            <ScrollReveal className="bg-gradient-to-br from-brand-dark to-pink-950 text-white rounded-3xl p-6 shadow-md space-y-6 relative overflow-hidden">
              {/* Decorative light circle inside card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-900/30 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="font-serif text-xl font-bold border-b border-white/20 pb-3">
                Perfil da Boleira
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-pink-200">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-pink-200/70 font-semibold uppercase">Nome</span>
                    <span className="font-medium">Gilvania</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-pink-200">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-pink-200/70 font-semibold uppercase">Idade</span>
                    <span className="font-medium">37 anos</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-pink-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-pink-200/70 font-semibold uppercase">Origem</span>
                    <span className="font-medium">Minas Gerais</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-pink-200">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-pink-200/70 font-semibold uppercase">Experiência</span>
                    <span className="font-medium">Mais de 10 anos</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Biography Text Column */}
          <div className="md:col-span-8 space-y-6 text-left">
            <ScrollReveal className="space-y-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">
                A Arte de Confeitar com o Coração
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Minha paixão pela culinária começou nas terras de **Minas Gerais**, onde cresci cercada pelas receitas tradicionais de família, doces de tacho caseiros e o aroma inconfundível do bolo assando no forno no fim da tarde. Foi lá que entendi que a cozinha não é apenas um lugar de preparo, mas sim o coração da casa, onde compartilhamos afeto.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Com **37 anos** de idade e acumulando **mais de uma década de experiência**, especializei-me na arte de fazer bolos. A confeitaria entrou na minha vida como uma forma de levar alegria e doçura para momentos especiais. Cada encomenda é tratada de forma exclusiva e produzida artesanalmente.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                A filosofia que carrego comigo é simples: **fazer tudo com muito amor e carinho**. Acredito que um bolo de qualidade vai além da técnica, ele precisa carregar afeto em cada fatia para fazer parte dos melhores momentos da vida dos meus clientes.
              </p>
            </ScrollReveal>

            {/* Blockquote decoration */}
            <ScrollReveal delay={100} className="border-l-4 border-brand-primary pl-4 py-1.5 bg-brand-accent/50 rounded-r-xl">
              <p className="text-xs text-brand-dark font-serif italic leading-relaxed">
                "Fazer bolo não é apenas misturar ingredientes; é adoçar celebrações, abraçar corações e criar sorrisos na mesa de quem amamos."
              </p>
            </ScrollReveal>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <ScrollReveal delay={150} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-2xs">
                <div className="p-2 bg-pink-50 text-brand-primary rounded-xl shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-850 text-sm">Amor e Dedicação</h4>
                  <p className="text-stone-500 text-xs mt-0.5">Bolos caseiros e decorados preparados com carinho artesanal.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-2xs">
                <div className="p-2 bg-amber-50 text-brand-gold rounded-xl shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-850 text-sm">Origem Mineira</h4>
                  <p className="text-stone-500 text-xs mt-0.5">A essência e hospitalidade de Minas Gerais em cada receita.</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Actions */}
            <ScrollReveal delay={250} className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                to="/cardapio"
                className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-8 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Sparkles className="w-5 h-5" />
                <span>Ver Cardápio</span>
              </Link>
              <Link
                to="/contato"
                className="bg-white hover:bg-stone-50 text-stone-700 font-semibold py-3 px-8 rounded-xl border border-stone-200 hover:border-pink-200 text-center transition-all duration-200"
              >
                Fazer Encomenda
              </Link>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </div>
  );
};
