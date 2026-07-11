import { ThemeProvider } from '@/hooks/useTheme'
import { ToastProvider } from '@/components/ui/Toast'
import { AppRouter } from '@/app/router'

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppRouter />
      </ToastProvider>
    </ThemeProvider>
  )
}
