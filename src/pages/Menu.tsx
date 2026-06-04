import { useState } from 'react';
import { products, portfolioItems } from '../data/products';
import { useCart } from '../context/CartContext';
import { Cake, Sparkles, Check, ShoppingBag, Eye } from 'lucide-react';

export const Menu = () => {
  const { addToCart } = useCart();
  const baseProduct = products[0]; // Bolo Personalizado

  // State for the cake configurator
  const [sizeOption, setSizeOption] = useState(baseProduct.sizes[0]); // Default to Fatia
  const [massa, setMassa] = useState('Branca (Baunilha)');
  const [recheios, setRecheios] = useState<string[]>(['Creme de Leite Ninho']);
  const [cobertura, setCobertura] = useState('Chantilly Tradicional');
  const [decoracao, setDecoracao] = useState('Morangos Frescos');
  const [quantity, setQuantity] = useState(1);
  const isFatia = sizeOption.name.includes('Fatia');

  // Available options
  const massas = ['Branca (Baunilha)', 'Cacau (Chocolate)', 'Red Velvet (Aveludada)'];
  const recheiosDisponiveis = [
    'Creme de Leite Ninho',
    'Brigadeiro Gourmet Belga',
    'Geleia Artesanal de Morango',
    'Ganache de Chocolate Branco',
    'Geleia de Damasco',
    'Doce de Leite Cremoso'
  ];
  const coberturas = [
    'Chantilly Tradicional',
    'Ganache de Chocolate Meio Amargo',
    'Cream Cheese Frosting (Cítrico)',
    'Naked Cake (Sem Cobertura)'
  ];
  const decoracoes = [
    'Morangos Frescos',
    'Raspas de Chocolate Nobre',
    'Granulado Split Belga Callebaut',
    'Fita de Cetim Vermelha',
    'Frutas Silvestres',
    'Clean (Sem adicionais)'
  ];

  // Handle recheio multiple selection (max 2)
  const toggleRecheio = (r: string) => {
    setRecheios((prev) => {
      if (prev.includes(r)) {
        return prev.filter((item) => item !== r);
      }
      if (prev.length >= 2) {
        // Replace the oldest selection if more than 2
        return [prev[1], r];
      }
      return [...prev, r];
    });
  };

  const handleAddCustomCake = () => {
    const finalDecoracao = isFatia ? 'Decoração Padrão (Sem personalização no topo)' : decoracao;
    
    // Format the customization string
    const customizationString = `${sizeOption.name} (Massa: ${massa}, Recheio: ${recheios.join(' & ')}, Cobertura: ${cobertura}, Decoração: ${finalDecoracao})`;
    
    // Add to cart
    addToCart(baseProduct, customizationString, quantity);
  };

  // State for image zoom modal
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <div className="bg-stone-50 py-12 md:py-16 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Nosso Cardápio Interativo
          </h1>
          <p className="text-stone-500 text-sm leading-relaxed">
            Confira as fotos de nossos trabalhos reais e use o configurador exclusivo para montar o bolo dos seus sonhos!
          </p>
        </div>

        {/* 1. PORTFOLIO / GALLERY */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Sparkles className="w-6 h-6 text-brand-primary" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">
              Nosso Trabalho (Inspirações Reais)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-stone-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group relative"
              >
                {/* Photo container */}
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Zoom Overlay */}
                  <div
                    className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer"
                    onClick={() => setZoomImage(item.image)}
                  >
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                {/* Text Content */}
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <h3 className="font-serif font-bold text-stone-850 text-lg group-hover:text-brand-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. CUSTOM CAKE BUILDER FORM */}
        <section id="monte-seu-bolo" className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6 md:p-10 lg:p-12">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Form Left Side: Selections */}
            <div className="flex-1 space-y-8">
              
              <div className="border-b border-stone-100 pb-4">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark flex items-center gap-2.5">
                  <Cake className="w-7 h-7 text-brand-primary" />
                  <span>Monte o Seu Bolo</span>
                </h2>
                <p className="text-xs text-stone-400 mt-1">
                  Selecione os ingredientes para enviarmos o orçamento do seu bolo sob medida.
                </p>
              </div>

              {/* STEP 1: SIZE / TIPO */}
              <div className="space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                  Passo 1: Tipo & Peso (Regras: Fatia R$ 13 / Bolo R$ 100/kg)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {baseProduct.sizes.map((size) => (
                    <button
                      key={size.name}
                      type="button"
                      onClick={() => setSizeOption(size)}
                      className={`p-4 text-left border rounded-2xl transition-all cursor-pointer ${
                        sizeOption.name === size.name
                          ? 'border-brand-primary bg-brand-accent/50 text-brand-dark font-semibold'
                          : 'border-stone-200 hover:border-pink-200 text-stone-600 hover:bg-stone-50/50'
                      }`}
                    >
                      <div className="text-xs leading-normal">{size.name}</div>
                      <div className="text-brand-primary font-bold text-sm mt-1">R$ {size.price.toFixed(2)}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 2: MASSA */}
              <div className="space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                  Passo 2: Massa (Sabor da Massa)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {massas.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMassa(m)}
                      className={`p-3.5 text-center border rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        massa === m
                          ? 'border-brand-primary bg-brand-accent/40 text-brand-dark'
                          : 'border-stone-200 hover:border-pink-200 text-stone-650'
                      }`}
                    >
                      {massa === m && <Check className="w-4 h-4 text-brand-primary shrink-0" />}
                      <span>{m}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 3: RECHEIO */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                    Passo 3: Recheio (Selecione até 2 sabores)
                  </span>
                  <span className="text-[10px] text-brand-primary font-semibold">
                    {recheios.length}/2 Selecionados
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recheiosDisponiveis.map((r) => {
                    const isSelected = recheios.includes(r);
                    return (
                      <button
                        key={r}
                        type="button"
                        onClick={() => toggleRecheio(r)}
                        className={`p-3.5 text-left border rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-brand-primary bg-brand-accent/40 text-brand-dark'
                            : 'border-stone-200 hover:border-pink-200 text-stone-650'
                        }`}
                      >
                        <span>{r}</span>
                        {isSelected && <Check className="w-4 h-4 text-brand-primary shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 4: COBERTURA */}
              <div className="space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                  Passo 4: Cobertura externa
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coberturas.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCobertura(c)}
                      className={`p-3.5 text-left border rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center justify-between cursor-pointer ${
                        cobertura === c
                          ? 'border-brand-primary bg-brand-accent/40 text-brand-dark'
                          : 'border-stone-200 hover:border-pink-200 text-stone-650'
                      }`}
                    >
                      <span>{c}</span>
                      {cobertura === c && <Check className="w-4 h-4 text-brand-primary shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* STEP 5: DECORAÇÃO */}
              <div className="space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                  Passo 5: Adicionais & Decorações do Topo {isFatia && <span className="text-rose-500 font-semibold normal-case">(Indisponível para Fatias)</span>}
                </span>
                {isFatia ? (
                  <div className="p-4 bg-stone-100 rounded-xl border border-stone-200/60 text-xs text-stone-500 leading-normal">
                    ℹ️ Fatias individuais possuem acabamento e decoração padrão da confeitaria (conforme disponibilidade do dia) e <strong>não podem ser personalizadas com adicionais ou decorações no topo</strong>.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {decoracoes.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDecoracao(d)}
                        className={`p-3 text-center border rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          decoracao === d
                            ? 'border-brand-primary bg-brand-accent/40 text-brand-dark'
                            : 'border-stone-200 hover:border-pink-200 text-stone-650'
                        }`}
                      >
                        {decoracao === d && <Check className="w-3.5 h-3.5 text-brand-primary shrink-0" />}
                        <span>{d}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Form Right Side: Real-time calculation and checkout */}
            <div className="w-full lg:w-80 bg-stone-50 p-6 rounded-3xl border border-stone-200/60 self-start space-y-6">
              <h3 className="font-serif text-lg font-bold text-brand-dark border-b border-stone-200 pb-2">
                Resumo do Seu Bolo
              </h3>

              {/* Summary details */}
              <div className="text-xs text-stone-600 space-y-3.5">
                <div>
                  <span className="font-bold text-stone-850 block">Tamanho/Peso:</span>
                  <span>{sizeOption.name}</span>
                </div>
                <div>
                  <span className="font-bold text-stone-850 block">Massa:</span>
                  <span>{massa}</span>
                </div>
                <div>
                  <span className="font-bold text-stone-850 block">Recheio:</span>
                  <span>{recheios.length > 0 ? recheios.join(' e ') : 'Nenhum recheio selecionado'}</span>
                </div>
                <div>
                  <span className="font-bold text-stone-850 block">Cobertura:</span>
                  <span>{cobertura}</span>
                </div>
                <div>
                  <span className="font-bold text-stone-850 block">Decoração:</span>
                  <span>{isFatia ? 'Padrão da Confeitaria' : decoracao}</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2 pt-2 border-t border-stone-200">
                <span className="block text-[11px] font-bold uppercase text-stone-500">Quantidade:</span>
                <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-white max-w-[120px]">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2.5 py-1.5 hover:bg-stone-100 text-stone-600 font-bold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-semibold text-stone-800 flex-1 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2.5 py-1.5 hover:bg-stone-100 text-stone-600 font-bold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="pt-4 border-t border-stone-200 flex justify-between items-center">
                <span className="text-xs font-semibold text-stone-500">Valor Estimado:</span>
                <span className="text-2xl font-bold text-brand-dark">
                  R$ {(sizeOption.price * quantity).toFixed(2)}
                </span>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleAddCustomCake}
                  disabled={recheios.length === 0}
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Adicionar à Sacola</span>
                </button>
                {recheios.length === 0 && (
                  <p className="text-[10px] text-rose-500 text-center leading-normal">
                    * Selecione pelo menos 1 recheio para poder adicionar.
                  </p>
                )}
              </div>

            </div>

          </div>

        </section>

      </div>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Ampliação do Bolo"
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
          />
        </div>
      )}

    </div>
  );
};
