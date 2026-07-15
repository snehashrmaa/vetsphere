import { Hero } from '@/components/common/Hero'
import { FeatureCard } from '@/components/cards/FeatureCard'
import { BookOpen, Brain, Stethoscope, Users, FlaskConical, PawPrint } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Notes, flashcards, MCQs and clinical cases across every subject in the curriculum.',
  },
  {
    icon: Stethoscope,
    title: 'Clinic',
    description: 'Real-world case simulations that sharpen your diagnostic instincts.',
  },
  {
    icon: Brain,
    title: 'AI Mentor',
    description: 'A study partner that explains, quizzes, and adapts to how you learn.',
  },
  {
    icon: FlaskConical,
    title: 'Research',
    description: 'Stay current with the latest veterinary research, curated for students.',
  },
  {
    icon: PawPrint,
    title: 'Wildlife',
    description: 'Explore species-specific care beyond companion and farm animals.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Connect with peers and mentors who are on the same path.',
  },
]

export default function Landing() {
  return (
    <>
      <Hero />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-secondary-900">
              Everything in one sphere
            </h2>
            <p className="mt-3 text-secondary-500">
              Seven modules. One connected experience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
