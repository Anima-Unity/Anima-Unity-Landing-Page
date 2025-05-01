import React from 'react';
import { LeadCardProps } from '@/types/dashboard';

export function LeadCard({ title, percent, total }: LeadCardProps): React.ReactElement {
  // Determine color based on percentage
  const getColorClass = (percent: number) => {
    if (percent >= 70) return 'text-success border-success';
    if (percent >= 40) return 'text-accent-coral border-accent-coral';
    return 'text-warning border-warning';
  };

  const getProgressClass = (percent: number) => {
    if (percent >= 70) return 'bg-success';
    if (percent >= 40) return 'bg-accent-coral';
    return 'bg-warning';
  };

  const colorClass = getColorClass(percent);
  const progressClass = getProgressClass(percent);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm text-muted-foreground font-medium">{title}</h3>
          <div className="text-xl font-semibold mt-1 text-accent-black">{total.toLocaleString()}</div>
        </div>
        <div className="relative h-14 w-14">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
          
          {/* Progress circle with dynamic color */}
          <div 
            className={`absolute inset-0 rounded-full border-4 ${colorClass}`}
            style={{
              clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin(percent / 100 * 2 * Math.PI)}% ${50 - 50 * Math.cos(percent / 100 * 2 * Math.PI)}%, 50% 50%)`
            }}
          ></div>
          
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
            {percent}%
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${progressClass} transition-all duration-700 ease-in-out`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}