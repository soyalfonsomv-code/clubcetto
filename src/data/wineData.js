
export const wineData = [
  // --- Reserva Privada ---
  {
    id: 'reserva-cabernet',
    etiqueta: 'Reserva Privada Cabernet Sauvignon',
    name: 'Reserva Privada Cabernet Sauvignon',
    tipo: 'Tinto',
    type: 'Tinto Robusto',
    collection: 'Reserva Privada',
    perfil: { cuerpo: 5, acidez: 3, alcohol: 4, fruta: 4, barrica: 5, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 5, sweetness: 1,
    description: 'El clásico Cabernet de guarda, potente y elegante.',
    notaCata: 'Aromas a cassis, tabaco y cuero. Taninos potentes pero maduros.',
    tastingNotes: 'Aromas a cassis, tabaco y cuero. Taninos potentes pero maduros.'
  },
  {
    id: 'reserva-nebbiolo',
    etiqueta: 'Reserva Privada Nebbiolo',
    name: 'Reserva Privada Nebbiolo',
    tipo: 'Tinto',
    type: 'Tinto Complejo',
    collection: 'Reserva Privada',
    perfil: { cuerpo: 5, acidez: 4, alcohol: 5, fruta: 5, barrica: 5, dulzor: 1, intensidadAromatica: 5 },
    intensity: 5, structure: 5, sweetness: 1,
    description: 'La joya de la corona, intenso y longevo.',
    notaCata: 'Frutos negros maduros, trufa, regaliz. En boca es monumental y largo.',
    tastingNotes: 'Frutos negros maduros, trufa, regaliz. En boca es monumental y largo.'
  },
  {
    id: 'petite-sirah',
    etiqueta: 'Reserva Privada Petite Sirah',
    name: 'Reserva Privada Petite Sirah',
    tipo: 'Tinto',
    type: 'Tinto Robusto',
    collection: 'Reserva Privada',
    perfil: { cuerpo: 5, acidez: 3, alcohol: 4, fruta: 5, barrica: 4, dulzor: 1, intensidadAromatica: 5 },
    intensity: 5, structure: 5, sweetness: 1,
    description: 'Un vino tinto de cuerpo completo con taninos firmes.',
    notaCata: 'Mora, chocolate amargo y pimienta negra. Gran estructura.',
    tastingNotes: 'Mora, chocolate amargo y pimienta negra. Gran estructura.'
  },
  {
    id: 'reserva-merlot',
    etiqueta: 'Reserva Privada Merlot',
    name: 'Reserva Privada Merlot',
    tipo: 'Tinto',
    type: 'Tinto Aterciopelado',
    collection: 'Reserva Privada',
    perfil: { cuerpo: 4, acidez: 3, alcohol: 4, fruta: 5, barrica: 4, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 4, sweetness: 1,
    description: 'Suavidad y complejidad en equilibrio.',
    notaCata: 'Cereza negra, ciruela y vainilla. Textura sedosa.',
    tastingNotes: 'Cereza negra, ciruela y vainilla. Textura sedosa.'
  },

  // --- Línea Clásica Tintos ---
  {
    id: 'clasica-cabernet',
    etiqueta: 'Línea Clásica Cabernet Sauvignon',
    name: 'Cabernet Sauvignon Clásico',
    tipo: 'Tinto',
    type: 'Tinto Joven',
    collection: 'Línea Clásica',
    perfil: { cuerpo: 4, acidez: 3, alcohol: 3, fruta: 4, barrica: 3, dulzor: 1, intensidadAromatica: 3 },
    intensity: 3, structure: 4, sweetness: 1,
    description: 'El estándar del vino mexicano.',
    notaCata: 'Frutos rojos y ligeras notas especiadas.',
    tastingNotes: 'Frutos rojos y ligeras notas especiadas.'
  },
  {
    id: 'clasica-merlot',
    etiqueta: 'Línea Clásica Merlot',
    name: 'Merlot Clásico',
    tipo: 'Tinto',
    type: 'Tinto Suave',
    collection: 'Línea Clásica',
    perfil: { cuerpo: 3, acidez: 3, alcohol: 3, fruta: 5, barrica: 2, dulzor: 1, intensidadAromatica: 3 },
    intensity: 3, structure: 3, sweetness: 1,
    description: 'Amable y fácil de beber.',
    notaCata: 'Frambuesas y notas florales suaves.',
    tastingNotes: 'Frambuesas y notas florales suaves.'
  },
  {
    id: 'clasica-zinfandel',
    etiqueta: 'Línea Clásica Zinfandel',
    name: 'Zinfandel Clásico',
    tipo: 'Tinto',
    type: 'Tinto Especiado',
    collection: 'Línea Clásica',
    perfil: { cuerpo: 4, acidez: 3, alcohol: 4, fruta: 5, barrica: 3, dulzor: 2, intensidadAromatica: 4 },
    intensity: 4, structure: 4, sweetness: 2,
    description: 'Potencia frutal con un toque dulce.',
    notaCata: 'Mermelada de moras y pimienta.',
    tastingNotes: 'Mermelada de moras y pimienta.'
  },
  {
    id: 'clasica-petite-sirah',
    etiqueta: 'Línea Clásica Petite Sirah',
    name: 'Petite Sirah Clásico',
    tipo: 'Tinto',
    type: 'Tinto Intenso',
    collection: 'Línea Clásica',
    perfil: { cuerpo: 4, acidez: 3, alcohol: 4, fruta: 4, barrica: 3, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 4, sweetness: 1,
    description: 'Rústico y lleno de carácter.',
    notaCata: 'Fruta negra compotada y tierra húmeda.',
    tastingNotes: 'Fruta negra compotada y tierra húmeda.'
  },

  // --- Línea Clásica Blancos ---
  {
    id: 'clasica-chenin',
    etiqueta: 'Línea Clásica Chenin Blanc',
    name: 'Chenin Blanc Clásico',
    tipo: 'Blanco',
    type: 'Blanco Afrutado',
    collection: 'Línea Clásica',
    perfil: { cuerpo: 2, acidez: 4, alcohol: 3, fruta: 5, barrica: 1, dulzor: 2, intensidadAromatica: 3 },
    intensity: 3, structure: 2, sweetness: 2,
    description: 'Fresco con un toque de dulzor.',
    notaCata: 'Piña, miel y flores blancas.',
    tastingNotes: 'Piña, miel y flores blancas.'
  },
  {
    id: 'fume-blanc',
    etiqueta: 'Línea Clásica Fumé Blanc',
    name: 'Línea Clásica Fumé Blanc',
    tipo: 'Blanco',
    type: 'Blanco Seco',
    collection: 'Línea Clásica',
    perfil: { cuerpo: 3, acidez: 5, alcohol: 3, fruta: 4, barrica: 2, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 3, sweetness: 1,
    description: 'Sauvignon Blanc con un toque de madera.',
    notaCata: 'Cítricos, hierba fresca y un toque ahumado.',
    tastingNotes: 'Cítricos, hierba fresca y un toque ahumado.'
  },
  {
    id: 'clasica-blanc-de-blancs',
    etiqueta: 'Línea Clásica Blanc de Blancs',
    name: 'Blanc de Blancs',
    tipo: 'Blanco',
    type: 'Blanco Ligero',
    collection: 'Línea Clásica',
    perfil: { cuerpo: 2, acidez: 4, alcohol: 2, fruta: 4, barrica: 1, dulzor: 1, intensidadAromatica: 3 },
    intensity: 3, structure: 2, sweetness: 1,
    description: 'Mezcla fresca y versátil.',
    notaCata: 'Manzana verde y pera.',
    tastingNotes: 'Manzana verde y pera.'
  },
  {
    id: 'clasica-chardonnay',
    etiqueta: 'Línea Clásica Chardonnay',
    name: 'Chardonnay Clásico',
    tipo: 'Blanco',
    type: 'Blanco Untuoso',
    collection: 'Línea Clásica',
    perfil: { cuerpo: 4, acidez: 3, alcohol: 3, fruta: 4, barrica: 3, dulzor: 1, intensidadAromatica: 3 },
    intensity: 3, structure: 4, sweetness: 1,
    description: 'Clásico y mantequilloso.',
    notaCata: 'Piña madura, mantequilla y vainilla.',
    tastingNotes: 'Piña madura, mantequilla y vainilla.'
  },

  // --- Sierra Blanca ---
  {
    id: 'sierra-sauvignon',
    etiqueta: 'Sierra Blanca Sauvignon Blanc',
    name: 'Sierra Blanca Sauvignon',
    tipo: 'Blanco',
    type: 'Blanco Cítrico',
    collection: 'Sierra Blanca',
    perfil: { cuerpo: 2, acidez: 5, alcohol: 3, fruta: 4, barrica: 1, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 2, sweetness: 1,
    description: 'Explosión de frescura.',
    notaCata: 'Toronja, lima y notas minerales.',
    tastingNotes: 'Toronja, lima y notas minerales.'
  },
  {
    id: 'zinfandel-rose',
    etiqueta: 'Sierra Blanca Zinfandel Rosé',
    name: 'Sierra Blanca Zinfandel Rosé',
    tipo: 'Rosado',
    type: 'Rosado Semiseco',
    collection: 'Sierra Blanca',
    perfil: { cuerpo: 2, acidez: 3, alcohol: 2, fruta: 5, barrica: 1, dulzor: 3, intensidadAromatica: 3 },
    intensity: 3, structure: 2, sweetness: 3,
    description: 'El favorito de todos, frutal y amable.',
    notaCata: 'Fresas, sandía y caramelo.',
    tastingNotes: 'Fresas, sandía y caramelo.'
  },
  {
    id: 'sierra-cabernet',
    etiqueta: 'Sierra Blanca Cabernet Sauvignon',
    name: 'Sierra Blanca Cabernet',
    tipo: 'Tinto',
    type: 'Tinto Joven',
    collection: 'Sierra Blanca',
    perfil: { cuerpo: 3, acidez: 3, alcohol: 3, fruta: 4, barrica: 2, dulzor: 1, intensidadAromatica: 3 },
    intensity: 3, structure: 3, sweetness: 1,
    description: 'Cabernet joven y accesible.',
    notaCata: 'Grosella y pimiento verde.',
    tastingNotes: 'Grosella y pimiento verde.'
  },

  // --- Don Luis ---
  {
    id: 'don-luis',
    etiqueta: 'Don Luis Terra',
    name: 'Don Luis Terra',
    tipo: 'Tinto',
    type: 'Tinto Elegante',
    collection: 'Don Luis',
    perfil: { cuerpo: 4, acidez: 4, alcohol: 4, fruta: 4, barrica: 4, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 4, sweetness: 1,
    description: 'Homenaje a la tierra, mezcla bordalesa.',
    notaCata: 'Frutos rojos, especias finas y tierra.',
    tastingNotes: 'Frutos rojos, especias finas y tierra.'
  },
  {
    id: 'don-luis-concordia',
    etiqueta: 'Don Luis Concordia',
    name: 'Don Luis Concordia',
    tipo: 'Tinto',
    type: 'Tinto Autor',
    collection: 'Don Luis',
    perfil: { cuerpo: 5, acidez: 3, alcohol: 4, fruta: 5, barrica: 4, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 5, sweetness: 1,
    description: 'Armonía entre Cabernet y Shiraz.',
    notaCata: 'Zarzamora, pimienta y chocolate.',
    tastingNotes: 'Zarzamora, pimienta y chocolate.'
  },
  {
    id: 'don-luis-viognier',
    etiqueta: 'Don Luis Viognier',
    name: 'Don Luis Viognier',
    tipo: 'Blanco',
    type: 'Blanco Floral',
    collection: 'Don Luis',
    perfil: { cuerpo: 4, acidez: 2, alcohol: 4, fruta: 5, barrica: 2, dulzor: 1, intensidadAromatica: 5 },
    intensity: 5, structure: 4, sweetness: 1,
    description: 'Exótico y perfumado.',
    notaCata: 'Durazno, chabacano y flores blancas intensas.',
    tastingNotes: 'Durazno, chabacano y flores blancas intensas.'
  },
  {
    id: 'don-luis-merlot',
    etiqueta: 'Don Luis Merlot',
    name: 'Don Luis Merlot',
    tipo: 'Tinto',
    type: 'Tinto Fino',
    collection: 'Don Luis',
    perfil: { cuerpo: 4, acidez: 3, alcohol: 4, fruta: 5, barrica: 4, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 4, sweetness: 1,
    description: 'La expresión elegante del Merlot.',
    notaCata: 'Ciruelas pasas, cacao y vainilla.',
    tastingNotes: 'Ciruelas pasas, cacao y vainilla.'
  },

  // --- Estaciones ---
  {
    id: 'estaciones-primavera',
    etiqueta: 'Estaciones Primavera',
    name: 'Estaciones Primavera',
    tipo: 'Blanco',
    type: 'Blanco Chardonnay',
    collection: 'Estaciones',
    perfil: { cuerpo: 3, acidez: 4, alcohol: 3, fruta: 5, barrica: 1, dulzor: 2, intensidadAromatica: 4 },
    intensity: 4, structure: 3, sweetness: 2,
    description: 'Fresco como la estación.',
    notaCata: 'Flores, cítricos y manzana.',
    tastingNotes: 'Flores, cítricos y manzana.'
  },
  {
    id: 'estaciones-verano',
    etiqueta: 'Estaciones Verano',
    name: 'Estaciones Verano',
    tipo: 'Blanco',
    type: 'Blanco Viognier',
    collection: 'Estaciones',
    perfil: { cuerpo: 3, acidez: 3, alcohol: 3, fruta: 5, barrica: 1, dulzor: 2, intensidadAromatica: 5 },
    intensity: 5, structure: 3, sweetness: 2,
    description: 'Radiante y aromático.',
    notaCata: 'Frutas tropicales y miel.',
    tastingNotes: 'Frutas tropicales y miel.'
  },
  {
    id: 'estaciones-otono',
    etiqueta: 'Estaciones Otoño',
    name: 'Estaciones Otoño',
    tipo: 'Tinto',
    type: 'Tinto Gamay',
    collection: 'Estaciones',
    perfil: { cuerpo: 2, acidez: 4, alcohol: 2, fruta: 5, barrica: 1, dulzor: 1, intensidadAromatica: 3 },
    intensity: 3, structure: 2, sweetness: 1,
    description: 'Ligero y nostálgico.',
    notaCata: 'Frutos rojos frescos y tierra mojada.',
    tastingNotes: 'Frutos rojos frescos y tierra mojada.'
  },
  {
    id: 'estaciones-invierno',
    etiqueta: 'Estaciones Invierno',
    name: 'Estaciones Invierno',
    tipo: 'Tinto',
    type: 'Tinto Cabernet',
    collection: 'Estaciones',
    perfil: { cuerpo: 5, acidez: 3, alcohol: 4, fruta: 4, barrica: 3, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 5, sweetness: 1,
    description: 'Cálido para el frío.',
    notaCata: 'Frutos negros, especias y madera.',
    tastingNotes: 'Frutos negros, especias y madera.'
  },

  // --- Península ---
  {
    id: 'peninsula-espaldera',
    etiqueta: 'Península Espaldera',
    name: 'Península Espaldera',
    tipo: 'Tinto',
    type: 'Tinto Joven',
    collection: 'Península',
    perfil: { cuerpo: 3, acidez: 4, alcohol: 3, fruta: 5, barrica: 1, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 3, sweetness: 1,
    description: 'La nueva expresión de Baja California.',
    notaCata: 'Fruta roja crujiente y acidez vibrante.',
    tastingNotes: 'Fruta roja crujiente y acidez vibrante.'
  },
  {
    id: 'peninsula-lyra',
    etiqueta: 'Península Lyra',
    name: 'Península Lyra',
    tipo: 'Blanco',
    type: 'Blanco Aromático',
    collection: 'Península',
    perfil: { cuerpo: 3, acidez: 4, alcohol: 3, fruta: 5, barrica: 1, dulzor: 1, intensidadAromatica: 5 },
    intensity: 5, structure: 3, sweetness: 1,
    description: 'Moderno y expresivo.',
    notaCata: 'Cítricos, guayaba y flores.',
    tastingNotes: 'Cítricos, guayaba y flores.'
  },

  // --- Boutique ---
  {
    id: 'malbec',
    etiqueta: 'Boutique Malbec',
    name: 'Boutique Malbec',
    tipo: 'Tinto',
    type: 'Tinto Frutal',
    collection: 'Boutique',
    perfil: { cuerpo: 4, acidez: 3, alcohol: 4, fruta: 5, barrica: 4, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 4, sweetness: 1,
    description: 'Malbec de altura y calidad excepcional.',
    notaCata: 'Violetas, ciruela y especias dulces.',
    tastingNotes: 'Violetas, ciruela y especias dulces.'
  },
  {
    id: 'boutique-pinot-noir',
    etiqueta: 'Boutique Pinot Noir',
    name: 'Boutique Pinot Noir',
    tipo: 'Tinto',
    type: 'Tinto Sutil',
    collection: 'Boutique',
    perfil: { cuerpo: 3, acidez: 4, alcohol: 3, fruta: 4, barrica: 3, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 3, sweetness: 1,
    description: 'La elegancia difícil de lograr.',
    notaCata: 'Cereza, fresa, tierra y hongos.',
    tastingNotes: 'Cereza, fresa, tierra y hongos.'
  },
  {
    id: 'boutique-sangiovese',
    etiqueta: 'Boutique Sangiovese',
    name: 'Boutique Sangiovese',
    tipo: 'Tinto',
    type: 'Tinto Italiano',
    collection: 'Boutique',
    perfil: { cuerpo: 4, acidez: 5, alcohol: 4, fruta: 4, barrica: 3, dulzor: 1, intensidadAromatica: 4 },
    intensity: 4, structure: 4, sweetness: 1,
    description: 'Carácter italiano en suelo mexicano.',
    notaCata: 'Cereza ácida, hierbas secas y tomate.',
    tastingNotes: 'Cereza ácida, hierbas secas y tomate.'
  },
  {
    id: 'boutique-barbera',
    etiqueta: 'Boutique Barbera',
    name: 'Boutique Barbera',
    tipo: 'Tinto',
    type: 'Tinto Vibrante',
    collection: 'Boutique',
    perfil: { cuerpo: 3, acidez: 5, alcohol: 3, fruta: 5, barrica: 2, dulzor: 1, intensidadAromatica: 3 },
    intensity: 3, structure: 3, sweetness: 1,
    description: 'Acidez refrescante y fruta roja.',
    notaCata: 'Frambuesa, cereza y notas minerales.',
    tastingNotes: 'Frambuesa, cereza y notas minerales.'
  },
  {
    id: 'champbrule',
    etiqueta: 'Champbrulé',
    name: 'Champbrulé',
    tipo: 'Espumoso',
    type: 'Espumoso Brut',
    collection: 'Espumosos',
    perfil: { cuerpo: 2, acidez: 5, alcohol: 3, fruta: 4, barrica: 1, dulzor: 2, intensidadAromatica: 3 },
    intensity: 3, structure: 2, sweetness: 2,
    description: 'El espumoso de celebración.',
    notaCata: 'Pan tostado, manzana y burbuja fina.',
    tastingNotes: 'Pan tostado, manzana y burbuja fina.'
  },
  {
    id: 'moscato',
    etiqueta: 'Kodiak Moscato',
    name: 'Kodiak Moscato',
    tipo: 'Blanco',
    type: 'Blanco Dulce',
    collection: 'Postre',
    perfil: { cuerpo: 3, acidez: 3, alcohol: 2, fruta: 5, barrica: 1, dulzor: 5, intensidadAromatica: 5 },
    intensity: 5, structure: 3, sweetness: 5,
    description: 'Dulzor natural y aromático.',
    notaCata: 'Miel, uva fresca y flores de azahar.',
    tastingNotes: 'Miel, uva fresca y flores de azahar.'
  }
];

export const cuisineData = {
  mexicana: {
    label: 'Mexicana',
    categories: ['Entradas', 'Sopas', 'Carnes', 'Aves', 'Mariscos', 'Postres'],
    dishes: {
      'Entradas': [
        { name: 'Guacamole con Chicharrón', description: 'Aguacate cremoso con crujiente de cerdo', recommendedWine: 'fume-blanc', reason: 'La acidez cítrica del Fumé Blanc corta la grasa del aguacate y el chicharrón, limpiando el paladar.' },
        { name: 'Queso Fundido con Chorizo', description: 'Mezcla de quesos derretidos', recommendedWine: 'malbec', reason: 'La frutosidad del Malbec equilibra la grasa del queso y las especias del chorizo.' },
        { name: 'Tostadas de Tinga', description: 'Pollo deshebrado con chipotle', recommendedWine: 'zinfandel-rose', reason: 'El rosado fresco y frutal calma el picor del chipotle sin perder sabor.' }
      ],
      'Sopas': [
        { name: 'Sopa de Tortilla', description: 'Caldillo de tomate con pasilla', recommendedWine: 'malbec', reason: 'Un tinto de cuerpo medio acompaña bien la riqueza del caldillo sin dominarlo.' },
        { name: 'Pozole Rojo', description: 'Caldo de cerdo con guajillo', recommendedWine: 'don-luis', reason: 'La estructura del Don Luis Terra soporta la intensidad de las especias y la carne de cerdo.' }
      ],
      'Carnes': [
        { name: 'Arrachera al Carbón', description: 'Corte marinado asado', recommendedWine: 'petite-sirah', reason: 'Los taninos firmes del Petite Sirah son ideales para cortar la grasa y el sabor ahumado de la carne.' },
        { name: 'Cochinita Pibil', description: 'Cerdo marinado en achiote', recommendedWine: 'zinfandel-rose', reason: 'La acidez y frescura del rosado contrastan maravillosamente con la acidez de la naranja agria y el achiote.' },
        { name: 'Carne en su Jugo', description: 'Guiso de res con tocino', recommendedWine: 'don-luis', reason: 'Un vino elegante que armoniza con el caldo concentrado y la carne suave.' }
      ],
      'Aves': [
        { name: 'Mole Poblano', description: 'Salsa compleja de chiles y chocolate', recommendedWine: 'petite-sirah', reason: 'La potencia del mole requiere un vino con igual carácter y notas especiadas como el Petite Sirah.' },
        { name: 'Pollo con Pipian', description: 'Salsa de pepitas de calabaza', recommendedWine: 'fume-blanc', reason: 'Las notas herbales del Fumé Blanc complementan los sabores verdes del pipián.' }
      ],
      'Mariscos': [
        { name: 'Aguachile Verde', description: 'Camarón crudo marinado en limón', recommendedWine: 'fume-blanc', reason: 'La acidez vibrante del vino empata perfectamente con el limón y el picante fresco.' },
        { name: 'Pescado a la Veracruzana', description: 'Salsa de tomate, aceitunas y alcaparras', recommendedWine: 'zinfandel-rose', reason: 'El rosado hace puente entre el pescado ligero y la salsa de tomate condimentada.' }
      ],
      'Postres': [
        { name: 'Pastel de Tres Leches', description: 'Bizcocho bañado en leches', recommendedWine: 'zinfandel-rose', reason: 'Las notas de fresa del vino acompañan la cremosidad láctea.' },
        { name: 'Ate con Queso', description: 'Dulce de membrillo con queso manchego', recommendedWine: 'malbec', reason: 'Clásico contraste donde la fruta madura del vino realza el dulce del ate.' }
      ]
    }
  },
  internacional: {
    label: 'Internacional',
    categories: ['Entradas', 'Sopas', 'Carnes', 'Aves', 'Pescados', 'Ensaladas', 'Postres'],
    dishes: {
      'Entradas': [
        { name: 'Carpaccio de Res', description: 'Láminas crudas con parmesano', recommendedWine: 'zinfandel-rose', reason: 'Su ligereza respeta la carne cruda mientras su acidez corta el aceite de oliva.' },
        { name: 'Tabla de Quesos', description: 'Variedad de quesos maduros y suaves', recommendedWine: 'don-luis', reason: 'La versatilidad del Don Luis permite maridar tanto quesos cremosos como curados.' }
      ],
      'Sopas': [
        { name: 'Crema de Espárragos', description: 'Suave crema vegetal', recommendedWine: 'fume-blanc', reason: 'Las notas herbales del Sauvignon Blanc (Fumé) son el maridaje clásico para espárragos.' },
        { name: 'Sopa de Cebolla', description: 'Gratinada con queso gruyere', recommendedWine: 'malbec', reason: 'El dulzor natural de la cebolla caramelizada va de la mano con la fruta del Malbec.' }
      ],
      'Carnes': [
        { name: 'Filete Mignon', description: 'Corte magro con salsa de vino', recommendedWine: 'don-luis', reason: 'La elegancia de este corte pide un vino igual de refinado y sedoso.' },
        { name: 'Costillas BBQ', description: 'Cerdo con salsa agridulce', recommendedWine: 'malbec', reason: 'La fruta jammy del Malbec complementa perfectamente el dulzor de la salsa BBQ.' }
      ],
      'Aves': [
        { name: 'Pato a la Naranja', description: 'Graso con salsa cítrica', recommendedWine: 'zinfandel-rose', reason: 'El rosado tiene la acidez para limpiar la grasa del pato y notas frutales que van con la naranja.' },
        { name: 'Pollo Cordon Bleu', description: 'Relleno de jamón y queso', recommendedWine: 'fume-blanc', reason: 'La acidez del blanco corta la fritura y la riqueza del relleno cremoso.' }
      ],
      'Pescados': [
        { name: 'Salmón a la Plancha', description: 'Pescado graso natural', recommendedWine: 'fume-blanc', reason: 'La acidez cítrica contrasta con la grasa natural saludable del salmón.' },
        { name: 'Atún Sellado', description: 'Costra de sésamo', recommendedWine: 'don-luis', reason: 'El atún es un "pescado de carne roja", que soporta un tinto ligero o medio como este.' }
      ],
      'Ensaladas': [
        { name: 'Ensalada César', description: 'Con aderezo de anchoas y parmesano', recommendedWine: 'fume-blanc', reason: 'Limpia la cremosidad del aderezo y respeta la lechuga fresca.' },
        { name: 'Ensalada Griega', description: 'Queso feta, aceitunas y tomate', recommendedWine: 'fume-blanc', reason: 'La acidez del vino acompaña el vinagre y el sabor salado del feta.' }
      ],
      'Postres': [
        { name: 'Cheesecake de Frutos Rojos', description: 'Cremoso con salsa ácida', recommendedWine: 'zinfandel-rose', reason: 'Armonía de color y sabor con los frutos rojos del postre.' },
        { name: 'Fondant de Chocolate', description: 'Centro líquido oscuro', recommendedWine: 'petite-sirah', reason: 'El chocolate oscuro y el Petite Sirah comparten notas tostadas y gran cuerpo.' }
      ]
    }
  },
  bajamed: {
    label: 'Baja Med',
    categories: ['Entradas', 'Sopas', 'Carnes', 'Aves', 'Pescados', 'Postres'],
    dishes: {
      'Entradas': [
        { name: 'Tiradito de Atún', description: 'Láminas frescas con salsa oriental', recommendedWine: 'fume-blanc', reason: 'Realza la frescura del atún y corta la salinidad de la soya.' },
        { name: 'Tostada de Erizo', description: 'Sabor intenso a mar', recommendedWine: 'fume-blanc', reason: 'La mineralidad del vino acompaña la potencia y yodo del erizo.' }
      ],
      'Sopas': [
        { name: 'Crema de Almeja', description: 'Servida en pan', recommendedWine: 'fume-blanc', reason: 'La acidez del vino equilibra la densidad de la crema de mariscos.' }
      ],
      'Carnes': [
        { name: 'Borrego al Horno', description: 'Cocción lenta', recommendedWine: 'petite-sirah', reason: 'La carne de caza/borrego requiere taninos firmes para equilibrar su sabor intenso.' },
        { name: 'Lechón', description: 'Piel crujiente y carne suave', recommendedWine: 'don-luis', reason: 'La grasa del lechón se limpia bien con la estructura elegante del Don Luis.' }
      ],
      'Aves': [
        { name: 'Codorniz a las Brasas', description: 'Ave pequeña de sabor intenso', recommendedWine: 'don-luis', reason: 'Las notas ahumadas de la brasa van genial con la madera del vino.' }
      ],
      'Pescados': [
        { name: 'Tacos de Pescado Ensenada', description: 'Capeados con crema y salsa', recommendedWine: 'fume-blanc', reason: 'Maridaje regional clásico: la acidez corta la grasa del capeado.' },
        { name: 'Pulpo a las Brasas', description: 'Con aceite de oliva y pimentón', recommendedWine: 'zinfandel-rose', reason: 'El sabor ahumado del pulpo resalta con la frescura frutal del rosado.' }
      ],
      'Postres': [
        { name: 'Pay de Dátil', description: 'Dulce regional típico', recommendedWine: 'malbec', reason: 'La fruta madura del Malbec acompaña la intensidad dulce del dátil.' }
      ]
    }
  },
  parrilla: {
    label: 'Parrilla',
    categories: ['Entradas', 'Carnes', 'Aves', 'Pastas', 'Postres'],
    dishes: {
      'Entradas': [
        { name: 'Chorizo Argentino', description: 'A la parrilla', recommendedWine: 'malbec', reason: 'La grasa y especias del chorizo piden la fruta jugosa del Malbec.' },
        { name: 'Empanadas de Carne', description: 'Horneadas o fritas', recommendedWine: 'don-luis', reason: 'Acompaña el relleno jugoso de carne sin opacar la masa.' }
      ],
      'Carnes': [
        { name: 'Rib Eye', description: 'Corte con alto marmoleo', recommendedWine: 'petite-sirah', reason: 'La alta grasa del Rib Eye necesita la máxima estructura tánica del Petite Sirah.' },
        { name: 'New York Steak', description: 'Corte firme y sabroso', recommendedWine: 'petite-sirah', reason: 'Potencia con potencia: un corte intenso merece un vino robusto.' },
        { name: 'Vacío', description: 'Corte fibroso y jugoso', recommendedWine: 'don-luis', reason: 'Un corte de sabor profundo que va bien con la elegancia del Don Luis.' }
      ],
      'Aves': [
        { name: 'Pollo a la Parrilla', description: 'Marinado al limón', recommendedWine: 'fume-blanc', reason: 'Si el marinado es cítrico, el blanco es la mejor opción incluso en parrilla.' }
      ],
      'Pastas': [
        { name: 'Fetuccini Alfredo', description: 'Salsa blanca cremosa', recommendedWine: 'fume-blanc', reason: 'La acidez es necesaria para cortar la densidad de la crema y mantequilla.' }
      ],
      'Postres': [
        { name: 'Alfajores', description: 'Galleta con dulce de leche', recommendedWine: 'malbec', reason: 'El dulce de leche encuentra su par en las notas de caramelo y fruta del vino.' }
      ]
    }
  },
  italiana: {
    label: 'Italiana',
    categories: ['Entradas', 'Sopas', 'Carnes', 'Aves', 'Pescados', 'Platos', 'Postres'],
    dishes: {
      'Entradas': [
        { name: 'Bruschetta', description: 'Tomate, albahaca y ajo', recommendedWine: 'fume-blanc', reason: 'La frescura del tomate y la albahaca pide un vino blanco herbal.' },
        { name: 'Carpaccio de Salmón', description: 'Finas láminas crudas', recommendedWine: 'zinfandel-rose', reason: 'Delicado y fresco, ideal para iniciar la comida.' }
      ],
      'Sopas': [
        { name: 'Minestrone', description: 'Sopa de verduras y pasta', recommendedWine: 'don-luis', reason: 'Una sopa sustanciosa que aguanta un tinto de cuerpo medio.' }
      ],
      'Carnes': [
        { name: 'Osso Buco', description: 'Jarrete estofado lentamente', recommendedWine: 'petite-sirah', reason: 'La intensidad del tuétano y la carne estofada requiere un vino con cuerpo.' },
        { name: 'Saltimbocca', description: 'Ternera con salvia y jamón', recommendedWine: 'don-luis', reason: 'La salvia y el jamón serrano combinan con las notas especiadas del vino.' }
      ],
      'Aves': [
        { name: 'Pollo Parmigiana', description: 'Empanizado con salsa marinara', recommendedWine: 'malbec', reason: 'La acidez del tomate y el queso gratinado van bien con la fruta del Malbec.' }
      ],
      'Pescados': [
        { name: 'Branzino al Limone', description: 'Robalo al horno', recommendedWine: 'fume-blanc', reason: 'El pescado blanco delicado se realza con las notas cítricas.' }
      ],
      'Platos': [
        { name: 'Lasagna Boloñesa', description: 'Capas de carne y pasta', recommendedWine: 'don-luis', reason: 'Estructura suficiente para cortar la grasa y acompañar la salsa de carne.' },
        { name: 'Risotto de Hongos', description: 'Cremoso con porcini', recommendedWine: 'don-luis', reason: 'Las notas terrosas de los hongos hacen eco con la madera del vino.' },
        { name: 'Carbonara', description: 'Huevo, queso y guanciale', recommendedWine: 'fume-blanc', reason: 'La acidez limpia la yema de huevo y la grasa del cerdo curado.' }
      ],
      'Postres': [
        { name: 'Tiramisú', description: 'Café, mascarpone y cacao', recommendedWine: 'petite-sirah', reason: 'Las notas de café del postre armonizan con los tostados del vino.' },
        { name: 'Panna Cotta', description: 'Natilla suave de vainilla', recommendedWine: 'zinfandel-rose', reason: 'Suficientemente ligero para no opacar la delicadeza de la nata.' }
      ]
    }
  },
  espanola: {
    label: 'Española',
    categories: ['Tapas', 'Platos', 'Postres'],
    dishes: {
      'Tapas': [
        { name: 'Jamón Serrano', description: 'Curado y salado', recommendedWine: 'don-luis', reason: 'La grasa y salinidad del jamón se equilibran con la elegancia del tinto.' },
        { name: 'Patatas Bravas', description: 'Con salsa picante', recommendedWine: 'zinfandel-rose', reason: 'El picante pide frescura y un toque de dulzor frutal para calmarlo.' },
        { name: 'Croquetas de Jamón', description: 'Bechamel cremosa frita', recommendedWine: 'fume-blanc', reason: 'La acidez corta la fritura y la cremosidad de la bechamel.' },
        { name: 'Gambas al Ajillo', description: 'Aceite, ajo y guindilla', recommendedWine: 'fume-blanc', reason: 'Limpia el paladar del aceite y refresca del picante.' }
      ],
      'Platos': [
        { name: 'Paella Valenciana', description: 'Arroz con conejo y pollo', recommendedWine: 'zinfandel-rose', reason: 'La versatilidad del rosado abarca la variedad de ingredientes del arroz.' },
        { name: 'Fabada Asturiana', description: 'Guiso potente de alubias', recommendedWine: 'petite-sirah', reason: 'Plato pesado y graso que necesita taninos potentes para aligerarlo.' },
        { name: 'Rabo de Toro', description: 'Estofado gelatinoso', recommendedWine: 'petite-sirah', reason: 'La textura gelatinosa y el sabor intenso piden el vino más estructurado.' }
      ],
      'Postres': [
        { name: 'Crema Catalana', description: 'Natilla con costra de azúcar', recommendedWine: 'zinfandel-rose', reason: 'Acompaña la cremosidad cítrica y canela típica del postre.' },
        { name: 'Churros con Chocolate', description: 'Fritura y cacao espeso', recommendedWine: 'petite-sirah', reason: 'Para valientes: el chocolate denso aguanta un tinto potente.' }
      ]
    }
  }
};
