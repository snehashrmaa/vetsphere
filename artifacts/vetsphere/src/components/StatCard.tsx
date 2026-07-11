import React from 'react';
import GlassCard from './GlassCard';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: number;
  icon: React.ReactNode;
  className?: string;
}

export default function StatCard({ label, value, trend, icon, className }: StatCardProps) {
  return (
    <GlassCard animated className={cn("p-6", className)}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-white/5 rounded-xl text-primary border border-white/5">
          {icon}
        </div>
        {trend !== undefined && (
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
            trend >= 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-destructive/10 text-destructive"
          )}>
            {trend >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <div>
        <h4 className="text-3xl font-heading font-bold text-foreground mb-1 tracking-tight">{value}</h4>
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
      </div>
    </GlassCard>
  );
}
