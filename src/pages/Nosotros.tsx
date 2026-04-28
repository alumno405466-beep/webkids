import { motion } from 'framer-motion'
import { Section, SectionTitle, SectionSubtitle } from '../ui/Section'
import { Link } from 'react-router-dom'

const staff = [
  {
    name: 'Zara Imni',
    role: 'Coordinación',
    image: 'https://kidstalent.es/content/uploads/2023/09/WhatsApp-Image-2023-09-14-at-15.35.45-761x1024.jpeg',
  },
  {
    name: 'Beatriz Sánchez',
    role: 'Apoyo Escolar',
    image: 'https://kidstalent.es/content/uploads/2017/08/IMG_1042-1365x1024.jpg',
  },
  {
    name: 'Begoña García-ochoa',
    role: 'Robótica LEGO',
    image: 'https://kidstalent.es/content/uploads/2017/08/foto-begon~a-1.jpg',
  },
  {
    name: 'Virginia Ramos',
    role: 'Matemáticas',
    image: 'https://kidstalent.es/content/uploads/2021/04/WhatsApp-Image-2021-04-22-at-12.36.14-768x1024.jpeg',
  },
]

export function Nosotros() {
  return (
    <div className="w-full">
      {/* Hero */}
      <Section bgColor="slate">
        <div className="text-center">
          <SectionTitle>Nuestro Equipo</SectionTitle>
          <SectionSubtitle>Profesionales vocacionales comprometidos con el desarrollo integral de cada niño</SectionSubtitle>
        </div>
      </Section>

      {/* Valores */}
      <Section bgColor="white">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: '❤️', title: 'Vocación', text: 'Trabajamos con pasión y compromiso real.' },
            { icon: '🎯', title: 'Personalización', text: 'Adaptamos todo a cada niño y sus ritmo.' },
            { icon: '🤝', title: 'Familia', text: 'Comunicación constante con los padres.' },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              className="rounded-2xl bg-slate-50 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="mb-4 text-5xl">{v.icon}</div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{v.title}</h3>
              <p className="text-slate-600">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Equipo destacado */}
      <Section bgColor="slate">
        <div>
          <SectionTitle>Algunos de nuestros profes</SectionTitle>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {staff.map((member, i) => (
            <motion.div
              key={member.name}
              className="group rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="h-64 overflow-hidden bg-slate-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-4">
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm text-brand font-semibold">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="gradient" withPadding={false}>
        <div className="rounded-2xl bg-white p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl font-black text-slate-900 mb-4">¿Quieres conocernos?</h2>
            <p className="mb-8 text-slate-600">Contacta y habla con nuestro equipo</p>
            <Link
              to="/contacto"
              className="inline-block rounded-full bg-brand px-8 py-4 font-bold text-white transition hover:brightness-90"
            >
              Solicitar una visita
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
