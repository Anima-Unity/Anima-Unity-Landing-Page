import React from 'react';
import { LeadCard } from './LeadCard';
import { LeadsSummary } from '@/types/dashboard';

interface LeadsSectionProps {
  leadsSummary: LeadsSummary;
}

export function LeadsSection({ leadsSummary }: LeadsSectionProps): React.ReactElement {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-md md:text-lg font-semibold text-gray-800">Leads Summary</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {Object.entries(leadsSummary).map(([key, data]) => (
          <LeadCard 
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            percent={data.percent}
            total={data.total}
          />
        ))}
      </div>
    </div>
  );
}