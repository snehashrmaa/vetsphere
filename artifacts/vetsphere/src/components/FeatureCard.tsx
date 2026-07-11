import React from 'react';
import GlassCard from './GlassCard';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <GlassCard animated hoverEffect className="p-6 h-full flex flex-col group">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">{title}</h3>
      <p className="text-muted-foreground leading-relaxed flex-grow">{description}</p>
    </GlassCard>
  );
}
