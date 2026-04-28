import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCamp } from '../content/camps'
import { whatsappLink } from '../content/contact'
import { Section } from '../ui/Section'

export function CampDetail() {
  const { slug } = useParams()
  const camp = slug ? getCamp(slug) : null

  if (!camp) {
    return (
      <Section bgColor="slate">
        <div className="flex flex-col items-center justify-center space-y-6 rounded-3xl border border-slate-100 bg-white p-12 text-center shadow-lg">
          <div className="text-6xl mb-4" aria-hidden="true">🏕️</div>
          <h1 className="text-3xl font-black text-slate-900">Campamento no encontrado</h1>
          <p className="text-lg text-slate-600">Comprueba el enlace o vuelve a la página de campamentos para elegir otra opción.</p>
          <Link 
            to="/campamentos" 
            className="mt-4 flex min-h-[60px] items-center justify-center rounded-full bg-brand px-8 text-lg font-bold text-white shadow-sm transition-all hover:scale-105"
          >
            Volver a campamentos
          </Link>
        </div>
      </Section>
    )
  }

  return (
    <div className="w-full">
      {/* Hero Inmersivo */}
      <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-slate-900 px-4 py-20 text-center">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.pexels.com/photos/5274629/pexels-photo-5274629.jpeg" 
            alt={camp.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-brand/20 px-4 py-1.5 text-sm font-black uppercase tracking-widest text-brand-100 backdrop-blur-sm mb-6">
              {camp.category === 'summer' ? 'Verano' : 'Días Sin Cole'}
            </span>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              {camp.title}
            </h1>
            <p className="mt-6 text-xl text-slate-200 leading-relaxed sm:text-2xl max-w-2xl mx-auto">
              {camp.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <Section bgColor="slate">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* Main Content */}
          <div className="space-y-8">
            <motion.article 
              className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-6">Información General</h2>
              <p className="text-lg leading-relaxed text-slate-600">{camp.description}</p>
            </motion.article>

            <motion.article 
              className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-6">Qué incluye</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Edades</p>
                  <p className="text-xl font-black text-slate-900">{camp.ageRange}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Fechas</p>
                  <p className="text-xl font-black text-slate-900">{camp.dates}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Horario</p>
                  <p className="text-xl font-black text-slate-900">{camp.schedule}</p>
                </div>
                <div className="rounded-2xl bg-brand/5 p-6 border border-brand/10">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand/70 mb-2">Precio</p>
                  <p className="text-xl font-black text-brand">{camp.price}</p>
                </div>
              </div>
            </motion.article>

            <motion.article 
              className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-6">Actividades Principales</h2>
              <ul className="space-y-4">
                {camp.activities.map((activity) => (
                  <li key={activity} className="flex items-center gap-4 text-lg text-slate-700">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      ✓
                    </div>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <motion.div 
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-black text-slate-900 mb-6">Detalles extra</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-slate-400 text-sm uppercase tracking-wider mb-2">Ubicación</p>
                  <p className="text-lg font-medium text-slate-900">{camp.location}</p>
                </div>
                <div>
                  <p className="font-bold text-slate-400 text-sm uppercase tracking-wider mb-2">Flexibilidad</p>
                  <p className="text-lg font-medium text-slate-900">{camp.flexibility}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="sticky top-24 rounded-3xl bg-brand p-8 shadow-xl text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-black mb-2">¿Te unes?</h2>
              <p className="text-brand-100 text-lg mb-8">Reserva tu plaza ahora y nos pondremos en contacto contigo.</p>
              
              <div className="space-y-4">
                <Link
                  to={`/intake/campamentos?camp=${camp.slug}`}
                  className="flex min-h-[60px] items-center justify-center rounded-full bg-white px-6 font-black text-brand shadow-md transition-all hover:scale-105"
                >
                  Reservar Campamento
                </Link>
                <a
                  href={whatsappLink(`Hola, me gustaría reservar plaza en ${camp.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[60px] items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-6 font-bold text-white transition-all hover:bg-white/10"
                >
                  Dudas por WhatsApp
                </a>
              </div>
            </motion.div>
          </aside>
        </div>
      </Section>
    </div>
  )
}
