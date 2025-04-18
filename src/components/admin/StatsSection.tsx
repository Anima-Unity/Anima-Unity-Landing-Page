import React from 'react';
import { StatCard } from './StatCard';
import { StatsData } from '@/types/dashboard';

interface StatsSectionProps {
  stats: StatsData;
}

export function StatsSection({ stats }: StatsSectionProps): React.ReactElement {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-6 md:mb-8">
      <StatCard 
        title="Views Growth"
        value={`${stats.viewsGrowth}%`}
        trend="up"
        bgColor="bg-green-50"
        textColor="text-green-600"
      />
      <StatCard 
        title="Total Views"
        value={stats.totalViews}
        subtitle="This month"
        bgColor="bg-pink-50"
        textColor="text-pink-600"
      />
      <StatCard 
        title="Unique Visitors"
        value={stats.uniqueVisitors}
        subtitle="This month"
        bgColor="bg-purple-50"
        textColor="text-purple-600"
      />
      <StatCard 
        title="Blog Posts"
        value={`${stats.blogPosts}`}
        subtitle="Total"
        bgColor="bg-blue-50"
        textColor="text-blue-600"
      />
    </div>
  );
}