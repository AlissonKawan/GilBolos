import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { cartCount, setIsOpen } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Cardápio', path: '/cardapio' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-brand-dark text-white text-center py-2 px-4 text-[11px] font-bold tracking-wider uppercase">
        🔔 Atenção: Todos os nossos bolos são feitos exclusivamente Sob Encomenda
      </div>
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-pink-100 font-sans transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Gil Bolos e Doces"
                className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full shadow-md border border-pink-100 bg-white hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col text-left">
                <span className="font-serif text-lg font-bold tracking-tight text-brand-dark hover:text-brand-primary transition-colors leading-none">
                  Gil Bolos e Doces
                </span>
                <span className="text-[9px] tracking-widest uppercase font-semibold text-brand-gold mt-1 pl-0.5">
                  Confeitaria Artesanal
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 border-b-2 py-1 ${
                  isActive(link.path)
                    ? 'border-brand-primary text-brand-primary font-semibold'
                    : 'border-transparent text-stone-600 hover:text-brand-primary hover:border-pink-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action buttons (Bag & Mobile Menu Trigger) */}
          <div className="flex items-center gap-2">
            {/* Bag Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 text-stone-600 hover:text-brand-primary bg-brand-accent/50 hover:bg-brand-accent rounded-full transition-all duration-200"
              aria-label="Ver sacola"
            >
              <ShoppingBag className="w-6 h-6 stroke-[1.8]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-primary text-white text-[11px] font-bold rounded-full w-5.5 h-5.5 flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-stone-600 hover:text-brand-primary rounded-full transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-pink-50 py-4 px-4 space-y-2 shadow-inner transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-brand-accent text-brand-primary font-semibold'
                  : 'text-stone-600 hover:bg-stone-50 hover:text-brand-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
    </>
  );
};
