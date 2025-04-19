import React from 'react';
import { StatCardProps } from '@/types/dashboard';

export function StatCard({ title, value, subtitle, trend, bgColor, textColor }: StatCardProps): React.ReactElement {
  return (
    <div className={`${bgColor} p-3 md:p-4 rounded-xl`}>
      <div className="flex justify-between items-start mb-2 md:mb-3">
        <h3 className="text-xs md:text-sm text-gray-600">{title}</h3>
        {trend && (
          <div className={`${trend === 'up' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'} p-1 rounded-md text-xs`}>
            {trend === 'up' ? '↑' : '↓'} 12%
          </div>
        )}
      </div>
      <div className={`text-xl md:text-2xl font-bold ${textColor}`}>{value}</div>
      {subtitle && <div className="text-xs text-gray-500 mt-1">{subtitle}</div>}
    </div>
  );
}