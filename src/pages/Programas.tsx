import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '../ui/Section'
import { PROGRAM_CATEGORIES, PROGRAMS, type ProgramCategory } from '../content/programs'

const categoryIcons: Record<ProgramCategory, string> = {
  'Creatividad': '🎨',
  'Tecnología': '💻',
  'Idiomas': '🌍',
  'Refuerzo académico': '📚',
  'Experiencias': '🎉',
}

const categoryImages: Record<ProgramCategory, string> = {
  'Creatividad': 'https://images.pexels.com/photos/4543646/pexels-photo-4543646.jpeg',
  'Tecnología': 'https://images.pexels.com/photos/19902488/pexels-photo-19902488.jpeg',
  'Idiomas': 'https://images.pexels.com/photos/35893083/pexels-photo-35893083.jpeg',
  'Refuerzo académico': 'https://images.pexels.com/photos/4894738/pexels-photo-4894738.jpeg',
  'Experiencias': 'https://images.pexels.com/photos/5274629/pexels-photo-5274629.jpeg',
}

export function Programas() {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory | 'Todas'>('Todas')

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((p) => {
      return selectedCategory === 'Todas' ? true : p.category === selectedCategory
    })
  }, [selectedCategory])

  return (
    <div className="w-full">
      {/* Hero Visual */}
      <div className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-slate-900 px-4 py-20 text-center">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.pexels.com/photos/5274629/pexels-photo-5274629.jpeg" 
            alt="Niños aprendiendo" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl">
          <motion.h1 
            className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Descubre su <span className="text-brand text-transparent bg-clip-text bg-gradient-to-r from-brand to-brandD">Pasión</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg font-medium text-slate-200 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explora nuestros programas diseñados para despertar la curiosidad y el talento natural de tu hijo.
          </motion.p>
        </div>
      </div>

      {/* Filtros Simplificados (Hick's Law: Menos opciones a la vista, navegación clara) */}
      <Section bgColor="slate" withPadding={false} className="border-b border-slate-200 py-6 sticky top-0 z-20 shadow-sm backdrop-blur-md bg-white/90">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide px-4 sm:justify-center gap-3 snap-x">
          <button
            onClick={() => setSelectedCategory('Todas')}
            className={`flex-shrink-0 snap-center rounded-full px-6 py-3 font-bold transition-all ${
              selectedCategory === 'Todas'
                ? 'bg-brand text-white shadow-md scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos
          </button>
          {PROGRAM_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-shrink-0 snap-center flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-brand text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>{categoryIcons[cat]}</span>
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </Section>

      {/* Lista de Programas (Fitts' Law: Tarjetas grandes, botones accesibles) */}
      <Section bgColor="white">
        <AnimatePresence mode="popLayout">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program, i) => (
              <motion.article
                layout
                key={program.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100 hover:shadow-xl transition-all"
              >
                {/* Visual */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={categoryImages[program.category]}
                    alt={program.category}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-xs font-black uppercase tracking-wide text-brand shadow-sm">
                    {categoryIcons[program.category]} {program.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand transition-colors">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed flex-1">
                    {program.summary}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="text-sm">
                      <span className="block font-bold text-slate-900">Edades</span>
                      <span className="text-slate-500">{program.ages}</span>
                    </div>
                    <Link
                      to={`/programas/${program.slug}`}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white"
                      aria-label={`Ver detalles de ${program.title}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </Section>
    </div>
  )
}
