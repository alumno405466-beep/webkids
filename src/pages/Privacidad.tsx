import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageTitle } from '../ui/Cards'

const sections = [
  { id: 'responsable', title: 'Responsable del tratamiento' },
  { id: 'finalidad', title: 'Finalidad' },
  { id: 'legitimacion', title: 'Legitimación' },
  { id: 'derechos', title: 'Derechos del usuario' },
  { id: 'contacto-dpo', title: 'Contacto' },
]

export function Privacidad() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div className="space-y-5" variants={containerVariants} initial="hidden" animate="visible">
      {/* Breadcrumb */}
      <motion.nav variants={itemVariants} aria-label="Ruta de navegación" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Inicio</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><span className="font-semibold text-slate-700" aria-current="page">Política de privacidad</span></li>
        </ol>
      </motion.nav>

      <motion.div variants={itemVariants}>
        <PageTitle>Política de privacidad</PageTitle>
      </motion.div>

      {/* Tabla de contenidos — facilita navegación en documentos largos */}
      <motion.nav variants={itemVariants} aria-label="Tabla de contenidos" className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">Contenido</div>
        <ol className="space-y-1">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-brand transition hover:bg-white hover:shadow-soft"
              >
                <span className="text-xs text-slate-400 w-4">{i + 1}.</span>
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </motion.nav>

      <motion.section variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <div className="prose prose-slate prose-sm max-w-none">
          <p className="text-slate-500 text-xs mb-6">
            Este texto es genérico y sirve como placeholder. Sustitúyelo por tu política real antes de publicar.
          </p>

          <h2 id="responsable">Responsable del tratamiento</h2>
          <p>KidsTalent Toledo · <a href="mailto:hola@kidstalent.es" className="text-brand">hola@kidstalent.es</a></p>

          <h2 id="finalidad">Finalidad</h2>
          <p>
            Gestionar solicitudes de información y responder a través de los canales de contacto facilitados por el usuario.
            No se realizarán comunicaciones comerciales sin consentimiento explícito.
          </p>

          <h2 id="legitimacion">Legitimación</h2>
          <p>
            El tratamiento de tus datos se basa en el consentimiento que nos otorgas al rellenar cualquiera de nuestros
            formularios de contacto.
          </p>

          <h2 id="derechos">Derechos del usuario</h2>
          <p>
            Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
            portabilidad de los datos enviando un email a{' '}
            <a href="mailto:hola@kidstalent.es" className="text-brand">hola@kidstalent.es</a>.
          </p>

          <h2 id="contacto-dpo">Contacto</h2>
          <p>
            Para cualquier consulta sobre el tratamiento de tus datos personales puedes contactarnos en{' '}
            <a href="mailto:hola@kidstalent.es" className="text-brand">hola@kidstalent.es</a>.
          </p>
        </div>
      </motion.section>

      <motion.div variants={itemVariants} className="text-center">
        <Link to="/" className="text-sm text-brand transition hover:brightness-95 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
          ← Volver al inicio
        </Link>
      </motion.div>
    </motion.div>
  )
}
