import { motion } from 'framer-motion'
import { Section, SectionTitle, SectionSubtitle } from '../ui/Section'
import { Link } from 'react-router-dom'

const staff = [
  {
    name: 'Zara Imni',
    role: 'Coordinación',
    image: 'https://kidstalent.es/content/uploads/2023/09/WhatsApp-Image-2023-09-14-at-15.35.45-761x1024.jpeg',
    info: 'Zara es la coordinadora de nuestro centro, con una amplia experiencia en educación infantil y un enfoque centrado en el desarrollo integral de los niños. Su pasión por la enseñanza y su dedicación a cada niño hacen que sea una pieza clave en nuestro equipo.',
  },
  {
    name: 'Beatriz Sánchez',
    role: 'Apoyo Escolar',
    image: 'https://kidstalent.es/content/uploads/2017/08/IMG_1042-1365x1024.jpg',
    info: 'Beatriz es nuestra especialista en apoyo escolar, con una sólida formación en pedagogía y una gran habilidad para conectar con los niños. Su enfoque personalizado y su paciencia hacen que cada sesión de apoyo sea efectiva y motivadora para los niños.',
  },
  {
    name: 'Begoña García-ochoa',
    role: 'Robótica LEGO',
    image: 'https://kidstalent.es/content/uploads/2017/08/foto-begon~a-1.jpg',
    info: 'Begoña es nuestra experta en robótica LEGO, con una amplia experiencia en la enseñanza de tecnología a niños. Su creatividad y su habilidad para hacer que el aprendizaje sea divertido y accesible hacen que las clases de robótica sean un éxito entre nuestros alumnos.',
  },
  {
    name: 'Virginia Ramos',
    role: 'Matemáticas',
    image: 'https://kidstalent.es/content/uploads/2021/04/WhatsApp-Image-2021-04-22-at-12.36.14-768x1024.jpeg',
    info: 'Virginia es nuestra especialista en matemáticas, con una sólida formación en educación matemática y una gran pasión por enseñar esta materia. Su enfoque práctico y su habilidad para hacer que las matemáticas sean comprensibles y divertidas hacen que nuestros alumnos desarrollen confianza y habilidades en esta área.',
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
              <div className="relative h-64 overflow-hidden bg-brand">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-100 group-hover:opacity-40 transition-opacity duration-300"
                />

                <div className="absolute inset-0 flex items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100  font-bold transition-opacity duration-300">
                  <p className="text-sm text-opacity-100 text-white">{member.info}</p>
                </div>
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
      <Section  withPadding={false}>
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
