import { motion } from 'framer-motion'

export interface ImageItem {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
}

interface ImageGalleryProps {
  images: ImageItem[]
  columns?: number
  objectFit?: 'cover' | 'contain'
}

export function ImageGallery({ images, columns = 3, objectFit = 'cover' }: ImageGalleryProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 sm:grid-cols-2'

  return (
    <div className={`grid gap-4 sm:gap-6 ${gridClass}`}>
      {images.map((image, i) => (
        <motion.figure
          key={image.id}
          className="group overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileHover={{ y: -4 }}
        >
          <div className="aspect-video overflow-hidden bg-slate-200">
            <img
              src={image.src}
              alt={image.alt}
              className={`h-full w-full object-${objectFit} transition-transform duration-300 group-hover:scale-105`}
              loading="lazy"
            />
          </div>

          {(image.title || image.description) && (
            <div className="bg-white p-4">
              {image.title && <h3 className="font-bold text-slate-900">{image.title}</h3>}
              {image.description && (
                <p className="mt-1 text-sm text-slate-600">{image.description}</p>
              )}
            </div>
          )}
        </motion.figure>
      ))}
    </div>
  )
}
