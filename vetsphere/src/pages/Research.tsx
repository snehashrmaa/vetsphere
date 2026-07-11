import { FlaskConical } from 'lucide-react'
import { motion } from 'framer-motion'
import { researchFeed } from '@/lib/mockData'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function Research() {
  return (
    <PlaceholderPage
      icon={FlaskConical}
      title="Research"
      subtitle="Curated veterinary research, kept current."
      accentClassName="bg-indigo-50 text-indigo-600"
    >
      <div className="mx-auto max-w-2xl space-y-3">
        {researchFeed.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="card-surface p-5"
          >
            <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-medium text-indigo-600">{item.tag}</span>
            <h3 className="mt-2.5 font-heading text-sm font-semibold text-secondary-900">{item.title}</h3>
            <p className="mt-1 text-xs text-secondary-400">{item.journal} · {item.timeAgo}</p>
          </motion.div>
        ))}
      </div>
    </PlaceholderPage>
  )
}
