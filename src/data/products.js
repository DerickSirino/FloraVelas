import velaLavanda from '../assets/vela-lavanda.png'
import velaBaunilha from '../assets/vela-baunilha.png'
import velaEucalipto from '../assets/vela-eucalipto.png'
import velaCedro from '../assets/vela-cedro.png'
import sprayRosas from '../assets/spray-rosas.png'
import sprayMenta from '../assets/spray-menta.png'
import sprayCitrus from '../assets/spray-citrus.png'
import spraySantal from '../assets/spray-santal.png'
import difusorBambu from '../assets/difusor-bambu.png'
import difusorJasmin from '../assets/difusor-jasmin.png'
import difusorPinho from '../assets/difusor-pinho.png'
import difusorAmber from '../assets/difusor-amber.png'

export const products = [
  // ─── VELAS ───────────────────────────────────────────────────────────────────
  {
    id: 1,
    category: 'velas',
    name: 'Véu de Lavanda',
    description: 'Uma vela artesanal de cera de soja com essência pura de lavanda francesa. Seu aroma suave e floral envolve o ambiente, criando uma atmosfera de paz e serenidade ideal para o fim do dia.',
    price: 'R$ 58,00',
    image: velaLavanda,
    tag: 'sono',
    tagLabel: 'Sono & Relaxamento',
  },
  {
    id: 2,
    category: 'velas',
    name: 'Doce Baunilha',
    description: 'Feita com cera de soja natural e essência de baunilha com toque de canela. Um aroma quente e acolhedor que transforma qualquer espaço em um refúgio de conforto e bem-estar.',
    price: 'R$ 54,00',
    image: velaBaunilha,
    tag: 'sono',
    tagLabel: 'Sono & Relaxamento',
  },
  {
    id: 3,
    category: 'velas',
    name: 'Brisa de Eucalipto',
    description: 'Vela artesanal com essência de eucalipto e hortelã. Seu aroma fresco e mentolado purifica o ar e aguça os sentidos, favorecendo a clareza mental e a produtividade.',
    price: 'R$ 56,00',
    image: velaEucalipto,
    tag: 'foco',
    tagLabel: 'Concentração & Foco',
  },
  {
    id: 4,
    category: 'velas',
    name: 'Terra & Cedro',
    description: 'Combinação única de cedro, laranja e especiarias. Um aroma terroso e cítrico que desperta a energia interior e traz vitalidade ao ambiente, perfeito para começar o dia com disposição.',
    price: 'R$ 62,00',
    image: velaCedro,
    tag: 'energia',
    tagLabel: 'Energia & Disposição',
  },

  // ─── SPRAYS ──────────────────────────────────────────────────────────────────
  {
    id: 5,
    category: 'sprays',
    name: 'Névoa de Rosas',
    description: 'Spray aromático com essência de rosas silvestres e pétalas de gerânio. Basta alguns jatos para transformar o ambiente em um jardim florido, trazendo calma e romantismo ao espaço.',
    price: 'R$ 42,00',
    image: sprayRosas,
    tag: 'sono',
    tagLabel: 'Sono & Relaxamento',
  },
  {
    id: 6,
    category: 'sprays',
    name: 'Frescor de Menta',
    description: 'Spray refrescante com menta-piperita e notas verdes de ervas frescas. Ideal para ambientes de trabalho e estudo, sua fórmula estimula a concentração e afasta a fadiga mental.',
    price: 'R$ 40,00',
    image: sprayMenta,
    tag: 'foco',
    tagLabel: 'Concentração & Foco',
  },
  {
    id: 7,
    category: 'sprays',
    name: 'Explosão Cítrica',
    description: 'Spray vibrante com limão siciliano, laranja doce e toranja. Um aroma alegre e energizante que eleva o humor e renova as energias, transformando qualquer momento em uma experiência revigorante.',
    price: 'R$ 40,00',
    image: sprayCitrus,
    tag: 'energia',
    tagLabel: 'Energia & Disposição',
  },
  {
    id: 8,
    category: 'sprays',
    name: 'Âmbar & Sândalo',
    description: 'Spray sofisticado com sândalo, âmbar e vetiver. Sua fragrância amadeirada e envolvente cria uma atmosfera de meditação e introspecção, perfeita para momentos de descanso profundo.',
    price: 'R$ 44,00',
    image: spraySantal,
    tag: 'sono',
    tagLabel: 'Sono & Relaxamento',
  },

  // ─── DIFUSORES ───────────────────────────────────────────────────────────────
  {
    id: 9,
    category: 'difusores',
    name: 'Bambu Zen',
    description: 'Difusor de varetas com essência de bambu fresco e notas aquáticas. Sua fragrância limpa e serena purifica o ambiente e convida à calma, sendo ideal para salas de estar e home offices.',
    price: 'R$ 78,00',
    image: difusorBambu,
    tag: 'foco',
    tagLabel: 'Concentração & Foco',
  },
  {
    id: 10,
    category: 'difusores',
    name: 'Jardim de Jasmim',
    description: 'Difusor de varetas com essência de jasmim branco e flor de laranjeira. Um aroma delicado e floral que perfuma sutilmente o ambiente por semanas, criando uma sensação de leveza e bem-estar.',
    price: 'R$ 82,00',
    image: difusorJasmin,
    tag: 'sono',
    tagLabel: 'Sono & Relaxamento',
  },
  {
    id: 11,
    category: 'difusores',
    name: 'Floresta de Pinheiro',
    description: 'Difusor de varetas com essência de pinheiro, cedro e resina. Um aroma fresco e amadeirado que traz a sensação de uma caminhada na floresta, estimulando a clareza mental e o foco.',
    price: 'R$ 80,00',
    image: difusorPinho,
    tag: 'energia',
    tagLabel: 'Energia & Disposição',
  },
  {
    id: 12,
    category: 'difusores',
    name: 'Âmbar Dourado',
    description: 'Difusor de varetas com essência de âmbar, baunilha e almíscar. Uma fragrância quente, sensual e envolvente que cria uma atmosfera de aconchego e sofisticação em qualquer ambiente.',
    price: 'R$ 88,00',
    image: difusorAmber,
    tag: 'sono',
    tagLabel: 'Sono & Relaxamento',
  },
]

export const categoryLabels = {
  velas: 'Velas',
  sprays: 'Sprays',
  difusores: 'Difusores',
}

export const tagLabels = {
  foco: 'Concentração & Foco',
  sono: 'Sono & Relaxamento',
  energia: 'Energia & Disposição',
}
