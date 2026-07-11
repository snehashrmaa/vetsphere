import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app/router';
import { useTheme } from './hooks/useTheme';

const queryClient = new QueryClient();

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    // Initial mount dark mode class application is handled by useTheme hook,
    // but just in case, we'll ensure the root has the right class initially.
    const root = window.document.documentElement;
    if (!root.classList.contains(theme)) {
      root.classList.add(theme);
    }
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <AppRouter />
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
