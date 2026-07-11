import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PawPrint, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-50 text-primary-500"
      >
        <PawPrint className="h-8 w-8" />
      </motion.div>
      <h1 className="font-heading text-5xl font-bold text-secondary-900">404</h1>
      <p className="max-w-sm text-sm text-secondary-500">
        Looks like this page wandered off the trail. Let's get you back to safety.
      </p>
      <Link to="/dashboard">
        <Button>
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Button>
      </Link>
    </div>
  )
}
