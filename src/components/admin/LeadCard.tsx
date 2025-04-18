import React from 'react';
import { LeadCardProps } from '@/types/dashboard';

export function LeadCard({ title, percent, total }: LeadCardProps): React.ReactElement {
  return (
    <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xs md:text-sm text-gray-600">{title}</h3>
          <div className="text-md md:text-lg font-semibold mt-1">{total.toLocaleString()}</div>
        </div>
        <div className="relative h-10 w-10 md:h-12 md:w-12">
          {/* Circular progress indicator */}
          <div className="absolute inset-0 rounded-full border-3 md:border-4 border-gray-100"></div>
          <div 
            className="absolute inset-0 rounded-full border-3 md:border-4 border-indigo-500"
            style={{
              clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin(percent / 100 * 2 * Math.PI)}% ${50 - 50 * Math.cos(percent / 100 * 2 * Math.PI)}%, 50% 50%)`
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center text-xs md:text-sm font-medium">
            {percent}%
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-indigo-500 h-full rounded-full" 
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}