import { motion } from 'framer-motion'

export interface VideoItem {
  id: string
  title: string
  description?: string
  iframeUrl?: string
  videoUrl?: string
  aspectRatio?: 'video' | 'square' | 'portrait' // 16:9, 1:1, 9:16
}

interface VideoGalleryProps {
  videos: VideoItem[]
  columns?: number
}

const aspectRatioClasses = {
  video: 'aspect-video', // 16:9
  square: 'aspect-square', // 1:1
  portrait: 'aspect-[9/16]', // 9:16
}

export function VideoGallery({ videos, columns = 3 }: VideoGalleryProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  }[columns] || 'grid-cols-1 sm:grid-cols-2'

  return (
    <div className={`grid gap-4 sm:gap-6 ${gridClass}`}>
      {videos.map((video, i) => (
        <motion.div
          key={video.id}
          className="group overflow-hidden rounded-2xl shadow-lg transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ y: -4 }}
        >
          <div className={`relative overflow-hidden bg-slate-900 ${aspectRatioClasses[video.aspectRatio || 'video']}`}>
            {video.iframeUrl ? (
              <iframe
                src={video.iframeUrl}
                className="h-full w-full transition-transform duration-300 group-hover:scale-105"
                allow="autoplay; fullscreen"
                title={video.title}
                loading="lazy"
              />
            ) : video.videoUrl ? (
              <video
                src={video.videoUrl}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                controls
              />
            ) : null}
          </div>

          {(video.title || video.description) && (
            <div className="bg-white p-4">
              {video.title && <h3 className="font-bold text-slate-900">{video.title}</h3>}
              {video.description && (
                <p className="mt-1 text-sm text-slate-600">{video.description}</p>
              )}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
