import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROGRAMS, getProgram } from '../content/programs'
import { CONTACT, whatsappLink } from '../content/contact'
import { JsonLd } from '../seo/JsonLd'
import { Section } from '../ui/Section'

export function ProgramDetail() {
  const { slug } = useParams()
  const program = slug ? getProgram(slug) : null

  const jsonLd = useMemo(() => {
    if (!program) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: program.title,
      description: program.summary,
      provider: {
        '@type': 'Organization',
        name: 'KidsTalent',
        email: CONTACT.email,
        telephone: CONTACT.phone,
        address: CONTACT.address,
      },
      audience: { '@type': 'Audience', audienceType: 'Niños y jóvenes' },
    }
  }, [program])

  if (!program) {
    return (
      <Section bgColor="slate">
        <div className="flex flex-col items-center justify-center space-y-6 rounded-3xl border border-slate-100 bg-white p-12 text-center shadow-lg">
          <div className="text-6xl mb-4" aria-hidden="true">🔍</div>
          <h1 className="text-3xl font-black text-slate-900">Programa no encontrado</h1>
          <p className="text-lg text-slate-600">Ese programa no existe o ha cambiado de dirección.</p>
          <Link 
            to="/programas" 
            className="mt-4 flex min-h-[60px] items-center justify-center rounded-full bg-brand px-8 text-lg font-bold text-white shadow-sm transition-all hover:scale-105"
          >
            Ver todos los programas
          </Link>
        </div>
      </Section>
    )
  }

  const siblings = PROGRAMS.filter((p) => p.slug !== program.slug).slice(0, 3)

  return (
    <div className="w-full">
      {jsonLd ? <JsonLd data={jsonLd} /> : null}

      {/* Hero Inmersivo */}
      <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-slate-900 px-4 py-20 text-center">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.pexels.com/photos/19902488/pexels-photo-19902488.jpeg" 
            alt={program.title}
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
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="rounded-full bg-brand/20 px-4 py-1.5 text-sm font-black uppercase tracking-widest text-brand-100 backdrop-blur-sm">
                {program.category}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white backdrop-blur-sm border border-white/20">
                {program.ages}
              </span>
            </div>
            
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              {program.title}
            </h1>
            <p className="mt-6 text-xl text-slate-200 leading-relaxed sm:text-2xl max-w-2xl mx-auto">
              {program.summary}
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
              <h2 className="text-3xl font-black text-slate-900 mb-6">¿Qué es?</h2>
              <p className="text-lg leading-relaxed text-slate-600">{program.whatIs}</p>
            </motion.article>

            <motion.article 
              className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-6">¿Para quién es?</h2>
              <p className="text-lg leading-relaxed text-slate-600">{program.forWho}</p>
            </motion.article>

            <motion.article 
              className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-6">¿Qué desarrolla?</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {program.develops.map((skill) => (
                  <div key={skill} className="flex items-center gap-4 rounded-2xl bg-brand/5 p-4 border border-brand/10">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white font-bold">
                      ✓
                    </div>
                    <span className="font-bold text-slate-800">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article 
              className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-6">Cómo Trabajamos</h2>
              <ul className="space-y-4">
                {program.howWeWork.map((x) => (
                  <li key={x} className="flex items-center gap-4 text-lg text-slate-700">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 font-bold">
                      →
                    </div>
                    <span>{x}</span>
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
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-black text-slate-900 mb-6">Información Práctica</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-slate-400 text-sm uppercase tracking-wider mb-2">Duración</p>
                  <p className="text-lg font-medium text-slate-900">{program.practical.duration ?? 'A confirmar'}</p>
                </div>
                <div>
                  <p className="font-bold text-slate-400 text-sm uppercase tracking-wider mb-2">Horarios</p>
                  <p className="text-lg font-medium text-slate-900">{program.practical.schedule ?? 'A confirmar'}</p>
                </div>
                <div>
                  <p className="font-bold text-slate-400 text-sm uppercase tracking-wider mb-2">Intereses</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {program.interests.map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="sticky top-24 rounded-3xl bg-brand p-8 shadow-xl text-white"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-black mb-2">Siguiente Paso</h2>
              <p className="text-brand-100 text-lg mb-8">Escríbenos para conocer más detalles y solicitar información personalizada.</p>
              
              <div className="space-y-4">
                <Link
                  to="/contacto"
                  className="flex min-h-[60px] items-center justify-center rounded-full bg-white px-6 font-black text-brand shadow-md transition-all hover:scale-105"
                >
                  Solicitar Información
                </Link>
                <a
                  href={whatsappLink(`Hola, me gustaría información sobre el programa: ${program.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[60px] items-center justify-center rounded-full border-2 border-white/30 bg-transparent px-6 font-bold text-white transition-all hover:bg-white/10"
                >
                  Preguntar por WhatsApp
                </a>
              </div>
            </motion.div>
          </aside>
        </div>
      </Section>

      {/* Programas recomendados */}
      {siblings.length > 0 && (
        <Section bgColor="white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900">También te puede interesar</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {siblings.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to={`/programas/${p.slug}`}
                  className="group block rounded-3xl border border-slate-100 bg-slate-50 p-6 transition-all hover:shadow-lg hover:border-brand/30 hover:bg-white"
                >
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-brand transition-colors mb-2">{p.category}</span>
                  <span className="block text-xl font-black text-slate-900">{p.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}
