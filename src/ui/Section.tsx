import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  bgColor?: 'white' | 'slate' | 'gradient'
  withPadding?: boolean
}

const bgClasses = {
  white: 'bg-white',
  slate: 'bg-slate-50',
  gradient: 'bg-gradient-to-br from-brand to-brandD',
}

export function Section({
  children,
  className = '',
  id,
  bgColor = 'white',
  withPadding = true,
}: SectionProps) {
  const padding = withPadding ? 'py-16 sm:py-20' : ''

  return (
    <motion.section
      id={id}
      className={`w-full ${bgClasses[bgColor]} ${padding} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {children}
      </div>
    </motion.section>
  )
}

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      className={`text-3xl font-black sm:text-4xl ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.h2>
  )
}

export function SectionSubtitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.p
      className={`mt-2 text-lg text-slate-600 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {children}
    </motion.p>
  )
}
