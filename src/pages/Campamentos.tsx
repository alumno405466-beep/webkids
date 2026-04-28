import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card, PlaceholderImage } from '../ui/Cards'
import { Section, SectionTitle, SectionSubtitle } from '../ui/Section'
import { CAMPS_BY_CATEGORY } from '../content/camps'

export function Campamentos() {
  return (
    <div className="w-full">
      {/* Hero Visual */}
      <div className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-slate-900 px-4 py-20 text-center">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.pexels.com/photos/35893083/pexels-photo-35893083.jpeg" 
            alt="Campamento de verano Kids Talent" 
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
            Campamentos <span className="text-brand text-transparent bg-clip-text bg-gradient-to-r from-brand to-brandD">Inolvidables</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg font-medium text-slate-200 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Verano de aventura, aprendizaje y diversión para niños. Distintas sedes, la misma magia de siempre.
          </motion.p>
        </div>
      </div>

      {/* Summer Camp */}
      <Section bgColor="slate">
        <div className="text-center mb-16">
          <SectionTitle>Summer Camp 2025</SectionTitle>
          <SectionSubtitle>Elige la sede más cercana a ti</SectionSubtitle>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CAMPS_BY_CATEGORY.summer.map((c, i) => (
            <motion.div 
              key={c.slug} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                title={c.title}
                subtitle={`${c.subtitle} • ${c.price} • ${c.ageRange}`}
                image={<PlaceholderImage label={c.title} src="https://images.pexels.com/photos/5274629/pexels-photo-5274629.jpeg" />}
                footer={
                  <>
                    <Link 
                      to={`/campamentos/${c.slug}`} 
                      className="flex min-h-[48px] items-center justify-center rounded-full border-2 border-brand px-6 font-bold text-brand transition-all hover:bg-brand hover:text-white"
                    >
                      Saber más
                    </Link>
                    <Link 
                      to={`/intake/campamentos?camp=${c.slug}`} 
                      className="flex min-h-[48px] items-center justify-center rounded-full bg-brand px-6 font-bold text-white transition-all hover:scale-105 hover:shadow-md"
                    >
                      Reservar Plaza
                    </Link>
                  </>
                }
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Días sin cole */}
      <Section bgColor="white">
        <div className="text-center mb-16">
          <SectionTitle>Días sin cole</SectionTitle>
          <SectionSubtitle>Para que los niños disfruten los festivos aprendiendo</SectionSubtitle>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CAMPS_BY_CATEGORY.daysOff.map((c, i) => (
            <motion.div 
              key={c.slug} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                title={c.title}
                subtitle={`${c.subtitle} • ${c.price} • ${c.ageRange}`}
                image={<PlaceholderImage label={c.title} src="https://images.pexels.com/photos/19902488/pexels-photo-19902488.jpeg" />}
                footer={
                  <>
                    <Link 
                      to={`/campamentos/${c.slug}`} 
                      className="flex min-h-[48px] items-center justify-center rounded-full border-2 border-brand px-6 font-bold text-brand transition-all hover:bg-brand hover:text-white"
                    >
                      Saber más
                    </Link>
                    <Link 
                      to={`/intake/campamentos?camp=${c.slug}`} 
                      className="flex min-h-[48px] items-center justify-center rounded-full bg-brand px-6 font-bold text-white transition-all hover:scale-105 hover:shadow-md"
                    >
                      Reservar
                    </Link>
                  </>
                }
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <Section bgColor="slate" withPadding={false}>
        <div className="relative isolate overflow-hidden bg-brand px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 mx-4 sm:mx-8 mb-8 mt-8">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Dudas sobre las fechas o sedes?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-100">
            Ponte en contacto con nosotros para consultar disponibilidad o para preguntar cualquier duda sobre los campamentos.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contacto"
              className="flex min-h-[60px] min-w-[200px] items-center justify-center rounded-full bg-white px-8 text-lg font-black text-brand shadow-sm hover:scale-105 transition-transform"
            >
              Contactar Ahora
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
