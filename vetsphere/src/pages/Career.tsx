import { Briefcase } from 'lucide-react'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function Career() {
  return (
    <PlaceholderPage
      icon={Briefcase}
      title="Career"
      subtitle="Internships, residencies, and job opportunities."
      accentClassName="bg-secondary-100 text-secondary-700"
    />
  )
}
