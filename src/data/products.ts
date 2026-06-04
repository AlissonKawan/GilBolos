export interface SizeOption {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'bolos';
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
      { name: 'Bolo Inteiro - 1.0 kg (aprox. 8 a 10 fatias)', price: 100.00 },
      { name: 'Bolo Inteiro - 1.5 kg (aprox. 12 a 15 fatias)', price: 150.00 },
      { name: 'Bolo Inteiro - 2.0 kg (aprox. 18 a 20 fatias)', price: 200.00 },
      { name: 'Bolo Inteiro - 3.0 kg (aprox. 28 a 30 fatias)', price: 300.00 }
    ]
  },
  {
    id: '2',
    name: 'Bolo de Chocolate Belga & Ninho',
    category: 'bolos',
    description: 'Massa intensa de cacau recheada com brigadeiro de chocolate belga e mousse de leite Ninho.',
    longDescription: 'Para os amantes de chocolate. Massa amanteigada de cacau 100%, com recheio duplo: uma camada de brigadeiro gourmet de chocolate belga ao leite e outra camada de mousse de leite Ninho super cremosa. Coberto com ganache meio amargo e splits de chocolate belga Callebaut.',
    price: 13.00,
    image: '/images/chocolate_truffles.png', // Imagem de chocolate
    ingredients: ['Cacau 100% nobre', 'Chocolate Belga Callebaut', 'Leite Ninho', 'Ganache meio amargo', 'Manteiga premium'],
    sizes: [
      { name: 'Fatia Individual (aprox. 150g)', price: 13.00 },
      { name: 'Bolo Inteiro - 1.0 kg (aprox. 8 a 10 fatias)', price: 100.00 },
      { name: 'Bolo Inteiro - 1.5 kg (aprox. 12 a 15 fatias)', price: 150.00 },
      { name: 'Bolo Inteiro - 2.0 kg (aprox. 18 a 20 fatias)', price: 200.00 },
      { name: 'Bolo Inteiro - 3.0 kg (aprox. 28 a 30 fatias)', price: 300.00 }
    ]
  },
  {
    id: '3',
    name: 'Bolo Red Velvet Supremo',
    category: 'bolos',
    description: 'Bolo de massa aveludada vermelha com recheio e cobertura cremosa de cream cheese frosting.',
    longDescription: 'Massa clássica aveludada de cacau e buttermilk com coloração vermelha intensa. O recheio de cream cheese frosting é levemente cítrico e quebra perfeitamente a doçura da massa. Decorado com farelos do próprio bolo e frutas vermelhas no topo para um visual rústico e sofisticado.',
    price: 13.00,
    image: '/images/pink_cupcakes.png', // Usando de reserva
    ingredients: ['Massa Red Velvet com cacau', 'Cream cheese premium', 'Buttermilk', 'Extrato de baunilha', 'Frutas vermelhas frescas'],
    sizes: [
      { name: 'Fatia Individual (aprox. 150g)', price: 13.00 },
      { name: 'Bolo Inteiro - 1.0 kg (aprox. 8 a 10 fatias)', price: 100.00 },
      { name: 'Bolo Inteiro - 1.5 kg (aprox. 12 a 15 fatias)', price: 150.00 },
      { name: 'Bolo Inteiro - 2.0 kg (aprox. 18 a 20 fatias)', price: 200.00 },
      { name: 'Bolo Inteiro - 3.0 kg (aprox. 28 a 30 fatias)', price: 300.00 }
    ]
  },
  {
    id: '4',
    name: 'Bolo Rústico Naked Cake de Frutas',
    category: 'bolos',
    description: 'Naked cake elegante com recheio de creme de damasco e ganache de chocolate branco, coberto de frutas.',
    longDescription: 'Um bolo inesquecível e refinado. Massa amanteigada de baunilha com recheio de ganache artesanal de chocolate branco e geleia suave de damasco. O acabamento estilo naked cake deixa as camadas visíveis de forma elegante, finalizado com açúcar de confeiteiro e frutas silvestres da estação.',
    price: 13.00,
    image: '/images/brigadeiros.png', // Usando de reserva
    ingredients: ['Massa amanteigada de baunilha', 'Ganache de chocolate branco', 'Geleia de damasco', 'Açúcar de confeiteiro', 'Frutas silvestres da estação'],
    sizes: [
      { name: 'Fatia Individual (aprox. 150g)', price: 13.00 },
      { name: 'Bolo Inteiro - 1.0 kg (aprox. 8 a 10 fatias)', price: 100.00 },
      { name: 'Bolo Inteiro - 1.5 kg (aprox. 12 a 15 fatias)', price: 150.00 },
      { name: 'Bolo Inteiro - 2.0 kg (aprox. 18 a 20 fatias)', price: 200.00 },
      { name: 'Bolo Inteiro - 3.0 kg (aprox. 28 a 30 fatias)', price: 300.00 }
    ]
  }
];
