import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthCard } from '@/features/auth/AuthCard'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'

export default function Signup() {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      showToast('Account created! Welcome to VetSphere.', 'success')
      navigate('/dashboard')
    }, 900)
  }

  return (
    <AuthCard title="Create your account" subtitle="Join thousands of vet students learning smarter">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input label="Full name" type="text" placeholder="Sneha Kumar" required />
        <Input label="Email" type="email" placeholder="you@vetsphere.com" required />
        <Input label="Password" type="password" placeholder="••••••••" required />
        <Button type="submit" className="w-full" isLoading={isLoading}>
          Create account
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-secondary-500">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-primary-600 hover:underline">
          Log in
        </Link>
      </p>
    </AuthCard>
  )
}
