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
    image: '/images/portfolio/bolo_coracoes_laco_preto.png',
    ingredients: ['Ingredientes selecionados no formulário'],
    sizes: [
      { name: 'Fatia Individual (aprox. 150g)', price: 13.00 },
      { name: 'Bolo Inteiro - 1.0 kg (aprox. 8 a 10 fatias)', price: 100.00 },
      { name: 'Bolo Inteiro - 1.5 kg (aprox. 12 a 15 fatias)', price: 150.00 },
      { name: 'Bolo Inteiro - 2.0 kg (aprox. 18 a 20 fatias)', price: 200.00 },
      { name: 'Bolo Inteiro - 3.0 kg (aprox. 28 a 30 fatias)', price: 300.00 }
    ]
  },
  {
    id: 'bolo-simples',
    name: 'Bolo Simples (Estilo Caseiro)',
    category: 'bolos',
    description: 'Bolo simples artesanal a partir de R$ 35 (ou R$ 45 com cobertura vulcão).',
    longDescription: 'Nossos bolos caseiros tradicionais são fofinhos e assados na hora. Disponíveis em sabores como Cenoura, Chocolate, Milho, Laranja e Mesclado, com a opção tradicional sem cobertura ou com uma deliciosa e generosa cobertura cremosa vulcão.',
    price: 35.00,
    image: '/images/portfolio/bolo_simples.png',
    ingredients: ['Ovos', 'Farinha de Trigo', 'Leite', 'Manteiga', 'Fermento', 'Açúcar'],
    sizes: [
      { name: 'Bolo Simples (Sem Cobertura)', price: 35.00 },
      { name: 'Bolo com Cobertura (Vulcão)', price: 45.00 }
    ]
  }
];

// Portfólio completo com fotos reais fornecidas pela Gil Bolos
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
    name: 'Bolo Masculino Azul e Branco',
    description: 'Bolo redondo com degradê em duas cores (azul e branco) texturizado nas laterais e acabamento espiralado de chantilly azul no topo.',
    image: '/images/portfolio/bolo_azul_branco.png'
  },
  {
    id: 'p4',
    name: 'Bolo Delicado Rosa com Pérolas',
    description: 'Design delicado em tom rosa pastel e branco, texturizado com linhas horizontais e decorado com pérolas comestíveis de açúcar no topo e nas laterais.',
    image: '/images/portfolio/bolo_rosa_perlas.png'
  },
  {
    id: 'p5',
    name: 'Bolo Corações com Borda de Granulado',
    description: 'Bolo redondo de chantilly branco decorado com delicados laços vermelhos nas laterais, mini corações no topo e borda inferior decorada com granulados de chocolate.',
    image: '/images/portfolio/bolo_coracoes_granulado.png'
  },
  {
    id: 'p6',
    name: 'Bolo Temático Patrulha Canina',
    description: 'Bolo retangular decorado com chantilly nas cores azul e vermelho, topo branco liso e toppers com os cachorrinhos da Patrulha Canina para a festa do Yago.',
    image: '/images/portfolio/bolo_patrulha_canina.png'
  },
  {
    id: 'p7',
    name: 'Bolo Temático SPFC (Futebol)',
    description: 'Bolo redondo personalizado com o escudo do São Paulo Futebol Clube nas laterais, acabamento degradê bronze/branco e toppers personalizados de futebol para o aniversário do Jose Maria.',
    image: '/images/portfolio/bolo_spfc.jpg'
  },
  {
    id: 'p8',
    name: 'Bolo Retangular Clássico com Morangos',
    description: 'Bolo de aniversário retangular coberto de chantilly branco texturizado nas bordas e finalizado com morangos frescos no centro.',
    image: '/images/portfolio/bolo_retangular_morangos_creme.png'
  },
  {
    id: 'p9',
    name: 'Bolo Temático Infantil Hulk',
    description: 'Bolo redondo texturizado em chantilly verde brilhante imitando a parede de tijolos, decorado com topper do punho do Hulk e logotipo de onomatopeia.',
    image: '/images/portfolio/bolo_hulk.png'
  },
  {
    id: 'p10',
    name: 'Bolo Caseiro da Vovó de Chocolate',
    description: 'Bolo caseiro tradicional em formato de anel com furo no meio, fofinho e coberto com uma calda vulcão de chocolate meio amargo brilhante.',
    image: '/images/portfolio/bolo_caseiro_chocolate.png'
  },
  {
    id: 'p11',
    name: 'Bolo de Chocolate Festivo com Laço Vermelho',
    description: 'Bolo redondo coberto com granulados finos, raspas de chocolate e finalizado com uma delicada fita de cetim vermelha.',
    image: '/images/portfolio/bolo_chocolate_granulado.png'
  },
  {
    id: 'p12',
    name: 'Bolo Quadrado de Morango com Chantilly',
    description: 'Bolo quadrado com acabamento clássico em chantilly trabalhado no bico de confeitar, decorado com morangos frescos suculentos.',
    image: '/images/portfolio/bolo_quadrado_morangos.jpg'
  },
  {
    id: 'p13',
    name: 'Bolo Delicado de Corações com Laço Vermelho',
    description: 'Design clean e romântico, bolo redondo coberto de chantilly liso com mini corações vermelhos e laço vermelho de cetim.',
    image: '/images/portfolio/bolo_coracoes_laco.png'
  },
  {
    id: 'p14',
    name: 'Bolo Temático Infantil Minecraft',
    description: 'Bolo retangular personalizado no tema Minecraft com cobertura imitando grama e terra, acompanhado de toppers decorativos dos personagens.',
    image: '/images/portfolio/bolo_minecraft.jpg'
  },
  {
    id: 'p15',
    name: 'Bolo Retangular de Chocolate com Morango',
    description: 'Bolo retangular com cobertura de chantilly de chocolate trabalhado nas laterais, topo de raspas de chocolate e morangos.',
    image: '/images/portfolio/bolo_retangular_morangos.jpg'
  },
  {
    id: 'p16',
    name: 'Bolo Caseiro Simples (Sem Cobertura)',
    description: 'Bolo caseiro tradicional super fofinho e dourado, assado na hora, ideal para o café.',
    image: '/images/portfolio/bolo_simples.png'
  },
  {
    id: 'p17',
    name: 'Bolo Caseiro com Cobertura de Doce de Leite / Paçoca',
    description: 'Bolo caseiro coberto com uma generosa camada de calda vulcão de doce de leite cremoso e paçoca esfarelada.',
    image: '/images/portfolio/bolo_simples_cobertura.jpg'
  }
];
