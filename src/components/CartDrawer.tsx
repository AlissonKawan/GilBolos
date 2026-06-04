import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { cartItems, isOpen, setIsOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  if (!isOpen) return null;

  const handleSendWhatsApp = () => {
    const phone = '5511951907323'; // Número atualizado da Gil Bolos e Doces
    let message = 'Olá! Gostaria de encomendar os seguintes itens da *Gil Bolos e Doces*:\n\n';

    cartItems.forEach((item) => {
      const sizeOpt = item.product.sizes.find((s) => item.selectedSize.startsWith(s.name));
      const itemPrice = sizeOpt ? sizeOpt.price : item.product.price;
      message += `🍰 *${item.product.name}*\n`;
      message += `   - Quantidade: ${item.quantity}\n`;
      message += `   - Opção/Tamanho: ${item.selectedSize}\n`;
      message += `   - Subtotal: R$ ${(itemPrice * item.quantity).toFixed(2)}\n\n`;
    });

    message += `💰 *Total Estimado: R$ ${cartTotal.toFixed(2)}*\n\n`;
    message += 'Como podemos prosseguir com o agendamento e pagamento?';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full pl-10 flex">
        {/* Drawer container */}
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-fade-in">
          {/* Header */}
          <div className="px-6 py-5 bg-brand-primary text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6" />
              <h2 className="text-xl font-semibold font-serif">Minha Sacola</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-4">
                <ShoppingBag className="w-16 h-16 stroke-1 text-stone-300" />
                <p className="text-center font-medium">Sua sacola está vazia.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-brand-primary font-semibold hover:underline"
                >
                  Ver nosso cardápio
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${index}`}
                  className="flex items-start gap-4 pb-6 border-b border-stone-100"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg border border-stone-100 bg-brand-accent/30"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-stone-800 truncate text-base">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">Opção: {item.selectedSize}</p>
                    <p className="text-sm font-semibold text-brand-primary mt-1">
                      R$ {(item.product.sizes.find(s => item.selectedSize.startsWith(s.name))?.price ?? item.product.price).toFixed(2)}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                          className="px-2.5 py-1 hover:bg-stone-100 text-stone-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium text-stone-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                          className="px-2.5 py-1 hover:bg-stone-100 text-stone-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-stone-400 hover:text-rose-500 p-1 rounded-md transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Summary */}
          {cartItems.length > 0 && (
            <div className="border-t border-stone-100 p-6 bg-stone-50 space-y-4">
              <div className="flex justify-between text-stone-800">
                <span className="font-medium">Total estimado:</span>
                <span className="text-xl font-bold text-brand-dark">
                  R$ {cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-stone-500 leading-normal">
                * Os preços são estimativas. Finalizaremos os detalhes da entrega e taxa de entrega pelo WhatsApp.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Enviar Pedido via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-stone-500 hover:text-stone-700 text-sm font-medium py-2 text-center transition-colors"
                >
                  Limpar sacola
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
