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
  price: number;
  image: string;
  ingredients: string[];
  sizes: SizeOption[];
}

export interface PortfolioItem {
  id: string;
  name: string;
  description: string;
  image: string;
}

// O único produto real no cardápio de compras agora é o "Bolo Personalizado"
export const products: Product[] = [
  {
    id: 'bolo-personalizado',
    name: 'Bolo Personalizado (Monte do Seu Jeito)',
    category: 'bolos',
    description: 'Monte o bolo do seu jeito escolhendo massa, recheio, cobertura e adicionais.',
    longDescription: 'Monte seu bolo ideal! Escolha entre nossas deliciosas opções de massas, combine com até dois recheios gourmet, selecione a cobertura de sua preferência (chantilly premium, ganache ou cream cheese) e finalize com adicionais como morangos ou raspas de chocolate.',
    price: 13.00,
    image: '/images/portfolio/bolo_coracoes_laco_preto.png', // Nova imagem principal de capa
    ingredients: ['Ingredientes selecionados no formulário'],
    sizes: [
      { name: 'Fatia Individual (aprox. 150g)', price: 13.00 },
      { name: 'Bolo Inteiro - 1.0 kg (aprox. 8 a 10 fatias)', price: 100.00 },
      { name: 'Bolo Inteiro - 1.5 kg (aprox. 12 a 15 fatias)', price: 150.00 },
      { name: 'Bolo Inteiro - 2.0 kg (aprox. 18 a 20 fatias)', price: 200.00 },
      { name: 'Bolo Inteiro - 3.0 kg (aprox. 28 a 30 fatias)', price: 300.00 }
    ]
  }
];

// Portfólio com fotos reais dos bolos produzidos pela Gil Bolos
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    name: 'Bolo Clean Elegante com Laço Preto',
    description: 'Design moderno e sofisticado, bolo redondo coberto de chantilly liso com mini corações pretos e elegantes fitas de cetim preta.',
    image: '/images/portfolio/bolo_coracoes_laco_preto.png'
  },
  {
    id: 'p2',
    name: 'Bolo Temático Infantil Thor (Heroico)',
    description: 'Bolo retangular personalizado com acabamento em chantilly vermelho e cinza imitando pedra rachada pelo martelo Mjolnir, completo com toppers personalizados do Thor para o aniversário do Bryan.',
    image: '/images/portfolio/bolo_thor_herois.jpg'
  },
  {
    id: 'p3',
    name: 'Bolo de Chocolate Festivo com Laço Vermelho',
    description: 'Bolo redondo coberto com granulados finos, raspas de chocolate e finalizado com uma delicada fita de cetim vermelha.',
    image: '/images/portfolio/bolo_chocolate_granulado.png'
  },
  {
    id: 'p4',
    name: 'Bolo Quadrado de Morango com Chantilly',
    description: 'Bolo quadrado com acabamento clássico em chantilly trabalhado no bico de confeitar, decorado com morangos frescos suculentos.',
    image: '/images/portfolio/bolo_quadrado_morangos.jpg'
  },
  {
    id: 'p5',
    name: 'Bolo Delicado de Corações com Laço Vermelho',
    description: 'Design clean e romântico, bolo redondo coberto de chantilly liso com mini corações vermelhos e laço vermelho de cetim.',
    image: '/images/portfolio/bolo_coracoes_laco.png'
  },
  {
    id: 'p6',
    name: 'Bolo Temático Infantil Minecraft',
    description: 'Bolo retangular personalizado no tema Minecraft com cobertura imitando grama e terra, acompanhado de toppers decorativos dos personagens.',
    image: '/images/portfolio/bolo_minecraft.jpg'
  },
  {
    id: 'p7',
    name: 'Bolo Retangular de Chocolate com Morango',
    description: 'Bolo retangular com cobertura de chantilly de chocolate trabalhado nas laterais, topo de raspas de chocolate e morangos.',
    image: '/images/portfolio/bolo_retangular_morangos.jpg'
  }
];
