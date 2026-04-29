import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-horizontal.png'
const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/metodo', label: 'Método' },
  { to: '/programas', label: 'Programas' },
  { to: '/campamentos', label: 'Campamentos' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Cerrar con Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // Foco al abrir
  useEffect(() => {
    if (open) {
      setTimeout(() => closeButtonRef.current?.focus(), 50)
    }
  }, [open])

  // Bloquear scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[#10B2AE] text-white">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-3 py-2 sm:px-4">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center rounded-xl px-2 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="KidsTalent — Ir a inicio"
            onClick={() => setOpen(false)}
          >
            <img src={logo} alt="KidsTalent" className="h-9 w-auto" />
          </NavLink>

          {/* NAV ESCRITORIO */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.to === '/'}
                className={({ isActive }) =>
                  [
                    'px-3 py-2 rounded-xl text-sm font-bold transition',
                    isActive
                      ? 'bg-white text-[#10B2AE]'
                      : 'text-white hover:bg-white/20',
                  ].join(' ')
                }
              >
                {it.label}
              </NavLink>
            ))}

          </nav>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            ref={menuButtonRef}
            type="button"
            className="md:hidden flex min-h-[48px] min-w-[48px] flex-col items-center justify-center gap-1.5 rounded-xl bg-white/15 px-3 py-2 transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:bg-white/20"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="nav-drawer"
            aria-label={open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            <motion.span
              className="block h-0.5 w-5 origin-center rounded-full bg-white"
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-5 rounded-full bg-white"
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block h-0.5 w-5 origin-center rounded-full bg-white"
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Drawer solo móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          >
            <motion.aside
              id="nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: 'spring', stiffness: 520, damping: 40 }}
              className="absolute right-0 top-0 flex h-full w-[320px] max-w-[86vw] flex-col bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cabecera */}
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
                <img src={logo} alt="KidsTalent" className="h-7 w-auto" />
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-95"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Navegación */}
              <nav className="flex-1 overflow-y-auto px-4 py-3">
                <div className="grid gap-1">
                  {navItems.map((it) => (
                    <NavLink
                      key={it.to}
                      to={it.to}
                      end={it.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        [
                          'flex min-h-[48px] items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold transition',
                          isActive
                            ? 'bg-brand text-white shadow-sm'
                            : 'text-slate-800 hover:bg-slate-100 active:bg-slate-200',
                        ].join(' ')
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{it.label}</span>
                          <span className={isActive ? 'text-white/80' : 'text-slate-400'}>
                            →
                          </span>
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </nav>

              
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}