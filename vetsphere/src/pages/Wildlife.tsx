import { PawPrint } from 'lucide-react'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function Wildlife() {
  return (
    <PlaceholderPage
      icon={PawPrint}
      title="Wildlife"
      subtitle="Species-specific care beyond companion and farm animals."
      accentClassName="bg-amber-50 text-amber-600"
    />
  )
}
