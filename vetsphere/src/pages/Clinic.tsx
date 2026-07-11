import { Stethoscope } from 'lucide-react'
import { PlaceholderPage } from '@/components/common/PlaceholderPage'

export default function Clinic() {
  return (
    <PlaceholderPage
      icon={Stethoscope}
      title="Clinic"
      subtitle="Simulated diagnostic cases to build real clinical reasoning."
      accentClassName="bg-cyan-50 text-cyan-600"
    />
  )
}
