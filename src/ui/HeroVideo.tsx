import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface HeroVideoProps {
  videoSrc: string
  videoPoster?: string
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  children?: ReactNode
}

export function HeroVideo({
  videoSrc,
  videoPoster,
  title,
  subtitle,
  ctaText,
  ctaLink,
  children,
}: HeroVideoProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster={videoPoster}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="mb-4 text-4xl font-black leading-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mb-8 text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}

        {ctaText && ctaLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link
              to={ctaLink}
              className="inline-block rounded-full bg-brand px-8 py-3 font-bold text-white transition hover:brightness-90 active:scale-95 sm:py-4 sm:px-10"
            >
              {ctaText}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
