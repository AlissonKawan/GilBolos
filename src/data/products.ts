export interface SizeOption {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'bolos' | 'doces' | 'cupcakes' | 'festivos';
  description: string;
  longDescription: string;
  price: number; // Preço base para exibição
  image: string;
  ingredients: string[];
  sizes: SizeOption[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Bolo de Morango Gourmet',
    category: 'bolos',
    description: 'Bolo super fofinho com recheio duplo de ninho cremoso e morangos frescos selecionados.',
    longDescription: 'Nossa assinatura de maior sucesso. Massa pão de ló super leve e umedecida com calda artesanal, recheada com duas camadas generosas de creme de leite Ninho e morangos frescos picados. Coberto com chantilly de baunilha, raspas de chocolate branco e morangos inteiros de decoração. Perfeito para qualquer celebração!',
    price: 13.00,
    image: '/images/strawberry_cake.png',
    ingredients: ['Massa pão de ló', 'Creme de leite Ninho', 'Morangos frescos', 'Chantilly premium', 'Raspas de chocolate branco'],
    sizes: [
      { name: 'Fatia Individual (aprox. 150g)', price: 13.00 },
      { name: '1.0 kg (aprox. 8 a 10 fatias)', price: 100.00 },
      { name: '1.5 kg (aprox. 12 a 15 fatias)', price: 150.00 },
      { name: '2.0 kg (aprox. 18 a 20 fatias)', price: 200.00 }
    ]
  },
  {
    id: '2',
    name: 'Trufas de Chocolate Belga',
    category: 'doces',
    description: 'Trufas artesanais feitas com blend de chocolates belgas e finalizadas com folhas de ouro.',
    longDescription: 'Feitas à mão individualmente. Usamos um blend refinado de chocolate belga meio amargo e ao leite para criar um ganache sedoso que derrete na boca. Enroladas em cacau em pó alcalino e decoradas com delicados flocos de folha de ouro comestível. A escolha definitiva para presentear ou para uma mesa de doces finos.',
    price: 27.00,
    image: '/images/chocolate_truffles.png',
    ingredients: ['Chocolate Belga 54%', 'Chocolate Belga ao Leite', 'Creme de leite fresco', 'Cacau em pó 100%', 'Folhas de ouro comestíveis'],
    sizes: [
      { name: 'Caixa com 6 unidades', price: 27.00 },
      { name: 'Caixa com 12 unidades', price: 48.00 },
      { name: 'Caixa com 24 unidades', price: 90.00 }
    ]
  },
  {
    id: '3',
    name: 'Cupcakes de Baunilha e Framboesa',
    category: 'cupcakes',
    description: 'Cupcakes fofinhos de baunilha com recheio de geleia artesanal de framboesa e cobertura de buttercream.',
    longDescription: 'Nossos cupcakes unem beleza e sabor. Massa leve aromatizada com fava natural de baunilha, recheio surpresa de geleia de framboesa ácida artesanal e uma cobertura clássica de buttercream de merengue suíço de morango. Decorado com confeitos elegantes de açúcar e framboesas frescas.',
    price: 15.00,
    image: '/images/pink_cupcakes.png',
    ingredients: ['Fava de baunilha', 'Geleia de framboesa artesanal', 'Buttercream de merengue suíço', 'Farinha de trigo premium', 'Framboesas frescas'],
    sizes: [
      { name: 'Unidade individual', price: 15.00 },
      { name: 'Caixa com 4 unidades', price: 55.00 },
      { name: 'Caixa com 6 unidades', price: 80.00 }
    ]
  },
  {
    id: '4',
    name: 'Brigadeiros Gourmet Tradicionais',
    category: 'doces',
    description: 'O clássico brasileiro elevado ao nível gourmet com chocolate belga e granulado split de qualidade.',
    longDescription: 'O brigadeiro como você nunca provou antes. Produzido com leite condensado de alta qualidade, manteiga francesa e cacau em pó nobre. Finalizado com splits (quadradinhos) de chocolate belga Callebaut que trazem uma crocância única e derretem na boca. O queridinho de todas as festas.',
    price: 35.00,
    image: '/images/brigadeiros.png',
    ingredients: ['Leite condensado premium', 'Manteiga premium', 'Cacau em pó nobre', 'Granulado Split Belga Callebaut'],
    sizes: [
      { name: 'Caixa com 10 unidades', price: 35.00 },
      { name: 'Caixa com 25 unidades', price: 80.00 },
      { name: 'Caixa com 50 unidades', price: 150.00 },
      { name: 'Cento (100 unidades)', price: 280.00 }
    ]
  },
  {
    id: '5',
    name: 'Bolo Red Velvet Especial',
    category: 'bolos',
    description: 'Bolo de massa aveludada vermelha com recheio e cobertura cremosa de cream cheese frosting.',
    longDescription: 'Massa clássica aveludada de cacau e buttermilk com coloração vermelha intensa. O recheio de cream cheese frosting é levemente cítrico e quebra perfeitamente a doçura da massa. Decorado com farelos do próprio bolo e frutas vermelhas no topo para um visual rústico e sofisticado.',
    price: 13.00,
    image: '/images/strawberry_cake.png', // Usando reserva
    ingredients: ['Massa Red Velvet com cacau e buttermilk', 'Cream cheese premium', 'Manteiga', 'Extrato de baunilha', 'Frutas vermelhas'],
    sizes: [
      { name: 'Fatia Individual (aprox. 150g)', price: 13.00 },
      { name: '1.0 kg (aprox. 8 a 10 fatias)', price: 100.00 },
      { name: '1.5 kg (aprox. 12 a 15 fatias)', price: 150.00 },
      { name: '2.0 kg (aprox. 18 a 20 fatias)', price: 200.00 }
    ]
  },
  {
    id: '6',
    name: 'Bolo de Casamento Rústico (Naked)',
    category: 'festivos',
    description: 'Bolo de andares estilo naked cake decorado com flores comestíveis e frutas da estação.',
    longDescription: 'Um bolo inesquecível para o seu grande dia. Três andares de massa amanteigada recheados com ganache de chocolate branco e geleia de damasco. O acabamento naked cake deixa as camadas de massa e recheio visíveis de forma elegante, finalizado com açúcar de confeiteiro, flores naturais e frutas silvestres.',
    price: 300.00,
    image: '/images/strawberry_cake.png',
    ingredients: ['Massa amanteigada de baunilha', 'Ganache de chocolate branco', 'Geleia de damasco', 'Flores decorativas', 'Frutas da estação'],
    sizes: [
      { name: 'Bolo Pequeno (3.0 kg - até 30 pessoas)', price: 300.00 },
      { name: 'Bolo Médio (5.0 kg - até 50 pessoas)', price: 500.00 },
      { name: 'Bolo Grande (8.0 kg - até 85 pessoas)', price: 800.00 }
    ]
  }
];
