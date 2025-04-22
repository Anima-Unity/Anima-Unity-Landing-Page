'use client';

import React, { useState, useEffect } from 'react';
import { StatsData, LeadsSummary } from '@/types/dashboard';
import { Sidebar } from '@/app/components/organisms/admin/Sidebar';
import { Header } from '@/app/components/organisms/admin/Header';
import { StatsSection } from '@/app/components/organisms/admin/main/dashboard/StatsSection';
import { ReaderScoreCard } from '@/app/components/organisms/admin/main/dashboard/ReaderScoreCard';
import { TrafficOverviewCard } from '@/app/components/organisms/admin/main/dashboard/TrafficOverviewCard';
import { LeadsSection } from '@/app/components/organisms/admin/main/dashboard/LeadsSection';

// Import komponen untuk halaman lain
import { PostsContent } from '@/app/components/organisms/admin/main/posts/PostContent';
import { ReadersContent } from '@/app/components/organisms/admin/main/readers/ReadersContent';
import { CommentsContent } from '@/app/components/organisms/admin/main/comments/CommentContent';
import { AnalyticsContent } from '@/app/components/organisms/admin/main/analytics/AnalyticsContent';
import { SettingsContent } from '@/app/components/organisms/admin/main/settings/SettingsContent';

export default function AdminBlogTemplate(): React.ReactElement {
  // State untuk sidebar
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
  // State untuk menu aktif + state pengendali loading
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Inisialisasi dan pengaturan listener untuk perubahan hash URL
  useEffect(() => {
    // Fungsi untuk mendapatkan menu aktif dari hash URL
    const getActiveMenuFromHash = (): string => {
      // Ambil hash dari URL (hilangkan tanda '#')
      const hash = window.location.hash.replace('#', '');
      
      // Jika hash kosong, gunakan 'dashboard'
      if (!hash) {
        return 'Dashboard';
      }
      
      // Konversi ke format yang benar (capitalize first letter)
      return hash.charAt(0).toUpperCase() + hash.slice(1).toLowerCase();
    };

    // Set nilai awal dari hash
    setActiveMenu(getActiveMenuFromHash());
    setIsLoading(false);

    // Tambahkan event listener untuk hashchange
    const handleHashChange = () => {
      setActiveMenu(getActiveMenuFromHash());
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Jika tidak ada hash, set ke default
    if (!window.location.hash) {
      window.location.hash = 'dashboard';
    }
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Fungsi untuk mengganti menu aktif
  const handleMenuChange = (menu: string) => {
    // Update hash URL (yang akan men-trigger useEffect di atas)
    window.location.hash = menu.toLowerCase();
  };

  // Mock data for stats
  const stats: StatsData = {
    viewsGrowth: 12.5,
    totalViews: '45,280',
    uniqueVisitors: '22,345',
    blogPosts: 48,
    engagementScore: 100,
    comments: 230,
    shares: 157,
    avgTime: '4:32'
  };

  // Mock data for leads summary
  const leadsSummary: LeadsSummary = {
    newsletter: { percent: 15, total: 542 },
    downloads: { percent: 8, total: 317 },
    contactForm: { percent: 23, total: 189 }
  };

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  // Render konten berdasarkan menu yang aktif
  const renderContent = () => {
    // Tampilkan loading state atau placeholder
    if (isLoading || activeMenu === null) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      );
    }

    switch(activeMenu) {
      case 'Dashboard':
        return (
          <>
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
          </>
        );
      case 'Posts':
        return <PostsContent />;
      case 'Readers':
        return <ReadersContent />;
      case 'Comments':
        return <CommentsContent />;
      case 'Analytics':
        return <AnalyticsContent />;
      case 'Settings':
        return <SettingsContent />;
      default:
        return <div>Halaman tidak ditemukan</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - hanya tampilkan jika sudah ada data activeMenu */}
      {!isLoading && activeMenu && (
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:w-64 bg-white shadow-md fixed md:static top-0 left-0 z-30 h-full overflow-y-auto`}>
          <Sidebar
            activeMenu={activeMenu}
            setActiveMenu={handleMenuChange}
            setSidebarOpen={setSidebarOpen}
          />
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header - hanya tampilkan jika sudah ada data activeMenu */}
        {!isLoading && activeMenu && (
          <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        )}

        {/* Content */}
        <main className="p-4 sm:p-6 md:p-8 max-w-screen-2xl mx-auto w-full space-y-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}