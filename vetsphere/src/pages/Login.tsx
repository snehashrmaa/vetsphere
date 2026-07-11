import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthCard } from '@/features/auth/AuthCard'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/components/ui/Toast'

export default function Login() {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      showToast('Welcome back!', 'success')
      navigate('/dashboard')
    }, 900)
  }

  return (
    <AuthCard title="Welcome back" subtitle="Log in to continue your journey">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input label="Email" type="email" placeholder="you@vetsphere.com" required />
        <Input label="Password" type="password" placeholder="••••••••" required />
        <Button type="submit" className="w-full" isLoading={isLoading}>
          Log in
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-secondary-500">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-primary-600 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthCard>
  )
}
