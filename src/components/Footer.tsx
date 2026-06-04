import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-stone-100 font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Gil Bolos e Doces
              </span>
              <div className="text-[10px] tracking-widest uppercase font-semibold text-pink-300 -mt-1">
                Confeitaria Artesanal
              </div>
            </Link>
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              Levando doçura e afeto para a sua vida através de receitas de família preparadas com os melhores ingredientes.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-brand-primary text-white rounded-full transition-all duration-200"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/5511951907323"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white/10 hover:bg-emerald-600 text-white rounded-full transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-white tracking-wide border-b border-white/10 pb-2">
              Contato & Encomendas
            </h3>
            <ul className="space-y-3.5 text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-300 shrink-0 mt-0.5" />
                <span>Rua das Confeitarias, 123 - Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-pink-300 shrink-0" />
                <span>(11) 95190-7323</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-pink-300 shrink-0" />
                <span>Atendimento de Terça a Domingo</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-white tracking-wide border-b border-white/10 pb-2">
              Horários
            </h3>
            <div className="space-y-2.5 text-sm text-stone-300">
              <div className="flex justify-between">
                <span>Terça a Sexta:</span>
                <span className="font-medium text-white">09:00h às 18:00h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-medium text-white">09:00h às 19:00h</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span className="font-medium text-white">09:00h às 13:00h</span>
              </div>
              <div className="flex justify-between text-stone-400 text-xs pt-1.5">
                <span>* Retiradas agendadas no local.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Gil Bolos e Doces. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para adoçar sua vida.
          </p>
        </div>
      </div>
    </footer>
  );
};
