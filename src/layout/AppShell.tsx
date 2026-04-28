import { Outlet, useLocation } from 'react-router-dom'
import { SiteHeader } from '../ui/SiteHeader'
import { SiteFooter } from '../ui/SiteFooter'
import { FloatingCTA } from '../ui/FloatingCTA'

export function AppShell() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-svh bg-white">
      {/* Skip link — accesibilidad teclado y lectores de pantalla */}
      <a href="#skip-main" className="skip-link">
        Saltar al contenido principal
      </a>
      <SiteHeader />
      <main
        id="skip-main"
        role="main"
        className={isHome ? '' : 'mx-auto w-full max-w-5xl px-4 sm:px-6'}
      >
        <div className={isHome ? '' : 'animate-[fadeIn_.18s_ease-out]'}>
          <Outlet />
        </div>
      </main>
      <SiteFooter />
      <FloatingCTA message="¡Hola! Quiero información sobre Kids Talent." />
    </div>
  )
}


