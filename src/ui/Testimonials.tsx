import { motion } from 'framer-motion'

export interface Testimonial {
  id: string
  name: string
  role?: string
  image?: string
  quote: string
  rating?: number
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  columns?: number
}

export function Testimonials({ testimonials, columns = 3 }: TestimonialsProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  }[columns] || 'grid-cols-1'

  return (
    <div className={`grid gap-6 sm:gap-8 ${gridClass}`}>
      {testimonials.map((testimonial, i) => (
        <motion.article
          key={testimonial.id}
          className="rounded-2xl border border-slate-200 bg-white p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ y: -4 }}
        >
          {/* Rating */}
          {testimonial.rating && (
            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg
                  key={j}
                  className={`h-4 w-4 ${j < testimonial.rating! ? 'fill-yellow-400' : 'fill-slate-300'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}

          {/* Quote */}
          <p className="mb-4 flex-1 text-base leading-relaxed text-slate-700">
            "{testimonial.quote}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-3">
            {testimonial.image && (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-10 w-10 rounded-full object-cover"
              />
            )}
            <div>
              <div className="font-bold text-slate-900">{testimonial.name}</div>
              {testimonial.role && (
                <div className="text-xs text-slate-500">{testimonial.role}</div>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
