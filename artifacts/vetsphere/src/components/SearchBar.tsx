import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

export default function SearchBar({ className, containerClassName, ...props }: SearchBarProps) {
  return (
    <div className={cn("relative w-full max-w-md group", containerClassName)}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
      </div>
      <input
        type="text"
        className={cn(
          "block w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-full leading-5 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all backdrop-blur-sm",
          className
        )}
        {...props}
      />
    </div>
  );
}
