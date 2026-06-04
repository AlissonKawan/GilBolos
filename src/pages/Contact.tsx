import { useState } from 'react';
import { MapPin, Send, MessageCircle, Info } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    eventType: 'aniversario',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipientPhone = '5511951907323'; // Número atualizado da Gil Bolos e Doces
    
    // Format message
    let message = 'Olá, Gil! Gostaria de fazer um orçamento de encomenda personalizada:\n\n';
    message += `👤 *Nome:* ${formData.name}\n`;
    message += `📞 *WhatsApp:* ${formData.phone}\n`;
    message += `📅 *Data do Evento:* ${formData.date ? new Date(formData.date).toLocaleDateString('pt-BR') : 'A definir'}\n`;
    message += `🎂 *Tipo de Encomenda:* ${
      formData.eventType === 'aniversario' ? 'Bolo de Aniversário' :
      formData.eventType === 'casamento' ? 'Bolo de Casamento / Bodas' :
      formData.eventType === 'festa' ? 'Bolo Festivo Geral' : 'Fatias de Bolo'
    }\n`;
    message += `📝 *Detalhes/Desejos:* ${formData.details || 'Sem especificações adicionais'}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${recipientPhone}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-stone-50 py-12 md:py-16 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Contato & Encomendas
          </h1>
          <p className="text-stone-500 text-sm">
            Tem alguma ideia especial para o seu bolo ou quer personalizar docinhos? Fale conosco! Preencha o formulário ou entre em contato diretamente.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Information Cards */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-850 text-base">WhatsApp Direto</h3>
                <p className="text-stone-500 text-xs mt-1">Converse conosco e tire dúvidas.</p>
                <a
                  href="https://wa.me/5511951907323"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors"
                >
                  (11) 95190-7323
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-pink-50 text-brand-primary rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-850 text-base">Nosso Ateliê</h3>
                <p className="text-stone-500 text-xs mt-1">Retiradas agendadas de encomendas.</p>
                <p className="text-stone-600 font-medium text-sm mt-3 leading-relaxed">
                  Rua das Confeitarias, 123<br />Centro, São Paulo - SP
                </p>
              </div>
            </div>

            {/* Info Encomenda Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-amber-50 text-brand-gold rounded-xl shrink-0">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-stone-850 text-base">Apenas sob Encomenda</h3>
                <p className="text-stone-500 text-xs mt-1">Não possuímos loja física ou pronta entrega.</p>
                <p className="text-stone-650 text-xs mt-3 leading-relaxed font-medium">
                  Todos os bolos devem ser encomendados com antecedência. A data e hora da retirada são agendadas diretamente pelo WhatsApp.
                </p>
              </div>
            </div>

          </div>

          {/* Contact/Quote Form */}
          <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm lg:col-span-2">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">
              Solicitar Orçamento Customizado
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: Mariana Silva"
                    className="w-full bg-stone-50 hover:bg-stone-100/50 focus:bg-white text-stone-800 text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:border-brand-primary focus:outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full bg-stone-50 hover:bg-stone-100/50 focus:bg-white text-stone-800 text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:border-brand-primary focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                    Data do Evento
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-stone-50 hover:bg-stone-100/50 focus:bg-white text-stone-800 text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:border-brand-primary focus:outline-none transition-all"
                  />
                </div>

                {/* Event Type */}
                <div className="space-y-1.5">
                  <label htmlFor="eventType" className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                    Tipo de Encomenda
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-stone-50 hover:bg-stone-100/50 focus:bg-white text-stone-800 text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:border-brand-primary focus:outline-none transition-all"
                  >
                    <option value="aniversario">Bolo de Aniversário</option>
                    <option value="casamento">Bolo de Casamento / Bodas</option>
                    <option value="festa">Bolo Festivo Geral</option>
                    <option value="fatias">Fatias de Bolo (Encomenda)</option>
                  </select>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-1.5">
                <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                  Detalhes do Pedido
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Descreva detalhes como recheios preferidos, cores de decoração, peso desejado, alergias ou restrições alimentares..."
                  className="w-full bg-stone-50 hover:bg-stone-100/50 focus:bg-white text-stone-800 text-sm px-4 py-2.5 rounded-xl border border-stone-200 focus:border-brand-primary focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Orçamento por WhatsApp</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
