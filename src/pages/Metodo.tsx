import { motion } from 'framer-motion'
import { Section, SectionTitle, SectionSubtitle } from '../ui/Section'
import { Link } from 'react-router-dom'
import { CONTACT } from '../content/contact'

const methodSteps = [
  {
    icon: '🔍',
    title: 'Diagnóstico',
    description: 'Conocemos el nivel, intereses y objetivos de cada niño sin presión.',
  },
  {
    icon: '🎯',
    title: 'Plan personalizado',
    description: 'Diseñamos una ruta adaptada a su edad, ritmo y capacidades.',
  },
  {
    icon: '🚀',
    title: 'Aprendizaje activo',
    description: 'Proyectos reales, juegos y retos que hacen que aprender sea motivador.',
  },
  {
    icon: '📈',
    title: 'Seguimiento',
    description: 'Feedback constante con la familia para celebrar el progreso.',
  },
]

const principles = [
  {
    title: 'Experiencias positivas',
    description: 'El aprendizaje debe ser disfrutable y natural, como aprender a bailar o pintar.',
    image: 'https://images.pexels.com/photos/35893083/pexels-photo-35893083.jpeg'
  },
  {
    title: 'Protagonismo del niño',
    description: 'Los niños marcan el rumbo, nosotros proponemos los contenidos.',
    image: 'https://images.pexels.com/photos/19902488/pexels-photo-19902488.jpeg'
  },
  {
    title: 'Inteligencia emocional',
    description: 'Trabajamos en el desarrollo integral, no solo académico.',
    image: 'https://images.pexels.com/photos/4543646/pexels-photo-4543646.jpeg'
  },
  {
    title: 'Inclusivo y Diverso',
    description: 'Diseñado para todos: enriquecimiento curricular, AACC, perfiles especiales.',
    image: 'https://images.pexels.com/photos/4894738/pexels-photo-4894738.jpeg'
  },
]

export function Metodo() {
  return (
    <div className="w-full">
      {/* Hero Visual y Envolvente */}
      <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-slate-900 px-4 py-20 text-center">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.pexels.com/photos/5274629/pexels-photo-5274629.jpeg" 
            alt="Niños concentrados aprendiendo" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-sketch font-black tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nuestro <span className="text-brand">Método</span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl text-slate-200 leading-relaxed sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Aprender debe ser una experiencia natural y feliz. Como cuando aprendiste a montar en bici, hablar o bailar: experimentar para aprender.
          </motion.p>
        </div>
      </div>

      {/* Proceso - Tarjetas visuales */}
      <Section bgColor="white">
        <div className="text-center">
          <SectionTitle>Cómo Trabajamos</SectionTitle>
          <SectionSubtitle>Un proceso de 4 pasos diseñado para tu hijo</SectionSubtitle>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative rounded-3xl bg-slate-50 p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-3xl shadow-lg transform -rotate-6">
                {step.icon}
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-black text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Principios - Split layout con imágenes alternas */}
      <Section bgColor="slate">
        <div className="text-center mb-16">
          <SectionTitle>Nuestros Principios</SectionTitle>
          <SectionSubtitle>Lo que nos define como centro de aprendizaje</SectionSubtitle>
        </div>
        <div className="space-y-24 max-w-6xl mx-auto">
          {principles.map((principle, i) => (
            <div key={principle.title} className={`flex flex-col gap-12 lg:flex-row lg:items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: i % 2 !== 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 text-brand font-black text-xl">
                    {i + 1}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">{principle.title}</h3>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                  <img 
                    src={principle.image} 
                    alt={principle.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <Section bgColor="white" withPadding={false}>
        <div className="relative isolate overflow-hidden bg-brand px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 mx-4 sm:mx-8 mb-8 mt-8">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Listo para conocernos?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-100">
            Hablemos sobre cómo podemos ayudar a tu hijo a desarrollar su máximo potencial.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contacto"
              className="flex min-h-[60px] min-w-[200px] items-center justify-center rounded-full bg-white px-8 text-lg font-black text-brand shadow-sm hover:scale-105 transition-transform"
            >
              Reservar una cita
            </Link>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="flex min-h-[60px] min-w-[200px] items-center justify-center rounded-full border-2 border-white px-8 text-lg font-bold text-white hover:bg-white/10 transition-colors"
            >
              Llamar al centro
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}
