'use client';

import React, { useState } from 'react';
import {
  BarChart,
  Users,
  FileText,
  MessageSquare,
  Settings,
  Home,
  Search,
  Bell,
  ChevronDown,
  Filter,
  Menu,
  X
} from 'lucide-react';

// Define types for our data
interface StatsData {
  viewsGrowth: number;
  totalViews: string;
  uniqueVisitors: string;
  blogPosts: number;
  engagementScore: number;
  comments: number;
  shares: number;
}

interface LeadData {
  percent: number;
  total: number;
}

interface LeadsSummary {
  [key: string]: LeadData;
}

// Component props interfaces
interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  active: boolean;
  onClick: () => void;
}

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down';
  bgColor: string;
  textColor: string;
}

interface LeadCardProps {
  title: string;
  percent: number;
  total: number;
}

export default function BlogDashboard(): React.ReactElement {
  const [activeMenu, setActiveMenu] = useState<string>('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
  // Example data - in a real app this would come from an API
  const stats: StatsData = {
    viewsGrowth: 162.9,
    totalViews: '4.3k',
    uniqueVisitors: '2.1k',
    blogPosts: 541,
    engagementScore: 92,
    comments: 15950,
    shares: 6326
  };

  const leadsSummary: LeadsSummary = {
    newsletter: { percent: 76, total: 1209 },
    downloads: { percent: 59, total: 2321 },
    signups: { percent: 83, total: 2418 }
  };

  const toggleSidebar = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold">AU</span>
          </div>
          <h1 className="font-semibold text-gray-800">Blog Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          {/* Mobile search button */}
          <button className="text-gray-600">
            <Search size={20} />
          </button>
          
          {/* Mobile notification button */}
          <div className="relative">
            <Bell size={20} className="text-gray-600" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">3</span>
            </div>
          </div>
          
          {/* Mobile profile button */}
          <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium">
            JD
          </div>
          
          {/* Mobile menu toggle */}
          <button onClick={toggleSidebar} className="text-gray-600 ml-1">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:w-64 bg-white shadow-md h-screen md:min-h-screen fixed md:sticky top-0 left-0 z-30 overflow-y-auto`}>
        <div className="p-4 flex items-center gap-2 md:mt-0">
          <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold">AU</span>
          </div>
          <h1 className="font-semibold text-gray-800">Blog Dashboard</h1>
        </div>
        
        <nav className="mt-8">
          <SidebarItem 
            icon={<Home size={18} />}
            title="Dashboard"
            active={activeMenu === 'Dashboard'}
            onClick={() => {
              setActiveMenu('Dashboard');
              setSidebarOpen(false);
            }}
          />
          <SidebarItem 
            icon={<FileText size={18} />}
            title="Posts"
            active={activeMenu === 'Posts'}
            onClick={() => {
              setActiveMenu('Posts');
              setSidebarOpen(false);
            }}
          />
          <SidebarItem 
            icon={<Users size={18} />}
            title="Readers"
            active={activeMenu === 'Readers'}
            onClick={() => {
              setActiveMenu('Readers');
              setSidebarOpen(false);
            }}
          />
          <SidebarItem 
            icon={<MessageSquare size={18} />}
            title="Comments"
            active={activeMenu === 'Comments'}
            onClick={() => {
              setActiveMenu('Comments');
              setSidebarOpen(false);
            }}
          />
          <SidebarItem 
            icon={<BarChart size={18} />}
            title="Analytics"
            active={activeMenu === 'Analytics'}
            onClick={() => {
              setActiveMenu('Analytics');
              setSidebarOpen(false);
            }}
          />
          <SidebarItem 
            icon={<Settings size={18} />}
            title="Settings"
            active={activeMenu === 'Settings'}
            onClick={() => {
              setActiveMenu('Settings');
              setSidebarOpen(false);
            }}
          />
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto w-full">
        {/* Header (Desktop) */}
        <header className="hidden md:flex bg-white p-4 justify-between items-center shadow-sm">
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search blog..." 
              className="pl-10 pr-4 py-2 bg-gray-50 rounded-md w-full text-sm"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm bg-white border border-gray-200 px-3 py-1.5 rounded-md">
              <Filter size={14} />
              Filter
            </button>
            
            <div className="relative">
              <Bell size={18} className="text-gray-500" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">3</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium">
                JD
              </div>
              <ChevronDown size={14} className="text-gray-500" />
            </div>
          </div>
        </header>
        
        {/* Mobile Sub Header with Search & Filter */}
        <div className="md:hidden bg-white p-3 flex justify-between items-center shadow-sm border-t border-gray-100">
          <div className="relative flex-1 mr-2">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search blog..." 
              className="pl-10 pr-3 py-2 bg-gray-50 rounded-md w-full text-sm"
            />
          </div>
          
          <button className="flex items-center gap-1 text-sm bg-white border border-gray-200 px-2 py-1.5 rounded-md">
            <Filter size={14} />
            Filter
          </button>
        </div>
        
        {/* Dashboard Content */}
        <main className="p-4 md:p-6">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">Analytics Overview</h2>
            <div className="text-xs md:text-sm text-gray-500">Last 30 Days ↓</div>
          </div>
          
          {/* Stats Cards */}
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
              value={stats.blogPosts}
              subtitle="Total"
              bgColor="bg-blue-50"
              textColor="text-blue-600"
            />
          </div>
          
          {/* Middle Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 mb-6 md:mb-8">
            <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm lg:col-span-1">
              <h3 className="text-gray-700 font-medium mb-4">Reader Score</h3>
              <div className="flex justify-center items-center h-40 md:h-48">
                <div className="relative w-28 md:w-36 h-28 md:h-36">
                  {/* Circular progress indicator */}
                  <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                  <div 
                    className="absolute inset-0 rounded-full border-8 border-indigo-500"
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin(stats.engagementScore / 100 * 2 * Math.PI)}% ${50 - 50 * Math.cos(stats.engagementScore / 100 * 2 * Math.PI)}%, 50% 50%)`
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-gray-800">{stats.engagementScore}</span>
                    <div className="flex items-center">
                      <span className="text-xs text-green-500">↑ 12%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4 px-2 md:px-4">
                <div className="text-center">
                  <div className="text-xs md:text-sm text-gray-500">Low</div>
                  <div className="h-1 w-4 md:w-6 bg-gray-200 rounded-full mx-auto mt-1"></div>
                </div>
                <div className="text-center">
                  <div className="text-xs md:text-sm text-gray-500">Medium</div>
                  <div className="h-1 w-4 md:w-6 bg-blue-300 rounded-full mx-auto mt-1"></div>
                </div>
                <div className="text-center">
                  <div className="text-xs md:text-sm text-gray-500">High</div>
                  <div className="h-1 w-4 md:w-6 bg-blue-600 rounded-full mx-auto mt-1"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm lg:col-span-2">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-gray-700 font-medium">Traffic Overview</h3>
                <div className="flex gap-2 md:gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-xs text-gray-500">Comments</span>
                  </div>
                </div>
              </div>
              
              <div className="h-40 md:h-48 flex items-end justify-between px-1 md:px-2">
                {/* Placeholder for line chart */}
                <div className="flex flex-col items-center">
                  <div className="h-24 w-1 bg-indigo-500 rounded-t-full"></div>
                  <div className="mt-2 text-xs text-gray-500">M</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-1 bg-indigo-500 rounded-t-full"></div>
                  <div className="mt-2 text-xs text-gray-500">T</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-32 w-1 bg-indigo-500 rounded-t-full"></div>
                  <div className="mt-2 text-xs text-gray-500">W</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-20 w-1 bg-indigo-500 rounded-t-full"></div>
                  <div className="mt-2 text-xs text-gray-500">T</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-28 w-1 bg-indigo-500 rounded-t-full"></div>
                  <div className="mt-2 text-xs text-gray-500">F</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-36 w-1 bg-indigo-500 rounded-t-full"></div>
                  <div className="mt-2 text-xs text-gray-500">S</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-40 w-1 bg-indigo-500 rounded-t-full"></div>
                  <div className="mt-2 text-xs text-gray-500">S</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 mt-4 text-center border-t border-gray-100 pt-4">
                <div>
                  <div className="text-gray-500 text-xs">Comments</div>
                  <div className="text-sm md:font-semibold">{stats.comments.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Avg Time</div>
                  <div className="text-sm md:font-semibold">4:32</div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs">Shares</div>
                  <div className="text-sm md:font-semibold">{stats.shares.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Leads Summary */}
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
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, title, active, onClick }: SidebarItemProps): React.ReactElement {
  return (
    <div 
      className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
        active ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}

function StatCard({ title, value, subtitle, trend, bgColor, textColor }: StatCardProps): React.ReactElement {
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

function LeadCard({ title, percent, total }: LeadCardProps): React.ReactElement {
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