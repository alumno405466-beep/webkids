export type Camp = {
  slug: string
  title: string
  subtitle: string
  description: string
  ageRange: string
  interests: string[]
  activities: string[]
  location: string
  dates: string
  schedule: string
  price: string
  flexibility: string
  category: 'summer' | 'daysOff'
}

export const CAMPS: Camp[] = [
  {
    slug: 'robotica-pedagogica-lego',
    title: 'Robótica Pedagógica con LEGO',
    subtitle: 'Tecnología, creatividad y pensamiento lógico con LEGO Education.',
    description: 'Un campamento donde los niños construyen, programan y prueban robots con piezas LEGO. La experiencia combina el juego con desafíos guiados para desarrollar lógica, creatividad y colaboración.',
    ageRange: '6-12 años',
    interests: ['Robótica', 'LEGO', 'Ingeniería', 'Pensamiento lógico'],
    activities: ['Construcción de robots', 'Programación básica', 'Desafíos por equipos', 'Presentación de proyectos'],
    location: 'Av. de Irlanda, 24, Toledo',
    dates: '30 de junio - 8 de agosto',
    schedule: '9:00 - 14:00',
    price: 'Desde 50€/semana',
    flexibility: 'Días sueltos y grupos reducidos disponibles según demanda.',
    category: 'summer',
  },
  {
    slug: 'ingles-interactivo',
    title: 'Inglés Interactivo',
    subtitle: 'Aprendizaje del idioma con juegos, canciones y proyectos reales.',
    description: 'Clases dinámicas de inglés donde el idioma se usa para crear, jugar y experimentar. Ideal para ganar fluidez de forma natural y divertida.',
    ageRange: '4-10 años',
    interests: ['Inglés', 'Comunicación', 'Cultura', 'Juego'],
    activities: ['Teatro en inglés', 'Cuentos y canciones', 'Juegos de rol', 'Mini-proyectos'],
    location: 'Av. de Irlanda, 24, Toledo',
    dates: '30 de junio - 8 de agosto',
    schedule: '9:00 - 14:00',
    price: 'Desde 45€/semana',
    flexibility: 'Inscripción semanal o por días sueltos según disponibilidad.',
    category: 'summer',
  },
  {
    slug: 'arte-creativo',
    title: 'Arte y Creatividad',
    subtitle: 'Expresión artística con pintura, manualidades y diseño creativo.',
    description: 'Un espacio para explorar distintas técnicas artísticas y potenciar la creatividad. Ideal para niños que quieren expresarse y experimentar con materiales diversos.',
    ageRange: '5-12 años',
    interests: ['Arte', 'Manualidades', 'Ilustración', 'Expresión'],
    activities: ['Talleres de pintura', 'Diseño de objetos', 'Creación colaborativa', 'Exposición final'],
    location: 'Av. de Irlanda, 24, Toledo',
    dates: '30 de junio - 8 de agosto',
    schedule: '9:00 - 14:00',
    price: 'Desde 40€/semana',
    flexibility: 'Grupos pequeños con atención individualizada.',
    category: 'summer',
  },
  {
    slug: 'deportes-aventura',
    title: 'Deportes y Aventura',
    subtitle: 'Juegos deportivos, circuitos y actividades al aire libre.',
    description: 'Campamento activo donde el movimiento, la cooperación y la diversión son la base. Ideal para niños que disfrutan del deporte y el aire libre.',
    ageRange: '6-14 años',
    interests: ['Deporte', 'Aventura', 'Trabajo en equipo', 'Salud'],
    activities: ['Circuitos deportivos', 'Juegos cooperativos', 'Circuitos de aventura', 'Dinámicas de grupo'],
    location: 'Av. de Irlanda, 24, Toledo',
    dates: '30 de junio - 8 de agosto',
    schedule: '9:00 - 14:00',
    price: 'Desde 50€/semana',
    flexibility: 'Opciones para jornadas completas o medias jornadas según grupos.',
    category: 'summer',
  },
  {
    slug: 'ciencias-experimentacion',
    title: 'Ciencias y Experimentación',
    subtitle: 'Descubrimiento científico con experimentos y proyectos prácticos.',
    description: 'Un campamento para explorar la ciencia a través de la experimentación segura y divertida. Perfecto para resolver dudas y crear curiosidad científica.',
    ageRange: '7-12 años',
    interests: ['Ciencia', 'Experimentos', 'Curiosidad', 'Descubrimiento'],
    activities: ['Laboratorio práctico', 'Experimentos en equipo', 'Resolución de problemas', 'Explicación de resultados'],
    location: 'Av. de Irlanda, 24, Toledo',
    dates: '30 de junio - 8 de agosto',
    schedule: '9:00 - 14:00',
    price: 'Desde 45€/semana',
    flexibility: 'Inscripción semanal con posibilidad de días puntuales.',
    category: 'summer',
  },
  {
    slug: 'semana-blanca',
    title: 'Semana Blanca',
    subtitle: 'Actividades especiales de invierno con mucha diversión.',
    description: 'Talleres y juegos temáticos durante la Semana Blanca. Una forma segura y entretenida de aprovechar las vacaciones escolares.',
    ageRange: '4-12 años',
    interests: ['Diversión', 'Juegos', 'Creatividad', 'Convivencia'],
    activities: ['Talleres artísticos', 'Juegos por estaciones', 'Pequeñas actividades deportivas', 'Dinámicas de grupo'],
    location: 'Av. de Irlanda, 24, Toledo',
    dates: 'Fechas según calendario escolar',
    schedule: '9:00 - 14:00',
    price: 'Desde 35€/día',
    flexibility: 'Inscripción por días sueltos según festivos escolares.',
    category: 'daysOff',
  },
  {
    slug: 'semana-santa',
    title: 'Semana Santa',
    subtitle: 'Talleres temáticos y actividades especiales durante vacaciones.',
    description: 'Programación especial para Semana Santa con actividades creativas y educativas. Ideal para aprovechar el descanso escolar de forma activa.',
    ageRange: '4-12 años',
    interests: ['Talleres', 'Creatividad', 'Motricidad', 'Juego'],
    activities: ['Manualidades temáticas', 'Juegos educativos', 'Pequeños retos', 'Cuentacuentos participativos'],
    location: 'Av. de Irlanda, 24, Toledo',
    dates: 'Fechas según calendario escolar',
    schedule: '9:00 - 14:00',
    price: 'Desde 40€/día',
    flexibility: 'Días sueltos disponibles según demanda.',
    category: 'daysOff',
  },
  {
    slug: 'festivos-puentes',
    title: 'Festivos y Puentes',
    subtitle: 'Actividades recreativas para los días sin cole.',
    description: 'Jornadas de diversión y aprendizaje en festivos escolares. Una opción práctica para las familias que necesitan apoyo en días no lectivos.',
    ageRange: '4-12 años',
    interests: ['Festivos', 'Recreación', 'Aprendizaje', 'Socialización'],
    activities: ['Juegos libres', 'Talleres creativos', 'Actividades cooperativas', 'Dinámicas lúdicas'],
    location: 'Av. de Irlanda, 24, Toledo',
    dates: 'Fechas según calendario escolar',
    schedule: '9:00 - 14:00',
    price: 'Desde 30€/día',
    flexibility: 'Reserva por días sueltos o puentes completos.',
    category: 'daysOff',
  },
]

export function getCamp(slug: string) {
  return CAMPS.find((camp) => camp.slug === slug) ?? null
}

export function getCampBySlug(slug: string) {
  return getCamp(slug)
}

export const CAMPS_BY_CATEGORY = {
  summer: CAMPS.filter((camp) => camp.category === 'summer'),
  daysOff: CAMPS.filter((camp) => camp.category === 'daysOff'),
}
