import { motion } from 'framer-motion'
import { Section, SectionTitle, SectionSubtitle } from '../ui/Section'
import { HeroVideo } from '../ui/HeroVideo'
import { VideoGallery } from '../ui/VideoGallery'
import { ImageGallery } from '../ui/ImageGallery'
import { Testimonials } from '../ui/Testimonials'
import type { VideoItem } from '../ui/VideoGallery'
import type { ImageItem } from '../ui/ImageGallery'
import type { Testimonial } from '../ui/Testimonials'
import { Link } from 'react-router-dom'
import { CONTACT } from '../content/contact'

const activitiesVideos: VideoItem[] = [
  {
    id: 'robotica',
    title: 'Robótica y Tecnología',
    description: 'Construimos el futuro pieza a pieza',
    iframeUrl: 'https://player.vimeo.com/video/76979871?h=8384b7eccc&autoplay=0&loop=1&muted=1',
    aspectRatio: 'video',
  },
  {
    id: 'arte',
    title: 'Arte y Expresión',
    description: 'Dejamos volar la imaginación',
    iframeUrl: 'https://player.vimeo.com/video/73701132?h=8384b7eccc&autoplay=0&loop=1&muted=1',
    aspectRatio: 'video',
  },
  {
    id: 'ingles',
    title: 'Idiomas Inmersivos',
    description: 'Aprender jugando de forma natural',
    iframeUrl: 'https://player.vimeo.com/video/75899827?h=8384b7eccc&autoplay=0&loop=1&muted=1',
    aspectRatio: 'video',
  },
]

const experiences: ImageItem[] = [
  {
    id: 'ambiente',
    src: 'https://images.pexels.com/photos/4543646/pexels-photo-4543646.jpeg',
    alt: 'Ambiente familiar y cercano',
  },
  {
    id: 'proyectos',
    src: 'https://images.pexels.com/photos/19902488/pexels-photo-19902488.jpeg',
    alt: 'Niños en proyectos',
  },
  {
    id: 'equipo',
    src: 'https://images.pexels.com/photos/4894738/pexels-photo-4894738.jpeg',
    alt: 'Trabajo en equipo',
  },
  {
    id: 'juego',
    src: 'https://images.pexels.com/photos/35893083/pexels-photo-35893083.jpeg',
    alt: 'Juego libre',
  },
]

const testimonials: Testimonial[] = [
  {
    id: 'maria',
    name: 'María del Carmen',
    role: 'Madre de 2 hijos',
    quote: 'Mis hijos van felices cada semana. El ambiente y el equipo son increíbles.',
    rating: 5,
  },
  {
    id: 'carlos',
    name: 'Carlos Ruiz',
    role: 'Padre de 3 hijos',
    quote: 'La metodología es práctica y diferente. Muy recomendable.',
    rating: 5,
  },
  {
    id: 'ana',
    name: 'Ana Belén G.',
    role: 'Madre',
    quote: 'Se adaptan a cada niño. Equipo muy profesional.',
    rating: 5,
  },
]

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Inmersivo */}
      <HeroVideo
        videoSrc="https://player.vimeo.com/external/370206078.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6b8c7e34e9&profile_id=165"
        videoPoster="https://images.pexels.com/photos/35893083/pexels-photo-35893083.jpeg"
        title="Descubre su talento natural"
        subtitle="En Kids Talent creemos que aprender debe ser una experiencia feliz, práctica y emocionante."
        ctaText="Ver Programas"
        ctaLink="/programas"
      />

      {/* Propósito - Diseño Visual Dividido (Proximidad y Contraste) */}
      <Section bgColor="white" id="objetivos" className="overflow-hidden">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Aprender haciendo, <br/> <span className="text-brand">crecer disfrutando</span>.
            </h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              La felicidad es nuestra brújula. Cada niño tiene algo que le apasiona, que le llena de energía. En Kids Talent buscamos ayudarlo a descubrirlo a través de la experimentación y el juego.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/metodo"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-slate-900 px-8 font-bold text-white transition-all hover:bg-slate-800 hover:scale-105"
              >
                Conoce nuestro método
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200">
              <img 
                src="https://images.pexels.com/photos/5274629/pexels-photo-5274629.jpeg" 
                alt="Niños felices aprendiendo" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border-[8px] border-white bg-brand/20 backdrop-blur-sm"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full border-[8px] border-white bg-brandD/20 backdrop-blur-sm"></div>
          </motion.div>
        </div>
      </Section>

      {/* Actividades en Modo Cine (Oscuro para resaltar los videos) */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Experiencias Audiovisuales</h2>
            <p className="mt-4 text-xl text-slate-300">Un vistazo a lo que viven nuestros alumnos cada día</p>
          </div>
          <VideoGallery videos={activitiesVideos} columns={3} />
        </div>
      </div>

      {/* Experiencias (Grid visual dinámico) */}
      <Section bgColor="white" id="experiencias">
        <div className="text-center mb-16">
          <SectionTitle>Momentos Kids Talent</SectionTitle>
          <SectionSubtitle>Más que clases, creamos recuerdos memorables</SectionSubtitle>
        </div>
        <div className="mt-12">
          <ImageGallery images={experiences} columns={4} />
        </div>
      </Section>

      {/* Testimonios */}
      <Section bgColor="slate" id="testimonios">
        <div className="text-center mb-16">
          <SectionTitle>Familias Felices</SectionTitle>
          <SectionSubtitle>El mejor indicador de nuestro éxito es su sonrisa</SectionSubtitle>
        </div>
        <Testimonials testimonials={testimonials} columns={3} />
      </Section>

      {/* CTA Final (Tarjetas grandes Fitts' Law) */}
      <Section bgColor="white" withPadding={false}>
        <div className="relative isolate overflow-hidden bg-brand px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 mx-4 sm:mx-8 mb-8 mt-8">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Preparado para su próxima aventura?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-100">
            Hablemos sobre las necesidades e intereses de tu hijo y encontremos el programa perfecto para potenciar su talento.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contacto"
              className="flex min-h-[60px] min-w-[200px] items-center justify-center rounded-full bg-white px-8 text-lg font-black text-brand shadow-sm hover:scale-105 transition-transform"
            >
              Contactar Ahora
            </Link>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="flex min-h-[60px] min-w-[200px] items-center justify-center rounded-full border-2 border-white px-8 text-lg font-bold text-white hover:bg-white/10 transition-colors"
            >
              Llamar al {CONTACT.phone}
            </a>
          </div>
          
          {/* Elementos decorativos de fondo */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.2" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="white" />
                <stop offset={1} stopColor="white" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </Section>
    </div>
  )
}
