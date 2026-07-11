import { Globe2, Heart, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { communityFeed } from '@/lib/mockData'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function Community() {
  return (
    <PlaceholderPage
      icon={Globe2}
      title="Community"
      subtitle="Connect with fellow vet students and mentors."
      accentClassName="bg-blue-50 text-blue-600"
    >
      <div className="mx-auto max-w-2xl space-y-4">
        {communityFeed.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="card-surface p-5"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-accent-500 text-sm font-semibold text-white">
                {post.author[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-secondary-900">{post.author}</p>
                <p className="text-xs text-secondary-400">{post.timeAgo} ago</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-secondary-700">{post.content}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-secondary-400">
              <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" /> {post.likes}</span>
              <span className="flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" /> {post.comments}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </PlaceholderPage>
  )
}
