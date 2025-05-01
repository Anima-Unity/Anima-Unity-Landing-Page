import React from 'react';
import { LeadCard } from './LeadCard';
import { LeadsSummary } from '@/types/dashboard';

interface LeadsSectionProps {
  leadsSummary: LeadsSummary;
}

export function LeadsSection({ leadsSummary }: LeadsSectionProps): React.ReactElement {
  // Calculate total leads across all categories
  const totalLeads = Object.values(leadsSummary).reduce(
    (sum, data) => sum + data.total, 
    0
  );

  return (
    <div className="animate-slide-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gradient bg-coral-gradient mb-1">Leads Summary</h2>
          <p className="text-sm text-muted-foreground">
            Total {totalLeads.toLocaleString()} leads across all categories
          </p>
        </div>
        
        <div className="mt-2 md:mt-0 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last updated:</span>
          <span className="text-sm font-medium px-3 py-1 bg-feature-lightPink rounded-full text-accent-coral">
            <i className="far fa-clock mr-1"></i> Today
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Object.entries(leadsSummary).map(([key, data]) => (
          <LeadCard 
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            percent={data.percent}
            total={data.total}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-feature-lightPink rounded-xl border border-primary-light/20 text-sm flex items-center">
        <i className="fas fa-lightbulb text-accent-coral mr-2"></i>
        <span>
          <strong>Pro tip:</strong> Improve your conversion rates by focusing on leads with the highest engagement percentage.
        </span>
      </div>
    </div>
  );
}