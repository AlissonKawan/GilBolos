import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, Info, Cake } from 'lucide-react';

export const Menu = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-stone-50 py-12 md:py-16 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Nosso Cardápio
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed">
            Navegue por nossas delícias artesanais. Escolha seus sabores favoritos e faça sua encomenda em quilos ou fatias.
          </p>
        </div>

        {/* Pricing Rules Information Banner */}
        <div className="bg-gradient-to-r from-pink-500/10 to-brand-primary/10 border border-brand-primary/20 rounded-3xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <div className="p-4 bg-brand-primary/15 text-brand-primary rounded-2xl shrink-0">
            <Cake className="w-10 h-10" />
          </div>
          <div className="space-y-2 text-center md:text-left flex-1">
            <h2 className="font-serif text-xl font-bold text-brand-dark">Como funcionam as nossas encomendas:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="bg-white/80 p-3.5 rounded-xl border border-pink-100/50">
                <span className="font-bold text-brand-primary text-sm">🎂 Bolos Inteiros</span>
                <p className="text-xs text-stone-600 mt-1 leading-normal">
                  Vendidos sob encomenda a partir de <strong>1.0 kg</strong>. O valor é fixado em <strong>R$ 100,00 por quilo</strong>.
                </p>
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-pink-100/50">
                <span className="font-bold text-brand-primary text-sm">🍰 Fatias Avulsas</span>
                <p className="text-xs text-stone-600 mt-1 leading-normal">
                  Deseja apenas um pedaço? Vendemos fatias individuais de qualquer sabor do cardápio por <strong>R$ 13,00 cada</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs mb-10 flex justify-between items-center">
          <div className="text-stone-700 font-medium text-sm">
            Mostrando todos os {filteredProducts.length} bolos disponíveis
          </div>

          <div className="relative w-full max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Buscar sabor de bolo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 hover:bg-stone-100/50 focus:bg-white text-stone-800 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:border-brand-primary focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-100 text-stone-400 space-y-4">
            <Info className="w-12 h-12 stroke-1 mx-auto text-stone-300" />
            <p className="font-medium">Nenhum bolo encontrado para a sua busca.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-brand-primary font-semibold hover:underline text-sm"
            >
              Limpar busca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Image */}
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md shadow-xs">
                    Em Quilo ou Fatia
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest mb-1.5 block">
                    Bolo Especial
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-850 mb-2 group-hover:text-brand-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Pricing and Action buttons */}
                  <div className="mt-auto pt-4 border-t border-stone-50 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block tracking-wider uppercase">Fatia a partir de</span>
                      <span className="text-lg font-bold text-brand-dark">R$ {product.sizes[0].price.toFixed(2)}</span>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={`/produto/${product.id}`}
                        className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-semibold py-2 px-4 rounded-xl text-xs transition-colors"
                      >
                        Ver Detalhes
                      </Link>
                      <button
                        onClick={() => addToCart(product, product.sizes[0].name, 1)}
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
        )}

      </div>
    </div>
  );
};
