import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit: string;
  trend?: number; // percentage change
  icon: LucideIcon;
  color?: 'blue' | 'cyan' | 'indigo' | 'red' | 'emerald';
  delay?: number;
}

export function MetricCard({ title, value, unit, trend, icon: Icon, color = 'blue', delay = 0 }: MetricCardProps) {
  const colorStyles = {
    blue: 'bg-blue-50 text-blue-600',
    cyan: 'bg-cyan-50 text-cyan-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    red: 'bg-red-50 text-red-600',
    emerald: 'bg-emerald-50 text-emerald-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <div className="mt-2 flex items-baseline">
            <span className="text-3xl font-bold text-slate-900">{value}</span>
            <span className="ml-1 text-sm font-medium text-slate-500">{unit}</span>
          </div>
        </div>
        <div className={twMerge('p-3 rounded-lg', colorStyles[color])}>
          <Icon size={24} />
        </div>
      </div>
      {trend !== undefined && (
        <div className="mt-4 flex items-center text-sm">
          <span
            className={clsx(
              'font-medium',
              trend > 0 ? 'text-red-600' : 'text-emerald-600'
            )}
          >
            {trend > 0 ? '+' : ''}{trend}%
          </span>
          <span className="ml-2 text-slate-500">vs last week</span>
        </div>
      )}
    </motion.div>
  );
}
