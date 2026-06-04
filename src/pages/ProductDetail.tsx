import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ShoppingBag, CheckCircle, Info } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product by id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="bg-stone-50 min-h-screen py-16 flex flex-col items-center justify-center font-sans px-4">
        <div className="text-center max-w-md space-y-6">
          <Info className="w-16 h-16 text-rose-500 mx-auto" />
          <h2 className="text-2xl font-serif font-bold text-brand-dark">Docinho não encontrado</h2>
          <p className="text-stone-500 text-sm">
            O produto que você procura não está mais no nosso cardápio ou foi removido.
          </p>
          <Link
            to="/cardapio"
            className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            Voltar ao Cardápio
          </Link>
        </div>
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0].name);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAdd = () => {
    addToCart(product, selectedSize, quantity);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-stone-50 py-10 md:py-16 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-1.5 text-stone-500 hover:text-brand-primary font-medium mb-8 text-sm transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Voltar</span>
        </button>

        {/* Product Grid */}
        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 sm:p-10">
          
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[350px] sm:h-[450px] object-cover rounded-2xl border border-stone-100 bg-brand-accent/20"
            />
            {/* Category tag */}
            <span className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-xs text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md">
              {product.category}
            </span>
          </div>

          {/* Product Actions/Information */}
          <div className="flex flex-col justify-between space-y-6 md:space-y-8">
            
            <div className="space-y-4">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-brand-primary">
                R$ {(product.sizes.find(s => s.name === selectedSize)?.price ?? product.price).toFixed(2)}
              </p>
              <p className="text-stone-650 text-sm leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Size Options Select */}
            <div className="space-y-3.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                Selecione a opção/tamanho:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`p-3.5 text-left border rounded-xl text-xs font-semibold tracking-wide transition-all flex flex-col justify-between gap-1.5 ${
                      selectedSize === size.name
                        ? 'border-brand-primary bg-brand-accent/60 text-brand-dark shadow-xs'
                        : 'border-stone-200 hover:border-pink-200 text-stone-600 hover:bg-stone-50/50'
                    }`}
                  >
                    <span className="font-semibold">{size.name}</span>
                    <span className="text-[11px] font-bold text-brand-primary">R$ {size.price.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and CTA */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                
                {/* Quantity Control */}
                <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden bg-stone-50 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-stone-100 text-stone-600 font-bold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-6 text-sm font-semibold text-stone-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-stone-100 text-stone-600 font-bold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAdd}
                  className="w-full sm:flex-1 bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Adicionar à Sacola</span>
                </button>

              </div>
            </div>

            {/* Ingredients Checklist */}
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                Ingredientes Principais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-650 text-sm">
                {product.ingredients.map((ing, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
