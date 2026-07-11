import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PawPrint } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { useWindowSize } from '@/hooks/useWindowSize';

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-lg border-white/10 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <PawPrint size={24} />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
              VetSphere
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
            <Link to="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Link to="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Log in
            </Link>
            <Link to="/dashboard">
              <Button variant="primary" size="md">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
