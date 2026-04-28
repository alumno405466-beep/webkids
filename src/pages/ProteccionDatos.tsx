import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageTitle } from '../ui/Cards'

export function ProteccionDatos() {
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
    <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
      {/* Breadcrumb */}
      <motion.nav variants={itemVariants} aria-label="Ruta de navegación" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="transition hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Inicio</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li><span className="font-semibold text-slate-700" aria-current="page">Protección de datos</span></li>
        </ol>
      </motion.nav>

      <motion.div variants={itemVariants}>
        <PageTitle>Protección de datos</PageTitle>
      </motion.div>

      <motion.section variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
        <div className="prose prose-slate max-w-none text-sm">
          <p>
            Contenido <strong>genérico</strong>. Ajustar a RGPD/LOPDGDD y a tu
            realidad (encargados, plazos, etc.).
          </p>
          <h2>Conservación</h2>
          <p>
            Conservaremos los datos el tiempo necesario para atender la
            solicitud.
          </p>
          <h2>Comunicación a terceros</h2>
          <p>No se cederán datos salvo obligación legal.</p>
          <h2>Medidas de seguridad</h2>
          <p>Se aplicarán medidas técnicas y organizativas adecuadas.</p>
        </div>
      </motion.section>
    </motion.div>
  )
}

