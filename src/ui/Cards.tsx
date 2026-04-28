import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useId } from 'react'

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-center text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
      {children}
    </h1>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
      {children}
    </h2>
  )
}

export function Card({
  title,
  subtitle,
  image,
  footer,
}: {
  title: string
  subtitle?: string
  image?: ReactNode
  footer?: ReactNode
}) {
  const headingId = useId()

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg hover:shadow-xl transition-all"
      aria-labelledby={headingId}
    >
      {/* Visual Header */}
      {image ? (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
            {image}
          </div>
        </div>
      ) : (
        <div className="aspect-video w-full bg-slate-100" aria-hidden="true" />
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3
          id={headingId}
          className="text-2xl font-black text-slate-900 group-hover:text-brand transition-colors"
        >
          {title}
        </h3>
        
        {subtitle && (
          <p className="mt-2 text-slate-500 font-medium leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100 pt-6">
          {footer}
        </div>
      </div>
    </motion.article>
  )
}

export function PlaceholderImage({ label, src }: { label: string; src?: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    )
  }
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-slate-100 text-sm font-bold text-slate-400"
      aria-label={label}
    >
      {label}
    </div>
  )
}
