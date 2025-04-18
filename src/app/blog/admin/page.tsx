'use client';

import React, { useState } from 'react';
import { StatsData, LeadsSummary } from '@/types/dashboard';
import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';
import { StatsSection } from '@/components/admin/StatsSection';
import { ReaderScoreCard } from '@/components/admin/ReaderScoreCard';
import { TrafficOverviewCard } from '@/components/admin/TrafficOverviewCard';
import { LeadsSection } from '@/components/admin/LeadsSection';

export default function BlogDashboard(): React.ReactElement {
  const [activeMenu, setActiveMenu] = useState<string>('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Mock data for stats
  const stats: StatsData = {
    viewsGrowth: 12.5,
    totalViews: '45,280',
    uniqueVisitors: '22,345',
    blogPosts: 48,
    engagementScore: 100,
    comments: 230,
    shares: 157,
    avgTime: '3m 45s'
  };

  // Mock data for leads summary
  const leadsSummary: LeadsSummary = {
    newsletter: { percent: 15, total: 542 },
    downloads: { percent: 8, total: 317 },
    contactForm: { percent: 23, total: 189 }
  };

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:w-64 bg-white shadow-md fixed md:static top-0 left-0 z-30 h-full overflow-y-auto`}>
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          setSidebarOpen={setSidebarOpen}
        />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Content */}
        <main className="p-4 sm:p-6 md:p-8 max-w-screen-2xl mx-auto w-full space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Analytics Overview
            </h2>
            <div className="text-sm text-gray-500 flex items-center">
              Last 30 Days <span className="ml-1">↓</span>
            </div>
          </div>

          {/* Stats Cards */}
          <StatsSection stats={stats} />

          {/* Reader Score + Traffic Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ReaderScoreCard score={stats.engagementScore} />
            <div className="lg:col-span-2">
              <TrafficOverviewCard
                comments={stats.comments}
                shares={stats.shares}
                avgTime={stats.avgTime}
              />
            </div>
          </div>

          {/* Leads Summary */}
          <LeadsSection leadsSummary={leadsSummary} />
        </main>
      </div>
    </div>
  );
}