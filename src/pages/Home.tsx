import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Award, ShieldCheck, HeartHandshake, Star, ArrowRight, ShoppingBag } from 'lucide-react';

export const Home: React.FC = () => {
  const { addToCart } = useCart();
  
  // Highlight first 3 products as featured
  const featuredProducts = products.slice(0, 3);

  const testimonials = [
    {
      name: 'Mariana Silva',
      role: 'Aniversariante',
      text: 'O Bolo de Morango Gourmet foi o grande destaque da minha festa! Super molhadinho, doce na medida certa e os morangos estavam incrivelmente frescos. Todo mundo elogiou.',
      rating: 5,
    },
    {
      name: 'Carlos Oliveira',
      role: 'Noivo',
      text: 'Encomendamos o bolo de casamento e os docinhos finos. A entrega foi pontualíssima e o visual do bolo rústico superou nossas expectativas. Os brigadeiros belgas sumiram da mesa em minutos!',
      rating: 5,
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-accent via-white to-pink-50/50 py-16 md:py-24 border-b border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Left Text */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left animate-fade-in">
            <span className="inline-block bg-pink-100 text-brand-primary text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
              Feito com Amor e Carinho 💖
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
              Momentos especiais merecem <span className="text-brand-primary italic">doces inesquecíveis</span>.
            </h1>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Na Gil Bolos e Doces, criamos bolos e doces artesanais personalizados para festas, casamentos ou aquele café da tarde especial. Conheça nosso cardápio e faça sua encomenda!
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link
                to="/cardapio"
                className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3.5 px-8 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Ver Cardápio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contato"
                className="bg-white hover:bg-stone-50 text-stone-700 font-semibold py-3.5 px-8 rounded-xl border border-stone-200 hover:border-pink-200 text-center transition-all duration-200"
              >
                Encomendas Customizadas
              </Link>
            </div>
          </div>

          {/* Hero Right Image */}
          <div className="relative flex justify-center items-center">
            {/* Soft background shape decoration */}
            <div className="absolute -inset-4 bg-pink-200/40 rounded-full blur-2xl -z-10" />
            <img
              src="/images/strawberry_cake.png"
              alt="Bolo de Morango Gourmet Gil Bolos e Doces"
              className="w-full max-w-md h-[400px] object-cover rounded-3xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-dark mb-4">
              Nosso Segredo é o Afeto
            </h2>
            <p className="text-stone-500 text-sm">
              Cada pedido é preparado de forma única, garantindo a máxima qualidade em cada detalhe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 text-center space-y-4 hover:bg-brand-accent/30 rounded-2xl transition-colors duration-200">
              <div className="inline-flex p-3.5 bg-pink-100 text-brand-primary rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-brand-dark">Ingredientes Nobres</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Utilizamos chocolates nobres, frutas frescas da estação e insumos selecionados para que cada fatia seja divina.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 text-center space-y-4 hover:bg-brand-accent/30 rounded-2xl transition-colors duration-200">
              <div className="inline-flex p-3.5 bg-pink-100 text-brand-primary rounded-xl">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-brand-dark">Receitas de Família</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Nosso diferencial é o toque caseiro e o sabor equilibrado, livre de conservantes e excesso de açúcar.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 text-center space-y-4 hover:bg-brand-accent/30 rounded-2xl transition-colors duration-200 sm:col-span-2 lg:col-span-1">
              <div className="inline-flex p-3.5 bg-pink-100 text-brand-primary rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-brand-dark">100% Personalizado</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Você escolhe a massa, recheio e decoração do seu bolo. Nós fazemos seu bolo de sonhos virar realidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="font-serif text-3xl font-bold text-brand-dark mb-2">
                Os Queridinhos da Confeitaria
              </h2>
              <p className="text-stone-500 text-sm">
                Os itens mais pedidos e elogiados pelos nossos clientes.
              </p>
            </div>
            <Link
              to="/cardapio"
              className="text-brand-primary hover:text-brand-secondary font-semibold flex items-center gap-1 transition-colors text-sm"
            >
              <span>Ver cardápio completo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="h-64 overflow-hidden relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-primary text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm">
                    Destaque
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-2 truncate">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Price & Action */}
                  <div className="mt-auto pt-4 border-t border-stone-50 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block uppercase tracking-wider">A partir de</span>
                      <span className="text-lg font-bold text-brand-dark">R$ {product.price.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/produto/${product.id}`}
                        className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold py-2 px-4 rounded-xl text-xs transition-colors"
                      >
                        Detalhes
                      </Link>
                      <button
                        onClick={() => addToCart(product, product.sizes[0], 1)}
                        className="bg-brand-primary hover:bg-brand-secondary text-white p-2.5 rounded-xl transition-colors shadow-xs"
                        aria-label={`Adicionar ${product.name} à sacola`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-bold text-brand-dark mb-4">
              Quem Provou, Amou!
            </h2>
            <p className="text-stone-500 text-sm">
              Confira os depoimentos de nossos clientes apaixonados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-stone-50 border border-stone-100/50 p-8 rounded-2xl space-y-4 hover:shadow-md transition-shadow relative"
              >
                <div className="flex text-amber-500 gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-stone-600 text-sm italic leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-semibold text-stone-800 text-sm">{t.name}</h4>
                  <p className="text-xs text-stone-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-dark py-16 md:py-20 text-white text-center relative overflow-hidden">
        {/* Decorative circle shapes */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-900/40 rounded-full blur-2xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-950/40 rounded-full blur-2xl" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6 md:space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Quer um bolo personalizado para o seu evento?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Montamos bolos de andares, doces decorados e lembrancinhas gourmet sob medida. Fale conosco pelo WhatsApp, descreva o que precisa e enviamos um orçamento sem compromisso.
          </p>
          <div className="pt-2">
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>Fazer Orçamento / Contato</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
