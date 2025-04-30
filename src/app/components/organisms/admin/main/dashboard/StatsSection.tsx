import React from 'react';
import { StatCard } from './StatCard';
import { StatsData } from '@/types/dashboard';

interface StatsSectionProps {
  stats: StatsData;
}

export function StatsSection({ stats }: StatsSectionProps): React.ReactElement {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-semibold">Performance Overview</h2>
        <div className="flex items-center space-x-2">
          <select className="text-xs md:text-sm bg-secondary text-foreground px-3 py-1.5 rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary-coral">
            <option value="month">This Month</option>
            <option value="week">This Week</option>
            <option value="day">Today</option>
          </select>
          <button className="flex items-center justify-center bg-feature-lightPink hover:bg-feature-lightPink/80 text-primary-coral rounded-lg p-1.5 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard 
          title="Views Growth"
          value={`${stats.viewsGrowth}%`}
          trend="up"
          bgColor="bg-feature-lightPink"
          textColor="text-primary-coral"
        />
        <StatCard 
          title="Total Views"
          value={stats.totalViews}
          subtitle="This month"
          bgColor="bg-blue-50"
          textColor="text-accent-blue"
        />
        <StatCard 
          title="Unique Visitors"
          value={stats.uniqueVisitors}
          subtitle="This month"
          bgColor="bg-green-50"
          textColor="text-accent-green"
        />
        <StatCard 
          title="Blog Posts"
          value={`${stats.blogPosts}`}
          subtitle="Total published"
          bgColor="bg-secondary"
          textColor="text-accent-black"
        />
      </div>

      <div className="flex justify-end mt-4">
        <button className="text-xs md:text-sm text-primary-coral hover:text-primary-light flex items-center transition-colors">
          View detailed analytics
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  );
}