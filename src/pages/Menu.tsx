import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, SlidersHorizontal } from 'lucide-react';

export const Menu = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'bolos', name: 'Bolos' },
    { id: 'doces', name: 'Docinhos' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'festivos', name: 'Especiais de Festa' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
            Navegue por nossas delícias artesanais. Escolha seus itens preferidos e monte sua sacola de encomendas.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs mb-10 flex flex-col md:flex-row gap-6 justify-between items-center">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === category.id
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'bg-stone-100 hover:bg-pink-100/50 text-stone-600 hover:text-brand-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Buscar doce ou bolo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 hover:bg-stone-100/50 focus:bg-white text-stone-800 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:border-brand-primary focus:outline-none transition-all"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-100 text-stone-400 space-y-4">
            <SlidersHorizontal className="w-12 h-12 stroke-1 mx-auto text-stone-300" />
            <p className="font-medium">Nenhum doce encontrado para os filtros selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="text-brand-primary font-semibold hover:underline text-sm"
            >
              Limpar filtros
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
                  {product.category === 'bolos' && (
                    <span className="absolute bottom-4 left-4 bg-amber-500 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-md shadow-xs">
                      Sob Medida
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest mb-1.5 block">
                    {product.category === 'bolos' ? 'Bolo' : product.category === 'doces' ? 'Doce Fino' : product.category}
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
                      <span className="text-xs text-stone-400 block tracking-wider uppercase">Preço base</span>
                      <span className="text-lg font-bold text-brand-dark">R$ {product.price.toFixed(2)}</span>
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
